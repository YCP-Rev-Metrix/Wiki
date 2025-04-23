+++
title = "2025 Technologies Used"
weight = 100
description = '2025 Capstone'
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

### Three.JS
Three.JS is a javascript framework that adds the ability to draw 3D environments inside a web page. Like Chart.JS, Three.JS is open source and can be deployed to any platform. Using Three.JS enables rapid development as the language it is based on is high-level and reduces the steps needed to get a simple environment running.

### xUnit
xUnit  is a .NET testing framework with native integration with Github, allowing automated testing after any push. This testing framework also supports creating base classes to reduce code duplication, such as creating an instance of the application every time a test runs.

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
