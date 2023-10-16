var relearn_search_index = [
  {
    "content": "Official Project Requirements Document and Slideshow The official project requirements document can be found in the project’s Google Drive here, and the requirements presentation slideshow can be found here\nAbstract RevMetrix is a system that will record metrics of a bowling ball as it travels down the lane. It will consist of a physical device that the user can place inside a bowling ball and mobile application. The device will record rotational and positional data about the ball as it travels down the lane. It will periodically transmit this data to the mobile device to allow the user to understand what was happening to the ball when it was thrown. This will allow the user to improve their skill.\nSimulation The two main portions of the simulation architecture are the Unity Visualizer and the SmartDot simulator. Once complete, the Visualizer will be used to simulate a throw given initial parameters for the throw. The Visualizer will implement realistic physics to ensure that the ball and pins behave exactly as they would in real life. Additionally, simulated data will be collected from the Visualizer and used, alongside data from a binary dump file, to test the SmartDot Simulator. The SmartDot Simulator will simulate the physical device that will be used to get the data. The simulator will sample data from the Visualizer and store, then transmit that data like the SmartDot module would. This data will be transmitted to the mobile device via bluetooth.\nFrontend The frontend section of the diagram is the Mobile Application, Ciclops, the SmartDotAPI, and the File Reader. The Mobile Application serves the designed UI to the end-user of the project. It also transmits all relevant input gathered from the user to the Cloud infrastructure by saving it to a Local Database which is then transmitted to the Cloud. Along with this, the Mobile Application facilitates gathering all user input, whether it is the user inputting a new ball or the user recording a video of them bowling with a new or pre-existing ball. Ciclops will take a video file and use image-processing to extract data from video. The Ciclops program will be able to take the user’s videos and generate positional data for the ball over the throw and then send it to the database. Finally, the SmartDot API will communicate between the mobile app and the SmartDot module within the ball. Currently our plan is to use the API plugins affiliated with the MBIENT Labs Bluetooth IMU to test and further develop bluetooth functionality. We will then work with the backend team to reference their API in constructing our own.\nBackend The backend section of the diagram is made up of the local database, the client side of the Web API, and the cloud-infrastructure which includes both the research and user databases, algorithm unit, cloud controller, and the server side of the Web API. The cloud-infrastructure is accessed through the mobile application by client/server interactions using the Web API. Each interaction is encoded with SSL encryption to ensure the security of any data being sent to or from the server. The local database is stored on the mobile device and stores the user’s most recent practice or match session data.\nCommunication Protocols Secure Socket Layer (SSL) encryption is used to encrypt and decrypt data that is being sent through the Web API in order to ensure the security of that data. Since the data being sent through the Web API will include usernames, passwords, and other possibly valuable data, it must be encrypted to ensure the digital safety of the application’s users. Bluetooth communications will be implemented into the ISmartDot interface in order to receive information from the SmartDot module located inside of the bowling ball. This data will be sent to the SmartDot API and used in the mobile application. SmartDot Module and ISmartDot Interface The SmartDot module is the physical device that will be placed into the bowling ball. It will record positional and rotational data about the ball as it travels down the lane. It will periodically transmit that data to the mobile device for the user to analyze. It will communicate with the mobile device through the ISmartDot interface. The interface will consist of a few commands for reading and writing data to the SmartDot module. In this way, the system will be able to record metrics about the ball and present it to the user.\nAnalysis and Design by Type of Develeopment Backend TeamProject Analysis and Design specific to the backend team\nFrontend TeamProject Analysis and Design specific to the frontend team\nSimulation TeamProject Analysis and Design specific to the simulation team\n",
    "description": "Design and Analysis Information and Links to the Document and Slideshow",
    "tags": null,
    "title": "Analysis and Design",
    "uri": "/Wiki/design-and-analysis/index.html"
  },
  {
    "content": "Progress of Backend Development Backend Architecture Updated Database Schemas Below are the most recently updated reworkings of the project’s database schemas. The databases listed below can be seen in the RevMetrix System Architecture\nLocal Database Schema (Localhost) Raw Database Schema (Cloud Server) User Database Schema (Cloud Server) Results of database stress testing can be seen at the link below Database Observation DataAll data collected from database engine stress testing\n",
    "description": "All details about the current state of the backend development, along with what is planned for the future",
    "tags": null,
    "title": "Backend - Current State",
    "uri": "/Wiki/current-project-status/backend/index.html"
  },
  {
    "content": "Architecture Initial Database Architecture Local Database (Localhost) Local Database Schema User Database (Cloud Server) User Database Schema Raw Database (Cloud Server) Raw Database Schema ",
    "description": "UML diagrams representing the initial database architecture and schemas",
    "tags": null,
    "title": "Backend - Database Architecture",
    "uri": "/Wiki/initial-project-status/initial-database-architecture/index.html"
  },
  {
    "content": "",
    "description": "Aspects of the 50% working system specific to the backend development",
    "tags": null,
    "title": "Backend 50% Working System",
    "uri": "/Wiki/project-milestones/ms2-50-working-system/backend/index.html"
  },
  {
    "content": "",
    "description": "Aspects of the final working system specific to the backend development",
    "tags": null,
    "title": "Backend Final Working System",
    "uri": "/Wiki/project-milestones/ms3-final-working-system/backend/index.html"
  },
  {
    "content": "",
    "description": "Aspects of the minimal working system specific to the backend development",
    "tags": null,
    "title": "Backend Minimal Working System",
    "uri": "/Wiki/project-milestones/ms1-minimal-working-system/backend/index.html"
  },
  {
    "content": " Jordan Carvell, Braden Fleming, Victor Pineda, Robert Wood Backend Architecture Minimal Working System The Backend Team’s role in the project will consist of three main objectives: Creation and maintenance of the Cloud Databases (User and Raw Binary databases) and the local phone database, creation and implementation of the Web API (allowing for client-server interactions), and the development and integration of ISmartDot interface. For the minimal working system, the most important goal to complete will be the decision of which database engine(s) will be used to read and write data between the different technologies used. Once the decision is made, we will need to create the database tables and enable read/write functionality to and from each database’s respective locations. Finally, to complete the minimal working system, we will need to complete the development of the Web API to effectively request and receive data to and from the mobile application and each database.\nIssues Communication between the local and cloud databases may serve as an obstacle due to the possibility of using a different database engine for the local database than the cloud databases use. Hosting the Web Server in a way that allows it to be accessed from anywhere. SSL certificates and network security may get in the way of this.\n50% Working System In the 50% working system, the system components have the ability to communicate with each other. Most of the features for the system will not be implemented, such as a Cloud Controller with basic features; the ability to read the data and format it, or to pass the data to either the Raw and/or User database. What will be functioning is an API client whether it is a dummy or a primary functioning API client that communicates to the basic functioning cloud controller using WebAPI.\nFinal Working System The final working system will have a fully functional system with the ability to communicate throughout the system. The API client will communicate to the Web API that talks to the Cloud controller which can talk to at least one of the databases and give the data back to the cloud controller. The Cloud Controller then transfers data to the Web API which then gives the data to an API Client.\n",
    "description": "Project requirements specific to the backend development",
    "tags": null,
    "title": "Backend Requirements",
    "uri": "/Wiki/project-requirements/backend/index.html"
  },
  {
    "content": " Jordan Carvell, Braden Fleming, Victor Pineda, Robert Wood Local Database The local database will be used to store and retrieve information from the current or most recent practice/match session that the user completed. The mobile app sends the session’s data to the local database and overwrites previous data entries when a new practice/match session is completed and the previous data has been uploaded to the user database in the cloud. This is done initially on the phone app to ensure that data is not lost.\nWeb API - Server The Web API server is the endpoint of the web API that the frontend team can interact with via the client code. This will house controllers and logic to talk to the database, authenticate \u0026 authorize users, and preform algorithmic analysis when necessary.\nWeb API - Client The Web API client is a purpose built C# utility devised to make communications with the Web API server simpler, implementing automatic error handling, request abstraction, POCO conversions, encryption, and authentication. This means that when it comes time to integrate the client into the mobile application, little will need to be done.\nCommon The common project will hold common classes and architecture between the Server, client, and other projects within cloud infrastructure. This will consist of primarily logging-related classes and POCOs.\nAlgorithm Unit The algorithm unit will contain many algorithms developed by Professor Hake during his thesis. These will largely be implemented by other students and exists to determine ball \u0026 throw statistics \u0026 metrics from primarily raw data from the Research Database. This may eventually house algorithms relating to video processing as well.\nUser Database The User database will be storing all of the information from the SmartDot module and Ciclops. It will store all of the User/Game details and then a connection will be established via a Web Api to the phone application that will read and write information to or from the cloud-based database.\nResearch Database The research database is going to hold the raw data that is collected from the Smart Dot Module. This entire database will have a similar layout to the User Database, but instead of being used for displaying purposes it will be utilized for Professor Hake’s analysis. This Database will be used for algorithm development.\nUML Diagrams Web API - Server Web API - Client Common Algorithm Unit A UML diagram has not been devised for this as no algorithm development has taken place.\nDatabase Interface Diagrams User Database Local Database Research Database Database Schemas Local Database User Database Research Database ",
    "description": "Project Analysis and Design specific to the backend team",
    "tags": null,
    "title": "Backend Team",
    "uri": "/Wiki/design-and-analysis/backend/index.html"
  },
  {
    "content": "Contributing documentation is pretty straightforward, follow this basic guide to learn how.\nA brief history This page was built with the Hugo framework \u0026 static site generator using the Relearn theme and hosted on GitHub Pages. Every commit to the main branch will trigger a GitHub Action, causing the page to rebuild itself. This takes only a minute or two before the changes are updated. This structure provides a beautiful site, solid uptime, and the ability to even make edits in the GitHub web editor.\nEditing existing pages Navigate to the page that you would like edit and select the icon in the top right of the page. See Learning the syntax for more information on making edits.\nCreating new pages \u0026 sections Create a new folder, named whatever you want inside of content/\u003cdesired location\u003e. Create a new file here named _index.md, this file will contain your page’s content. If sub-pages are desired, add a new file titled \u003cfilename.md\u003e inside of your newest folder. See Relearn Theme Docs for better documentation.\nLearning the syntax The syntax used here can be as simple as Markdown (Discord uses this), however, may get more advanced if you want something fancy.\nThe following two guides are excellent sources for learning Markdown:\nRelearn Theme Docs Markdown Docs This framework also allows the use of HTML code instead of Markdown, however, Shortcodes may be better suited to what you want to do.\nThe following two references may help you learn the Shortcodes that may be used:\nRelearn Shortcodes Hugo Shortcodes Making local edits In order to make local edits on your own machine, we will need to follow a couple of steps:\nInstall Git if you do not already have it Install Hugo (Extended edition) Install Go Clone https://github.com/YCP-Rev-Metrix/Wiki.git in your favorite IDE or terminal Open a Git terminal in the directory of your new repository. For VS users, this can be (Toolbar) Git \u003e Open in command prompt Launch a live server by calling hugo serve (git or wsl terminal) Navigate a browser to http://localhost:1313/Wiki Make changes (mostly in content directory). After saving, you should see the page refresh live. After making your changes, push or merge your changes back up to the main branch. Your changes will now be reflected on the WWW in a few minutes. ",
    "description": "How to add, edit, and remove documentation on the Wiki",
    "tags": null,
    "title": "Contributing Documentation",
    "uri": "/Wiki/how-to-contribute/contributing-documentation/index.html"
  },
  {
    "content": "RevMetrix System Architecture Current Status by Development Team Backend - Current StateAll details about the current state of the backend development, along with what is planned for the future\nFrontend - Current StateAll details about the current state of the frontend development, along with what is planned for the future\nSimulation - Current StateAll details about the current state of simulation development, along with what is planned for the future\n",
    "description": "The current status of each aspect of the project and what is to come",
    "tags": null,
    "title": "Current Project Status",
    "uri": "/Wiki/current-project-status/index.html"
  },
  {
    "content": "Below is all of the data collected from our database engine stress testing\nMaking 100-million entries in each database engine The Databases orginally tested were PostgreSQL, MySQL, and MongoDB.\nMongoDB was removed from the list of candidates for our database due to the read/write speeds of the others being significantly faster than its own.\nDelete, Update, and Add operations in PostgreSQL \u0026 MySQL PostgreSQL and MySQL tables and performance graphs Due to the large performance difference between PostgreSQL and MySQL, the MySQL database engine was most likely to be removed. However, we continued to test it against the other engines in the event that at higher rates/speeds, it out performed them.\nSQL Server was recommended by Professor Hake, so we looked into it and began testing it against the PostgreSQL and MySQL engines.\nSQL Server tables and performance graphs Adding a single row in each engine Due to the significant differences in speed between SQL Server and PostgreSQL, along with MySQL, we have decided to use SQL Server as our primary database engine for RevMetrix.\n",
    "description": "All data collected from database engine stress testing",
    "tags": null,
    "title": "Database Observation Data",
    "uri": "/Wiki/current-project-status/backend/database-obsevation-data/index.html"
  },
  {
    "content": "Progress of Frontend Development Frontend Architecture Frontend User Interface Wireframes Local Testing Database Schema ",
    "description": "All details about the current state of the frontend development, along with what is planned for the future",
    "tags": null,
    "title": "Frontend - Current State",
    "uri": "/Wiki/current-project-status/frontend/index.html"
  },
  {
    "content": "",
    "description": "Aspects of the 50% working system specific to the frontend development",
    "tags": null,
    "title": "Frontend 50% Working System",
    "uri": "/Wiki/project-milestones/ms2-50-working-system/frontend/index.html"
  },
  {
    "content": "",
    "description": "Aspects of the final working system specific to the frontend development",
    "tags": null,
    "title": "Frontend Final Working System",
    "uri": "/Wiki/project-milestones/ms3-final-working-system/frontend/index.html"
  },
  {
    "content": "Prerequisites Before making any changes or creating a branch, run git pull in your Visual Studo terminal to ensure you have the most recent changes.\nCreating Branch and Editing Type the following into your Visual Studio terminal to create a branch of the Github repository:\ngit checkout -b \u003cBRANCHNAME\u003e Once the branch is created, write your code and stage the changes. You will see something similar to the following when your changes are staged:\nCommit Changes In your VS terminal, enter the following command, where “” is your commit message, to commit your changes to your branch of the repository:\ngit commit -m \"\u003cMESSAGE\u003e\" Push Changes To finalize your commits, push them to your branch with the following command:\ngit push If there is an error pushing your changes to the branch, you will be given a command to run which fixes the issue.\nCreate Pull Request Instructions for creating a pull request can be found on Github’s documentation page here\nDelete Your Local Branch Once the pull request is accepted and has merged with the Test branch, run the following command in your Visual Studio terminal to delete the branch from your local machine:\ngit branch -d \u003cBRANCHNAME\u003e ",
    "description": "How to create a branch of the frontend repository and make changes",
    "tags": null,
    "title": "Frontend Github Workflow",
    "uri": "/Wiki/how-to-contribute/frontend-workflow/index.html"
  },
  {
    "content": "",
    "description": "Aspects of the minimal working system specific to the frontend development",
    "tags": null,
    "title": "Frontend Minimal Working System",
    "uri": "/Wiki/project-milestones/ms1-minimal-working-system/frontend/index.html"
  },
  {
    "content": " Theo Bloomquist, Thomas Bywaters, Michael Hensel, John Kettula, Liz Mains Frontend Wireframes Minimal Working System Frontend Team’s role is to create a mobile app that is able to facilitate communication between what is developed by both the Graphics and Backend teams. The minimal working system will consist of an interface that allows for user input and displays user-specific data in response. This will also include the framework for communicating with the Graphics and Backend teams, to be fully implemented later on, this also includes Bluetooth functionality. There will also be camera and camera roll access to later be used to analyze a bowler’s throw.\nIssues Communication between all the moving pieces is a crucial part of the application, however, transmission of graphical data can be incredibly difficult due to its size, which may result in increased latency affecting the user of the mobile application. Along with this, figuring out the specifics of Bluetooth integration will be specific to the output of the chip installed into the bowling ball, meaning it will have to be developed around the hardware-implemented into the chip. Connecting to a device requires specific information to be known, which may be difficult to gather from a simple prototype chip. Bluetooth integration for cross-platform devices is going to be another challenge because Android and iOS have different permission systems.\n50% Working System Implementation of a new user-input interface that allows the user to manage (through creation, deletion, and editing) a list of bowling balls that each have data respective to their real-life values as well as associated Bluetooth IDs. Along with this, enhancements should be made to the communication framework between the mobile application and what is developed by the Backend and Graphics teams to decrease latency and improve end-user experience. Along with this the phone application will have newly implemented functionality that allows for a video to be pulled in from an end-user’s device, this will serve as a proof of concept for further image processing, which will take user video and convert it into positional data.\nIssues Potential issues that we could run into with this milestone are the creation/deletion/editing of a list of bowling balls. The main challenge will be the organization of bowling balls by the user and implementing the local database into the app. This is because the process of adding a bowling ball into the database will span across two communication processes. The first process will be the interaction between the Bluetooth scanner and the app. The second process that will interact with the database is the Maui framework. These two processes combined could cause some issues with the phone app, just in terms of communication.\nFinal Working System For the final working system, we will expand upon the prototype communication to give the app the capability to communicate with the backend servers and implement the Unity visualizers. The app will also be able to display graphical information based on information pulled from the database. To effectively launch the application in a mobile environment, several algorithmic and storage modifications and enhancements will be made to ensure a smooth smartphone experience. A local database will be worked into this design to allow for user data such as usernames, passwords, and bowling balls to be saved locally until the complete server database is established. The groundwork for image processing similar to Dr. Babcock’s Ciclops will also be started for future teams to expand upon. To create a user-friendly app, even in the early production stages, several UI improvements will be made to shift the application away from a testing environment into a user-focused experience.\nIssues Some potential issues that we might run into include the final data size of all of the features we plan to implement. Displaying graphical information and storing graphical information will take up local space. To ensure optimal functionality, the amount of data stored in the mobile app must be minimized. Another issue will be the conversion of the GUI from the Desktop to the Phone. Different features might not make it to both the Phone app and Desktop app. Implementing Ciclops into our app will be another issue in terms of the size of the application. Ciclops is, essentially, another application that will need to work within our application, increasing the app size further. Image processing within Ciclops will be another challenge because it will require the discovery of different imaging algorithms and the discovery of a new framework. More specifically, differentiating between the bowling ball and the background will be a challenge because of all of the different parts of a bowling lane. There’s a potential problem where the bowling ball will blend with other objects.\n",
    "description": "Project requirements specific to the frontend development",
    "tags": null,
    "title": "Frontend Requirements",
    "uri": "/Wiki/project-requirements/frontend/index.html"
  },
  {
    "content": " Theo Bloomquist, Thomas Bywaters, Michael Hensel, John Kettula, Liz Mains The frontend will be handling the user interface in the form of a Mobile Application. Data is pulled into the application from the SmartDot API within the bowling ball as well as the Ciclops Program which videos the throw itself. The data from both the SmartDot and Ciclops are processed and pushed into the Local Database. The Local Database will then send the data out to the server. The Unity Visualizer is embedded into the application and is fed data from a specific throw by the Mobile Application.\nThe mobile application gives the user the ability to interact with and utilize the features of RevMetrix. Upon opening, the user is presented with a login screen where they can either sign in to an existing account or create a new one. If the user creates an account, an instance of the User class is created and their chosen username and password is set and stored in the database. If the User already has an account, the entered username and password is verified with those stored in the database, the User class is populated with their data, and they are granted access to the home page. From the homepage, the user has several options. They can view saved bowling balls or add new ones, record a throw using the SmartDot in a saved ball, record a throw video using the Ciclops camera, or view previous throws as video or SmartDot data.\nSmartDot API The SmartDot API will facilitate communication between the mobile app and the SmartDot inside the user’s bowling ball. Using Bluetooth LE, the user will connect to a SmartDot and, after signaling the SmartDot to start, may begin recording their throw. Users will have to first scan for and select a SmartDot using bluetooth. Upon first connection, a new ball will be created for them as an instance of the Ball class. Saved bowling balls will remember their SmartDot’s bluetooth ID to allow for instant connection. While the ball is in motion during the throw, the SmartDot will transmit data back to the mobile app that will store it in an instance of the Throw class to be referenced later. Recording of data stops when the ball reaches the end of the lane or when the user signals so from the app.\nFile Reader The File Reader will allow the user to import video files into the desktop application, so that it can then be analyzed by Ciclops, which will extract bowling statistics from the video. A potential application of the file reader could also be writing local files to the local device. The File Reader could also be manipulated to generate files based on the data received from the SmartDot API. The File Reader is implemented within the application and is able to transmit data across the application using local variables \u0026 the local database.\nCiclops An implementation of Ciclops will be another feature in the app that will analyze a bowler’s throw and extract data from it. It will use image recognition algorithms to differentiate between the bowling ball and the bowling lane. It will use each individual frame and compare it to the next frame to get varying statistics about the ball. These statistics include: speed, velocity, and curve. This information will be incredibly useful for extrapolation to calculate the metrics that will be eventually served to the user. Ciclops will be implemented directly in the application and will store information directly onto the applications local database.\nMobile Application User Interface All Frontend UI will be implemented using XAML backed with C#, allowing for users to view outputted, processed data that is displayed onto the screen using dynamically allocated XAML text Label classes, as well as allowing for users to input textual information \u0026 click buttons. Button Classes come standard with XAML applications, their specific function is to handle “Clicked” input from the user, when “Clicked” is triggered by the user clicking a button a function defined in the XAML.CS class is executed. This level of abstraction allows for buttons to have dynamic functionality, meaning that whatever functionality is provided by one button to the user could be entirely different from the functionality provided by another button to the user. Textual input displayed on the XAML page can be handled in one of two ways, “TextChanged” \u0026 “Completed”. “TextChanged” is triggered when any text within the input field is changed and, runs similarly to “Clicked” as it, it runs a function that is defined with the XAML.CS class. “Completed” functions similarly to “TextChanged,” triggering a specified event when the Enter key (Tab on Windows) is clicked. Dynamic output that is viewed by the user is handled by variables defined within the XAML.CS classes; these variables are passed from the XAML.CS class to the XAML output field (usually a text Label class) through the use of Binding Paths. Binding Paths are used by XAML classes to reference data, such as variables, that are defined and allocated by XAML.CS classes, Binding Paths access the current value of this data and are then displayed to the user by the Label class. Navigation between pages is handled by both the PushAsync and GoToAsync function that takes the String name of a pre-existing XAML \u0026 XAML.CS class that defines the structure of a page that will be pushed onto the stack to be displayed to the user.\nClass Methods SmartDot API ScanAsync() ConnectToDeviceAsync() ConnectToKnownDeviceAsync(Guid) ReadAsync() ReadServicesAsync() ReadCharacteristicsAsync() ReadDescriptorsAsync() DisconnectAsync() File Reader MakeFile(string fileName) WriteFile(string fileName, string text) Create(string fileName) Ciclops TakePhoto() OnTakeVidBtnClicked(object sender, EventArgs e) Mobile Application User Interface Clicked(object sender, EventArgs e) TextChanged(object sender, TextChangedEventArgs e) Completed(object sender, EventArgs e) PushAsync(String page) GoToAsync(String page) User Login(string, string) CreateAcct(string, string) AddBall(IDevice) NewGame() DeleteBall(Ball) DeleteGame(Game) Game AddThrow() DeleteThrow(Throw) UML Diagram MVC Architecture Due to the design architecture of .NET MAUI, both the XAML \u0026 XAML.CS classes can be considered the “controller” classes as they both handle data flow to each other. However the specific definitions of the UI are clearly handled by the XAML class and the model for which outputted data is structured is handled by the XAML.CS class. While this may be difficult to grasp at first, there are sections of code within both the XAML and XAML.CS classes that handle \u0026 execute control logic amongst themselves, making these sections both the respective ‘Controller’ of this diagram.\nLocal Testing Database Schema The primary purpose of the local database that is hosted by the frontend application is to temporarily store user information so that it can be transmitted via Web API to the backends Cloud infrastructure for long-term storage. The backend team will be handling the creation of this local database, while we will create a dummy database purely for testing purposes. This is to allow for the frontend team to retrieve data to ensure the functionality of application features. As seen above, the schema of this database is almost identical to the schema of the backend team’s local database as they will be storing similar information. The main difference being the User Table which will be used for testing users while the server databases are being built. This dummy database is also to ensure seamless integration between the frontend and backend team when they eventually come together to combine their systems.\n",
    "description": "Project Analysis and Design specific to the frontend team",
    "tags": null,
    "title": "Frontend Team",
    "uri": "/Wiki/design-and-analysis/frontend/index.html"
  },
  {
    "content": "\rContributing DocumentationHow to add, edit, and remove documentation on the Wiki\nFrontend Github WorkflowHow to create a branch of the frontend repository and make changes\nSimulation Github WorkflowHow to create a branch of the simulation repository Test branch and make changes to it\n",
    "description": "",
    "tags": null,
    "title": "How To Contribute",
    "uri": "/Wiki/how-to-contribute/index.html"
  },
  {
    "content": "Official Project Requirements Document and Slideshow The official project requirements document can be found in the project’s Google Drive here, and the requirements presentation slideshow can be found here\nSystem Architecture Initial Requirements by Type of Develeopment Backend RequirementsProject requirements specific to the backend development\nFrontend RequirementsProject requirements specific to the frontend development\nSimulation RequirementsProject requirements specific to the simulation development\n",
    "description": "Details of the project requirements and the associated slideshow",
    "tags": null,
    "title": "Initial Project Requirements",
    "uri": "/Wiki/project-requirements/index.html"
  },
  {
    "content": "Original System Architecture Backend - Database ArchitectureUML diagrams representing the initial database architecture and schemas\nPhone App - Proof of ConceptDrawing board ideas for the layout and interaction methods of the phone application\nSimulation - First ThoughtsThe base ideas around using Unity for the development of a bowling simulation\n",
    "description": "",
    "tags": null,
    "title": "Initial Project Status",
    "uri": "/Wiki/initial-project-status/index.html"
  },
  {
    "content": "The ISmartDot interface will allow a layer of abstraction between the Application and the SmartDot or SmartDotSimulator.\nThe sole function of this interface is to allow reading and writing from pages of memory stored on the SmartDot, and make / maintain connections to the SmartDot hardware.\nISmartDot interface /// \u003csummary\u003e /// Interface representing the basic functionality of the Bluetooth connection between the mobile application and a SmartDot implementation (Simulator \u0026 Hardware) /// \u003c/summary\u003e public interface ISmartDot { /// \u003csummary\u003e /// Attempts to create a connection to the SmartDot hardware /// \u003c/summary\u003e /// \u003cparam name=\"connectionParameters\"\u003eConnection parameters\u003c/param\u003e /// \u003creturns\u003eversion representing the SmartDot hardware version (APIs use), null if unable to connect\u003c/returns\u003e public Task\u003cVersion?\u003e Connect(ConnectionParameters connectionParameters); /// \u003csummary\u003e /// Tests if the connection to the SmartDot hardware is present /// \u003c/summary\u003e /// \u003creturns\u003eBoolean representing if there is a connection to SmartDot hardware\u003c/returns\u003e public Task\u003cbool\u003e IsConnected(); /// \u003csummary\u003e /// Asynchronous method to write one page to the SmartDot implementation /// \u003c/summary\u003e /// \u003cparam name=\"address\"\u003eThe page start address in memory\u003c/param\u003e /// \u003cparam name=\"buffer\"\u003eData (byte[]) to write to the SmartDot implementations page\u003c/param\u003e /// \u003cparam name=\"bytes\"\u003eLength of data to write from \u003cparamref name=\"buffer\"/\u003e\u003c/param\u003e /// \u003creturns\u003eA bool representing if call was successful\u003c/returns\u003e public Task\u003cSmartDotTransactionResult\u003e WriteBytes(long address, byte[] buffer, long bytes); /// \u003csummary\u003e /// Asynchronous method to read one page from the SmartDot implementation /// \u003c/summary\u003e /// \u003cparam name=\"address\"\u003eThe page start address in memory\u003c/param\u003e /// \u003cparam name=\"buffer\"\u003eRef data (byte[]) read from the SmartDot implementations page (will attempt to fill completely)\u003c/param\u003e /// \u003cparam name=\"bytes\"\u003eLength of data to read into \u003cparamref name=\"buffer\"/\u003e\u003c/param\u003e /// \u003creturns\u003eA bool representing if call was successful\u003c/returns\u003e public Task\u003cSmartDotTransactionResult\u003e ReadBytes(long address, ref byte[] buffer, long bytes); /// \u003csummary\u003e /// Sends a command to the SmartDot hardware /// \u003c/summary\u003e /// \u003cparam name=\"command\"\u003eThe string command to send to the SmartDot hardware\u003c/param\u003e /// \u003creturns\u003eResult from the command execution on the SmartDot hardware\u003c/returns\u003e public Task\u003cstring\u003e OutgoingSmartDotCommand(string command); /// \u003csummary\u003e /// Invokes \u003csee cref=\"IncomingSmartDotCommandCallback\"/\u003e. Should be executed only from the implementor. /// \u003c/summary\u003e /// \u003cparam name=\"command\"\u003eString command called from SmartDot hardware\u003c/param\u003e protected virtual void RaiseIncomingSmartDotCommand(string command) =\u003e IncomingSmartDotCommandCallback?.Invoke(command); /// \u003csummary\u003e /// Incoming command callback (from SmartDot hardware). Signals from the SmartDot hardware that something important happened. /// \u003c/summary\u003e public Action\u003cstring\u003e? IncomingSmartDotCommandCallback { get; set; } }SmartDotTransactionResult enumeration /// \u003csummary\u003e /// Enum representing the transaction result state of a communication with SmartDot hardware /// \u003c/summary\u003e public enum SmartDotTransactionResult : byte { /// \u003csummary\u003e /// SmartDot transaction succeeded /// \u003c/summary\u003e SUCCESS, /// \u003csummary\u003e /// SmartDot transaction failed - unknown cause /// \u003c/summary\u003e FAILURE_UNKNOWN, /// \u003csummary\u003e /// SmartDot transaction failed - data corruption /// \u003c/summary\u003e FAILURE_PERMISSION_ERROR, /// \u003csummary\u003e /// SmartDot transaction failed - device disconnected /// \u003c/summary\u003e FAILURE_DISCONNECTED, /// \u003csummary\u003e /// SmartDot transaction failed - data corruption /// \u003c/summary\u003e FAILURE_DATA_CORRUPTION }ConnectionParameters class /// \u003csummary\u003e /// Parameters necessary to successfully connect to the correct SmartDot hardware /// \u003c/summary\u003e public class ConnectionParameters { }The SmartDotAPI will be responsible for interpreting data sent and received from an ISmartDot interface implementor by accessing the version # on the first memory page.\n",
    "description": "Information about the ISmartDot interface",
    "tags": null,
    "title": "ISmartDot Interface",
    "uri": "/Wiki/smartdot/ismartdot/index.html"
  },
  {
    "content": "",
    "description": "Progress made on the minimal working system and the associated slideshow",
    "tags": null,
    "title": "MS1 - Minimal Working System",
    "uri": "/Wiki/project-milestones/ms1-minimal-working-system/index.html"
  },
  {
    "content": "",
    "description": "Progress made on the final working system and the associated slideshow",
    "tags": null,
    "title": "MS2 - 50% Working System",
    "uri": "/Wiki/project-milestones/ms2-50-working-system/index.html"
  },
  {
    "content": "",
    "description": "Progress made on the 50% working system and the associated slideshow",
    "tags": null,
    "title": "MS3 - Final Working System",
    "uri": "/Wiki/project-milestones/ms3-final-working-system/index.html"
  },
  {
    "content": ".NET MAUI documentation: -Bluetooth Connection\n-NET MAUI General Documentation\n-NET MAUI File Picker\n-NET MAUI Youtube Channel\n-Xamarin Youtube Channel\n-Xamarin Data Binding Documentation\n-Xamarin Advanced Data Binding Documentation\nInitial Proof of Concept - Mobile Application ",
    "description": "Drawing board ideas for the layout and interaction methods of the phone application",
    "tags": null,
    "title": "Phone App - Proof of Concept",
    "uri": "/Wiki/initial-project-status/phone-app-proof-of-concept/index.html"
  },
  {
    "content": "\rMS1 - Minimal Working SystemProgress made on the minimal working system and the associated slideshow\nMS2 - 50% Working SystemProgress made on the final working system and the associated slideshow\nMS3 - Final Working SystemProgress made on the 50% working system and the associated slideshow\n",
    "description": "The progress made prior to each project milestone",
    "tags": null,
    "title": "Project Milestones",
    "uri": "/Wiki/project-milestones/index.html"
  },
  {
    "content": "Progress of Simulation Development Simulation Architecture Simulation Dataflow SmartDot Simulator Illustration Textured Lane and Gutters Setup Lane Reset Visual Pinsetter Development Preview Links SmartDot Simulator ",
    "description": "All details about the current state of simulation development, along with what is planned for the future",
    "tags": null,
    "title": "Simulation - Current State",
    "uri": "/Wiki/current-project-status/simulation/index.html"
  },
  {
    "content": "Beginning Ideas of Simulation Design: Initial Lane Setup Full Lane View Lane While Testing Translation Scaled Pins Setup ",
    "description": "The base ideas around using Unity for the development of a bowling simulation",
    "tags": null,
    "title": "Simulation - First Thoughts",
    "uri": "/Wiki/initial-project-status/simulation-first-thoughts/index.html"
  },
  {
    "content": "",
    "description": "Aspects of the 50% working system specific to the simulation development",
    "tags": null,
    "title": "Simulation 50% Working System",
    "uri": "/Wiki/project-milestones/ms2-50-working-system/simulation/index.html"
  },
  {
    "content": "",
    "description": "Aspects of the final working system specific to the simulation development",
    "tags": null,
    "title": "Simulation Final Working System",
    "uri": "/Wiki/project-milestones/ms3-final-working-system/simulation/index.html"
  },
  {
    "content": "Making General Changes Swap the current Github branch to the Test branch: Click on the “Fetch Origin” button for the Test branch: Proceed to make the necessary changes for the Github Issue you are working on Review your changes in Github Desktop: Swap to your personal branch and bring the new changes over Include Github Issue # in the commit subject (i.e. Issue #12, new pin model) Commit your changes Go to the Github repository’s website and hit the New Pull Request button Make sure that your source and destination are both correct before creating the pull request This is (test \u003c– yourUsername) almost always Create pull request, then copy the link into the PR and send to Discord Make sure to tag the @Graphics Dev Team Approving Git Pull Requests Either check the current pull request on Github.com or click the link in Discord Open the Files Changed tab to review changes made Review changes, and if everything checks out, approve and submit review ",
    "description": "How to create a branch of the simulation repository Test branch and make changes to it",
    "tags": null,
    "title": "Simulation Github Workflow",
    "uri": "/Wiki/how-to-contribute/simulation-workflow/index.html"
  },
  {
    "content": "",
    "description": "Aspects of the minimal working system specific to the simulation development",
    "tags": null,
    "title": "Simulation Minimal Working System",
    "uri": "/Wiki/project-milestones/ms1-minimal-working-system/simulation/index.html"
  },
  {
    "content": " Luke Dodson, Bryce Neptune, Enoch Sam, Ian Viveiros SmartDot Dataflow Diagram Minimal Working System The minimal working system will consist of a basic physics simulator and a SmartDot simulator that can run on pre-recorded data. The SmartDot simulator will imitate the actual hardware but will receive data from data files instead of sensing the environment. It will send this data to the mobile device via Bluetooth. The physics simulator will maintain realistic physics (friction, momentum, rotational acceleration, etc.), but in a simple environment. The lane will act as a flat object with a uniform coefficient of friction.\nIssues The biggest challenge for making the minimal working system will be properly imitating the SmartDot module. The SmartDot simulator will have to have sensors, memory, process synchronization, and data transfer protocols. Simulating all of that in C# will be quite difficult. Additionally, another issue will be verifying that the simulated physics works as it does in real life.\n50% Working System Once the minimal working system is complete. The next step will be to extend the functionality of the SmartDot simulator. The fifty percent milestone will feature the ability to generate new data. The physics simulator will allow users to enter initial parameters to determine how the ball is thrown. The SmartDot simulator will then have sensors that can actually collect the data from the throw and store it. This will allow the simulator to generate new data.\nIssues The most serious challenge for this step will be developing accurate sensors in Unity. The sensors will have to detect light and acceleration and output it in proper binary format. Getting the information might be difficult as there may not be support for it in the Unity framework. There will have to be research into that later.\nFinal Working System The final working system for this semester will have two additional features. The first will be the visualizer. The visualizer will record videos of each throw and save it to the local machine. These videos will then be used by the front end when testing their image processing software. The second feature will be a more realistic environment for the simulator. That will include lighting patterns and lane textures. The lighting patterns will imitate the lighting patterns at bowling alleys. This will help generate more accurate data from the light sensors. In addition, the lane will also have small variations in the surface and oil patterns that will affect how the ball rolls down the lane. This will help increase the accuracy of the accelerometer data.\nIssues Setting the groundwork for the Visualizer will be the physics simulation, the videos produced by this simulation have to be compatible with everything developed for image processing. So having the digital visualization match the same parameters as real-life footage is predicted to be a delicate and tedious task. It is expected that the camera angle may be adjusted multiple times during the same playback, so that multiple angles may be captured of the same shot. This will allow Image Processing to be developed in a more robust, and consistent manner.\n",
    "description": "Project requirements specific to the simulation development",
    "tags": null,
    "title": "Simulation Requirements",
    "uri": "/Wiki/project-requirements/simulation/index.html"
  },
  {
    "content": " Luke Dodson, Bryce Neptune, Enoch Sam, Ian Viveiros SmartDot Simulation The SmartDot Module will be a small device that can be placed in the finger insert of a bowling ball. It will record rotational and positional data about each ball throw and transmit this data via bluetooth to the mobile device. The SmartDot will have two sensors: an 3-axis accelerometer and an ambient light sensor. The light sensor will be used to detect start up conditions by sensing light-to-dark and dark-to-light transitions. It will also help record rotational information by sensing when the ball is pointing up (light) and when the ball is pointing down (dark). The accelerometer will sense the translational acceleration (positional data) and the axis tilt (rotational data). The SmartDot will also have memory to store at least twenty-five samples of each sensor which is equal to twenty-five throws. The SmartDot will also have a bluetooth transmitter that will communicate with the mobile device through the ISmartDot interface. The ISmartDot interface will have several methods. It will have a couple methods for the mobile device to connect with the SmartDot module. It will also have read and write methods for sending and receiving data from the SmartDot. And finally, it will have methods for sending commands to the SmartDot. These commands will be strings. This will make the system more modular. These methods will define the communication between the SmartDot module and the mobile device.\nISmartDot Interface /// \u003csummary\u003e /// Interface representing the basic functionality of the Bluetooth connection between the mobile application and a SmartDot implementation (Simulator \u0026 Hardware) /// \u003c/summary\u003e public interface ISmartDot { /// \u003csummary\u003e /// Attempts to create a connection to the SmartDot hardware /// \u003c/summary\u003e /// \u003cparam name=\"connectionParameters\"\u003eConnection parameters\u003c/param\u003e /// \u003creturns\u003eversion representing the SmartDot hardware version (APIs use), null if unable to connect\u003c/returns\u003e public Task\u003cVersion?\u003e Connect(ConnectionParameters connectionParameters); /// \u003csummary\u003e /// Tests if the connection to the SmartDot hardware is present /// \u003c/summary\u003e /// \u003creturns\u003eBoolean representing if there is a connection to SmartDot hardware\u003c/returns\u003e public Task\u003cbool\u003e IsConnected(); /// \u003csummary\u003e /// Asynchronous method to write one page to the SmartDot implementation /// \u003c/summary\u003e /// \u003cparam name=\"address\"\u003eThe page start address in memory\u003c/param\u003e /// \u003cparam name=\"buffer\"\u003eData (byte[]) to write to the SmartDot implementations page\u003c/param\u003e /// \u003cparam name=\"bytes\"\u003eLength of data to write from \u003cparamref name=\"buffer\"/\u003e\u003c/param\u003e /// \u003creturns\u003eA bool representing if call was successful\u003c/returns\u003e public Task\u003cSmartDotTransactionResult\u003e WriteBytes(long address, byte[] buffer, long bytes); /// \u003csummary\u003e /// Asynchronous method to read one page from the SmartDot implementation /// \u003c/summary\u003e /// \u003cparam name=\"address\"\u003eThe page start address in memory\u003c/param\u003e /// \u003cparam name=\"buffer\"\u003eRef data (byte[]) read from the SmartDot implementations page (will attempt to fill completely)\u003c/param\u003e /// \u003cparam name=\"bytes\"\u003eLength of data to read into \u003cparamref name=\"buffer\"/\u003e\u003c/param\u003e /// \u003creturns\u003eA bool representing if call was successful\u003c/returns\u003e public Task\u003cSmartDotTransactionResult\u003e ReadBytes(long address, ref byte[] buffer, long bytes); /// \u003csummary\u003e /// Sends a command to the SmartDot hardware /// \u003c/summary\u003e /// \u003cparam name=\"command\"\u003eThe string command to send to the SmartDot hardware\u003c/param\u003e /// \u003creturns\u003eResult from the command execution on the SmartDot hardware\u003c/returns\u003e public Task\u003cstring\u003e OutgoingSmartDotCommand(string command); /// \u003csummary\u003e /// Invokes \u003csee cref=\"IncomingSmartDotCommandCallback\"/\u003e. Should be executed only from the implementor. /// \u003c/summary\u003e /// \u003cparam name=\"command\"\u003eString command called from SmartDot hardware\u003c/param\u003e protected virtual void RaiseIncomingSmartDotCommand(string command) =\u003e IncomingSmartDotCommandCallback?.Invoke(command); /// \u003csummary\u003e /// Incoming command callback (from SmartDot hardware). Signals from the SmartDot hardware that something important happened. /// \u003c/summary\u003e public Action\u003cstring\u003e? IncomingSmartDotCommandCallback { get; set; } }/// \u003csummary\u003e /// Enum representing the transaction result state of a communication with SmartDot hardware /// \u003c/summary\u003e public enum SmartDotTransactionResult : byte { /// \u003csummary\u003e /// SmartDot transaction succeeded /// \u003c/summary\u003e SUCCESS, /// \u003csummary\u003e /// SmartDot transaction failed - unknown cause /// \u003c/summary\u003e FAILURE_UNKNOWN, /// \u003csummary\u003e /// SmartDot transaction failed - data corruption /// \u003c/summary\u003e FAILURE_PERMISSION_ERROR, /// \u003csummary\u003e /// SmartDot transaction failed - device disconnected /// \u003c/summary\u003e FAILURE_DISCONNECTED, /// \u003csummary\u003e /// SmartDot transaction failed - data corruption /// \u003c/summary\u003e FAILURE_DATA_CORRUPTION }Unity Visualizer The Unity Visualizer is a Unity simulation that contains a lane, a ball, gutters, and pins. The Visualizer will utilize built-in Unity physics as well as realistic implemented physics in order to make the simulation as accurate as possible to an actual throw. The SmartDot Simulator will be used inside the Visualizer to get new data. Once the Visualizer is complete, it will be used to generate video files and simulated data in order to test other components of the project.\nUnity Camera The Unity Camera is a virtual camera that will exist within the Unity Visualizer. This camera will be set up to record throws within the Visualizer and export the recording as a video file. The video can then be read by the file reader on the mobile device and analyzed by the Ciclops application. Having a simulated video will also allow the Frontend Team to test finding a ball path prior to using actual video footage of real throws.\nUnity Simulated Data The Unity Simulated Data will be data that is gathered from the Unity Visualizer. When the simulation is run, data about the ball’s position, velocity, acceleration, angular velocity, and light level will be recorded and sent to the SmartDot Simulator for testing.\nClass Methods Unity Camera startRecord() endRecord() getVideo() Unity Visualizer setLoft(float h) setInitialVelocity(Vector3 velocity) setCurrentVelocity(Vector3 velocity) setCurrentAngularVelocity(Vector3 angle) setThrowPos(float x, float angle) setBallType(int id) setPinsLeft(int[10] pins) setOilPattern(float[][] pattern) getPinsLeft() getThrowNumber() getThrowRotations() getThrowCurve() getThrowVelocity() exportSimVideo() exportSimBinaryData() start() rollBall() pauseVisualizer() Unity Simulated Data No methods Existing Binary Dump File No methods SmartDot Memory read(int page) write(int page, int byte) SmartDot Bluetooth Transmitter readPage(int page) readPage(int ball_record_page) writePage(int page, int byte, string data) setDefault() Ambient Light Sensor sample() get_cur_time() start_up() check_valid_activation() 3-Axis Accelerometer sample_x() sample_y() sample_z() get_cur_time() Real Time Clock get_cur_time() ",
    "description": "Project Analysis and Design specific to the simulation team",
    "tags": null,
    "title": "Simulation Team",
    "uri": "/Wiki/design-and-analysis/simulation/index.html"
  },
  {
    "content": "\rISmartDot InterfaceInformation about the ISmartDot interface\nSmartDot HardwareInformation about the SmartDot hardware\nSmartDot SimulatorInformation about the SmartDot Simulator\n",
    "description": "",
    "tags": null,
    "title": "SmartDot",
    "uri": "/Wiki/smartdot/index.html"
  },
  {
    "content": "",
    "description": "Information about the SmartDot hardware",
    "tags": null,
    "title": "SmartDot Hardware",
    "uri": "/Wiki/smartdot/smartdothardware/index.html"
  },
  {
    "content": "SmartDot Architecture ",
    "description": "Information about the SmartDot Simulator",
    "tags": null,
    "title": "SmartDot Simulator",
    "uri": "/Wiki/smartdot/smartdot-simulator/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Terms",
    "uri": "/Wiki/terms/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/Wiki/categories/index.html"
  },
  {
    "content": "Faculty Contributors Professor Donald Hake Dr. David Babcock Student Contributors Simulation / Graphics Team\nLuke Dodson Bryce Neptune Enoch Sam Ian Vivieros Frontend Development Team\nTheodore Bloomquist Thomas Bywaters Michael Hensel John Kettula Elizabeth Mains Backend Developement Team\nJordan Carvell Braden Fleming Victor Pineda Robert Wood ",
    "description": "",
    "tags": null,
    "title": "Credits",
    "uri": "/Wiki/more/credits/index.html"
  },
  {
    "content": "Welcome to RevMetrix Quick Links How to contribute Initial Project Status Project Milestones Current state of RevMetrix SmartDot Terms ",
    "description": "",
    "tags": null,
    "title": "RevMetrix",
    "uri": "/Wiki/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/Wiki/tags/index.html"
  }
]
