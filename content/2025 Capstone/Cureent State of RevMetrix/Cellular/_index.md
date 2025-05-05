+++
title = "Mobile Application"
weight = 100
description = 'Cellular'
+++


### Mobile Application Overview

The purpose of the mobile application is to provide users with an intuitive way to record and view their bowling performance data.
The application allows users to store and manage a variety of data, including Events, Sessions, Games, Frames, Shots, Bowling Establishments, Bowling Balls, and Account information.

| ![Main Page Default](mobile_mainpage_default.jpg?width=20vw&lightbox=false) | 
|:--:|

| ![Main Page Logged In](mobile_mainpage_loggedin.jpg?width=20vw&lightbox=false) | 
|:--:|

### Shot Page

The shot page is the base of the mobile application. It contains a frame view at the top to show the pins knocked down on each shot, as well as the game’s score. Below that, there are buttons and input fields used to track a full game of bowling.

The input fields on the left of the screen allow users to select a player, as well as a strike ball and spare ball used for each frame.
The buttons on the right are shortcuts for users to select if they get a Foul, Gutter, Spare, or Strike.
The slider below the pin buttons lets the user select which board the ball hit at the end of the lane.
The Next button is used to submit each shot and progress through a game.

| ![Shot Page](mobile_shotpage.jpg?width=20vw&lightbox=false) | 
|:--:|

The session page allows users to create new sessions and view old ones.

| ![Sessions](mobile_sessions.jpg?width=20vw&lightbox=false) | 
|:--:|

### Database
All data is stored locally on the device using SQLite, ensuring quick access and offline functionality
The application includes functionality to save and load individual frames and shots, enabling detailed tracking of each game.
The application is linked to the existing cloud database through a test SQL table, laying the groundwork for future features such as data backup and cross-device synchronization.

| ![Arsenal](mobile_arsenal.jpg?width=20vw&lightbox=false) | 
|:--:|

| ![Events](mobile_events.jpg?width=20vw&lightbox=false) | 
|:--:|

| ![Establishments](mobile_establishments.jpg?width=20vw&lightbox=false) | 
|:--:|

| ![Mobile Test API](mobile_testApi.jpg?width=20vw&lightbox=false) | 
|:--:|
