+++
title = "Frontend Team"
weight = 100
description = 'Project Analysis and Design specific to the frontend team'
+++

| Theo Bloomquist, Thomas Bywaters, Michael Hensel, John Kettula, Liz Mains |
|:-:|

| ![Frontend Arc](FrontendArc.png?width=40vw&lightbox=false) | 
|:--:|

The frontend will be handling the user interface in the form of a Mobile Application. Data is pulled into the application from the SmartDot API within the bowling ball as well as the Ciclops Program which videos the throw itself. The data from both the SmartDot and Ciclops are processed and pushed into the Local Database. The Local Database will then send the data out to the server. The Unity Visualizer is embedded into the application and is fed data from a specific throw by the Mobile Application.

The mobile application gives the user the ability to interact with and utilize the features of RevMetrix. Upon opening, the user is presented with a login screen where they can either sign in to an existing account or create a new one. If the user creates an account, an instance of the User class is created and their chosen username and password is set and stored in the database. If the User already has an account, the entered username and password is verified with those stored in the database, the User class is populated with their data, and they are granted access to the home page. From the homepage, the user has several options. They can view saved bowling balls or add new ones, record a throw using the SmartDot in a saved ball, record a throw video using the Ciclops camera, or view previous throws as video or SmartDot data.

### SmartDot API
The SmartDot API will facilitate communication between the mobile app and the SmartDot inside the user’s bowling ball. Using Bluetooth LE, the user will connect to a SmartDot and, after signaling the SmartDot to start, may begin recording their throw. Users will have to first scan for and select a SmartDot using bluetooth. Upon first connection, a new ball will be created for them as an instance of the Ball class. Saved bowling balls will remember their SmartDot’s bluetooth ID to allow for instant connection. While the ball is in motion during the throw, the SmartDot will transmit data back to the mobile app that will store it in an instance of the Throw class to be referenced later. Recording of data stops when the ball reaches the end of the lane or when the user signals so from the app.

### File Reader
The File Reader will allow the user to import video files into the desktop application, so that it can then be analyzed by Ciclops, which will extract bowling statistics from the video. A potential application of the file reader could also be writing local files to the local device. The File Reader could also be manipulated to generate files based on the data received from the SmartDot API. The File Reader is implemented within the application and is able to transmit data across the application using local variables & the local database.

### Ciclops
An implementation of Ciclops will be another feature in the app that will analyze a bowler’s throw and extract data from it. It will use image recognition algorithms to differentiate between the bowling ball and the bowling lane. It will use each individual frame and compare it to the next frame to get varying statistics about the ball. These statistics include: speed, velocity, and curve. This information will be incredibly useful for extrapolation to calculate the metrics that will be eventually served to the user. Ciclops will be implemented directly in the application and will store information directly onto the applications local database.

### Mobile Application User Interface
| ![Mobile App UI](MAUI.png?width=40vw&lightbox=false) | 
|:--:|

| ![Mobile App UI2](MAUI2.png?width=40vw&lightbox=false) | 
|:--:|

All Frontend UI will be implemented using XAML backed with C#, allowing for users to view outputted, processed data that is displayed onto the screen using dynamically allocated XAML text Label classes, as well as allowing for users to input textual information & click buttons. Button Classes come standard with XAML applications, their specific function is to handle “Clicked” input from the user, when “Clicked” is triggered by the user clicking a button a function defined in the XAML.CS class is executed. This level of abstraction allows for buttons to have dynamic functionality, meaning that whatever functionality is provided by one button to the user could be entirely different from the functionality provided by another button to the user. Textual input displayed on the XAML page can be handled in one of two ways, “TextChanged” & “Completed”. “TextChanged” is triggered when any text within the input field is changed and, runs similarly to “Clicked” as it, it runs a function that is defined with the XAML.CS class. “Completed” functions similarly to “TextChanged,” triggering a specified event when the Enter key (Tab on Windows) is clicked. Dynamic output that is viewed by the user is handled by variables defined within the XAML.CS classes; these variables are passed from the XAML.CS class to the XAML output field (usually a text Label class) through the use of Binding Paths. Binding Paths are used by XAML classes to reference data, such as variables, that are defined and allocated by XAML.CS classes, Binding Paths access the current value of this data and are then displayed to the user by the Label class. Navigation between pages is handled by both the PushAsync and GoToAsync function that takes the String name of a pre-existing XAML & XAML.CS class that defines the structure of a page that will be pushed onto the stack to be displayed to the user.

### Class Methods
##### SmartDot API
- ScanAsync()
- ConnectToDeviceAsync()
- ConnectToKnownDeviceAsync(Guid)
- ReadAsync()
- ReadServicesAsync()
- ReadCharacteristicsAsync()
- ReadDescriptorsAsync()
- DisconnectAsync()

##### File Reader
- MakeFile(string fileName)
- WriteFile(string fileName, string text)
- Create(string fileName)

##### Ciclops
- TakePhoto()
- OnTakeVidBtnClicked(object sender, EventArgs e)

##### Mobile Application User Interface
- Clicked(object sender, EventArgs e)
- TextChanged(object sender, TextChangedEventArgs e)
- Completed(object sender, EventArgs e)
- PushAsync(String page)
- GoToAsync(String page)

##### User
- Login(string, string)
- CreateAcct(string, string)
- AddBall(IDevice)
- NewGame()
- DeleteBall(Ball)
- DeleteGame(Game)

##### Game
- AddThrow()
- DeleteThrow(Throw)

##### UML Diagram
| ![Mobile App UML](MAUML.jpg?width=40vw&lightbox=false) | 
|:--:|

### MVC Architecture
| ![MVC Diagram](MVC.jpg?width=60vw&lightbox=false) | 
|:--:|

Due to the design architecture of .NET MAUI, both the XAML & XAML.CS classes can be considered the “controller” classes as they both handle data flow to each other. However the specific definitions of the UI are clearly handled by the XAML class and the model for which outputted data is structured is handled by the XAML.CS class. While this may be difficult to grasp at first, there are sections of code within both the XAML and XAML.CS classes that handle & execute control logic amongst themselves, making these sections both the respective ‘Controller’ of this diagram. 


### Local Testing Database Schema
| ![DBSchema](LDBS.jpg?width=40vw&lightbox=false) | 
|:--:|

The primary purpose of the local database that is hosted by the frontend application is to temporarily store user information so that it can be transmitted via Web API to the backends Cloud infrastructure for long-term storage. The backend team will be handling the creation of this local database, while we will create a dummy database purely for testing purposes. This is to allow for the frontend team to retrieve data to ensure the functionality of application features. As seen above, the schema of this database is almost identical to the schema of the backend team’s local database as they will be storing similar information. The main difference being the User Table which will be used for testing users while the server databases are being built. This dummy database is also to ensure seamless integration between the frontend and backend team when they eventually come together to combine their systems.
 
