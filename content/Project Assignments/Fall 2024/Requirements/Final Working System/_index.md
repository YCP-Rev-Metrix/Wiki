+++
title = "Final Working System "
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

### Frontend Team
For this milestone, we will have all pages that were previously designed functional. We will also finalize input cleansing for values with the appropriate errors for when they are invalid.
| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

### Backend Team
For this final milestone, the interfacing with the backend will be complete. Therefore, all API endpoints will be successfully implemented and will be able to test each endpoint successfully through Insomnia or Postman. We will also integrate these endpoints with the Frontend as much as we can. Automated tests will be implemented for each endpoint to show that all requests are handled correctly. The next task will consist of implementing scripts with instructions to be able to control the motors on all three axes. 

Furthermore, the final system will have all the available data at this point parsed and stored properly whether that is inputted from a .rev file or is collected directly from the sensors, or motors. This means that all simulation data (both actual and expected) will be available for the simulation and the database.

Part of the final implementation will also be parsing the simulation data from the physical hardware to the simulation in real time, as well as caching the .rev data temporarily where it can be saved locally and/or to the server database. We will also have the previous throw data available for view such that users will be able to see a list of all previous throws, and when a throw is selected, the throw’s data is sent to the simulation where it is reconstructed for view. For locally saved throws, the data will be retrieved from the user selected .rev file after selecting the “Load from File” button. For throws saved server-side, the data will be retrieved from the server through an API request after a user has navigated to the “Load Throws” page. 

### Communication Team
A full interface for all of the 9DoF modules referenced previously as SmartDot modules will be implemented for the final working system. The interface will be able to communicate with MetaMotionS, MetaMotionC, SmartDot, and any other modules designated by the client. The Ball Spinner Controller will be able to read data from the gyroscope, accelerometer, magnetometer, and optional light sensor from said modules and send all the data in the proper message structure to the Application. The main point of this functionality (all of which are considered part of the SmartDotAPI) is to provide a layer of abstraction between the physical modules and the software on the application side.
  
At this point in the project, the Application will have full control over all the motors in the Ball Spinner. This means that in the communication aspect, the application can send commands to the Ball Spinner (which will have to be established between the Front End and Back End teams) which will be parsed to send the proper signals to the motor controllers. At the same time, the Ball Spinner will continuously read the data from the auxiliary sensors (as mentioned in the previous milestones) and relay them back to the Front End along with the SmartDot module data for real-time changes to instructions. 

### Mechanical Team

All the orthogonal rotations will be implemented into the system, requiring control and power to be distributed to each axis’s role. Both of the minor axes’ motors will influence the rotation of the bowling ball without removing the control of the ball’s momentum. We will ensure that the motors' accuracy is satisfactory. Giving control over all the other directions, we would simulate the ball's horizontal drift across the lane as it rolls.

An asymmetric core can cause the ball to wobble, which may affect the primary spin axis. A higher level of accuracy is needed to send proper readings to the controller, which must send appropriate data to be interpreted. Increased degrees of freedom will expose the system to more points of failure. Troubleshooting will be more complex due to more moving parts of the system. As energy is added to secondary and tertiary axes, ensuring energy is not wasted will be a challenge. 

### Simulation Team
The final working simulation will contain a Three.JS, 3D visualization of the bowling ball traveling down a lane based on the simulation results. The visualization can use either simulation results or actual results from recorded data, there is no functional difference. In this milestone, the simulation will be as accurate as possible.
| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|
Example of how the lane simulation will look inside the application, the user can switch views of the data.

