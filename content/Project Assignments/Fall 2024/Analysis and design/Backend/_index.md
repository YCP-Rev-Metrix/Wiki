+++
title = "Backend"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

|Christian Lua-Lua, Ryan Curry|
|:-:|

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

### Server
The image above shows our UML diagram for the RevMetrix server. The main job of the server is to give RevMetrix users the ability to access the database for storage of their RevMetrix data. The web server is created by the WebApplicationBuilder class, which binds API endpoints to controllers, binds the middleware used for authorization, and sets other options that dictate server build attributes. The ServerState class defines a set of modules that are essential for proper operation of the server. This functionality is provided by the SecurityHandler, the DatabaseUserStore, DatabaseTokenStore, and the RevMetrixDB. The SecurityHandler generates JWT tokens and refresh tokens which are used to authorize users. It also Handles hashing and salting user passwords for storing in the database as well as authorization of user JWTs, which is essential for a secure web server. The DatabaseUserStore provides an interface for storing important user data in the database such as username, salt, password, and user roles. This class also provides an interface for authenticating a user through the Sequence equal method which checks to see if the hashed password the user entered is equal to the user’s hashed password in the database. The DatabaseTokenStore provides functionality for storing, retrieving and deleting user tokens. The RevMetrixDB is the DAO (Data access object) which actually interacts with the database, retrieving, storing, and deleting objects within the database as instructed by the server. All of the above-mentioned classes that interact with the database use the RevMetrixDB class in order to do so. The revmetrix-db is the regular database used for retrieving/storing user data. While the revmetrix-db-test database is going to be a test database used for testing endpoints and DAO methods, as we will need an external database with dummy data for those tests so we do not mess with any user data. All of these aspects of the database allow for proper security and user interaction with the server. 

When the server is created a routing table is generated based on the directives indicated within the APIController classes. When a request is made to the server, the endpoint that the user sent is mapped to a Controller class. These API controllers use Microsoft’s AspNetCore package to map themselves to an API endpoint, that will then be directed to the APIController’s task method based on the way the directives direct the endpoints. The task methods perform whatever task is required of the endpoint(GET, POST, or DELETE) and return a response to the server. If a request is seeking database data, the response sent back to the server will be in the form of a POCO. A POCO stands for plain class object, and it is used to map database data to a class object so that the client can receive the data in a more readable format. The controllers interface with the above mentioned RevMetrixDB, DatabaseUserStore, and DatabaseTokenStore classes to perform the user specified operation which mainly involves adding, deleting, and retrieving information from the database. Other operations that can be performed by these endpoints include authenticating users and generating new JWT and refresh tokens, and deleting JWT/refresh tokens. 

Earlier it was mentioned that the WebApplicationBuilder class uses middleware to authenticate users, and that the middleware used is defined when starting up the server. For our purposes, the middleware that authorizes a user’s JWT token is managed by part of the SecurityHandler class. When the [Authorize] directive is specified in the API controller, the AuthorizationSigningTokenKey method will check the signature of the JWT token, and if it is valid, allow the user to continue, else it will return an unauthorized response.  Another important piece of middleware is the verifyJWTBlackListMiddleware class. This operation also runs when an endpoint requires authentication, and ensures that the user requesting access to the server is not using an invalid token.

 A response, which can consist of data or a boolean indicating success is then sent back to the APIController where a proper Http Response containing data (or an error indication) is then sent back to the client. This is indicated in our UML by the Server, Router, and APIController blocks. Each APIController class inherits from the AbstractFeatureController class, which provides methods for retrieving the current user’s username and JWT token, for any endpoints that require authorization. The AbstractFeatureController class inherits from the ControllerBase class, which is a part of Microsoft’s AspNetCore package and is essential for endpoint development. The ControllerBase class is what allows the APIControllers to operate as such.

### BallSpinner Interface and Parser Logic

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

The above diagram displays the BallSpinner functionality and the parser logic for our application. This starts with the BallSpinner Functionality Module which provides an interface between the application page models and the IBallSpinner. This module provides important BallSpinner functionality to the application models like facilitating a connection with the BallSpinner controller, sending instructions to the BallSpinnerController to start a simulated session, and halting the BallSpinnerController operations. The actual connection and implementation of these methods is done by the BallSpinner. The BallSpinner implements the IBallSpinner interface and connects to the BallSpinner controller through a USB connection, and verifies the connection is valid through the acknowledgement protocol, which is described in greater detail within the Procol section of this paper. It also includes error handling, if the BallSpinner controller returns an error message or some other communication error occurs, this will be sent back to the BallSpinner Functionality module where the error will be sent to the models to be displayed to the user. Furthermore, methods like SendBackListOfSmartDots() are available to allow the user to view a list of SmartDots sent to the application by the BallSpinner controller. Users can view each SmartDot and their available frequencies for each sensor, and select a SmartDot and set its frequencies on the application. This data will then be sent to the BallSpinner controller as a part of the setSmartDot() function, which will run through the initial connection protocol described within the Protocol section of this paper setting up a connection with the SmartDot module. Once a connection is established with the BallSpinner and a SmartDot module, the BallSpinner is able to start the BallSpinner controller and send the physical instructions needed by the BallSpinner controller to operate the motors. When SmartDot data is received from the BallSpinner, the DataParser is invoked which handles sending parsed data to the simulation and the visualizer to be used for a graphical display. It will also write this data to a temporary rev file, which if a user chooses can be saved locally or to the cloud database after the simulation is completed. The .rev file is essentially a formatted csv file which stores a list of samples in the following format:

| ![Backend Arch](5.png?width=40vw&lightbox=false) | 
|:--:|

The acronyms for each column are as follows (in order): sensor type, sample count, sample number, sample data, and elapsed time. This will allow for ease of use when interpreting this data and uploading it to the database. 

### Plain Old Classic Objects (POCOs)

The diagram to the side represents various Plain Old Class Objects (POCOs) that serve as data models for the backend. Each class contains very simple functionality and holds specific attributes and basic getter/setter methods. For example, the user object stores personal details like first name, last name, and contact information. The BallList object contains multiple balls, which are their object and contain attributes such as weight, hardness, and core type. Additionally, both the SmartDot and BallSpinner objects represent sensors that each is associated with the simulated shot and can be used for tracking data via a MAC address to monitor performance metrics. Lastly, the SimulatedShot object captures shot attempts and integrates data from ShotInfo with sensor data recorded by SensorFrequencies and SensorData. These POCOs are important for our backend because they allow the simplification of the data management process. Lastly, the main functionality of these POCOs is to be used by the Object-Relational Mapping (ORM) Framework to map these objects to corresponding database tables.

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

### Client
This diagram represents the client from the API architecture where it is possible to interact with a backend via HTTP requests and responses from the front end. In this case, AbstractTokenStore manages authentication tokens, providing methods to get and set the token. The IDatabase interface defines core operations like user login, registration, and managing various entities. The Database (Client) class implements the IDatabase interface making it possible to interact with the backend. Last from the diagram, the MockDatabase is a test version used for simulating backend interactions which will contain a lot of dummy data. Overall, the design will support both live operations and testing through mock objects.

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|