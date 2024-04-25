+++
title = "Adding & Managing Endpoints"
weight = 100
description = 'How to Add or Manage an Endpoint'
+++
### Table of Contents
- [What is an Endpoint?](#what-is-an-endpoint)
- [What is a controller?](#what-is-a-controller)
- [What is a POCO?](#what-is-a-poco)
- [What are Url Parameters?](#what-are-url-parameters)
- [Common Rest Request Methods](#common-rest-request-methods)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [PATCH](#patch)
    - [DELETE](#delete)
- [Adding an Endpoint](#adding-an-endpoint)
    - [Basic Example](#basic-example)
        - [Controller and Method Attributes](#controller-and-method-attributes)
        - [Naming](#naming)
        - [Returns](#returns)
    - [Authentication and Authorization](#authentication-and-authorization)
    - [Returning](#returning)
        - [Returning Data](#returning-data)
        - [Returning Other Statuses](#returning-other-statuses)
    - [Input Parameters](#input-parameters)
        - [Url Parameters](#url-parameters)
        - [Body Parameters](#body-parameters)
    - [Extra Notes](#extra-notes)
        - [Adding a Non-request Method to a Controller](#adding-a-non-request-method-to-a-controller)

---
## What is an Endpoint?
An endpoint is a GET / POST ... Rest API request method that may or may not take in parameters (body or url).
This endpoint is what actually allows others to connect to the Web API and use it's functionality.
A full API Endpoint may look like: [https://revmetrixapi.robertwood.dev/api/Test/TestTime](https://revmetrixapi.robertwood.dev/api/Test/TestTime).
This specific endpoint is a GET that takes no parameters and returns the current server time in a POCO.

---
## What is a controller?
A controller is a set of endpoints built around a common functionality.
Currently, a good example is the User controller, which defines a lot of functionality related to creating, deleting, and logging in users.

---
## What is a POCO?
POCO stands for 'Plain Old Class Object'. These are classes who's sole job is to contain data. An example is shown below:
```C#
public class DateTimePoco : POCO
{
    public DateTime DateTime { get; set; }

    public DateTimePoco(DateTime dateTime) => DateTime = dateTime;
}
```
The above POCO contains one property (DateTime) of type DateTime and a constructor. There are no methods, data processing, or interactions with other objects.
This allows it to be easily serialized and deserialized through json, something that the server and client handle for you (this is an easy process though).

---
## What are Url Parameters?
Url parameters are a way by which key-value pairs are passed to the server via the plaintext url.
In the example below, two values are set. This url defines a bing search for "Url Parameters" that displayes the first 11 results.

[https://www.bing.com/search?q=Url+Parameter&first=11](https://www.bing.com/search?q=Url+Parameter&first=11)

- q (Query) = "Url Parameters"
- first (search results) = "11"

This is used for many different API request methods but is not secure so it should not be used for private information.

---
## Common Rest Request Methods
HTTP Rest methods are the ways that the internet communicates, these each define a different style of DB call on the server.
Though we don't support all of the ones listed in the following site, you can learn more [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

Learn about our supported methods below:

#### GET
A GET is about getting data, when executing a GET, you cannot provide information in the request body ut you can provide url parameters.
This is normally used when the client is asking for data from the server, such as the [TestTime](https://revmetrixapi.robertwood.dev/api/Test/TestTime) example shown previously.

#### POST
A POST is about the client sending data to the server, specifially sending new data to the server, that it would have to add a DB enrty for.
In this, normally some value is provided to the server in the request body but may also be located in url parameters.
A good example of this is the [CreateAccount](https://revmetrixapi.robertwood.dev/api/User/Register) endpoint.
In this, the body is expected to contain a POCO, representing the data being sent to the server. 
It is likely that during this, the server will reply with another POCO in the body aswell.

#### PUT
A PUT is about updating information on the server in the form of replacing it. This could be re-sending data that is currently in the DB.
Here, the server would delete the old item, the add the new one. This is useful for large or very complicated updates.

#### PATCH
A PUT is about updating information on the server in the form of replacing only the changed values. 
A good example of this (not currently in use) could be a user requesting to update their username or phone number on the server.
Here, the server only changes that specific database cell containing the username and everything else remains un-touched.

#### DELETE
A DELETE is about the client requesting that the server removes something from the DB.
This is normally done through url parameters such as 'id=5', where the client wants to delete some item with the id of 5.
There are currently no examples of this in the Web API. Generally, the result sent back from the server only relates to the success of this request though it may sometimes include the value of the item(s) deleted from the DB.

---
## Adding an Endpoint

#### Basic Example
Here, we have defined a basic endpoint, named 'Test' inside of the controller named 'Demo'. Let's deconstruct what it means:
```c#
[ApiController]
[Tags("Tests")]
[Route("api/tests/[controller]")]
public class DemoController : AbstractFeaturedController
{

    [HttpGet(Name = "Test")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult Test()
    {
        LogWriter.LogInfo("Test called");
        return Ok();
    }

}
```

###### Controller and Method Attributes
All controllers will extend from ```AbstractFeaturedController```, which implements a few helper functions.
This controller will be decorated with the attribute ```[ApiController]``` to let .NET know that this is an API controller.
The Http method will be of return type ```IActionResult```, decorated with ```[HttpGet("Test", Name = "Test")]```, though this could have been a Post or other type previously covered.

###### Naming
The full endpoint url for this will be 'baseurl/Demo/Test' and this will be a GET.
The name of the controller is always followed by the word controller. When the actual endpoints are generated, ```[Route("api/[controller]")]``` lets the generator know to remove the word 'Controller' in the endpoint name.
The name of our Http method is 'Test', denoted by the attribute ```[HttpGet(Name = "Test")]``` decorating the method.
```C#
[ApiController]
[Tags("<Type of Endpoint>")]
[Route("api/<type of endpoint>/[controller]")]
public class DemoController : AbstractFeaturedController
{
    
}
```
This controller's endpoint is api/tests/Demo.


###### Returns
This endpoint currently, just returns an Ok status 200 message to the client, though in future examples, we will see something a bit more useful.
In order to let Swagger and our future self know what this can return, we can Decorate the method with the attribute ```[ProducesResponseType(StatusCodes.Status200OK)]```.


#### Authentication and Authorization
In many instances, we want to limit who can use a specific endpoint.
If we want to limit use to only users who are logged in, also granting us the abiity to grab the current user's username, then we should add Authentication.
If we want to limit use to only users who are of certain roles, like admin, user, or owner, we want to add Authorization.

This can be done by adding another attribute to either the controller or the http method. In the example below, only the methods have been decorated.
```c#
[ApiController]
[Tags("Tests")]
[Route("api/tests/[controller]")]
public class TestAuthController : AbstractFeaturedController
{
    /// <summary>
    /// Tests to ensure that the accessing user is authenticated with a JWT
    /// </summary>
    /// <returns><see cref="StatusCodes.Status200OK"/> | <see cref="StatusCodes.Status403Forbidden"/></returns>
    [Authorize]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    [HttpGet(Name = "TestAuthorize")]
    public IActionResult TestAuthorize()
    {
        LogWriter.LogInfo("TestAuthorize called");
        return Ok();
    }
}
```

By adding the ```[Authorize]``` attribute, we ensure that a user is logged in and has a valid JWT token.

By adding values into the ```[Authorize]``` attribute such as ```[Authorize(Roles = "Admin")]``` or ```[Authorize(Roles = "Admin, Owner")]```, we can lock this to only specific roles.

Had we placed the attribute above the controller instead, all methods in the controller would ahere to that policy, shown below:
```c#
[Authorize]
[ApiController]
[Tags("Tests")]
[Route("api/tests/[controller]")]
public class TestController : AbstractFeaturedController
{

    [HttpGet(Name = "TestAuthorize")]
    public IActionResult TestAuthorize()
    {
        LogWriter.LogInfo("TestAuthorize called");
        return Ok();
    }

}
```

#### Returning

###### Returning Data
At many points, we would like the server to return data during a client's request, this through the use of POCOs.
We can include in the ```return Ok()``` a POCO such as ```DateTimePoco```. It will now look like ```return Ok(new DateTimePoco(DateTime.UtcNow))```.
This is automtically serializd into JSON and sent back in the body of the response.
```c#
[HttpGet(Name = "TestTime")]
public IActionResult TestTime()
{
    LogWriter.LogInfo("TestTime called");
    return Ok(new DateTimePoco(DateTime.UtcNow));
}
```
Ok (Status 200) is not the only status that contain information. Data may also be returned during a Forbid and others.

The last thing that we want to do, is decorate the method with it's return types using the attribute ```[ProducesResponseType]```:
```c#
[ProducesResponseType(typeof(DateTimePoco), StatusCodes.Status200OK)]
[HttpGet(Name = "TestTime")]
public IActionResult TestTime()
{
    LogWriter.LogInfo("TestTime called");
    return Ok(new DateTimePoco(DateTime.UtcNow));
}
```
Here we are telling .NET that during a status 200, the method will return the DateTimePoco type.

###### Returning Other Statuses
At many points, we want to stop execution of a request early due to an error, invalid credentials, or something else.
In order to do this, we have the ability to return more than just Ok (200).
View [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for a list and explanation of all statuses.
```c#
[HttpPost(Name = "Authorize")]
[ProducesResponseType(typeof(DualToken), StatusCodes.Status200OK)]
[ProducesResponseType(StatusCodes.Status403Forbidden)]
public async Task<IActionResult> Authorize([FromBody] UserIdentification userIdentification)
{
    LogWriter.LogInfo("Authorize called");
    // Validate user credentials (e.g., check against a database)
    (bool success, string[]? roles) = await ServerState.UserStore.VerifyUser(userIdentification.Username, userIdentification.Password);
    if (success)
    {
        (string authorizationToken, byte[] refreshToken) = await ServerState.TokenStore.GenerateTokenSet(userIdentification.Username, roles);

        // Return the token as a response
        return Ok(new DualToken(authorizationToken, refreshToken));
    }

    // If credentials are invalid, return a 403 Forbid response
    return Forbid();
}
```
Above, we have definied a method which returns an Ok (200) with a DualToken POCO on success and returns Forbid (403) if the user's credentials are invalid.

When doing this, remember to annotate methods with the ```[ProducesResponseType]``` attributes:
```C#
[ProducesResponseType(typeof(DualToken), StatusCodes.Status200OK)]
[ProducesResponseType(StatusCodes.Status403Forbidden)]
```

#### Input Parameters
Input parameters are a crucial portion of every web API, allowing the client to communicate data to the server.

###### Url Parameters
API Endpoints can take in Url Parameters. See the following code snippet to see how this can be done:
```c#
[HttpGet("UrlParameterDemo", Name = "UrlParameterDemo")]
[ProducesResponseType(StatusCodes.Status200OK)]
public IActionResult UrlParameterDemo([FromQuery] int parameter_name)
{
    return Ok();
}
```
By annotating a method parameter with ```[FromQuery]```, we can retrieve the values from the url parameters.
Keep in mind that url parameters are not encrypted and therefore should not contain sensitive information.

###### Body Parameters
API Endpoints can also take in JSON items such as POCOs. THe code snippet below shows how to do this:
```C#
[HttpGet("BodyParameterDemo", Name = "BodyParameterDemo")]
[ProducesResponseType(StatusCodes.Status200OK)]
public IActionResult BodyParameterDemo([FromBody] DateTimePoco dateTime)
{
    return Ok();
}
```
By annotating a method parameter with ```[FromBody]```, we can retrieve the value from the request's body.
This is generally used with requests such as POSTs where data is transfered from the clients to the server. Keep in mind that this data is encrypted via HTTPS.

#### Extra Notes

###### Adding a Non-request Method to a Controller
There are various instances in which you would like to have a helper function in a controller that doesn't act as an API endpoint.
If you have tried to to this, you have likely encountered an issue.
To get around this, the method must be decorated with the ```[NonAction]``` attribute, letting .NET know that this method does not need to be an API endpoint.


An example is shown below, where the GetJWT method is decorated with the ```[NonAction]``` attribute.
```c#
[Controller]
public abstract class AbstractFeaturedController : ControllerBase
{

    [NonAction]
    public string? GetJWT() {
        var AuthHeaders = HttpContext.Request.Headers["Authorization"];
        return AuthHeaders.FirstOrDefault()?.Split(" ").Last();
    }

}
```