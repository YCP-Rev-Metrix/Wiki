var relearn_search_index = [
  {
    "content": "Architecture Initial Database Architecture Local Database (Localhost) Local Database Schema User Database (Cloud Server) User Database Schema Raw Database (Cloud Server) Raw Database Schema ",
    "description": "UML diagrams representing the initial database architecture and schemas",
    "tags": null,
    "title": "Backend - Database Architecture",
    "uri": "/Wiki/initial-project-status/initial-database-architecture/index.html"
  },
  {
    "content": "",
    "description": "All details about the current state of the backend development, along with what is planned for the future",
    "tags": null,
    "title": "Backend Development - Current State",
    "uri": "/Wiki/current-project-status/backend/index.html"
  },
  {
    "content": "Contributing documentation is pretty straightforward, follow this basic guide to learn how.\nA brief history This page was built with the Hugo framework \u0026 static site generator using the Relearn theme and hosted on GitHub Pages. Every commit to the main branch will trigger a GitHub Action, causing the page to rebuild itself. This takes only a minute or two before the changes are updated. This structure provides a beautiful site, solid uptime, and the ability to even make edits in the GitHub web editor.\nEditing existing pages Navigate to the page that you would like edit and select the icon in the top right of the page. See Learning the syntax for more information on making edits.\nCreating new pages \u0026 sections Create a new folder, named whatever you want inside of content/\u003cdesired location\u003e. Create a new file here named _index.md, this file will contain your page’s content. If sub-pages are desired, add a new file titled \u003cfilename.md\u003e inside of your newest folder. See Relearn Theme Docs for better documentation.\nLearning the syntax The syntax used here can be as simple as Markdown (Discord uses this), however, may get more advanced if you want something fancy.\nThe following two guides are excellent sources for learning Markdown:\nRelearn Theme Docs Markdown Docs This framework also allows the use of HTML code instead of Markdown, however, Shortcodes may be better suited to what you want to do.\nThe following two references may help you learn the Shortcodes that may be used:\nRelearn Shortcodes Hugo Shortcodes Making local edits In order to make local edits on your own machine, we will need to follow a couple of steps:\nInstall Git if you do not already have it Install Hugo (Extended edition) Install Go Clone https://github.com/YCP-Rev-Metrix/Wiki.git in your favorite IDE or terminal Open a Git terminal in the directory of your new repository. For VS users, this can be (Toolbar) Git \u003e Open in command prompt Launch a live server by calling hugo serve (git or wsl terminal) Navigate a browser to http://localhost:1313/Wiki Make changes (mostly in content directory). After saving, you should see the page refresh live. After making your changes, push or merge your changes back up to the main branch. Your changes will now be reflected on the WWW in a few minutes. ",
    "description": "How to add, edit, and remove documentation",
    "tags": null,
    "title": "Contributing Documentation",
    "uri": "/Wiki/how-to-contribute/contributing-documentation/index.html"
  },
  {
    "content": "\rBackend Development - Current StateAll details about the current state of the backend development, along with what is planned for the future\nFrontend Development - Current StateAll details about the current state of the frontend development, along with what is planned for the future\nSimulation Development - Current StateAll details about the current state of simulation development, along with what is planned for the future\n",
    "description": "The current status of each aspect of the project and what is to come",
    "tags": null,
    "title": "Current Project Status",
    "uri": "/Wiki/current-project-status/index.html"
  },
  {
    "content": "",
    "description": "All details about the current state of the frontend development, along with what is planned for the future",
    "tags": null,
    "title": "Frontend Development - Current State",
    "uri": "/Wiki/current-project-status/frontend/index.html"
  },
  {
    "content": "",
    "description": "How to clone the frontend repository and make changes",
    "tags": null,
    "title": "Frontend Workflow",
    "uri": "/Wiki/how-to-contribute/frontend-workflow/index.html"
  },
  {
    "content": "\rContributing DocumentationHow to add, edit, and remove documentation\nFrontend WorkflowHow to clone the frontend repository and make changes\nSimulation WorkflowHow to clone the simulation repository and make changes in Unity\n",
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
    "content": "The ISmartDot interface will allow a layer of abstraction between the Application and the SmartDot or SmartDotSimulator.\nThe sole function of this interface is to allow reading and writing from pages of memory stored on the SmartDot. As such, the interface will only have two functions, read \u0026 write.\n/// \u003csummary\u003e /// Interface representing the basic functionality of the Bluetooth connection between the mobile application and a SmartDot implementation (Simulator or Hardware) /// \u003c/summary\u003e public interface ISmartDot { /// \u003csummary\u003e /// Asynchronous method to write one page to the SmartDot implementation /// \u003c/summary\u003e /// \u003cparam name=\"address\"\u003eThe page start address in memory\u003c/param\u003e /// \u003cparam name=\"data\"\u003eData (byte[]) to write to the SmartDot implementations page (must not exceed page size)\u003c/param\u003e /// \u003creturns\u003eA bool representing if call was successful\u003c/returns\u003e public Task\u003cSmartDotTransactionResult\u003e WriteBytes(long address, byte[] data); /// \u003csummary\u003e /// Asynchronous method to read one page from the SmartDot implementation /// \u003c/summary\u003e /// \u003cparam name=\"address\"\u003eThe page start address in memory\u003c/param\u003e /// \u003cparam name=\"data\"\u003eRef data (byte[]) read from the SmartDot implementations page (will attempt to fill completely)\u003c/param\u003e /// \u003creturns\u003eA bool representing if call was successful\u003c/returns\u003e public Task\u003cSmartDotTransactionResult\u003e ReadBytes(long address, ref byte[] data); } /// \u003csummary\u003e /// Enum representing the transaction result state of a communicaiton with SmartDot hardware /// \u003c/summary\u003e public enum SmartDotTransactionResult : byte { /// \u003csummary\u003e /// SmartDot transaction succeeded /// \u003c/summary\u003e SUCCESS, /// \u003csummary\u003e /// SmartDot transaction failed - unknown cause /// \u003c/summary\u003e FAILURE_UNKNOWN, /// \u003csummary\u003e /// SmartDot transaction failed - data corruption /// \u003c/summary\u003e FAILURE_PERMISSION_ERROR, /// \u003csummary\u003e /// SmartDot transaction failed - device diconnected /// \u003c/summary\u003e FAILURE_DISCONNECTED, /// \u003csummary\u003e /// SmartDot transaction failed - data corruption /// \u003c/summary\u003e FAILURE_DATA_CORRUPTION }The SmartDotAPI will be responsible for interpreting data sent and received from an ISmartDot interface implementor by accessing the version # on the first memory page.\n",
    "description": "Information about the ISmartDot interface",
    "tags": null,
    "title": "ISmartDot Interface",
    "uri": "/Wiki/smartdot/ismartdot/index.html"
  },
  {
    "content": ".NET MAUI documentation: -Bluetooth Connection\n-NET MAUI General Documentation\n",
    "description": "Drawing board ideas for the layout and interaction methods of the phone application",
    "tags": null,
    "title": "Phone App - Proof of Concept",
    "uri": "/Wiki/initial-project-status/phone-app-proof-of-concept/index.html"
  },
  {
    "content": "",
    "description": "The base ideas around using Unity for the development of a bowling simulation",
    "tags": null,
    "title": "Simulation - First Thoughts",
    "uri": "/Wiki/initial-project-status/simulation-first-thoughts/index.html"
  },
  {
    "content": "",
    "description": "All details about the current state of simulation development, along with what is planned for the future",
    "tags": null,
    "title": "Simulation Development - Current State",
    "uri": "/Wiki/current-project-status/simulation/index.html"
  },
  {
    "content": "",
    "description": "How to clone the simulation repository and make changes in Unity",
    "tags": null,
    "title": "Simulation Workflow",
    "uri": "/Wiki/how-to-contribute/simulation-workflow/index.html"
  },
  {
    "content": "\rISmartDot InterfaceInformation about the ISmartDot interface\nSmartDot HardwareInformation about the SmartDot hardware\n",
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
