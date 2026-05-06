+++
title = "Home Page"
weight = 100
description = 'Home page'
+++


## Home page

| ![Watch Home Page](HomePage.png?width=40vw&lightbox=false) | 
|:--:|

The Home Page, as shown in Figure 3.2.13.1, acts as the application's entry point, orchestrating BLE connection management, session initialization, and navigation. It uses GetX's ever function to subscribe to BLE connection and account packet state, automatically navigating to the Sessions Page upon successful connection or packet reception. The page initializes the SessionController with session context from the account packet, supporting seamless handoff from BLE to session state. The UI includes branding, connection status, and an offline mode button, which initializes an anonymous session and navigates to the Frame Page for testing or disconnected workflows. 