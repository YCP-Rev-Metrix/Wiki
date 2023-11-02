+++
title = "Security"
weight = 100
description = 'Information on how to use the WebAPI'
+++

Security is a crucial part of the Web API and security is managed in multiple ways. Please ensure that the security of the application remains during development.

- [Https](#https)
- [Authentication and Authorization](#authentication-and-authorization)
    - [JWT](#database-interactions)
    - [Refresh Tokens](#refresh-tokens)
    - [Roles](#roles)
- [Middleware](#middleware)
- [Secure Randomization](#secure-randomization)
- [Security Methods](#security-methods)
    - [Hashing](#hashing)
    - [Salting](#salting)
    - [Signing](#signing)
    - [Encryption](#encryption)

---
## Https
Our server forces the use of HTTPS for security purposes, to ensure data sent between the API and Client is encrypted. Specifically, we use TLS, the modern version of SSL.

[Learn more here](https://www.digicert.com/what-is-ssl-tls-and-https)

## Authentication and Authorization
Authentication and Authorization are the two primary ways of limiting a resource to specific users.

Authentication is the process of validating a user's identity through credentials such as username and password.

Authorization is the process of limiting specific resources through roles or permissions. ie. only admins may change a user's name.

#### JWT
JWT is an acronym standing for Json Web Token and it is used to provide both Authentication and Authorization to users. This token is granted to the user upon login, set-up by the following in Program.cs:
```C#
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
```
The above specifies that JWTs on our server use the following:
- Issuer validation
- Audience validation
- Expiration validation (JWTs expire after a specified time)
- Issuer (us)
- Audience (us)
- Signing key (from server state)
- Clock skew (in case the clocks are a few minutes off)

The big thing here is the expiration and signing. 
When a JWT is created by the server, it is assigned an expiration time, normally just a few hours in the future, at which point the JWT will no longer be validated.
This new JWT is then signed by the server so that the server can detetect if a someone has tampered with the token as all data is in plaintext.

The server will also add to the JWT, the user's roles, username, and a random id.

[View a real server JWT here](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUZXN0IFVzZXIiLCJqdGkiOiIzNTJiYmRjMS0wNjQ1LTRhMGYtYjJjYi00NGM1ZDkzZmFkN2YiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MjM4LyIsImF1ZCI6IlJldk1ldHJpeCIsInJvbGUiOiJ1c2VyIiwibmJmIjoxNjk4ODgyNDIwLCJleHAiOjE2OTg4ODYwMjAsImlhdCI6MTY5ODg4MjQyMH0.hvDqpWZdczHYzHqv6yk0IT4gQ9bIV-8bow-MsnHjVbM)
```JSON
"header" {
  "alg": "HS256",
  "typ": "JWT"
}

"payload" {
  "sub": "Test User",
  "jti": "352bbdc1-0645-4a0f-b2cb-44c5d93fad7f",
  "iss": "https://localhost:7238/",
  "aud": "RevMetrix",
  "role": "user",
  "nbf": 1698882420,
  "exp": 1698886020,
  "iat": 1698882420
}
```

[Learn more here](https://jwt.io/introduction)

#### Refresh Tokens
Refresh tokens are used by the client to request a new JWT from the server when their current one expires. 
The server, when authorizing the user, will provide back a JWT and Refresh token. In the future, this Refresh token can be use to re-authorize the user.
These tokens are just random bytes though could have taken the form of a JWT too: ```II7IWJueHQjdaxN28MfG7yGuR5KonICYVuexvFIYjiY=```

Currently, these are stored in the DB with an expiration data and assosiated user.

[Learn more here](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)

#### Roles
Roles are used to manage user's abilities and controls and should be handled as security items. Endpoints or controllers that require specific roles will have the following attribute ```[Authorize(Roles = "Admin, Manager")]```.
This specific example allows only users with either the role of 'User' or 'Manager' to access this item. Items without the Roles specification will allow a user with any role to access it.

These roles are stored in the User DB in the user table as an array

## Middleware
Middleware is a method by which the server may interrupt a client's communication to an API endpoint and manipulate data or block the request.
This has been used to ensure that a user's JWT has not been blacklisted prior to access of a protected endpoint.
Relevant code is shown below:
```C#
public class VerifyJWTBlacklistMiddleware : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        Endpoint? endpoint = context.GetEndpoint();
        if (endpoint != null)
        {
            if (endpoint.Metadata.GetMetadata<AuthorizeAttribute>() != null)
            {
                string? token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
                if (!string.IsNullOrEmpty(token))
                {
                    if (!ServerState.TokenStore.IsAuthorizationBlacklisted(token))
                    {
                        await next.Invoke(context);
                        return;
                    }
                }

                context.Response.StatusCode = 401;
                return;
            }
        }

        await next.Invoke(context);
    }
}
```

The middleware must also be registered with the application in Program.cs
```C#
// Verify token not blacklisted
_ = app.UseMiddleware<VerifyJWTBlacklistMiddleware>();
```

## Secure Randomization
Not all random functions are created equal. Take Python for example, if you wanted to generate secure randomness, you should not use the Random library as it is not built for cryptology and is susceptible to timing attacks and seed cracking.
This applies to C# too, so we use the System.Security.Cryptography module, which provides the RandomNumberGenerator class which is secure.

A SecurityHandler class has been created to abstract security items in a way that makes sense to more developers, allowing them to avoid worrying about security as much.
This class has secure methods to generate random byte arrays, tokens, and other simple methods.

An instance of this class may be used from the static ServerState.

## Security Methods
Passwords remain one of the primary methods to ensure a specific user's security and users may not always change their password for all the services they use. This means that it is the job of our applicaiton, to ensure that these passwords are stored and used safely.
There are many things that go into modern security measures. Here, we will cover the four main topics used in our application.

#### Hashing
Hashing is the method by which a password is turned from plaintext to a format that cannot be reversed. This ensures that if the DB is leaked to the public or if someone has access to it, the passwords themselves remain secure. The WebAPI currently uses SHA256 (for simplicity - this should be changed to something meant for passwords) to generate password hashes however this may easily be change. Hashing will always generate the same output given the same input

We can convert our  password from a string into hex so it may be hashed: ```abc123``` -> ```0x616263313233```

We can then run SHA256 on this: SHA256(```0x616263313233```) -> ```0x6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090```

These hashed values can then be stored in the DB. When a user needs to be authenticated through the WebAPI, they provide their password, it is hashed, then compared with the hashed real password in the DB

We can convert an incorrect password from a string into hex so it may be hashed: ```incorrectPassword``` -> ```0x696E636F727265637450617373776F7264```

Using the incorrect password: SHA256(```696E636F727265637450617373776F7264```) -> ```0x11e56efd5eae13673eccfed917ac1d69f02a8d0b8a4c384c5cc18c1bd2b7dc29``` != ```0x6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090```

Using the correct password: SHA256(```0x616263313233```) -> ```0x6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090```

[Online ASCII to hex converter](https://www.rapidtables.com/convert/number/ascii-to-hex.html)

[Online SHA256 generator](https://codebeautify.org/sha256-hash-generator)

[External hash explanation](https://www.codecademy.com/resources/blog/what-is-hashing/#:~:text=Hashing%20is%20the%20process%20of%20converting%20data%20%E2%80%94,using%20a%20special%20algorithm%20called%20a%20hash%20function.)

#### Salting
Salting is the method of adding randomness to hashed passwords, so that the same password, when hashed on multiple sites or by different users will not generate the same hash.
This means that if a user re-uses passwords, a DB leak will not give this information away as the password hash will appear different.
This also means that if two users have the same password, a DB leak will not give this information away as the password hash will appear different.

A salt is just a random hex value such as: ```0x9a66190e4f```

We can turn the password from a string into hex: ```abc123``` -> ```0x616263313233```

Let's append the salt to the end of the password hex: ```0x616263313233``` + ```0x9a66190e4f``` -> ```0x616263313233|9a66190e4f```

Let's hash this now: SHA256(```0x616263313233|9a66190e4f```) -> ```0x6509f3df9e7fa53ef15ae4dbc76717097982c59f0e7571bfcd5c864377432cab```

When we store this salted and hashed password, we can store the salt that we used too in plaintext in the DB, then in the future,
when we need to authorize with a provided password, we can salt that with the same salt that was used for the real password in the DB.

[External salt explanation](https://www.omnicybersecurity.com/what-does-salting-the-hash-mean-is-it-effective/)

[Random salt / hex generator](https://www.random.org/bytes/)

#### Signing
Signing is the process of generating a unique value that represents a plaintext value combined with the server's random cryptographic key.

[Learn more here](https://www.simplilearn.com/tutorials/cryptography-tutorial/digital-signature-algorithm#what_are_digital_signatures)

#### Encryption
Encryption is the process of securing text in a way that only the specified parties can read it.

[Learn more here](https://www.simplilearn.com/tutorials/cryptography-tutorial/digital-signature-algorithm#what_is_asymmetric_encryption)
