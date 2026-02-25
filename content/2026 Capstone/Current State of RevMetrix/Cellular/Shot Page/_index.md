+++
title = "Shot Page"
weight = 50
description = 'Shot input'
+++


## Shot Page
The shot page is the core of the mobile application. 
This page allows users to input and save shot data, which is the main use case of the mobile application. 
The page features a session date at the top of the page. Below that is a scrollable collection of frames. 
Each frame contains a frame number, boxes for the shot 1 and 2 pin count, a visual representation of the pinstates, and the game score. 
On the left side of the screen below the frame collection there is text displaying the game number, frame number, and shot number. 
The input fields allow the user to select which player made the shot, as well as which ball was used for each shot. 
The shot one ball is the "Strike Ball" and the shot 2 ball is "Spare Ball". 
The center of the screen features 10 buttons representing the 10 pins as oriented the same way they would be seen in a bowling alley. 
These buttons are used to select which pins were left standing on each shot. To the right of the pin buttons are 4 shortcut buttons for foul, gutter, spare, and strike. 
Below the pin buttons is a slider used to select which board the ball was on when it reached the end of the lane. 
A number is shown below the slider so that the user can confirm they have selected the right board. 
Finally, at the bottom of the interface there are 2 buttons. The "Comment" button displays a popup that allows users to input a comment for their current shot. 
If editing a shot, the comment can be edited and resaved. The "Next" button is used to submit the player's shot information and progress through the game. 

The shot page does have some functionality restrictions based on bowling rules.

Shot 1 Restrictions
- Spare button becomes unresponsive

Shot 2 Restrictions
- Strike button becomes unresponsive
- Pin buttons that were down on shot 1 become unresponsive on shot 2


| ![Shot Page](ShotPage.jpg?width=20vw&lightbox=false) | 
|:--:|