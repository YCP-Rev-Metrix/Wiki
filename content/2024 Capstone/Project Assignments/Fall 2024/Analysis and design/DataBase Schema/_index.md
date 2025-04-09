+++
title = "DataBase Schema"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

|Christian Lua-Lua, Ryan Curry|
|:-:|

### Database Schema

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

The database schema above consists of multiple interconnected tables designed for efficient data storage. At a glance, this schema enables the us to track and store user data, simulated shot information, and acquire real-time metrics from auxiliary and SmartDot sensors.
At the core of our database schema is the User table, this table allows us to store personal information like usernames, passwords, and contact details. Additionally, each user has an associated token that manages authentication by storing a token value and its expiration date. Furthermore, the schema allows the user to have one list for each type, whether from Balls, BallSpinners, SmartDots, or SimulatedShots. These list tables use foreign keys to reference the respective items, which store the details of each entry. Lastly, each list can hold zero or more items.

Another important table that is associated directly with the user would be the SimulatedShot table. This table differs from the others because each entry will be a bowling shot that has parameters and relationships with the BallSpinnerSensors and SmartDotSensors. The parameters stored in this table are the initial speed, angle, and position of the bowling ball. This schema also contains multiple sensor-related tables. Furthermore, the tables labeled BallSpinnerSensors and SmartDotSensors are specific to their respective devices. The BallSpinnerSensors table will store data acquired from the three auxiliary sensors depending on the type of sensor (roll, pitch, and yaw). Additionally, the SimulatedShots table can have one SmartDotSensors table which relates the simulated shot to all of the SmartDot sensor data. Each SmartDotSensors table references foreign keys for each SmartDot sensor which refer to the sensor table. The sensor table stores the sample frequency and the number of samples per queue for each sensor, this data coupled with the time data stored by the queue table and the order indicated by each sample within a queue will be used client side to redetermine the timestamp for each sample. Each sensor has a list of queues which is referred to by the one to many relationship between the Sensor table and the Sensor Sample Queue ID list. Each queue has an initial and elapsed time and has a one to many relationship with the Sensor Sample Data table, because each queue holds a set of samples. Each sample is what actually contains the values for the SmartDot data. There is also an order column, which indicates the samples order within the queue. This is also essential in reconstructing the time data for each sample, as the order determines the sample's completion time relative to the other samples. In the case that there is a column that is not applicable for a given sensor (for instance brightness value is not needed for a gyroscope) these values will be left null if not needed for a sample. Creating these relationships between the SmartDot sensors table and its children, provides a decluttered and organized way of viewing and retrieving data as opposed to storing all information into one table. 
