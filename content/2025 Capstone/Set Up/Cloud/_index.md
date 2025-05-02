+++
title = "Cloud"
weight = 100
description = 'Instrucations'
+++

### Publishing Nuget Packages
- Nuget is a package repository provided by Microsoft for .NET projects. It integrates very nicely with Github such that users can publish Nuget packages to a specific Github repo-sitory. This also enables permission-specific downloads related to NuGet packages, so no one outside of the Github organization can download or make changes to the Nuget package. For the RevMetrix project, we have our own Nuget package called RevMetrix.Ballspinner.Common.API. This package contains all classes defined within the Common module within the BallSpinner-Cloud repository:

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

- The Common module contains all of the POCO (standing for Plain Old Class Object) classes that are used for client-side/server-side ORM (object relational mapping). That is why we publish it as a Nuget package, so that the client-side ORM can match that of the server. This allows for consistency in terms of the database objects being sent to and from the server and also further simplifies API migrations that can easily be updated client-side through the Nuget package.

- In order to contribute to the RevMetrix.BallSpinner.Common.API Nuget package, you will need to first package the module (after you have made your necessary changes) and then you will need to use the dotnet nuget push command to push it to the RevMetrix repository. Before you can publish Nuget packages, you will need to create a nuget.config within the Common modules directory. A nuget.config file contains your credentials as well as the repository location that will be needed to properly push the package. Here is a template that you can use for the nuget.config file:



| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|


- This configuration file defines the repository location with the <packageSources>tag and contains your github credentials within the <add key> tag. Copy this file and place it into the Common directory and replace the “ClearTextPasswordKey” with a valid github token. As long as you are within the YCP-Rev-Metrix organization, you will be able to push to this repository. Refer to this documentation for creating Github tokens if you are unsure how to do so https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens. Make sure to at least provide read and write permissions to the token. IMPORTANT!!! MAKE SURE YOU INCLUDE THIS NUGET.CONFIG FILE INTO YOUR GIT IGNORE LIST BECAUSE IT CONTAINS YOUR TOKEN. From here, you are ready to contribute to the RevMetrix.BallSpinner.Common.API Nuget package.

- Here is how you package a module in Visual Studio:

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

- This is the .csproj file for the module. It defines the module as a Nuget package with the version 1.1.8, as denoted by the <Version> tag. When you are ready to pack the module, increment the version number and then right click on the module package and select pack:

| ![Backend Arch](5.png?width=40vw&lightbox=false) | 
|:--:|

- From a powershell window change the directory to go into the Common folder and run the command dotnet nuget push “bin/Debug/RevMetrix.BallSpinner.Common.API.1.1.9.nupkg” –source “github”. This will push the Nuget package to the RevMetrix repository using the nuget.config file created earlier for the source location and credentials. This package can then be installed on the application with the Nuget package manager.