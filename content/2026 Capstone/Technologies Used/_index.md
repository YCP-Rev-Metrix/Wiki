+++
title = "2026 Technologies Used"
weight = 100
description = '2026 Capstone'
+++


### Technologies Used
The following is a list of all technologies used by the RevMetrix project, with descriptions of each technology and how it applies to the project.

### Raspberry PI 
The Raspberry Pi  is a computer used by the Ball Spinner Controller. The current implementation uses a Raspberry PI 4 as shown in Figure 1.3.1, but the Raspberry PI 3 is also compatible.

### MetaMotionS
The MetaMotionS is an inertial measurement unit that contains the same sensors as the proposed future SmartDot module. The MetaMotion module contains a gyroscope, accelerometer, magnetometer, barometer, temperature, and ambient light sensor, and it is currently being used to emulate the SmartDot module, which has not yet been constructed.

### CSVHelper
CSVHelper  is a C# .NET library that simplifies reading and writing CSV files, especially when working with POCOs. It maps CSV rows to POCOs or lists, provided the structure aligns and can write lists of POCOs with a simple WriteRecords() command. While not limited to POCOs, CSVHelper is integral to the RevMetrix project, where it efficiently handles parsing and writing local rev files stored as CSVs.

### Docker
Docker is an open-source platform designed to simplify application creation, deployment, and management. It uses containerization to package applications and their dependencies into lightweight, portable units called containers. These containers ensure consistency across different environments, making developing, testing, and deploying applications easier. Docker is widely used to streamline DevOps workflows and enable scalability in cloud-based environments.

### Digital Ocean
Digital Ocean  is a cloud service provider that allows developers to easily create and manage virtual servers, called droplets, to host websites, applications, and databases. These droplets can run various operating systems and applications, making it easy to deploy custom environments. Digital Ocean also offers features like load balancing, automatic scaling, and managed databases, which enable users to scale their infrastructure as needed while maintaining high availability. Digital Ocean is commonly used to host web servers, APIs, and other production services.

