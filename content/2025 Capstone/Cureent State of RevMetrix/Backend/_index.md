+++
title = "Backend"
weight = 100
description = 'Backend 2025 spring '
+++

### Database

Overview: The Revmetrix project seeks to provide comprehensive tools for bowlers and researchers who can use the provided metrics to improve their game or study the physics of bowling. These tools provided to the end user take the form of the Ball Spinner Application and the Mobile Application, both of which require a database schema to serve the goals of the project. The Ball Spinner application schema is tailored for researchers aiming to refine the algorithms that generate bowling metrics, with a focus on simulated shot data collected through the BSA. In contrast, the Mobile Application schema emphasizes usability and game tracking, offering data more relevant to a bowler’s personal performance.


### Overall Architecture 

The overall architecture of the RevMetrix database schema stores bowler data (from the Mobile App) along with research data (from the Ball Spinner App). A comprehensive view of the integrated schema is pictured in Figure 1. The mobile schema is towards the left and the Ball Spinner App schema towards the right, with shared parent tables in the center to minimize redundancy across both schemas.

This integrated schema will be cloud-hosted and used by both the Ball Spinner and Mobile applications to back up their respective data.


| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

### Current BSA Schema

Figure 2 displays the schema used for the BSA. This implementation currently resides on the cloud hosted on a Digital Ocean server. This provides RevMetrix researchers centralized access to a wealth of simulated shot data, enabling further refinement of the signal processing algorithms that provide bowling metrics.

Relevant data includes simulated shots with initial parameters, the ball used, and associated SmartDot sensor data collected from the shot. 

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|



### Mobile Schema

Figure 3 represents the overall architecture of the mobile application and its cloud integration. Data is stored locally on the user’s device using SQLite and synchronized with an existing cloud database. Because two applications, the App and BSA, share access to the same database, the schema includes inherited tables containing shared information. Each application can then extend these base tables with additional, application-specific data as needed.


| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|