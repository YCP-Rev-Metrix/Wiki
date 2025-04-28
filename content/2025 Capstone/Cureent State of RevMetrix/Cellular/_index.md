+++
title = "Mobile Application"
weight = 100
description = 'Cellular'
+++


### Mobile Application Overview

The purpose of the mobile application is to provide users with an intuitive way to record and view their bowling performance data.
The application allows users to store and manage a variety of data, including Events, Sessions, Games, Frames, Shots, Bowling Establishments, Bowling Balls, and Account information.

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

### Shot Page

The shot page is the base of the mobile application. It contains a frame view at the top to show the pins knocked down on each shot, as well as the game’s score. Below that, there are buttons and input fields used to track a full game of bowling.

The input fields on the left of the screen allow users to select a player, as well as a strike ball and spare ball used for each frame.
The buttons on the right are shortcuts for users to select if they get a Foul, Gutter, Spare, or Strike.
The slider below the pin buttons lets the user select which board the ball hit at the end of the lane.
The Next button is used to submit each shot and progress through a game.

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

The session page allows users to create new sessions and view old ones.

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

### Database
All data is stored locally on the device using SQLite, ensuring quick access and offline functionality
The application includes functionality to save and load individual frames and shots, enabling detailed tracking of each game.
The application is linked to the existing cloud database through a test SQL table, laying the groundwork for future features such as data backup and cross-device synchronization.

| ![Backend Arch](5.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](6.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](7.png?width=40vw&lightbox=false) | 
|:--:|
