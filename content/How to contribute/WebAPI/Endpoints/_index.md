+++
title = "Adding & Managing Endpoints"
weight = 100
description = 'How to Add or Manage an Endpoint'
+++

- [What is an Endpoint?](#what-is-an-endpoint)
- [What is a Controller?](#what-is-a-controller)
- [What is a POCO?](#what-is-a-poco)
- [What are Url Parameters?](#what-are-url-parameters)
- [Common Rest Request Methods](#common-rest-request-methods)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [PATCH](#patch)
    - [DELETE](#delete)

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
Let's deconstruct a smaller Controller:
```c#
[ApiController]
[Route("api/[controller]")]
public class TestController : AbstractFeaturedController
{

    [HttpGet("Test", Name = "Test")]
    public IActionResult Test()
    {
        LogWriter.LogInfo("Test called");
        return Ok();
    }

}
```
Here, we have defined a basic endpoint inside 