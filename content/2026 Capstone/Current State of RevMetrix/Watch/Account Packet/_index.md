+++
title = "Account Packet"
weight = 10
description = 'Account Packet'
+++


## Account Packet
| ![Account Packet](AccountPacket.png?width=20vw&lightbox=false) | 
|:--:|

The Account Packet is a binary-encoded message received from the phone, parsed by the BLE Manager and used by the Session Controller to set up the session. The static method AccountPacket.fromBinary() extracts fields shown in Figure 3.5.2.0 like sessionId, eventName, primaryHand, gameCount, and available balls, as well as an array of GameState objects for multi-game sessions. When received, the Session Controller uses this data to create the session and configure the UI. The Account Packet protocol ensures the watch is always in sync with the phone’s session metadata, supporting seamless resuming of a session on connection to the watch. The asterisks in the Figure above show fields that have variable byte definitions, meaning they can increase or decrease based on the amount of data connected to the session or account. 