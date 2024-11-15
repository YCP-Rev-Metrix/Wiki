+++
title = "BallSpinner"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

|Chris Robinson, David Kyeremeh, Sam Diskin|
|:-:|


### BallSpinner
| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

#### Enclosure
Given the ball's mass and size, an enclosure will be built to secure it while allowing free rotation using ball bearings. The enclosure for the bowling ball must be sturdy to ensure that the system remains stable and does not fail or break during operation, especially considering the forces exerted by the motors and the ball's weight. It will be designed to withstand repeated use and any mechanical stresses generated during the ball's rotation. We will ensure the enclosure will accommodate bowling balls of different sizes. The enclosure will also be see-through, allowing the user to monitor the process. 

#### Motors & Drivers
(Frictional forces) 
{setup, power, friction}
Each motor will be spaced 90 degrees apart; the three motors will drive the bowling ball using friction. The motors will be mounted to the enclosure utilizing springs, ensuring the necessary normal force is maintained to drive the ball effectively. The motor on the primary spin axis will be capable of spinning the ball at 60 RPM, providing the main rotational force. The motors on the secondary and tertiary axes will rotate at speeds below 10 RPM, contributing minor adjustments to control the ball's movement without interfering with the primary rotation.

#### Sensors 
The SmartDot will be positioned inside the bowling ball, approximately three and a half inches away from its geometric center. The auxiliary sensors will measure the bowling ball's real-time angular velocity and send this feedback to the Raspberry Pi for processing. One idea being discussed is making holes in our driver and then using a light sensor to count the rpm so there is a verifiable measure of the motor input. The ball’s angular velocity may be measured by a small motor normal to the ball. The ball will spin the motor through friction, causing the motor to generate a voltage. The voltage can be measured to obtain the motor's angular velocity, which can be compared to the bowling ball through a process akin to gear ratios.

#### Motor Controller & Power Supply
The motor controller will primarily consist of a MOSFET circuit powered by laptop chargers and controlled by the Raspberry Pi. The Pi only needs to provide a small electrical signal to allow the chargers to power the motor. The signal will look like a square pulse wave modulation (PWM) signal. The duty cycle is calculated by the Pi and will adjust in real-time. Each motor will have a dedicated MOSFET circuit, but may share power supplies depending on future configurations and design implantation. One of the primary reasons to use a laptop charger is that they provide safe and stable DC power at an appropriate voltage for our system.

#### Raspberry Pi
The Raspberry Pi acts as the central hub of data for the BallSpinner; It talks to the external systems, the external sensors, SmartDot module, and motor controllers. The Pi will send the calculated motor power requirements to the motor controllers, this signal will be a low-voltage PWM. This signal will be rapidly changing based on the feedback data from the rest of the system. Without this component, the bowling ball would remain idle. 