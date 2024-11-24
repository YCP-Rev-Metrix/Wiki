+++
title = "Architecture"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

### Ball Spinner 
The Ball Spinner will provide 4 DoF (degrees of freedom) to drive the bowling ball in 3 orthogonal rotations, and one linear translation. Only one motor (the primary motor) will be required to produce a substantial driving force to replicate movement down the lane. The other motors (the secondary/tertiary motors) require only minimal force as the ball has the ability to shift vertically depending on the angle the ball is thrown and the angular velocity given to the ball before the release of the bowler. Once prompted by the Front-End Application, the Ball Spinner will increase/decrease motor speeds and send this data back to the application, along with output from different auxiliary sensors to fully encapsulate the motion of the bowling ball.
### Front End Application 
| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

The Application will maintain its current implementation of the .NET MAUI infrastructure with a heavier focus on the already multi-platformed application running on a Windows or Mac Environment. Some of the current functionality only works on the mobile platform and has difficulties in simulating in the development environment. With the idea that the Ball Spinner will be controlled with a computer, the desktop configuration seems to be the primary platform for the application to run on. The application will allow the user to connect to the Ball Spinner controller through USB. Once connected to the hardware, the user will be asked to input turn-specific credentials relating to the physics of how the ball would be thrown in a real-world scenario. This would include Launch Angle, Initial Velocity, the weight of the ball, and the type of core the user’s bowling ball possesses. These parameters will then be passed to the Ball Spinner which will replicate and transmit data back to the application.

### Smart Dot Module
The SmartDot module is a 9 DoF module containing an Accelerometer, Magnetometer, and Gyroscope outputted data in 3 axes. This module is the primary device used for receiving information from inside the bowling ball. The module will be installed in the bowling ball underneath a finger insert in an existing finger hole. When the Ball Spinner begins emulation, the SmartDot module will send its data to the motor controller via BLE. For testing purposes, other 9 DoF modules will be used that share the same communication method as this module such as the MetaMotion module from Mbient labs.

### Ball Spinner Controller
The Ball Spinner controller will receive the parameters from the user interface in order to calculate the changing angular acceleration, center of mass, and overall physics of the bowling ball from the initial throw. From there, the controller will generate instructions to send to the motor controllers describing specific motor speeds and duration. At the same time, the controller will send readings from both the motors and auxiliary sensors back to the front-end application to be displayed to the user.
### Simulation 
As long as all connections are stable to the SmartDot and Ball Spinner, a simulation will appear demonstrating how the ball would interact going down an actual lane, displaying speeds, trajectory, and the primary access point of the ball. To display the 3D viewport, Three.js, and a Webview will be used. Three.js will be used instead of Unity Engine, Evergine, Monogame, or Veldrid because of the simple requirements the viewport has. Also, Unity Engine is completely overkill and does not support being embedded in a Maui application. We will also implement the ability to upload previous SmartDot shot data to display this simulation for both the current simulated run and the previous shot data so that we can test the ball spinner. The idea is that we would try to replicate the previous shot with the parameters given to the ball spinner, and using the real generated data, we can compare the graphical display and the various accelerometer, gyroscope, magnetometer, and ambient light sensor graphs that will be displayed for both scenarios to ensure they are as close to each other as possible
### Backend (Server)
| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

The development of the backend will be a continuation of last year's cloud infrastructure. A key focus will be setting up a local database, allowing for prototyping without affecting the primary system. To achieve this, we will configure a docker container containing a separate SQL server. Additionally, we will need to update the current database schema to include a simulated shots table for the cloud database and the local application database. This table will store all data inputted by the user via the front-end application and data retrieved from SmartDot. Lastly, we will further develop endpoints to support data transfer between the front end and server.
 



