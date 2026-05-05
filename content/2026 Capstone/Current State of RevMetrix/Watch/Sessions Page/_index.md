+++
title = "Sessions Page"
weight = 100
description = 'Sessions page'
+++


## Sessions page

| ![Watch Sessions Page](SessionsPage.png?width=40vw&lightbox=false) | 
|:--:|

The Sessions Page, as shown in Figure 3.2.14.1, is a stateful widget that serves as the entry point for session initialization, tightly integrated with BLE-driven workflows via GetX’s reactive Obx widgets. It displays dynamic user and event information extracted from the latest BLE account packet, and provides two primary actions: starting an event session using account packet data or an anonymous session. The event session logic decodes bitmask-encoded pin states and initializes the SessionController with full session context, including session ID, game/frame/shot numbers, ball inventory, and game state. The anonymous session logic initializes the session with a default session ID value, supporting both continuing an active session from the phone or starting a new one from the watch.