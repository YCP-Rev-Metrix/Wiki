+++
title = "Design Approach"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

### Minimal Working System

##### Sensors
Light sensors and reflective tape can allow us to constantly measure how quickly the ball rotates about a single axis. This approach cannot work well if there is rotation about the other axis as there is a chance that the reflective tape will not be in front of the light sensor after each revolution.
Motor feedback from small motors mounted in each orthogonal direction. The friction the ball imparts will generate some electricity that we can interpret to measure how quickly the ball rotates in each direction.
| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

##### Hamster Ball Design
One of the ideas for a prototype design is to tape the SmartDot (or, in this case, MetaMotion) module on the inside of a hamster ball. The positioning of the sensor inside the hamster ball will be roughly the same distance away from the center of the bowling ball. This will act as a smaller and easier-to-move version of the bowling ball, allowing the software team to acclimate with the SmartDot Sensors, while the mechanical team will use this to test ways to accurately and consistently manipulate the ball in each rotation.
| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|


##### Rip-Cord Design
| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

The Rip-Cord design involves tightening a cord around the ball and quickly pulling it to accelerate it. The cord would be connected to the finger holes in the ball to replicate an actual throw. This would act as a starting point for induced force to spin the ball. The sensor could be tested and compared with outside data, while a more consistent approach could be started on the mechanical end.
### Prototype Designs

##### Dice
| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

The Dice idea for the Ball Spinner prototype is to design a cube surrounding the bowling ball. The ball will be confined by three motors that will use the friction from the ball to spin it in the three orthogonal directions. This design would allow for decent control of the ball’s primary spin axis since the induced spin occurs from friction. The primary motor will require more power than the other two since it will require more speed.

##### Tri-Axis Spinner
| ![Backend Arch](5.png?width=40vw&lightbox=false) | 
|:--:|
The Tri-axis idea for the Ball Spinner prototype is to use three motor-driven Omni-wheels to simultaneously spin a ball in all three orthogonal directions. The rollers on the Omni-wheels give freedom of movement outside their primary direction, allowing simultaneous rotations. The ball’s primary spin axis has less control due to how tight the Tri-Axis Spinner’s hold on the ball is. The spinner can either have each motor have the same strength or keep one wheel on the primary axis and have it much stronger than the rest. Some potential issues are the device requiring more power or friction to give the ball enough acceleration.

##### Complex Gimbal 
| ![Backend Arch](6.png?width=40vw&lightbox=false) | 
|:--:|

The Complex Gimbal idea involves a gimbal that rotates with the ball along the primary axis and uses servo motors to adjust the secondary and tertiary axes. A stronger motor would rotate the ball and gimbal. The gimbal will have to be built to handle the load of the ball and the rotational force required to roll the ball.

As the project develops, these designs involve building up to four DoFs (Degrees of Freedom). They will start with the primary rotation axis before moving to the secondary and tertiary axes. Horizontal motion will be added if the ball can rotate fast enough in all orthogonal directions.

### Software
Windows & Mac application, covered previously

We will start small by instructing the hardware to move with respect to only one axis. As the software, the hardware, and the ball spinning system improve, we will implement the ability to instruct the hardware to move with respect to three axes and include more complex physics calculations within the physical instructions to better simulate an actual ball roll.
