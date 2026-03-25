+++
title = "Session Controller"
weight = 50
description = 'Session Controller'
+++


## Session Controller

The Session Controller is the main controller of the watch application, which contains most of the helper functions needed to link UI elements to the data objects. 
The first helper function is activeFrameIndex that finds the first non-completed frame of the game, or in other words the active frame. 
The createNewSessionFromPacket function will take a parsed game list from Bluetooth and add it to the current session. 
The createNewSession function creates the base session object to construct a fully populated session object. 
The recordShot function is triggered by the submit button on the shot view which takes all of the data that was entered and constructs a shot object with that data. 
This function also assigns the new shot object to the current frame. 
The editShot function finds the shot that was edited and changes the data that exists in that object. 
Early implementation of the session controller also contains static test data for all levels of data. 
This is done on startup and initialized before anything else is completed.
