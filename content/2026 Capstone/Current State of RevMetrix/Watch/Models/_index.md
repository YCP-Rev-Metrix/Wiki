+++
title = "Watch Models"
weight = 60
description = 'Watch Models'
+++



## Session Model

| ![Watch Session](sessionModel.png?width=40vw&lightbox=false) | 
|:--:|

The Session Model encapsulates all data for an active session, including the session ID, start and end times, completion status, number of games, available balls, and a list of Game objects as seen in the definition in Figure 3.5.2.1. It provides methods for serialization (toJson, fromJson), enabling sessions to be saved locally. The model exposes helpers to find the active game, mark the session as complete, and update session metadata. It supports dynamic session structures, allowing for variable numbers of games and balls. The Session Model is designed for extensibility, supporting future features like session statistics, user profiles, and cloud synchronization. It also integrates with the local cache to provide offline persistence and recovery.

## Game Model

| ![Watch Game](gameModel.png?width=40vw&lightbox=false) | 
|:--:|

The Game Model is responsible for constructing the game object which is the second highest level which is owned by the session class and contains frame objects. Its definition can be seen in Figure 3.2.6.1. The gameNumber field is for organizational purposes when converting data in and out of binary format from the Account Packet. The score field is for the calculation of the games score and will be updated per shot. The startingLane defines what lane the user will start on. The list of lanes contains all possible lanes the user can be playing on. Most of the time this will be two lanes and the user will alternate between. The list of frames will contain up to 12 frame objects. The game model also contains helper functions such as newGame which generates an empty game object. The Game Model integrates seamlessly with the Session Model and Frame Model, providing a consistent data structure for the entire session.

## Frame Model

| ![Watch Frame](frameModel.png?width=40vw&lightbox=false) | 
|:--:|

The Frame Model is responsible for constructing a frame object which is the second lowest level which is owned by the game class and contains shot objects. Its definition can be seen in Figure 3.2.7.1. The frameNumber field is for organizational purposes when converting data in and out of binary format from the Account Packet. The lane field is the identifier that determines what lane that frame will be completed on. It enforces bowling rules by supporting up to two shots for frames 1–9, while the 10th frame can dynamically allow an 11th and even a 12th frame depending on the outcomes of each shot, specifically, if a strike or spare is achieved, bonus frames are appended to accommodate the extra shots awarded by standard bowling rules. The models isComplete property determines frame completion by evaluating the number of shots and the pinfall logic, handling all edge cases for strikes, spares, and bonus attempts. The totalPinsDown getter aggregates pinfall across all shots in the frame. For persistence and BLE communication, the Frame Model implements toJson() and fromJson() methods, ensuring the frame's state can be serialized and reconstructed. Integrated with the Game Model, which manages the sequence of frames, the Frame Model ensures that all frame-specific logic has accurate session management.

## Shot Model

| ![Watch Shot](shotModel.png?width=40vw&lightbox=false) | 
|:--:|

The Shot Model is implemented as a class that encapsulates all the data and logic for a single bowling shot. Each Shot instance records the shot number, ball ID, number of pins knocked down, a bitmask encoding the pin state and foul status, impact (board), stance, target, break point, speed, frame number, lane, and a read-only flag. The model provides a constructor that allows for flexible initialization, including default values and support for both impact and board terminology. It features a static foulBit constant for bitmask operations and a mapping from impact descriptions to board numbers. The model includes computed properties such as pinsStanding, isFoul, and pinsState, which decode the bitmask to provide high-level information about the shot outcome. Utility methods like buildPins and buildLeaveType construct the bitmask from a boolean pin array and foul flag. The Shot Model supports serialization and deserialization via toJson and fromJson, ensuring compatibility with local storage. For BLE, it implements encodeToBinary, which packs all shot data into a 23-byte binary format for transmission, and decodeFromBinary, which reconstructs a Shot and its context from a received packet. The encodeToBinary method in the Shot model serializes a shot into a 23-byte array for BLE transmission. It packs the shot's fields such as session ID, game/frame/shot/ball numbers, pins bitmask, stance, target, break point, impact, speed, and lane into specific byte offsets using bitwise operations. The decodeFromBinary method reverses this process, it parses a 23-byte array, extracting each field by reading and unpacking the corresponding bytes. It reconstructs the shot's properties including session context by applying bitwise masks, shifts, and scaling, returning a Shot object and its associated metadata. The packet makeup can be seen above in Figure 3.2.8.1. 