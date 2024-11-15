+++
title = "Frontend "
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

| Andrew Watkins,Logan Tyran, Patrick Devine |
|:-:|

### Application UML

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

The UML for the front end is very large. Grouped into the highest level abstraction, there is a visualizers group, a views group, and a BallSpinner group. The BallSpinner group is the group that handles the ball spinner connection and distributes data to the visualizers and database. To make the application more open-ended, the ball spinner is interfaced and allows us to provide an alternative implementation for the simulation. The simulation uses the same inputs as the BallSpinner and as a result, serves as a potential point of reference for comparing data. Likewise, we are able to use the IBallSpinner interface to create mock playbacks.

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

To distribute data, there is a DataParser. The DataParser interprets data from the BallSpinner packets and distributes it to those that are listening through actions. Because the BallSpinner group announces the data, there must be listeners. This is where the visualizers group comes in. The visualizers group is a collection of the views that will be implemented for displaying on the screen. 

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

Every visualizer is based on a DataViewModel, which implements basic listening functionality to the BallSpinner group’s DataParser. To prevent unnecessary data from going to each visualizer, visualizers have an enum of accepted metrics telling the DataParser what specific data it wants. For example, the LogViewModel will want to receive all forms of data. Additionally, the GraphViewModel may only want to show the X, Y, and Z acceleration.

Lastly, there is the Views group. The application is created using MAUI, and thus a Model-View-ViewModel architecture is in order. Every view or page contains a View, ViewModel, and Model. 

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

This group contains almost every page that will be necessary to create the application. For simplicity, the main page of the application will be the output page. Then, when additional data is needed, modals/subwindows will be opened and require the data to be filled in before closing. For example, when opening the application for the first time, the back end will notice there are no login credentials and prompt the user for login info. To close the log in view, the user will have to sign in.