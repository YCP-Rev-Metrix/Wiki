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

### Local Development Environment
#### Overview
- The RevMetrix cloud team has created a local development environment that is consistent with the production environment, allowing developers to test new additions to the API and SQL server in an isolated environment. Using Docker, you will be able to run a local SQL server, and test additions to the SQL server using Liquibase. So please make sure to install Docker Desktop as it is necessary for local API development: https://www.docker.com/products/docker-desktop/.  An overview of the RevMetrix server infrastructure is pictured below:

| ![Backend Arch](6.png?width=40vw&lightbox=false) | 
|:--:|

- On the production server, each of these containers run in a separate Docker container, however with the local development environment only the Liquibase and SQL Server containers run in Docker. The API server is run from Visual Studio and connects to the SQL Server through the host machine's local network, which can be mapped to the SQL Server container’s network through a Docker bridge network. Please review the Server Infrastructure (NOTE FOR ANDREW LINK TO THE SERVER INFRASTRUCTURE PAGE) for information pertaining to the operation and purpose of each of these containers. 

#### Steps to Run Local Development Environment
- The following steps must be performed to run the local development environment (Note: The instructions assume you are running the local development environment in Windows. The local development environment has not been tested on any other OS, so to run the current local environment please use Windows):
    - Open Docker Desktop
        - On Windows, Docker Desktop needs to be open in order to run Docker containers. This is due to the fact that in order for Windows to run containers, it must do so on a Virtual Machine.
    - Open a command prompt, and change directory into the location where the BallSpinner-Cloud repository is located. Run the following command to startup the Docker containers: docker-compose up.
    - From here, you need to give the containers a little bit of time to start up, just around one minute or so. This is all related to the container’s operation and configuration, which is detailed in the Local Development Environment Configuration section of this page.
    - Once the containers have been completely initialized, run the API server from Visual Studio by clicking the Run button at the top of the IDE ensuring the Server module is selected with the https configuration as pictured below.
    
     | ![Backend Arch](7.png?width=40vw&lightbox=false) | 
    |:--:|

    - If everything is successful, the swagger UI should appear:

    | ![Backend Arch](8.png?width=40vw&lightbox=false) | 
    |:--:|

#### Integrating the Local Development Environment with the BSA

- If you wish to test endpoints via the BSA, you can do so using the local address of the API server after it has begun running. Notice in the image displaying the Swagger UI the https://localhost:7238/swagger/index.html. This is the URL for the UI, but you can use part of this URL to access the local API server, that being https://localhost:7238/swagger/api. Although this is not a perfect system (future developers should find a way of being able to utilize this connection string, say when a certain configuration is run instead of the manual process detailed below), to run the BSA application and have it use the local API server for testing, open the BSA repository and navigate to the CommonDatabaseUtilities.cs file. In the constructor, replace the BaseAPIURL with https://localhost:7238/swagger/api instead of the RevMetrix domain within the else if (this.dbType == DatabaseTypes.REALDATABASE) statement. This will force any client-side API endpoints to use the local API server, which can be incredibly useful for debugging, as you can place breakpoints within the API endpoint files and debug the endpoints.

#### Local Development Environment Configuration

- The local development environment configuration is defined within the docker-compose.yml file located in the BallSpinner-Cloud repository. It is pictured below:

| ![Backend Arch](9.png?width=40vw&lightbox=false) | 
    |:--:|

| ![Backend Arch](10.png?width=40vw&lightbox=false) | 
    |:--:|

