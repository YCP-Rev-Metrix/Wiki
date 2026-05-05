+++
title = "Ball Spinner Application"
weight = 100
description = 'Instrucations'
+++


### Downloading the Ball Spinner Application

- Visual Studio community 2022 link:
- https://visualstudio.microsoft.com/vs/community/
- Screenshot for what to select in visual studio installer: 

| ![Backend Arch](1.png?width=40vw&lightbox=false) | 
|:--:|

- When visual studio opens click “Clone Repository”:

| ![Backend Arch](2.png?width=40vw&lightbox=false) | 
|:--:|

- Enter this url into the “Repository location” field
- https://github.com/YCP-Rev-Metrix/BallSpinner-Application

| ![Backend Arch](3.png?width=40vw&lightbox=false) | 
|:--:|

- When the project opens, go to Tools - Nuget Package Manager - Package Manager Settings:

| ![Backend Arch](4.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](5.png?width=40vw&lightbox=false) | 
|:--:|

- For the name field, enter RevMetrix, and for the source, enter 
- https://nuget.pkg.github.com/YCP-Rev-Metrix/index.json
- n the same menu, go under Package source mapping


| ![Backend Arch](6.png?width=40vw&lightbox=false) | 
|:--:|

- When opening visual studio, you will be prompted to enter your github credentials. This is necessary in order to access some of the custom nuget packages.
- Enter the command dotnet workload restore to install required nuget dependencies for the project

| ![Backend Arch](7.png?width=40vw&lightbox=false) | 
|:--:|

- When asked if Visual Studio can make changes to your device, select yes.




### Troubleshooting Issues:

###### Ryan Issues

- If this window pops up

| ![Backend Arch](8.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](9.png?width=40vw&lightbox=false) | 
|:--:|

- Then toggle the button under Developer Mode

| ![Backend Arch](10.png?width=40vw&lightbox=false) | 
|:--:|

| ![Backend Arch](11.png?width=40vw&lightbox=false) | 
|:--:|

- Run these commands within the project directory:
- dotnet clean
- dotnet restore Frontend

| ![Backend Arch](12.jpg?width=40vw&lightbox=false) | 
|:--:|



##### Josh’s Setup issues:
- Today I got Visual Studio 2022 installed on my laptop. I copied both the Backend and Frontend repositories to my system. I was able to follow the wiki for setting up the backend. I learned that the frontend page has an old repository and informed everyone else. We got the correct repository link from Patrick. 

- Next we had an issue where any time any of the Juniors would run the frontend application, we would get an “Unauthorized” error. To fix this we had to get added to the RevMetrix GitHub. 

- After this the error message changed to a “Failed to retrieve information about 'RevMetrix.BallSpinner.Common.Api' from remote source 'https://nuget.pkg.github.com/YCP-Rev-Metrix/download/revmetrix.ballspinner.common.api/index.json'. Response status code does not indicate success: 403 (Forbidden)”. To solve this issue I had to start by following the steps from the image below to remove old github credentials from my laptop. 

| ![Backend Arch](12.png?width=40vw&lightbox=false) | 
|:--:|

- Next I had to generate a new personal access token in github and add the NuGet package to visual studio. For the token, I selected all the scopes and copied it to store somewhere safe. 
- Next I went back into visual studio and navigated to tools->NuGet Package Manager->Package Manager Settings->Package Sources. I clicked the plus icon as seen in the image below.

| ![Backend Arch](13.png?width=40vw&lightbox=false) | 
|:--:|

- In the source field at the bottom I input “https://nuget.pkg.github.com/YCP-Rev-Metrix/index.json”. After this I rebooted visual studio and was prompted with credentials. For the username I entered my github username, and for the password I pasted in the token I created. Next I tried to run the Ball Spinner application again and everything booted up fine! 

| ![Backend Arch](15.jpg?width=40vw&lightbox=false) | 
|:--:|


