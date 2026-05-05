+++
title = "BLE Manager"
weight = 10
description = 'BLE Manager'
+++


## BLE Manager

The BLE Manager coordinates Bluetooth Low Energy (BLE) communication between the Flutter app and the paired phone. Built as a GetxController, it uses a MethodChannel ("ble_service_channel") to bridge Dart and Android native code. The BLE Manager initializes the GATT server by calling initGattServer(), which requests permissions, starts the Android foreground service, and sets up the GATT server with custom characteristics for writing and notifications. When a user records a shot, the BLE Manager serializes the Shot object, encodes it as bytes, and sends it to the phone using sendRawBLEPacket(). Each shot is transmitted individually as soon as it is recorded, rather than batching entire sessions. Incoming data from the phone, such as account packets, is received through the GATT server and routed to Dart via _handleNativeCalls(). The BLE Manager parses these packets with _tryParseAccountPacket(), updating session context and connection state for the rest of the app.