- To learn more about docker compose and how to configure containers through it review the documentation here: https://docs.docker.com/compose/. However, to describe what is going on through this configuration, two services (or containers) are defined here: the sql-server container and the liquibase container.
    - sql-server container:
        - This container runs Microsoft's SQL Server 2019 and is used to host the database.
        - It uses the mcr.microsoft.com/mssql/server:2019-latest image, which is the official Microsoft SQL Server image on Docker.
        - The container is configured with two environment variables: SA_PASSWORD to set the system administrator password and ACCEPT_EULA to accept the End User License Agreement.
        - A volume (sql-data) is used to persist data at /var/opt/mssql, and the ./sql-scripts directory is mounted into the container to provide the init.sql script, which initializes the database. The persisted volume ensures any data contained in the SQL Server will persist even when the container is shut down. Meaning that when the docker-compose command is run again, any data saved while the SQL Server was previously run will remain.
        - The container listens on port 1433, mapping it from the container's internal port to the host machine's port, so it can be accessed externally by the API server.
        - The command ensures that the init.sql script is only executed if the revmetrix-bs database does not already exist. The script is executed using the sqlcmd utility, which is included in the container. The sleep 30 part of the command is necessary to ensure the sql-server container has had enough time to spin up the SQL Server before running SQL commands.

    - liquibase container:
        - The liquibase container uses the official liquibase/liquibase image and depends on the sql-server container.
        - It mounts the ./Liquibase/changelog directory into the container to access the Liquibase changelog file (changelog.xml), and the ./Liquibase/scripts/SQLScript directory which contains all of the liquibase formatted sql changesets. For the current configuration of liquibase, all of the changesets are contained within liquibase formatted sql instead of xml. For more information related to this, please view the Server Infrastructure (NOTE FOR ANDREW PLEASE LINK TO THE SERVER INFRASTRUCTURE SECTION) section.
        - The command specifies that Liquibase will run after a 60-second delay, giving enough time for the SQL Server to be fully initialized. It will then execute the update command on the revmetrix-bs database, applying any changes from the changelog.xml file to the database.
        - This service ensures that any database schema updates or changes defined in Liquibase are automatically applied after the SQL Server container is ready.

- Both containers are connected to a custom bridge network (web-network), allowing them to communicate with each other using their container names as hostnames (sql_server for the SQL Server container). The use of Docker volumes ensures that data and configurations persist across container restarts.

- In summary, this configuration sets up an environment where the SQL Server container is initialized with a script that creates the database (if not already created), and the Liquibase container updates the database schema according to predefined change logs.

- Through the ./Liquibase/changelog: and ./Liquibase/scripts/SQLScript: volumes contained within the BallSpinner-Cloud repository, you can add additional changesets which will be executed when the docker-compose command is run. This is useful as it allows developers to test database migrations before pushing to production, as the setup for liquibase and the sql-server mimic that of the production server. Furthermore, since the configuration runs liquibase on startup and the changsets contained locally match that of the server, it also ensures that the local SQL Server is up to date with the schema contained on the cloud whenever it is run. To see how changesets should be created, review the Server Infrastructure 
http://localhost:1313/2024-capstone/current-state-of-revmetrix/backend/#web-api---client-and-server section.

- Additionally, if you wish to directly access the local SQL server through your host machine, you can use SQL Server Management Studio 20. 

| ![Backend Arch](11.png?width=40vw&lightbox=false) | 
    |:--:|

- After opening SSMS and running the sql-server container ample amount of time to start up, you can log into the local SQL server using the configuration shown above.

- Server name: localhost, 1433
- Login: SA
- Password: Strong!PassMAN!!!

### Server Infrastructure
#### Overview

- The API server for the RevMetrix project is hosted on a DigitalOcean droplet, which is a VM that Digital Ocean provides its users for running computational workloads in the cloud. The main technology that the RevMetrix team uses to run its various services is Docker, which is a containerization platform. There are several other services that are run from the droplet, but this section is going to focus on the services related to the API server. Below is an overview of the current server infrastructure relevant to the APi server:

| ![Backend Arch](12.png?width=40vw&lightbox=false) | 
    |:--:|

- Each block represents a separate Docker container and each arrow represents a connection (unidirectional means the container A interacts with container B but not vice versa and bidirectional means both containers send information back and forth) between two containers that communicate through a Docker network. These containers communicate over a Docker network, which acts as a virtual communication channel. By default, this is often implemented as a bridge network on the host, which allows containers to resolve and connect to each other by name and route traffic internally without exposing ports externally. Regarding the containers, there is the API container which runs the API server, the SQL Server container which runs the SQL Server, and a liquibase container that is responsible for running database migrations on the SQL Server (more on that below). 

