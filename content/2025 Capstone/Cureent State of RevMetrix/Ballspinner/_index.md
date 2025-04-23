+++
title = "Ballspinner Physical Design"
weight = 100
description = 'Ballspinner 2025 spring'
+++

### Physical System

The role of the Ball Spinner Team was to create a testing apparatus capable of spinning a bowling ball along multiple axes of rotation in a controlled manner. This controlled spinning is designed to mimic the forces experienced during a shot down the lane, which is used to benchmark and calibrate the SmartDot sensor readings within the Ball’s insert.

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|


### Proposed System


1st Axis
Relies on a vice grip system with lock nuts to induce a clamping force to prevent slippage.
Driven by gear and chain
2nd Axis
Rotates the previous sub-system utilizing a direct drive motor paired with a lazy susan to pivot up to 90 degrees in either lateral direction 
3rd Axis
Directly driven to tilt the previous sub-systems up to 45 degrees in either direction.

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|


### Bowling Ball Insert

The insert will allow the SmartDot chip to remain in the bowling ball securely as it spins. It must hold the chip at the right depth of the bowling ball while having clear view for the light sensor on the chip.

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

### Target numbers


The goal for the primary axis of rotation is 750 RPM while the secondary axis needs 10 RPM and the third axis only need 2.5 RPM. For a 16 lbs bowling the vice would need a clamping force of only 35 lbs. 





