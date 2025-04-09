+++
title = "Minimum Working System"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

### Frontend Team

For the minimal system, the front end will contain a functional login page that is able to connect to a database and will contain a draft up of the output page. The output page will be able to visualize a datapoint in preparation for future milestones. There are plenty of unknowns in regards to MAUI, so research on how to create the screens and specific details will be discovered during the milestone.	
| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

### Backend Team
For the minimal working system milestone, the backend team will achieve an operational database that stores login information and additional information. This simple task will serve as a proof of concept for accurate interfacing with the application and the server. Authorization headers and encryption are already present within the system, so this is not a concern for our implementation. We will also integrate the Frontend’s login page with our login endpoint. This will provide a basis for any future communications that will need to be facilitated between the Frontend and the backend.


### Communications Team

On the interface side, a working emulator of the Mbient labs MetaMotionS module will be finished for further testing purposes for the group. The emulator will allow users to send CSV data for the emulator to store whether it comes from the Unity SmartDot Simulator or previous output data from a 9DoF module. The device will then replicate the Bluetooth messages that the Mbient lab modules would send out when recording data in real-time mode. The emulator will then broadcast the data from the CSV file as if it were recording in real-time so the front-end has a reliable data source to confirm that the message passing between the computer and the Ball Spinner controller works as intended.
 
When looking at the minimal working system for the physical SmartDot modules (which will be referred to interchangeably with the in-house Mbient Labs modules), part of the minimum working system for the project will be to retrieve the live data from one of the 3-axis sensors in the modules to print out in the terminal of the Ball Spinner Controller. This would act as proof of concept for interacting with an actual device and help with development with the SmartDot client API that will distinguish between the emulator, the SmartDot module, and the Mbient lab modules so the rest of the system will not have to.

The last aspect of the minimal working system for the communications team will be controlling the LED on the MetaMotionS module. This will be done by writing a script through the Ball Spinner (aka the Raspberry PI) which will interact with the SmartDot API to send data to and from the connected devices. The team feels that turning on and off the LED on the module consistently will be the easiest way to demonstrate proper communication without complicated message passing.

### Mechanical Team
For the minimal working system, the team will be able to spin the bowling ball in one orthogonal direction using either a human-powered design or a small controlled motor. The human-powered design focuses on showing the similar strengths it will experience; the motor design will be used to calibrate the SmartDot sensor's factors. The SmartDot module will be mounted inside the ball’s finger hole, and we will read the ball's rpm externally. The simple external reading methods may only correctly read in one orthogonal direction. We will create an enclosure to keep the ball secure while spinning.

The first foundational problem would be designing and building the enclosure to be stable. The centripetal force of the bowling ball will cause the enclosure to rattle, making it more likely to fail or fracture. These early designs will also struggle with consistency; human power tests will not be consistent, and the motor design will need a sizeable normal force from it and the ball to move properly. External measurements could also have issues with consistency caused by the ball rattling the enclosure and finding its preferred spin axis. All of these issues increase the level of difficulty in calibrating the system to our needs.

### Simulation Team
The minimum working system for the simulation will be a text-based output on information (i.e. variables) involving how the ball is expected to go down the lane. This output data will either be displayed in a text box or console window. While the simulation will incorporate visual output later, a text-based simulation is an efficient way to relay a proof of concept for the calculations behind the visualization. The simulation will work based on the inputs given by the user and will output data in real-time similar to how the Ball Spinner would send real-time data of the projected throw to the Application. One potential issue with the simulation will be determining the accuracy since the Visual Simulation will be used as a baseline comparison for the Ball Spinner movement. This will be continuously worked on in future milestones by communicating with the other teams and client.