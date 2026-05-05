+++
title = "2024 Spring Backend"
weight = 100
description = 'All details about the current state of the backend development, along with what is planned for the future'
+++

### Progress of Backend Development

#### Backend Architecture
| ![Backend Architecture](BackendArc.jpg?width=40vw&lightbox=false&text-align=left)|
|:--:|

### Web API - Client and Server
The Web API is now capable of making client-server interactions and is being hosted on a Linux Ubuntu 20.04 cloud server through DigitalOcean.  To deploy the API application, a plethora of different approaches to the task were conducted, but in the end it was easiest and most efficient to create a Docker image for the application, create a docker-compose file for the application's Dockerfile, and transfer this file to the DigitalOcean droplet in which the only installations needed on the server were Docker and SQLServer.  Though the domain for the API will be changed further into the project, a test page for the API can be visited, but the link is currently being kept private for security reasons.

Because of the recent deployment of the API, the frontend team can now make secure data requests and transfers from the cloud databases inside of the mobile application.

### Updated UML Diagrams - WebAPI
#### Client
| ![Client](Client.jpg?width=40vw&lightbox=false&text-align=left)|
|:--:|

#### Common
| ![Common](Common.jpg?width=40vw&lightbox=false&text-align=left)|
|:--:|

#### Server
| ![Server](Server.jpg?width=40vw&lightbox=false&text-align=left)|
|:--:|

### Updated Database Schemas
Below are the most recently updated reworkings of the project's database schemas.  The databases listed below can be seen in the [RevMetrix System Architecture](/current-project-status/)

#### Local Database Schema (Localhost)
| ![Local Database](LocalDatabase.jpg?width=40vw&lightbox=false&text-align=left)|
|:--:|

#### Backend Database Schema (Cloud Server)
| ![RevMetrix DB](Spring2024DBSchema.jpg?width=40vw&lightbox=false) |
|:-----------------------------------------------------------------:|

Both the User and Research databases have been combined into one database, with permissions set for raw data for the sole purpose of providing data to the Research UI.

#### Results of database stress testing can be seen at the link below
{{% children containerstyle="ul" style="li" sort="title" description="true" %}}
