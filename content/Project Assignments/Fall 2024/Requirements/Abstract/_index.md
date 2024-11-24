+++
title = "Abstract"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

### Abstract
| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

RevMetrix is a bowling analytics tool stemming from the idea to combine the visual bowling capture system designed by Dr. Babcock (the Ciclopes application), and a 3 Degree of Freedom (DOF) designed by Professor Hake (the SmartDot Module). The system will be designed to be able to combine data received from both sources and offer the end-user a cohesive representation of their bowling experience providing the ball’s direction of travel and speed during a game. 

The focus of this project for the upcoming year is to develop a system that allows the user to enter variables surrounding the throw of a bowling ball. When the parameters are inserted, instructions will be drafted to manipulate the mechanism’s (Ball Spinner’s) motors to change the ball movement accordingly. The Ball Spinner will move the bowling ball in a way that replicates the movement as if the user would throw the ball with the entered credentials down an actual lane. From there, the user can watch a visual representation of the ball’s predicted movements as if it were on the lane. Datasets of the ball’s visual simulation and mechanical simulation will be graphed in real time, side by side. When finished collecting data for the session, the user will be able to either store the data in the RevMetrix database (as long as the user is logged in) or save the data in a .rev file.

For the minimal working system, the system will have a basic message passing between the Application and Ball Spinner to establish the communication protocols used for the two devices. The Application will also incorporate a working Login popup that stores the login credentials to the RevMetrix database. This will act as a proof of concept that interactions between the Application and database are functioning properly and data is stored in a retrievable format. On the mechanical side, the team will have a method of moving the ball in one orthogonal direction for data acquisition of the SmartDot module output data. Finally, the simulation team with incorporate a standalone text-based simulation that outputs information related to the future simulation calculations and variables. 

For the 50% working system, message layouts and packet parsing methods will have been agreed on throughout the subsystems of the project. The skeleton for all of the pages and popups will be designed with a fully functional interface to the database and visual simulation when parameters are inserted into the Application. The User will have the ability to input data that will control the main motor of the Ball Spinner from the Application. The mechanical side will have a reliable control method for the ball in 2 orthogonal directions as well as communication with some of the motors to the Ball Spinner controller.

For the fully working system, all pages, popups, and error windows for the Application will be running and fully functioning. The User will be able to input parameters that control all motors of the Ball Spinner to move in their expected directions. The Ball Spinner will send the data from the auxiliary sensors along with the SmartDot module sensors back to the Application which will graph the data for the user. At the same time, the simulation will run, graphing the data for a side-by-side comparison for the user.

Major challenges for the project seem to be the lack of time for the team to reach the deadlines for each milestone due to the lack of time currently to experiment without working on deliverables and the short periods between each milestone for the current semester. Other challenges include message dropping from the communication standpoint, accurate simulation data, accurate Ball Spinner instructions, and not overwhelming the Ball Spinner Controller with extreme amounts of functionality.
