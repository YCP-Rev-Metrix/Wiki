+++
title = "Dev Settings"
weight = 70
description = 'Dev Settings Page'
+++


## Dev Settings Page
| ![Dev Settings Page](devPage.png?width=20vw&lightbox=false) | 
|:--:|

The developer settings page, as shown in Figure 3.2.9.1 is the bluetooth testing page. 
It is not a part of the user shot workflow but instead is a tool for users to start and stop advertising BLE, view connection state and trigger test BLE transmissions with the connected phone. 
This page is very tightly integrated with the BLE Manager, when the user taps the toggle to begin advertising, the dev settings page calls bleManager.startAdvertising(), which performs three operations: requests runtime permissions, starts the Android foreground BLE service, and initializes the GATT server if it has not yet been created. 
The page also listens to reactive fields exposed by the BLE Manager like isAdvertsing, isConnected, and lastReceivedCommand, allowing the UI to update dynamically as different events occur. 
They are triggered by callback events sent from Android through the MethodChannel, including advertising success/failure and connection state changes. For testing data transfer, the page includes a control that sends a prebuilt JSON object to the phone. 
This invokes bleManager.sendJsonToPhone(), which serializes the object and calls sendNotification. 
