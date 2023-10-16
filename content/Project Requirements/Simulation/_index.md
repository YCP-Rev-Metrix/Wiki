+++
title = "Simulation Requirements"
weight = 100
description = 'Project requirements specific to the simulation development'
+++

| Luke Dodson, Bryce Neptune, Enoch Sam, Ian Viveiros |
|:-:|

### SmartDot Dataflow Diagram
| ![Smartdot Architecture](SDArch.png?width=40vw&lightbox=false) | 
|:--:|

### Minimal Working System
The minimal working system will consist of a basic physics simulator and a SmartDot simulator that can run on pre-recorded data. The SmartDot simulator will imitate the actual hardware but will receive data from data files instead of sensing the environment. It will send this data to the mobile device via Bluetooth. The physics simulator will maintain realistic physics (friction, momentum, rotational acceleration, etc.), but in a simple environment. The lane will act as a flat object with a uniform coefficient of friction.
#### Issues
The biggest challenge for making the minimal working system will be properly imitating the SmartDot module. The SmartDot simulator will have to have sensors, memory, process synchronization, and data transfer protocols. Simulating all of that in C# will be quite difficult. Additionally, another issue will be verifying that the simulated physics works as it does in real life. 
### 50% Working System
Once the minimal working system is complete. The next step will be to extend the functionality of the SmartDot simulator. The fifty percent milestone will feature the ability to generate new data. The physics simulator will allow users to enter initial parameters to determine how the ball is thrown. The SmartDot simulator will then have sensors that can actually collect the data from the throw and store it. This will allow the simulator to generate new data. 
#### Issues
The most serious challenge for this step will be developing accurate sensors in Unity. The sensors will have to detect light and acceleration and output it in proper binary format. Getting the information might be difficult as there may not be support for it in the Unity framework. There will have to be research into that later.
### Final Working System
The final working system for this semester will have two additional features. The first will be the visualizer. The visualizer will record videos of each throw and save it to the local machine. These videos will then be used by the front end when testing their image processing software. The second feature will be a more realistic environment for the simulator. That will include lighting patterns and lane textures. The lighting patterns will imitate the lighting patterns at bowling alleys. This will help generate more accurate data from the light sensors. In addition, the lane will also have small variations in the surface and oil patterns that will affect how the ball rolls down the lane. This will help increase the accuracy of the accelerometer data.
#### Issues
Setting the groundwork for the Visualizer will be the physics simulation, the videos produced by this simulation have to be compatible with everything developed for image processing. So having the digital visualization match the same parameters as real-life footage is predicted to be a delicate and tedious task. It is expected that the camera angle may be adjusted multiple times during the same playback, so that multiple angles may be captured of the same shot. This will allow Image Processing to be developed in a more robust, and consistent manner.
