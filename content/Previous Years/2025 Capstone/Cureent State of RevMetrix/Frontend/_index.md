+++
title = "Ball Spinner Application"
weight = 100
description = 'Frontend 2025 spring'
+++

### Ball Spinner Application Overview

The purpose of the Ball Spinner Application (BSA) is to provide an interface for controlling and receiving data from the Ball Spinner as well as the SmartDot.
Ball Spinner data, along with user related data used to facilitate Simulated Shots with the Ball Spinner, is also saved to the cloud database.
Users are provided with a streamlined view (Figure 1) that displays all relevant data received during a shot. This includes a graphical representation of incoming SmartDot data, as well as a simulation that visually displays the movement of the ball as it spins in the Ball Spinner.

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|


### Shots

Once connected to the Ball Spinner, the user can begin a Simulated Shot, a session controlled by the BSA. The user first sets initial values, including start, end, and inflection points on a Bézier curve (Figure 2), which defines the interpolated motor instructions (shown in red). They must also specify the ball used and add any comments. From here, the shot can commence.

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

When a shot begins, motor instructions are sent to the Ball Spinner Controller, which then returns sensor data from the SmartDot and motor encoder readings. This data is used to animate the simulation and update the corresponding graphs.

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|


### Communication

The Ball Spinner Application uses a TCP connection to facilitate communication with the Ball Spinner Controller.

The BSA primarily sends the following key commands:
Motor instructions
SmartDot configuration
Start/Stop commands for shot initiation

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

### User Data

sers can save shots and balls to the database, both of which are managed on the pages pictured on the right. Saved shots can be reused for new simulations and managed through replay or deletion.

| ![Backend Arch](5.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](6.png?width=40vw&lightbox=false) | 
|:--:|