- Firstly, in order to access the digital ocean droplet, you must be added to the RevMetrix organization in Digital Ocean, so be sure to ask to be added. Once you are within the organization, you are able to launch the droplet console, allowing you to work directly on the server. To see how to do this, please view the Managing a Droplet http://localhost:1313/2024-capstone/current-state-of-revmetrix/backend/#web-api---client-and-server section of the Wiki.

#### Important Files and Directories for the API

- From the root directory, you will notice several folders containing services that are run from the VM. For this section, we will only be discussing what is contained within the ballSpinnerAPI folder. Within this folder, you will see the following items:

| ![Backend Arch](13.png?width=40vw&lightbox=false) | 
    |:--:|

- There is a docker-compose.yml file that contains the configuration for the SQL Server and the API server, there is a folder containing anything relating to liquibase, a redeploy script (which is utilized by the CI/CD), and a sql-scripts folder which is mounted to the sql-server container through a volume. For security purposes, I am not going to display the docker-compose file, but it contains the definition for the API server and the SQL server, and allows the two to communicate through a Docker network. The Docker network allows the two containers to communicate privately without needing to be exposed to the public internet, as for the SQL Server having a port exposed publicly is a security vulnerability. The redeploy.sh script is run by the CI/CD pipeline whenever additions are made to the API containers docker image. The purpose of the script is to stop the API and SQL server containers, update the API container image, and rerun the docker-compose command so that the API server can contain the new code that was pushed to the main branch. The sql-scripts folder contains a database redeploy script that is mounted to the sql-server container through a docker volume. This database redeploy script can be run by executing the sql-server container (look into the docker exec -it command to see how to do this) and running the script using the sqlcmd utility. The sqlcmd utility can be used to run SQL commands on the SQL server hosted on the container. See the following documentation to learn how to use it 
- https://learn.microsoft.com/en-us/sql/tools/sqlcmd/sqlcmd-utility?view=sql-server-ver16&tabs=go%2Cwindows%2Cwindows-support&pivots=cs1-bash. 
- The point of the database redeploy script is to delete the database and recreate it as an empty database. Since the RevMetrix project’s database is at a very early stage in development and the data contained within the database is not currently needed, deleting and recreating the database is an acceptable action to take if corruption ever occurs. This may not be true whenever you may read this in the future, so make sure you confirm this with the project managers before running it. Ideally, after running the script one should run liquibase to recreate the current database schema on the empty database.

#### Liquibase

- That brings us to how exactly liquibase is used on the cloud. Liquibase is a software that runs and manages database migrations. Think of it like git for databases. It allows developers to version control their database, with each version containing new changes for a schema. The liquibase folder contains the following elements:

| ![Backend Arch](14.png?width=40vw&lightbox=false) | 
    |:--:|

- The docker-compose.yml file contains the configuration for liquibase. When docker-compose is run in this directory, it spins up the liquibase container where liquibase can connect to the sql_server container though a Docker bridge network defined as web-network. This internal network allows the liquibase container to communicate directly with the sql-server container without exposing the SQL server to the public internet.

- Once the liquibase container is up, the liquibase container connects to the SQL Server then runs Liquibase against it using a connection string that targets the sql_server service name within the Docker network. Liquibase reads from a changelog.xml file located in the Liquibase/changelog folder. This changelog file defines the changesets that should be executed on the database. In this setup, there is currently only one changeset defined in the changelog file, and it references a .sql script located in the Liquibase/scripts/SQLScript folder.

- Rather than embedding each change directly into the XML file, this configuration uses SQL-formatted changesets, meaning the actual database changes are written in raw SQL inside the referenced script file. Each changeset in the SQL file is separated by a –changeset RevMetrix:ChangeSet#, where “ChangeSet#” represents the unique id associated with the changeset and RevMetrix represents the user executing the change. Liquibase processes this file and executes each changeset in sequence. These changes are tracked in a special DATABASECHANGELOG table inside the SQL Server database to ensure that each changeset is only run once. Meaning that when this container is spun up multiple times, it will only execute new changesets.

- When working with SQL-formatted changesets, it is important to never modify previously applied SQL changesets. Liquibase calculates a checksum for each changeset, and any changes to an already-applied script will result in a checksum mismatch and an error. To apply new changes, you should create a new SQL file (e.g., changeset-002.sql) and then add a new <changeset> entry in the changelog.xml that points to this new file. This ensures a clear, auditable history of all database changes over time.

