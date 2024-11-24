+++
title = "50% Working System "
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

### Frontend Team
For this milestone, we will have skeletons of all pages. While most of the pages that are not needed by other teams will not function, they will at least be visible to the user. This lets the team establish better visual presentations based on feedback from the client. The team will implement a functional display graph that is capable of visualizing data in real-time.

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

Example of how the output window will look

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

Example of how the run window will look, notice that there is not precise information about the device that is connected

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

Example of an alert box that will be needed for error handling

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

Example of how the database management screen will look

### Backend Team
For the 50% milestone, we will focus on several key factors that will enhance the functionality of our system. First, we will develop API endpoints designed for saving the simulation data. This will include endpoints to upload throw data, delete a throw, view throws (a list of previous throws), get devices, and view previous throw data. The get devices endpoint will be able to retrieve previous user SmartDot connections. This will include the SmartDot’s name and mac address, so BLE communication can be facilitated again between the application and the SmartDot. By this milestone, these endpoints will still be prototypes because we will not have all the necessary simulation data available. The endpoint we will have integrated with the frontend will be the upload throw endpoint which will contain its own Xunit tests, while the others will be integrated on the cloud and will be tested through postman. These endpoints will ensure that users can easily save and retrieve their simulation results. We will also implement the capability to parse throw data from one axis of rotation using the accelerometer sensor on the SmartDot. The operation of parsing the sensor data and sending to the simulation will run in real time, since this is a critical requirement of the application. This will be useful both for saving into the database and for transferring to the simulation so that the data can be more easily readable for these applications. 
In addition, we will integrate most of the endpoints within the server with the frontend. Thus, allowing the users to interact efficiently with the server and the frontend. With this, we will allow the users to operate the motors directly through the interface. This will be done by implementing scripting for one axis, therefore making it easier to automate and manage motor functions. 
At this point, the application will have readable data that can be displayed via the simulation page. Part of the frontend implementation of this page is to give the users the option to save simulation data locally into the new parsed file format (which we are calling .rev). So part of this milestone will also include prototyping a local save feature for the one-axis simulation data parsed into our custom file format. Users will also have the option to save data to the cloud, which will be achieved through the upload through the API endpoint. These accomplishments will be a significant step toward a fully operational system by enhancing functionality and user engagement.	

### Communications Team

For the 50% working simulation on the communication side, the Ball Spinner will have the SmartDot API functions revolving around interfacing with the MetaMotionS completed. This will include (but is not limited to) reading 3-axis data from the magnetometer, gyroscope, and accelerometer, reading the light sensor data, and reading any information regarding the established Bluetooth connection. Interfacing with the MetaMotion module will be considered complete, which will include scripting to begin and end taking data from the respective sensors, and any other scripts required to run to automate the processes of the module. The system will then have a reliable source of data to interface with for data acquisition and message-passing comparisons.

Along with fully functional communication with the SmartDot module, the Ball Spinner Controller will be able to read and send data to the auxiliary sensors of the Ball Spinner. With the ability to reliably read the sensors connected to all the motors, the most important feature that will be completed by this milestone is to allow full control of at least one motor from the desktop side. This will involve a semi-finalized message-passing scheme between the Application and the Ball Spinner controller, where the controller will parse the message and send the data to the motor controller in a signal output that they would be able to understand. 

The final task for the 50% working Simulation will be to finalize the establishment of connection on the Application side to both the Ball Spinner and the SmartDot module. Since the SmartDot is connecting to the Ball Spinner via BLE instead of connecting straight to the Application, extra message passing is required to ensure confirmation that the Application is not only connected to the Ball Spinner but the Ball Spinner is also connected to the SmartDot module. The user will be able to select the proper SmartDot module to connect to by selecting the MAC address (based on a list of available devices from the Ball Spinner) of the SmartDot module, which will then be sent to the Ball Spinner to establish the connection. From there, confirmation that everything went successfully will be sent back to the Application to be displayed to the user.

### Mechanical Team

The bowling ball will spin through motor input with control over two orthogonal axes of rotation. The major axis will be the main focus of the design. The minor axis will require less input power but still require a similar amount of control. Friction will be another critical point of consideration, especially since we want the ball to have its momentum influence the system. Reliable regulation of speed and acceleration will be vital.

Giving the motors enough normal force between the ball and the points of contact will be challenging while the momentum maintains its impact on the system. Another important factor to consider is maintaining speed regulation with proper communication with the motors. Building the enclosure to handle the ball’s mass and momentum is essential. Creating a structure that can operate properly at the speeds we want will be demanding. Considering the general complexity of adding the second axis of rotation, constructing this system will be demanding.

### Simulation Team
The 50% working simulation will incorporate a visual simulation that will be displayed alongside the graphs in the Application, removing the need for a console output. The accuracy of the simulation will continue to improve with the help of the mechanical team, communications team, and client by continuously improving on the calculations that the simulation runs off of.