+++
title = "Analysis and Design"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

### Official Project Requirements Document and Slideshow
The official project requirements document can be found in the project's Google Drive [here](https://docs.google.com/document/d/1d93Du8xjZwaotxky2-SY5C3OfRpB_OMfDKdIDRSJ6s8/edit?usp=drive_link), and the requirements presentation slideshow can be found [here](https://docs.google.com/presentation/d/1sIQdPnMfVBHHOp9cpR-mziPSs9-DlOY9h0DqWy6kn7k/edit?usp=drive_link)

## Abstract
| ![System Architecture](OverallArc.png?width=60vw&lightbox=false) | 
|:--:| 

RevMetrix is a system that will record metrics of a bowling ball as it travels down the lane. It will consist of a physical device that the user can place inside a bowling ball and mobile application. The device will record rotational and positional data about the ball as it travels down the lane. It will periodically transmit this data to the mobile device to allow the user to understand what was happening to the ball when it was thrown. This will allow the user to improve their skill.

##### Simulation
The two main portions of the simulation architecture are the Unity Visualizer and the SmartDot simulator. Once complete, the Visualizer will be used to simulate a throw given initial parameters for the throw. The Visualizer will implement realistic physics to ensure that the ball and pins behave exactly as they would in real life. Additionally, simulated data will be collected from the Visualizer and used, alongside data from a binary dump file, to test the SmartDot Simulator. The SmartDot Simulator will simulate the physical device that will be used to get the data. The simulator will sample data from the Visualizer and store, then transmit that data like the SmartDot module would. This data will be transmitted to the mobile device via bluetooth.

##### Frontend
The frontend section of the diagram is the Mobile Application, Ciclops, the SmartDotAPI, and the File Reader. The Mobile Application serves the designed UI to the end-user of the project. It also transmits all relevant input gathered from the user to the Cloud infrastructure by saving it to a Local Database which is then transmitted to the Cloud. Along with this, the Mobile Application facilitates gathering all user input, whether it is the user inputting a new ball or the user recording a video of them bowling with a new or pre-existing ball. Ciclops will take a video file and use image-processing to extract data from video. The Ciclops program will be able to take the user’s videos and generate positional data for the ball over the throw and then send it to the database. Finally, the SmartDot API will communicate between the mobile app and the SmartDot module within the ball. Currently our plan is to use the API plugins affiliated with the MBIENT Labs Bluetooth IMU to test and further develop bluetooth functionality. We will then work with the backend team to reference their API in constructing our own.

##### Backend
The backend section of the diagram is made up of the local database, the client side of the Web API, and the cloud-infrastructure which includes both the research and  user databases, algorithm unit, cloud controller, and the server side of the Web API. The cloud-infrastructure is accessed through the mobile application by client/server interactions using the Web API. Each interaction is encoded with SSL encryption to ensure the security of any data being sent to or from the server. The local database is stored on the mobile device and stores the user’s most recent practice or match session data.

##### Communication Protocols
1. Secure Socket Layer (SSL) encryption is used to encrypt and decrypt data that is being sent through the Web API in order to ensure the security of that data. Since the data being sent through the Web API will include usernames, passwords, and other possibly valuable data, it must be encrypted to ensure the digital safety of the application’s users.
1. Bluetooth communications will be implemented into the ISmartDot interface in order to receive information from the SmartDot module located inside of the bowling ball. This data will be sent to the SmartDot API and used in the mobile application.

##### SmartDot Module and ISmartDot Interface
The SmartDot module is the physical device that will be placed into the bowling ball. It will record positional and rotational data about the ball as it travels down the lane. It will periodically transmit that data to the mobile device for the user to analyze. It will communicate with the mobile device through the ISmartDot interface. The interface will consist of a few commands for reading and writing data to the SmartDot module. In this way, the system will be able to record metrics about the ball and present it to the user.

#### Analysis and Design by Type of Develeopment
{{% children containerstyle="ul" style="li" sort="title" description="true" %}}