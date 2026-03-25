+++
title = "Local Cache"
weight = 40
description = 'Local Cache'
+++


## Local Cache

The Local Cache is a persistence layer responsible for storing session, frame and shot data on the watch until it can be sent to the mobile application. 
It is smaller than a traditional database, but still maintains the structure of a session. 
It ensures that all data entered by the user remains intact across app restarts or temporary loss of Bluetooth connection. 
The Local Cache serializes each updated session in JSON and writes it to local storage after the user records a shot or edits data. 
Because the watch serves as a data collection client, the cached JSON will act as a temporary buffer rather than a long term store. 
For incomplete transfers or disconnections during the BLE communication, it also includes an UnsentData queue. 
When the BLE Manager prepares a packet for transmission, they are duplicated into the queue and marked as “pending”. 
Only after the mobile app acknowledges reception of the packet does the Local Cache remove its entry. 
During startup, the application loads the cached sessions so the watch can resume where the user left off. 

