+++
title = "Mobile App"
weight = 100
description = 'Instrucations'
+++


- To setup the mobile application for development, follow these steps:
	1. Download and install Visual Studio 2022 Community Edition and Open the Visual Studio Installer.
	2. Select Modify and check the following (If all three options aren't available, you need to select UPDATE)
		- ASP.NET and web development
		- .Net desktop development
		- .NET Maui-platform App UI development
| ![Workloads](Workloads.png?width=40vw&lightbox=false) | 
|:--:|
	3. Select Modify (Either install while downloading, or download 1st then install)
	4. Launch Visual Studio 2022
	5. Clone the repository for the Mobile App: https://github.com/YCP-Rev-Metrix/Cellular.git
	6. Open the solution file in Visual Studio
	7. Navigate to Tools > Nuget Package Manager > Manage Nuget Packages for Solution
		- The following Nuget Packages need to be installed (if not already):
| ![NuGet Packages](NuGet.png?width=40vw&lightbox=false)
You are now ready to develop the mobile application!
|:--:|

- To deploy the app to an android phone, follow these steps:
	1. Open the settings app on the phone
	2. Click "About Phone" (bottom of the settings)
	3. Click "Software Information""
	4. Click "Build number 7 times
		- Enter your pin to confirm if prompted
		- Back out to the main settings page
	5. Scroll down to the bottom of settings to see Developer Option now enabled at the bottom
	6. Click "Developer Options"
	7. Scroll down and enable "USB Debugging"
The phone should now be ready for app deployment.
	8. Connect the phone to the computer using a USB cable
	9. If a prompt appears on the phone, select "Always allow from this computer" and click OK
	10. In Visual Studio, click the drop down with the green triangle that defaults to "Windows Machine"
	11. Under "Android Local Devices", select your phone
	12. Click the green triangle to run and it will deploy the app to the phone