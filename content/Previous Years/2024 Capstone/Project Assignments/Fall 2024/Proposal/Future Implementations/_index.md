+++
title = "Future Implementations"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

### Challenges

##### Frontend
In our project, the frontend challenges primarily revolve around generating physical instructions for the hardware. This challenge becomes increasingly complex as we incorporate multiple axes and different core types into the prototype. Additionally, establishing a reliable interface with the SmartDot hardware via Bluetooth Low Energy (BLE) poses its own difficulties, especially when collecting live data from the accelerometer, gyroscope, and ambient light sensor during simulated runs.

##### Backend
Some backend challenges might include setting up a local database in a Docker container, which can involve compatibility issues. Additionally, updating the database schema and configuring API endpoints for data retrieval and updates can be complex. This can further on develop into a greater challenge when handling version control to ensure a smooth API interaction with the database.

##### Ball Spinner
One difficulty that may arise, is the ability to accurately send readings from the Ball Spinner to the rest of the system. It is vital as the feedback would impact both the motor controller and the back end software. Next, emulating the same amount of torque that a human would apply to the bowling ball requires significant power. For our motors to produce such torque in such limited time it may require an energy storage device to release such power all at once. We need to ensure that the Ball Spinner does not destroy itself, or the rest of the system. The Ball Spinner needs to have a level of robustness to endure the weight of the bowling ball as well as spinning the ball in different axes. Preserving the momentum of the ball while still accelerating would be another challenge to face. Accelerating the ball along multiple axes accurately and consistently at different speeds is another difficulty to face. The constructability of the Ball Spinner is a factor that we must consider as this affects the design we ultimately decide on. Our time constraints limits the overall scope of our designs. 

