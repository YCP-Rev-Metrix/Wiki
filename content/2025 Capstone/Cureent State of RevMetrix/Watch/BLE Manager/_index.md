+++
title = "BLE Manager"
weight = 10
description = 'BLE Manager'
+++


## BLE Manager
The BLE Manager is a hybrid system combining the Flutter side for higher level logic with Android components responsible for advertising, GATT server behavior, and background execution. 
The BLE Manager starts communication, prepares packet data, and triggers native calls through a MethodChannel. 
On the Kotlin side, the application uses a dedicated foreground service, BleForegroundService. 
This ensures that Bluetooth communication remains active even when the UI is put in the background or the watch display turns off. 
This is crucial for a watch application because the watch display will be turned off at many points during use, so the service runs with an ongoing system notification to maintain a persistent BLE environment. 
The actual GATT functionality is implemented inside BleGattManager, which initializes a full GATT server when triggered by the BLE Manager. 
This includes creating the custom service with two characteristics, a write and notify for receiving commands and sending packets. 
The GATT manager listens for a change in connection state and onCharacteristicWriteRequest events and routes them back to Flutter through the MethodChannel, which is what allows the Dart side logic to respond to the phone commands and acknowledgements. 
The MainActivity sets up the communication bridge between Flutter and the Android bluetooth stack by defining a MethodChannel named “ble_service_channel”. 
This allows the BLE Manager to invoke system level BLE behavior without needing direct access to Android APIs. 
When a session is ready to be transmitted, the BLE Manager serializes the session JSON, chunks it into packets, and calls sendNotification through the MethodChannel for each packet.  