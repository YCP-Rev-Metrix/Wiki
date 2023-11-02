+++
title = "Managing a Droplet"
weight = 100
description = 'How to manage a DigitalOcean droplet'
+++

## Prerequisites
Before continuing with any of the following steps, make sure that you have created an account on [DigitalOcean](https://DigitalOcean.com) and have already created a Droplet.  If you have not yet created a Droplet, see the "[Creating a Droplet](../creating-a-droplet/)" page to find out how to do so.

## Navigating to the Droplet
To begin learning how to manage a DigitalOcean Droplet, select the "Projects" dropdown in the top left of the main dashboard page and click on the project in which the Droplet you want to manage is located:

|![projects](projects.png?lightbox=false&text-align=left)|
|:--:|

You will then be taken to the project's dashboard, where you can see resources and activity and manage the project's settings.  Click on the resources tab and select the Droplet from the list below:

|![dashboard](dashboard.png?lightbox=false&text-align=left)|
|:--:|

*Note: The full name of the project, Droplet, and the full IP address of the Droplet shown are blurred for security purposes.

## Droplet Dashboard
After navigating to the Droplet, you will be greated by the Droplet's dashboard, as seen below:

|![dropdash](dropdash.png?lightbox=false&text-align=left)|
|:--:|

From here, you can view and manage a plethora of different things regarding the Droplet, including:

|Tabs|Details|
|:--:|:--|
|Graphs|Graphical data that shows bandwidth, CPU usage, and disk I/O operations|
|Access|Access to the Droplet console, Recovery console, and reset the root password|
|Power|Turn off the Droplet or Power Cycle the Droplet|
|Volumes|Add or manage disk volumes on the Droplet|
|Resize|Upgrade the Droplet Type and CPU Options of the Droplet|
|Networking|View details of the Public and Private Networks and manage Inbound and Outbound Firewalls|
|Backups|Create backups of the Droplet (priced per month by size of Droplet)|
|Snapshots|Take a snapshot and manage previous snapshots taken of the Droplet|
|Kernel|View the status of the Kernel or enable management of it in the control panel|
|History|View all previous changes made to the current Droplet|
|Destroy|Destroy or Rebuild the current Droplet (only used to get rid of the Droplet completely)|
|Tags|Manage tags assigned to the Droplet (tags are used for grouping Droplets and are not required)|
|Recovery|Select whether to Boot from ISO or Boot from Harddrive (used if corruption in Droplet occurs)|

Seeing as only a handful of these tabs are necessary to use, we'll only cover the basics throughout the rest of the steps.  If more information is desired on the other tabs, finish the rest of the steps and play around inside of the Droplet's dashboard to gain a better understanding of just what you can do to/with the Droplet from within each tab.

### Access
The access tab is the most important out of the list, as it allows the user to log into the Droplet console and Recovery console, along with giving them the ability to change the password of the "root" user.  Below you will find information regarding each of the access tab's functions.

##### Droplet Console
The Droplet console is what the user will use to access their Droplet, make changes, and perform any modifications/operations inside of the Droplet.  Pictured below is the form for signing into the console:

![login](dropcons.png?lightbox=false&text-align=left)

Here, the default login user is "root", and the password for the user will be entered once the console popup window shows after clicking the "Launch Droplet Console" button.  The password to enter is the same one that the user set for "root" at the time of creation of the Droplet.

After logging into the console as root, the user will have full permissions to add files, edit files, run programs, setup a file transferring protocol, etc.  We won't go into the specifics since what a user does inside of their console is out of the bounds of simple Droplet management.

##### Recovery Console
Next is the Recovery console.  In the event that one loses access to their Droplet or has lost data that they are unable to recover in the regular Droplet console, they can open a Recovery console session to attempt to recover access or potentially lost data.  To access the Recovery console, simply click the "Launch Recovery Console" button on the access tab page and enter the password for the "root" user in the popup window.  The button for the Recovery console looks something like below:

![recov](recov.png?lightbox=false&text-align=left)

After logging into the Recovery console, the user can select from 6 options available.  These options are explained in detail when the user logs in, so there is no need to elaborate on them here.

*Note: The Recovery console is only to be used if familiar with Ubuntu and navigating through an OS using a terminal.

##### Reset Root Password
The "Reset Root Password" button can be used to reset the password in the event that the user has forgotten their password or has lost access to their Droplet.  To do so, simply hit the button shown below and DigitalOcean will prompt accordingly.

![reset](reset.png?lightbox=false&text-align=left)

### Power
The power tab can be used to power off the Droplet completely or to Power Cycle the Droplet. Below more information can be found regarding both functions:

##### Power Off
The power off function can be used to shutdown the Droplet in the event that maintenence needs to be done on it or the user wants to enable IPv6 addressing for the Droplet.  More details on the power off function can be seen in the following image:

![power](power.png?lightbox=false&text-align=left)

##### Power Cycle
The power cycle function can be used to do a full restart of the Droplet, powering it off then turning it back on.  More details on this can be found in the image below:

![power cycle](powercyc.png?lightbox=false&text-align=left)

### Networking


### Snapshots


### Destroy


### Recovery

