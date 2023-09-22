var relearn_search_index = [
  {
    "content": "",
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
    "content": "Contributing documentation is pretty straightforward, follow this basic guide to learn how.\nA brief history This page was built with the Hugo framework \u0026 static site generator using the Relearn theme and hosted on GitHub Pages. Every commit to the main branch will trigger a GitHub Action, causing the page to rebuild itself. This takes only a minute or two before the changes are updated. This structure provides a beautiful site, solid uptime, and the ability to even make edits in the GitHub web editor.\nEditing existing pages Navigate to the page that you would like edit and select the icon in the top right of the page. See Learning the syntax for more information on making edits.\nCreating new pages \u0026 sections Create a new folder, named whatever you want inside of content/\u003cdesired location\u003e. Create a new file here named _index.md, this file will contain your page’s content. If sub-pages are desired, add a new file titled \u003cfilename.md\u003e inside of your newest folder. See Relearn Theme Docs for better documentation.\nLearning the syntax The syntax used here can be as simple as Markdown (Discord uses this), however, may get more advanced if you want something fancy.\nThe following two guides are excellent sources for learning Markdown:\nRelearn Theme Docs Markdown Docs This framework also allows the use of HTML code instead of Markdown, however, Shortcodes may be better suited to what you want to do.\nThe following two references may help you learn the Shortcodes that may be used:\nRelearn Shortcodes Hugo Shortcodes Making local edits In order to make local edits on your own machine, we will need to follow a couple of steps:\nInstall Git if you do not already have it Install Hugo (Extended edition) Install Go Clone https://github.com/YCP-Rev-Metrix/Wiki.git in your favorite IDE or terminal Open a Git terminal in the directory of your new repository. For VS users, this can be (Toolbar) Git \u003e Open in command prompt Launch a live server by calling hugo serve (git or wsl terminal) Navigate a browser to http://localhost:1313/Wiki Make changes (mostly in content directory). After saving, you should see the page refresh live. After making your changes, push or merge your changes back up to the main branch. Your changes will now be reflected on the WWW in a few minutes. ",
    "description": "How to add, edit, and remove documentation on the Wiki",
    "tags": null,
    "title": "Contributing Documentation",
    "uri": "/Wiki/how-to-contribute/contributing-documentation/index.html"
  },
  {
    "content": "\rBackend - Current StateAll details about the current state of the backend development, along with what is planned for the future\nFrontend - Current StateAll details about the current state of the frontend development, along with what is planned for the future\nRevMetrix DiagramDiagram of the projects current state\nSimulation - Current StateAll details about the current state of simulation development, along with what is planned for the future\n",
    "description": "The current status of each aspect of the project and what is to come",
    "tags": null,
    "title": "Current Project Status",
    "uri": "/Wiki/current-project-status/index.html"
  },
  {
    "content": "",
    "description": "All details about the current state of the frontend development, along with what is planned for the future",
    "tags": null,
    "title": "Frontend - Current State",
    "uri": "/Wiki/current-project-status/frontend/index.html"
  },
  {
    "content": "Prerequisites Before making any changes or creating a branch, run git pull in your Visual Studo terminal to ensure you have the most recent changes.\nCreating Branch and Editing Type the following into your Visual Studio terminal to create a branch of the Github repository:\ngit checkout -b \u003cBRANCHNAME\u003e Once the branch is created, write your code and stage the changes. You will see something similar to the following when your changes are staged:\nCommit Changes In your VS terminal, enter the following command, where “” is your commit message, to commit your changes to your branch of the repository:\ngit commit -m \"\u003cMESSAGE\u003e\" Push Changes To finalize your commits, push them to your branch with the following command:\ngit push If there is an error pushing your changes to the branch, you will be given a command to run which fixes the issue.\nCreate Pull Request Instructions for creating a pull request can be found on Github’s documentation page here\nDelete Your Local Branch Once the pull request is accepted and has merged with the Test branch, run the following command in your Visual Studio terminal to delete the branch from your local machine:\ngit branch -d \u003cBRANCHNAME\u003e ",
    "description": "How to create a branch of the frontend repository and make changes",
    "tags": null,
    "title": "Frontend Github Workflow",
    "uri": "/Wiki/how-to-contribute/frontend-workflow/index.html"
  },
  {
    "content": "\rContributing DocumentationHow to add, edit, and remove documentation on the Wiki\nFrontend Github WorkflowHow to create a branch of the frontend repository and make changes\nSimulation Github WorkflowHow to create a branch of the simulation repository Test branch and make changes to it\n",
    "description": "",
    "tags": null,
    "title": "How To Contribute",
    "uri": "/Wiki/how-to-contribute/index.html"
  },
  {
    "content": "\rBackend - Database ArchitectureUML diagrams representing the initial database architecture and schemas\nPhone App - Proof of ConceptDrawing board ideas for the layout and interaction methods of the phone application\nSimulation - First ThoughtsThe base ideas around using Unity for the development of a bowling simulation\n",
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
    "content": ".NET MAUI documentation: -Bluetooth Connection\n-NET MAUI General Documentation\nInitial Design ",
    "description": "Drawing board ideas for the layout and interaction methods of the phone application",
    "tags": null,
    "title": "Phone App - Proof of Concept",
    "uri": "/Wiki/initial-project-status/phone-app-proof-of-concept/index.html"
  },
  {
    "content": " ",
    "description": "Diagram of the projects current state",
    "tags": null,
    "title": "RevMetrix Diagram",
    "uri": "/Wiki/current-project-status/revmetrix-diagram/index.html"
  },
  {
    "content": "",
    "description": "All details about the current state of simulation development, along with what is planned for the future",
    "tags": null,
    "title": "Simulation - Current State",
    "uri": "/Wiki/current-project-status/simulation/index.html"
  },
  {
    "content": "",
    "description": "The base ideas around using Unity for the development of a bowling simulation",
    "tags": null,
    "title": "Simulation - First Thoughts",
    "uri": "/Wiki/initial-project-status/simulation-first-thoughts/index.html"
  },
  {
    "content": "Making General Changes Swap the current Github branch to the Test branch: Click on the “Fetch Origin” button for the Test branch: Proceed to make the necessary changes for the Github Issue you are working on Review your changes in Github Desktop: Swap to your personal branch and bring the new changes over Include Github Issue # in the commit subject (i.e. Issue #12, new pin model) Commit your changes Go to the Github repository’s website and hit the New Pull Request button Make sure that your source and destination are both correct before creating the pull request This is (test \u003c– yourUsername) almost always Create pull request, then copy the link into the PR and send to Discord Make sure to tag the @Graphics Dev Team Approving Git Pull Requests Either check the current pull request on Github.com or click the link in Discord Open the Files Changed tab to review changes made Review changes, and if everything checks out, approve and submit review ",
    "description": "How to create a branch of the simulation repository Test branch and make changes to it",
    "tags": null,
    "title": "Simulation Github Workflow",
    "uri": "/Wiki/how-to-contribute/simulation-workflow/index.html"
  },
  {
    "content": "\rISmartDot InterfaceInformation about the ISmartDot interface\nSmartDot HardwareInformation about the SmartDot hardware\nSmartDot SimulatorInformation about the SmartDot hardware\n",
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
    "content": "",
    "description": "Information about the SmartDot hardware",
    "tags": null,
    "title": "SmartDot Simulator",
    "uri": "/Wiki/smartdot/smartdot-simulator/index.html"
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
    "content": "Welcome to RevMetrix Quick Links How to contribute Initial Project Status Current state of RevMetrix SmartDot ",
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
