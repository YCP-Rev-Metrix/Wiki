+++
title = "Visualizer"
weight = 100
description = 'How to setup your environment to develop the Visualizer'
+++

### Description

The Visualizer will be used for generating test data for the system. It will will simulate the ball path as it travels down the lane and store the acceleration and light data that the SmartDOt would sample. It then writes that data into a CSV file and sends it to the SmartDot Simulator. The Visualizer also has a virtual camera that will record a video of the throw. The developers will hand this video off to the front end team to use in their Ciclops testing.

### Prerequisites

Git

### Development Environment

The Visualizer is currently being developed in Unity. Unity is an open-source game engine that uses c# scripts for the programming. This tutorial will show you how to get started developing the Visualizer. Let's get started!

1. Install [Rider](https://www.jetbrains.com/help/rider/Installation_guide.html#toolbox) if you haven't already
1. Download and install [Unity Hub](https://unity.com/download) on your machine
1. Download the current appropriate Unity version. Reference the [Technologies Used](https://docs.revmetrix.io/technologies-used/index.html) page
1. Open Unity Hub on your machine
1. Go to the "Installs" tab
1. Select "Install Editor"
1. Select the "Archive" tab
1. Click "download archive"
1. Select the appropriate Unity version and download the installer.  Reference the [Technologies Used](https://docs.revmetrix.io/technologies-used/index.html) page
1. Install the selected version

Now that you have Unity set up, let's open the project

1. Clone `git@github.com:YCP-Rev-Metrix/Simulation.git`
1. Open the project in Unity
1. Select the "Edit" tab from the toolbar in the top left corner of the window
1. Select "preferences"
1. Select "External Tools"
1. Set the "External Script Editor" field to "Rider"

You're all set!! Now you are ready to start developing the Visualizer. Good luck!