#### How to Run Liquibase in the Cloud

- The modular approach described above makes Liquibase a powerful tool for managing schema migrations in a CI/CD pipeline or multi-developer environment, especially when used alongside containerized setups like Docker Compose. Although this was not exactly the approach taken at the time of writing this documentation (all changesets were applied to the same SQL file), this is the recommended approach to ensure proper versioning management and to mitigate errors when running database migrations. 
- Currently, database migrations need to be handled manually by adding new changesets and spinning up the liquibase container through navigating to the ballSpinnerAPI/liquibase directory and running the command docker-compose up which will run the update command and only apply the new changesets to the database. This is not a part of the CI/CD pipeline, although it should be added in order to simplify database migrations through automation.

#### CI/CD

- CI/CD (Continuous Integration and Continuous Deployment) is a modern development practice that automates the process of building, testing, and deploying code. Continuous Integration ensures that code changes from multiple developers are regularly merged into a shared repository and automatically tested to catch issues early. Continuous Deployment extends this by automatically pushing the tested code into production or staging environments, ensuring faster and more reliable releases with minimal manual intervention. The tool that we use for CI/CD pipeline is GitHub actions, which can be configured to run whenever code is pushed to a repository. In our case, we have it configured such that our pipeline runs whenever code is pushed to the main branch. Pictured below is the yml file that defines our pipeline:

| ![Backend Arch](15.png?width=40vw&lightbox=false) | 
    |:--:|
    
| ![Backend Arch](16.png?width=40vw&lightbox=false) | 
    |:--:|

- This GitHub Actions workflow enables Continuous Integration and Continuous Deployment (CI/CD) for the BallSpinner API. It automates the process of testing, building, and deploying the application whenever code is pushed to the master branch, ensuring consistent and reliable delivery.
- 1. Tests Job – Verifying Code Quality
- When a push is made to the master branch, the workflow starts by running tests:
    - It checks out the repository and sets up Docker.
    - It launches necessary containers (such as SQL Server) using docker-compose and waits for them to fully start. This uses the same docker configuration that is detailed in the Local Development Environment section, ensuring the sql-server contains the most up-to-date schema with the code that was pushed to the master branch.
    - The .NET 7 SDK is installed and the project is restored, built, and tested using the dotnet CLI. This ensures all relevant dependencies are installed so that the tests can run in the correct environment.
    - The test configuration is controlled by a custom .runsettings file. This file contains environment variables used for testing, mainly connection strings to the local SQL server.


- 2. Build Job – Creating the Docker Image
After tests pass, the build job begins:
    - It checks out the code again.
    - It logs in to Docker Hub using GitHub Secrets (DOCKER_USER and DOCKER_PASS) to securely authenticate without exposing credentials.
    - The Docker image is built using the provided Dockerfile and tagged as latest under the user's repository.
    - The image is then pushed to Docker Hub, making it available for deployment.


- 3. Deploy Job – Deploying to the Cloud
Once the Docker image is pushed:
    - The deploy job uses SSH credentials stored as GitHub Secrets (SERVER_HOST, SERVER_USER, and SSH_DROPLET_PRIVKEY) to connect securely to a DigitalOcean droplet.
    - It navigates to the appropriate directory and runs a custom redeploy.sh script to update the running API container.
    - This script pulls the latest image from Docker Hub (which was just pushed from the build job) and restarts the container, completing the deployment.

#### Why GitHub Secrets Matter
- GitHub Secrets are used throughout this workflow to securely handle sensitive information such as Docker Hub credentials and SSH access keys. This ensures credentials are never hardcoded or exposed in the repository, aligning with security best practices. You’ll notice several times throughout the workflow file there are ${{SECRETS.VARIABLE_NAME}} variables. You can add new secrets as well to a repository for any other sensitive information you want to include in a workflow. Please see this documentation for more information on how to add secrets to a Github repository: https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions.

#### Information on Creating Endpoints
- For information on how to create endpoints on the API server please view this page RevMetrix WebAPI 
http://localhost:1313/2024-capstone/current-state-of-revmetrix/backend/#web-api---client-and-server









