+++
title = "Backend Requirements"
weight = 100
description = 'Project requirements specific to the backend development'
+++

| Jordan Carvell, Braden Fleming, Victor Pineda, Robert Wood |
|:-:|

### Backend Architecture
| ![Backend Arch](BackendArc.png?width=40vw&lightbox=false) | 
|:--:|

### Minimal Working System
The Backend Team’s role in the project will consist of three main objectives: Creation and maintenance of the Cloud Databases (User and Raw Binary databases) and the local phone database, creation and implementation of the Web API (allowing for client-server interactions), and the development and integration of ISmartDot interface. For the minimal working system, the most important goal to complete will be the decision of which database engine(s) will be used to read and write data between the different technologies used. Once the decision is made, we will need to create the database tables and enable read/write functionality to and from each database’s respective locations. Finally, to complete the minimal working system, we will need to complete the development of the Web API to effectively request and receive data to and from the mobile application and each database.
#### Issues
Communication between the local and cloud databases may serve as an obstacle due to the possibility of using a different database engine for the local database than the cloud databases use.
Hosting the Web Server in a way that allows it to be accessed from anywhere. SSL certificates and network security may get in the way of this.
### 50% Working System
In the 50% working system, the system components have the ability to communicate with each other. Most of the features for the system will not be implemented, such as a Cloud Controller with basic features; the ability to read the data and format it, or to pass the data to either the Raw and/or User database. What will be functioning is an API client whether it is a dummy or a primary functioning API client that communicates to the basic functioning cloud controller using WebAPI. 
### Final Working System
The final working system will have a fully functional system with the ability to communicate throughout the system. The API client will communicate to the Web API that talks to the Cloud controller which can talk to at least one of the databases and give the data back to the cloud controller. The Cloud Controller then transfers data to the Web API which then gives the data to an API Client.
