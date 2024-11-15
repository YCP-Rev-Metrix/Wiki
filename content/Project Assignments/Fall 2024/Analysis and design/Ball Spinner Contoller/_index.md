+++
title = "Ball Spinner Controller"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

|  Robert Fields|
|:-:|

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

The Ball Spinner Controller can be split into 3 separate (but crucial) classes that all come together to transmit and receive data from the Ball Spinner Application: the motor class, the sensor class, and the SmartDot interface. The motor and sensor classes consist of a connection function that takes the name of the port as a parameter and a disconnect function. The auxiliary sensor class (AuxSensor) also incorporates a read function that takes in the range of values to read from and the sample rate for the sensors. This will take the data polled from the sensors and store it in the class-byte array. The motor function (along with the connect/disconnect methods) incorporates a function to change the power of a specific motor depending on the specific motor instruction and a function to change the speed of the motor from the incoming motor instructions.
	
The smartDot interface will hold all of the functions that the future SmartDot module will incorporate. This includes the start functions of the 9DoF sensors and the light sensor that takes sample rate and the range as parameters coupled with stop functions for each. When prompted by the BallSpinnerController class, the 9DoF modules will pass the values taken at the specified sample frequency in the byte array. For filtering in the Bluetooth scanner, each class that implements the iSmartDot interface will store its UUID as a Static String. Besides a terminal-base SmartDot simulator, the only class so far that will implement the interface is a MetaMotionS module that has functions to turn on and off the on-sensor LED light.

The BallSpinnerController will have access to both the AuxSensor class, Motor class, and the iSmartDot module as well as several variables that will handle communications back and forth from the Application. On startup, the three threads will be started up to handle communications for each of the main classes discussed previously mentioned. The BallSpinnerController class will listen to the USB port for all messages from the application, and from there, the readCommsChannel function will parse the header and the number of bytes in the message to parse out the cyclic redundancy check appended to the end of every message to confirm that the message there were no errors in transmission. If so, a call to the sendReject function will be made to ask to the application to resend the message. This function will also handle the quick acknowledgments or errors that need to be sent from the controller. If the CRC passes, the readCommsChannel will pass the message to either the sensorBuffer, the motorBuffer, or the smartDot buffer. depending on which buffer the message was sent to, the respective thread will parse out the message and handle the message depending on the request. Once the protocol reaches the point that the BallSpinnerController needs to send the messages back to the Ball Spinner Application, the byte data for the message will be saved in the sensorTxQueue to await send on the comms channel.
