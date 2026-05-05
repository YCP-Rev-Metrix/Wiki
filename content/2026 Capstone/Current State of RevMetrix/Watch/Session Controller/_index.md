+++
title = "Session Controller"
weight = 50
description = 'Session Controller'
+++


## Session Controller

The Session Controller is the main state manager for the watch app, implemented as a ChangeNotifier singleton. It manages the session lifecycle, shot recording, and data synchronization with the phone. Key methods include createNewSessionFromPacket(), which initializes a new session using metadata from the phone, and recordShot(), which adds a new shot to the current frame and triggers BLE transmission. The controller tracks the current session, active game and frame, and manages per-game/frame progress. Editing a shot is handled by editShot(), which updates the relevant shot in place. Default values for lane, ball, and stance are stored as properties, and test data generation is available for development. Every shot recorded in the UI is immediately serialized and sent to the phone, ensuring real-time data consistency.
