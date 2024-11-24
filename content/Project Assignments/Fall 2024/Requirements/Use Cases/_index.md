+++
title = "General Project Requirements"
weight = 100
description = 'Design and Analysis Information and Links to the Document and Slideshow'
+++

### User makes an account for the application
Precondition

    User has opened the Application
    User has opened the login popup

MSS - Main Success Scenario:

    User populates the username, password, and re-enter password fields
    User selects the final register button
    Application checks if all required fields are filled and meets other requirements
    Login popup will display a message that the user has successfully registered
Extensions:

      3a. Username already exists in the application 

        Application displays error message that states “Username already exists”
        User can modify username (return to MSS #1)
     3b. Password is not strong enough

        Application displays error message stating “Password must contain 1 capital, 1 lowercase, and 1 special character"
        User can modify password (return to MSS #1)”
     3c. Username is not long enough
     
        Application displays error message stating “Username must be 8 characters long”
        User can modify password (return to MSS #1)”
     3d. Password is not long enough

        Application displays error message stating “Password must be 8 characters long”
        User can modify password (return to MSS #1)”

### User logs in to application
Precondition:

    User has opened the Application
    User has opened the login popup
    User is not already logged in
MSS - Main Success Scenario:

    User enters login details
    User clicks “Login” Button
    The application checks the provided username and password against the database.
    Application authenticates the user and closes the login popup
    The logout button in the dropdown menu is replaced with logout
Extensions:

      5a. Incorrect login information

        Application displays an error message stating that the username or password is incorrect
        User can reinput log in details (return to MSS #3)
      5b. Forgot Password:

        User button labeled “Forgot Password” 
        Application prompts the user to enter their email and additional fields
        User resets the password and returns to the login screen (return to MSS #3)



### User Views Previous Throws From Database
Precondition:

    The user is logged in
    User has navigated to the “Load Throws” page.
MSS - Main Success Scenario:

    A connection is made with the database to retrieve a list of all the user’s stored throws
    Application displays a table of all of their previous spins, showing the date, time, and name of each throw for each session data.
    User selects a simulated session from the list.
    A request is made to the local server to retrieve the data stored for the selected session.
    User selects Load Data button
    User is shown a reconstruction from the simulation using the data stored in the database along with the actual and expected output from that session.
Extensions:

      1a. Error occurs with database
        A message is displayed stating “An error has occurred”
        The user is redirected to the “Main Output” page
      5a User selects “Load Parameters”
        User is redirected to “Throw Page” with parameters from loaded session already input

### User Views Previous Throws From Local File
Precondition:

    User has navigated to the “Main Output” page. 
MSS - Main Success Scenario:

    User selects “Load From File” Button
    System opens File Directory that filters for only files with “.rev” extension
    User Selects file
    Application parses file into respective Graph Data
    Graph Data is Displayed in Graph Locations of Main Output Page
Extensions

    3a User Selects file without “.rev” extension

        Error Popup Appears saying “Unable to Read File”
        User Selects “Close”
        Popup Closes and sends user to “Main Output Page” 

### User Uploads a Throw From Local File to Database
Precondition:

    User is logged in
    User has navigated to the “Cloud Management” page. 
    A connection has been successfully established with the database
MSS - Main Success Scenario:

    User selects “Upload” Button
    System opens File Directory that filters for only files with “.rev” extension 
    User Selects file
    Application pushes file to database
    Messages conveys that upload was successful
Extensions:

    3a. The user closes the File Directory
        The application returns to the “Cloud Management”


### User Deletes Previous Simulated Throws
Precondition:

    The user is logged in
    User has navigated to the “Previous Throws” page.
    User has successfully connected to the databases
    User has previous session data stored 
MSS - Main Success Scenario:

    User selects the trash can next to the previous session data that the user wants to delete
    A popup is displayed asking the user to confirm that they want to delete specified data
    User selects “Delete Data” button in popup window
    Application determines which database the deleted session data is stored in and requests for data to be deleted
    User is display a table of all of their previous sessions still stored in the Databases
Extensions:

    3a User Selects “Cancel” button in popup Window
        Popup window is closed 
        User can select other previous session data they would like to delete (return to MSS #1)
    4a Error Deleting Data
        Popup window appears display that an error had occurred when deleting from database and to try again later
        User selects “OK” on Popup
        Popup window is closed 
        User is display a table of all of their previous sessions stored inDatabases (return to MSS #1)

### User Connects to the BallSpinner
Precondition: 
User has navigated to the “Input” page.
MSS - Main Success Scenario:
User selects the “Connect to Ball Spinner” button
Popup is displayed with a drop-down menu of all active USB ports
User selects the USB port that the Ball Spinner is connected to
User clicks “Connect” button
System establishes a connection to the BallSpinner
Popup is closed with “Connect to Ball Spinner” button changed to “Ball Spinner Connected” label
Extensions:
      5a. Connection Failure 
Application displays an error message specifying that the connection was unsuccessful
User can re-select USB port and retry connection (return to MSS #2)

### User Connects To The Ball Spinner
MSS - Main Success Scenario:
User Selects the “Connect To Communications Device” button
Popup is displayed with a drop-down menu of all active USB ports
User Selects the USB port with a communication device
Application attempts to establish communication with the communication device
Communication device confirms connection to the Application
Popup displays the device has been connected
User closes the menu
Extensions
      3a. No communication devices available to connect 
Message notes no available devices
      4/5a. Communication between the application and device are unsuccessful
Message notes connection failure (return to MSS #3)

### User Inputs Parameters to Control Ball Movement

Precondition: 
BallSpinner is connected to the device
SmartDot module is connected to the device
User has navigated to the Inputs page

MSS - Main Success Scenario:
Application prompts user to enter different parameters to control the BallSpinner
User inputs values for the parameters
User clicks on the “Run” button
Application validates the values inputted
Application sends the input parameters to the controller to calculate the ball’s movement
Controller interfaces with the hardware’s motors to correctly move the ball based on the calculations
The ball moves based on the input parameters
The SmartDot sensors send real-time data to Simulation, which interprets the data from each sensor to create an actual 3D projection for the ball and show a data plot for each sensor. 
Will see the Displays trajectory and speed of the ball. When putting in the data you will be able to control the location and curvature of the ball. 
The application updates the 3D Viewport to reflect the ball's new position and rotation

Extensions:
      1a: Users has selected a cloud initial value load
Application parses file into respective input fields (continue to MSS #3)
      2a: Users selects local initial value load
System opens File Directory that filters for only files with “.rev” extension 
User Selects file
Application parses file into respective input fields (continue to MSS #3)
      4a: Input parameters are invalid
The application alerts the user that the input parameters are invalid
User can reenter the input parameters (return to MSS #2)
       6a: Connection error with the ball spinner:
The application alerts the user that the connection was lost and includes different ways to help with the connection
Was the BallSpinner connected?
Is the ball spinner on?

User can reenter values once (return to MSS #1)


### User Views Live 3D simulation and Graphical Analytics of Ball’s Expected and Actual Movement

Precondition:
User has successfully input all necessary parameters and passed them to the ball spinner.
User has established a successful connection with the Ball Spinner and Raspberry Pi.
MSS - Main Success Scenario
The Ball Spinner controller sends sensor data to the simulation component running on the application before it begins to spin the ball. 
The simulation uses this data to show the expected 3D projection of the ball and interpret the orientation, location, and speed of the ball as it goes down lane.
The Ball Spinner controller sends the SmartDot’s real time data to the Simulation, which interprets the data from each sensor to create an actual 3D projection for the ball and show a data plot for each sensor. 
Simulation and graphs are displayed to user in real time
Extensions:
     1a. An error occurs while connected to Ball Spinner
An Error Popup will relaying to User that an error had occur

### User Saves the Result of the Ball Spinner’s Movement
Precondition
The user has already run a simulation
User is on the output page
MSS - Main Success Scenario
User Clicks the “Save” button on the results page
System opens File Directory to save a file with a “.rev” extension
The user names and saves the file
Extensions:
      3a. The User closes the File Directory
The application returns to the output page

### User Terminates the Simulation

Precondition:
The user has successfully begun a simulated run with the ball spinner, and the ball spinner is actively in motion and data is being sent back to the device.
User is currently viewing the live simulation page.
MSS - Main Success Scenario:
User selects the “End Simulation” button at the bottom of the simulation page.
The application sends a signal to the ball spinner controller and the SmartDot device to let them know the simulation has been canceled. 
The ball spinner controller ceases its communication with the motors.
The application deletes all cached data from the canceled simulated run.

### User Views documentation/help
Precondition: 
The user has opened the application
MSS - Main Success Scenario
User selects the Help button
The system opens the Rev-Metrix Wiki in the default browser

### User logs out
Precondition: 
The user is logged in
MSS - Main Success Scenario
User opens account drop-down and selects log out
User is logged out
Application prompts user to the login screen
