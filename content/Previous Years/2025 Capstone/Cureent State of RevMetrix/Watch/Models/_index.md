+++
title = "Watch Models"
weight = 60
description = 'Watch Models'
+++


## BLE Packet Model
The BLE Packet is responsible for converting full session data into BLE compatible byte streams. 
Its main purpose is to take a serialized GameSession object, apply the encoding rules required by the GATT server, and produce a packet format that the phone can reassemble. 
The BLEPacket class stores the packet ID, raw session JSON and the final encoded data used in transmission. 
During a session upload the BLE Manager constructs a BLEPacket by calling BLEPacket.buildFromSession(), which generates the JSON string that represents the entire session and then prepares the structure that will be transmitted over the notify characteristic. 
The encode() method produces the final byte sequence that respects the BLE limitations and includes any metadata needed for ordering or validation before the packet is handed off. 
The BLEPacket.decode() rebuilds a packet from a received byte, which is what enables parsing on either device. 
Once the packet is created, the BLE Manager calls sendNotification and the encoded bytes are passed to the notify characteristic in the GATT server. 

## Session Model

| ![Watch Session](sessionModel.png?width=40vw&lightbox=false) | 
|:--:|

The Session Model is responsible for constructing the main session object that organizes the entire active session. 
Its definition can be seen in Figure 3.2.5.1. 
The sessionId field will be received on the initial Bluetooth handshake and will be important for when this data is being processed on the phone to be inserted into the cloud database. 
The startTime and endTime fields were defined on the phone’s session objects and for  continuity the watch app records this data. 
The isComplete field is a flag to let the system know that there are no more games left to complete. 
For now this does not do anything, but will trigger an event to add games or change a session. 
The numOfGames field defines how many games are in that session and is responsible for dynamically allocating the number of games the user can select from. 
The list of balls will contain the balls that the user has registered to be selected from at the shot level. 
The list of game objects contains every game's data. One of these objects represents the second highest object level under the session object. 

## Game Model

| ![Watch Game](gameModel.png?width=40vw&lightbox=false) | 
|:--:|

The Game Model is responsible for constructing the game object which is the second highest level which is owned by the session class and contains frame objects. 
Its definition can be seen in Figure 3.2.6.1. 
The gameNumber field is for organizational purposes when converting data in and out of JSON format. 
The score field is for the calculation of the games score and will be updated per shot. 
The startingLane defines what lane the user will start on. 
The list of lanes contains all possible lanes the user can be playing on. 
Most of the time this will be two lanes and the user will alternate between. 
The list of frames will contain up to 12 frame objects. 
The game model also contains helper functions such as newGame which generates an empty game object and toJSON/fromJSON which converts the objects to JSON and from JSON files.

## Frame Model

| ![Watch Frame](frameModel.png?width=40vw&lightbox=false) | 
|:--:|

The Frame Model is responsible for constructing a frame object which is the second lowest level which is owned by the game class and contains shot objects. 
Its definition can be seen in Figure 3.2.7.1. The frameNumber field is for organizational purposes when converting data in and out of JSON format. 
The lane field is the identifier that determines what lane that frame will be completed on. 
The list of shots will contain up to 2 shots completed for frames 1-9 and up to 1 shot from frames 10-12. 
The actual 10th frame can have up to three shots, so each shot gets its own frame to avoid complex edge cases. 
The frame model also contains a helper function that checks to see if the frame is complete called isComplete. 
This checks how many shots exist within the frame as well as checks for strikes to properly label the frame as complete. 
Another helper function is totalPinsDown which simply returns how many pins were knocked down within that frame. 
There are also functions to convert a frame object to a JSON and a JSON to an object.
