+++
title = "SmartDot Simulator"
weight = 100
description = 'How to setup your environment to develop the SmartDot Simulator'
+++

### Description

The SmartDot Simulator will be used for sending test data from Visualizer to mobile app. The Visualizer will output csv files containing acceleration and light data. The SmartDot Simulator will imitate the SmartDot module in functionality with one difference. Instead of sampling real acceleration and light data, it will read the appropriate data from the csv file it got from the visualizer. The SmartDot Simulator will also create a binary file containing the data and will send it over bluetooth to the mobile app.

### Prerequisites
Microsoft Office 365 - This is needed for your program to work with excel files

Git

### Development Enviroment

The SmartDot Simulator is currently being developed in Rider. This tutorial will show you to set up Rider and begin developing the Simulator. JetBrains Rider is a cross-platform .NET IDE based on the IntelliJ platform and ReSharper. Let's get started!

First, let's install Rider.
1. Install [Visual Studio](https://visualstudio.microsoft.com/) if you do not already have it
1. Make sure to include ".NET desktop development" in your installation.
1. Install [Rider](https://www.jetbrains.com/help/rider/Installation_guide.html#toolbox) if you don't already have it

Next, let's configure it.
1. Clone the SM-Repo repository `git@github.com:YCP-Rev-Metrix/SM-Repo.git`
1. Open the repository in Rider
1. Open the NuGet package manager (Alt + Shift + 7)
1. Add the following package `Microsoft.Office.Interop.Excel`

Now, you are ready to start developing the SmartDot Simulator!! Have Fun!