### Nginx Proxy Manager
Nginx Proxy Manager is a web-based interface for managing Nginx reverse proxy setups. It simplifies tasks like configuring proxy hosts, setting up SSL certificates (with Let's Encrypt), and managing multiple web applications on a single server without using the command line.

### .NET
.NET is a C# software development framework that supports cross-platform compilation. .NET will be used as the primary platform for application and cloud development due to its cross-platform nature.

### .NET MAUI
.NET MAUI is a multi-platform application framework that uses C# and XAML. As mentioned, it is compatible with Mac OS, Windows, iPhone, and Android. This technology will be used to create an application for Windows and Mac OS.

### xUnit
xUnit  is a .NET testing framework with native integration with Github, allowing automated testing after any push. This testing framework also supports creating base classes to reduce code duplication, such as creating an instance of the application every time a test runs.

### AutoCAD
AutoCAD is a powerful computer-aided design tool used to create detailed circuit schematics and custom electrical components. In this project, AutoCAD enables the development of accurate wiring diagrams, symbol libraries, and custom parts that support the system’s unique design requirements. Its ability to generate precise, organized circuit layouts makes it a valuable resource, ensuring clarity in documentation and reducing errors during implementation.

### ASP.NET
ASP.NET is a Microsoft framework for building web applications and APIs. It allows developers to create dynamic, scalable, and secure websites and services using .NET languages like C#. ASP.NET supports server-side and client-side development and includes routing, authentication, and data access features, making it a popular choice for enterprise-level web applications.

### Python
Python  is a high-level programming language designed for rapid development. In this project it will be used as the primary language for applications on the Raspberry Pi. Python is highly extensible and supports many libraries that enable the implementation of the Ball Spinner device.

### TINACloud
TINACloud  is an online application that allows users to digitally create and simulate circuits. TINACloud will be used to develop potential circuit designs and simulate the power regulation to confirm the integrity of crucial components such as the Raspberry PIs, as we are currently limited in supply.

### SolidWorks
SolidWorks is computer-aided design software used to design all kinds of products and run analyses on them. The primary use for SolidWorks is to run Finite Element Analysis (FEA) or simulation on the designed products. These simulations allow us to test the viability of certain components under loading conditions and detect weak points. 

### Onshape
Onshape  is cloud-native computer-aided design software for all kinds of products. It allows teams to collaborate on a shared design. The primary use of Onshape is to design parts and create designed parts assemblies. These assemblies can then be exported into SolidWorks for FEA simulations. 

### GitHub
GitHub is a cloud-based hosting website that uses Git, a version control software that enables developers to track changes and resolve conflicts. GitHub was used as the code repository for the various software components of the project, along with tracking changes to all software developed for the RevMetrix project.

### Draw.io
Draw.io is a free online diagramming tool. Within RevMetrix, It was used primarily for creating UML diagrams.

### Entity Framework Migration Tools
The Microsoft Entity Framework Migrations tools are a publicly available API that Microsoft provides for .NET C# projects, but more specifically .NET CORE server projects. These tools allow a developer to write C# class files for each table that is to be created, add properties to each class that correspond to the columns for each table, and then have the software automatically generate an SQL script file. This script file can then be used along with our Liquibase implementation to more securely add/remove/modify the Cloud database.

### Liquibase
Liquibase is a database management tool that allows developers to automate database updates and migrations. The software lies within the project, and provides command line control over updating the database. When issues arise, the software has automatic rollbacks, so there is no risk of losing live data.

### Postman
Postman is a software tool that allows developers to locally test API interactions without needing to use the browser. It provides the ability to easily create a request body in multiple data formats (JSON, plain text, etc.) as well as request headers. This software expedites the process of creating and testing new API endpoints.

### PyQt6
PyQt6 is a python library that is being used to create the Graphical User Interface (GUI)/Human Machine Interface (HMI) of the Ball Spinner Controller. It is a robust python framework that handles support for threading, subprocesses, and primarily building our user interface.

### PyQtGraph
PyQtGraph is a python library built on top of PyQt that is being used to graph the collected data within the Ball Spinner Controller.

### PyTorch
PyTorch is a python library maintained by Meta providing an API for defining a neural network and its function. It serves as an easy to use tensor operation framework for easy training setup, which automatically interfaces with NVIDIA/AMD GPU drivers, or can be used with the CPU (not recommended).

### IsaacSim
IsaacSim is a 3D scene creation application built by NVIDIA on top of their Omniverse 3D graphics engine. It is made for synthetic data collection, and hyper realistic environment creation for robots. We are simply using it for frame collection, and leveraging its state of the art domain randomization, photorealistic rendering capabilities, and ground truth object detection and segmentation labels. It has a well developed ecosystem for assets as it utilizes .USD scene format which is a layered format that is easy to port and develop with.

### Flutter
Flutter is an open source UI framework created by Google that allows developers to build cross platform applications from a single codebase. It uses the Dart programming language and a widget based system that gives developers a responsive environment with hot reload capabilities. Flutter simplifies the process for developing interfaces for different screen sizes and platforms. Flutter was chosen for its unified codebase between IOS and Android development, and its ability to create stand alone watch applications. 

### Dart
Dart is a client-optimized, open-source programming language developed by Google. Used by Flutter, it builds fast, reactive user interfaces across multiple platforms. Dart is fully object oriented and offers a clean syntax. With built in support for asynchronous programming, Dart can compile to both native machine code and Javascript, which is what allows for flexible use across different devices. 

### Kotlin
Kotlin is a statically typed programming language developed by Jetbrains. It offers concise syntax, powerful null-safety features, and seamless interoperability with existing Java codebases. Kotlin simplifies common programming tasks while improving readability. It integrates seamlessly with the Android ecosystem providing direct access to platform APIs, services and certain libraries. These things make it ideal for implementing Android specific features such as bluetooth permissions, foreground services, and background processes. 

### Android/iOS Launcher
The Android/iOS Launcher is a Visual Studio Code extension that acts as an interface to control and interact with pre-configured Android emulators via Android Studio and iOS simulators via Xcode on macOS. Allows for management and launch of these emulators directly from the Visual Studio development environment. This extension is being used to test our application without having to connect and test on a physical watch. 

### Swagger UI Documentation
Swagger UI Documentation is a system that allows for the generation of API usage documentation on runtime of a backend application. This documentation is useful for developers and users to have access to all of the information regarding how requests need to be sent and what sort of information will be returned to the client in a response.
