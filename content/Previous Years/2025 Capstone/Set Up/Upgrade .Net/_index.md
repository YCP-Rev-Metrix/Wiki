+++
title = ".Net Upgrade"
weight = 100
description = 'Instrucations'
+++

- Download the .NET SDK
  - https://dotnet.microsoft.com/en-us/download
  - Run installer
  - Open command prompt and run “dotnet” to confirm installation
  - Confirm Visual Studio is updated to the appropriate version (can be found on the SDK download page)
  - Check Version: Help → About Microsoft Visual Studio
  - Update: Help → Check for Updates → Update

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

- Install .NET Upgrade Assistant
  -  Visual Studio → Extensions → Manage Extensions…
  -  Search for .NET Upgrade Assistant
  -  Click Install
  -  Close Visual Studio
  -  Click Modify on the pop-up

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

- Open Visual Studio again
- Right Click on the project file (for our solution, its BackEnd.csproj, FrontEnd.csproj, and Test.csproj)
- Click Upgrade

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

- Select upgrade option
- Repeat steps 5-7 for each .csproj file
- Upgrade the .NET Maui version installed
  - Visual Studio → Tools → NuGet Package Manager → Manage NuGet Packages for Solution…

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

- Update Microsoft.Maui.Controls & Microsoft.Maui.Controls.Compatibility

