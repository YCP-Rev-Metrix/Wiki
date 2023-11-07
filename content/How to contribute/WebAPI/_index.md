+++
title = "RevMetrix WebAPI"
weight = 100
description = 'Information on how to use the WebAPI'
+++

- [Overview](#overview)
- [Configuration](#configuration)
    - [App Settings](#appsettingsjson)
    - [Program Startup](#programcs)
    - [Environment Variables](#environment-variables)
- [Database Interactions](#database-interactions)

---
## Overview
The WebAPI can be complicated from the outside, but after a bit of work, it's actually not too confusing. There are serveral portions that will be interesting to us, all of which located in Server project.

---
## Configuration

##### appsettings.json
This file contains general settings for running in different environemnts and with different configurations. Take a look below at the example. Adding to this is farily simple. Config.cs opens the file at runtime and sets relevant variables such as AuthAudience.
```JSON
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "ApiSettings": {
    "Auth": {
      "Audience": "RevMetrix",
      "Issuer": "https://localhost:7238/",
      "SecretLength": 32
    }
  }
}
```


##### Program.cs
Through this, the authentication (JWT), Middleware, Swagger, and endpoints are all configured. This will run every time and cannot be modified as much based on the enironment or run settings. There is a small area for if the environemnt is development. Below is a snippet taken from Program.cs.
```C#
_ = builder.Services.AddSwaggerGen();

_ = builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true,
        ValidateLifetime = true,
        ValidIssuer = Config.AuthIssuer,
        ValidAudience = Config.AuthAudience,
        IssuerSigningKey = ServerState.SecurityHandler.AuthorizationSigningTokenKey,
        ClockSkew = TimeSpan.FromMinutes(5)
    };
});

WebApplication app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    _ = app.UseSwagger();
    _ = app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

// Verify token not blacklisted
_ = app.UseMiddleware<VerifyJWTBlacklistMiddleware>();
```

##### Environment variables
Environment variables in our case are set by external programs. Take a look at below at AbstractDatabase from the DatabaseCore project. Here, the environment variable 'DOCKERIZED' is checked, if it has been set, then the DB connection string will change. Inside of the docker config, this environment variable is set, allowing the DatabaseCore to know that it is inside of docker, so it may connect to the DB correctly.
```C#
public AbstractDatabase(string databaseName)
{
    // Get DOCKERIZED environment variable
    string? DockerizedEnviron = Environment.GetEnvironmentVariable("DOCKERIZED");

    if (DockerizedEnviron == "Dockerized") { // Running in docker
        ConnectionString = $"Server=sql_server;database={databaseName};User Id=SA;Password=BigPass@Word!;TrustServerCertificate=True;";
    } else { // Likely running locally
        ConnectionString = $"Data Source=localhost;database={databaseName};Integrated Security=True;TrustServerCertificate=True;";
    }

    LogWriter.LogInfo($"DB Connection: {ConnectionString}");

    DatabaseName = databaseName;
    Initialize();
}
```

---
## Database Interactions
