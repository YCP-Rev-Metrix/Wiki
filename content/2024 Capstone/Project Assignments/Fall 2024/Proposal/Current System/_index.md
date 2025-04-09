+++
title = "Current System"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++
### Front End Application
The Mobile Application was built using a .NET MAUI framework that provides cross-platform functionality all in C#. The current version of the application takes in data from the Ciclopes program, the SmartDot API, and Unity Engine, which then stores the data in a local database. The application will receive further updates to allow the user to feed in bowling variables and operate the Ball Spinner. The Ciclopes and Unity Visualizer will have little to no updates, as they are not currently the focus of the RevMetrix project. 
| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

### The Backend
The backend currently consists of multiple important functionalities, including the Web API Server, the Web API Client, the Cloud Controller, and the RevMetrix Database. The Web API incorporates both server and client-side interfacing, making it possible for the front-end application to communicate with the databases within the server. The Cloud Controller determines traffic flow in and out of the cloud server. Finally, the Database is used to store all the data gathered from both the SmartDot and the front-end application. In future phases of the project, the Algorithm Unit will be developed and incorporated as part of the Backend which will contain Dr. Babcock and Professor Hake’s algorithms and endpoints.

### RevMetrix Documentation Website
The RevMetrix Website is the main location where all the documentation surrounding the project is stored. The website is currently hosted by DigitalOcean and contains the current state of the project, installation tutorials, resources, and ways to contribute to the project. The User Interface includes a search engine on the left-hand side with all of the information neatly categorized into seven sections/subsections. The website will continue to receive updated documentation on what the current system looks like as well as changes to configuring the development environment. The website will also receive structural changes to categorization to make sifting through information easier for users.
| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

### Unity Bowling Simulation 
The Unity Engine was used as a minimal working simulation software. Users of the mobile application could change the location and the curvature of the bowling ball before it was thrown. The simulation displays the ball’s speed and rotation and allows users to see the ball’s trajectory as it moves down the lane. Finally, Unity simulates the ball-hitting pins and how the pins react (i.e. their trajectory on impact and any other pins that might be affected). The Unity Engine will be used as a starting basis for the simulation side of the project, with improvement upon what currently exists to mimic what the Ball Spinner is mechanically producing.

### SmartDot Simulator
The SmartDot Simulator is a .NET MAUI application made to convert data sent from either the Unity Engine or from pre-recorded SmartDot data and send the information as byte arrays similar to what the SmartDot module would send to the application.

### SmartDot Communications
 The SmartDot Communication process involved running a GATT server on a Raspberry Pi which handled the BLE communication. Data from the SmartDot module was then sent through Byte Arrays to the Pi, and from there to the application. The software used for SmartDot communication will be used in 