+++
title = "Backend Team"
weight = 100
description = 'Project Analysis and Design specific to the backend team'
+++

| Jordan Carvell, Braden Fleming, Victor Pineda, Robert Wood |
|:-:|

| ![Backend Arch](BackendArc.png?width=40vw&lightbox=false) | 
|:--:|

### Local Database
The local database will be used to store and retrieve information from the current or most recent practice/match session that the user completed. The mobile app sends the session’s data to the local database and overwrites previous data entries when a new practice/match session is completed and the previous data has been uploaded to the user database in the cloud. This is done initially on the phone app to ensure that data is not lost. 

### Web API - Server
The Web API server is the endpoint of the web API that the frontend team can interact with via the client code. This will house controllers and logic to talk to the database, authenticate & authorize users, and preform algorithmic analysis when necessary.

### Web API - Client
The Web API client is a purpose built C# utility devised to make communications with the Web API server simpler, implementing automatic error handling, request abstraction, POCO conversions, encryption, and authentication. This means that when it comes time to integrate the client into the mobile application, little will need to be done. 

### Common
The common project will hold common classes and architecture between the Server, client, and other projects within cloud infrastructure. This will consist of primarily logging-related classes and POCOs.

### Algorithm Unit
The algorithm unit will contain many algorithms developed by Professor Hake during his thesis. These will largely be implemented by other students and exists to determine ball & throw statistics & metrics from primarily raw data from the Research Database. This may eventually house algorithms relating to video processing as well.

### User Database
The User database will be storing all of the information from the SmartDot module and Ciclops. It will store all of the User/Game details and then a connection will be established via a Web Api to the phone application that will read and write information to or from the cloud-based database. 

### Research Database
The research database is going to hold the raw data that is collected from the Smart Dot Module. This entire database will have a similar layout to the User Database, but instead of being used for displaying purposes it will be utilized for Professor Hake’s analysis. This Database will be used for algorithm development.

### UML Diagrams
##### Web API - Server
| ![WebAPI Server UML](WebAPIServUML.png?width=40vw&lightbox=false) | 
|:--:|

##### Web API - Client
| ![WebAPI Client UML](WebAPICliUML.png?width=40vw&lightbox=false) | 
|:--:|

##### Common
| ![Common UML](CommonUML.png?width=30vw&lightbox=false) | 
|:--:|

##### Algorithm Unit
A UML diagram has not been devised for this as no algorithm development has taken place.

### Database Interface Diagrams
##### User Database
| ![Uder DB Interface](UserDBInt.jpg?width=40vw&lightbox=false) | 
|:--:|

##### Local Database
| ![Backend Arch](LocalDBInt.jpg?width=40vw&lightbox=false) | 
|:--:|

##### Research Database
| ![Backend Arch](ResearchDBInt.jpg?width=40vw&lightbox=false) | 
|:--:|

### Database Schemas
##### Local Database
| ![Backend Arch](LocalDB.png?width=30vw&lightbox=false) | 
|:--:|

##### User Database
| ![Backend Arch](UserDB.png?width=30vw&lightbox=false) | 
|:--:| 

##### Research Database
| ![Backend Arch](ResearchDB.png?width=30vw&lightbox=false) | 
|:--:|
