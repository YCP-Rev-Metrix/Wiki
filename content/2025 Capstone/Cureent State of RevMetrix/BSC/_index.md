+++
title = "Ball Spinner Controller"
weight = 100
description = 'Ball Spinner Controller 2025 spring'
+++


### Overview

Ball Spinner Controller (BSC) acts as intermediary between Ball Spinner Application (BSA) and Ball Spinner
Data from Sensors is sent to the BSA and graphed against simulated data of the expected sensor data
Human Machine Interface (HMI) is 7” touch screen interaction assistant, standalone driver, and debugger for the BSC.
The HMI can be run in local mode and control all hardware within the BSC
The HMI can also graph and display the sensor data

| ![Backend Arch](5.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](6.png?width=40vw&lightbox=false) | 
|:--:|


### BSC Communication

The BSC at its core is a communication hub, with 5 separate types of devices that are interacted with, all fed through the Raspberry Pi 4
The Ball Spinner Application – connected over WIFI using TCP for wireless control over Ball Spinner Data
Current Sensor IC’s – connected to an ADC transmitting using I2C to read current through each motor 
Motor Encoders – connected to 5 digital inputs on Raspberry Pi to read data, enable movement, and change direction
MetaMotionS Module – connected over Bluetooth BLE as the 9 Degrees of Freedom module inside of the bowling ball, sending accelerometer, gyroscope, magnetometer, and light sensor data 
All Data communication is displayed through the HMI to allow for user interactions

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

### BSC Implementation

The BSC stores the power supply for the system along with the PCB for the system 

The PCB contains terminal blocks to connect all wires from the motors and encoders to the Raspberry Pi GPIO pins to allow for 2 Degrees of Freedom of the Ball Spinner.

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|


All components are packaged inside of a 3D-printed housing with connections to external components feeding out of the back of the Controller

The user interacts with 
the Pi using the 7” 
touch screen display to 
start the software in either 
wireless mode or local
testing mode.

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

