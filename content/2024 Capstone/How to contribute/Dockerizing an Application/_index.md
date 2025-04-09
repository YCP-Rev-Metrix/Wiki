+++
title = "Dockerizing an Application"
weight = 100
description = 'Information on how to dockerize a project and deploy onto a separate machine or server'
+++

### Overview
Docker is a tool used to encapsulate an application and its development enviornment.  Rather than transferring the entire application when deploying it to a server, one can simply create a Dockerfile in their project's directory and specify what to include in the encapsualted enviornment.  After testing the Dockerfile to see if it builds and runs successfully, once can then create a "docker-compose.yml" file, specifying the Docker compose format version (not the actual Docker version), project name, build configuration (including where to pull files from and the location of the Dockerfile previously created), Docker container name, ports to listen on, and Docker image name.  Once the docker-compose file builds successfully, the build configurations inside of it can be deleted out, and the docker-compose file can be run locally or transferred to a server machine that has docker installed.  After running the docker-compose file, the application should be running, and if it is a web application, the user should be able to visit it at the IP address (of the machine running the docker-compose file) and the port specified in the file.

### Prerequisites
Before completing any of the following steps, it is necessary to create a [Docker](https://www.docker.com/products/docker-hub/) account.  After creating an account, download [Docker Desktop](https://www.docker.com/products/docker-desktop/) to easily manage containers and images that are created throughout the process below.

### Creating A Dockerfile For An Application
To begin the dockerization of an application, a Dockerfile must be created.  Open up the development enviornment of the application and create a file named `Dockerfile` (no extension) in the root directory of the project.  The exact layout of a Dockerfile is specific to every project, but can be modified easily to work with any project.  A base Dockerfile for a Python application developed in a Linux Ubuntu 20.04 enviornment would look something like the following:

```Dockerfile
FROM ubuntu:22.04 
COPY . /app
RUN make /app
CMD python /app/<ApplicationName>.py
```

The Dockerfile above creates one layer per instruction:

- `FROM` creates a layer from the ubuntu:22.04 Docker image.
- `COPY` adds all of the files (because of the "." specified) from the Docker client's current directory.
- `RUN` builds the application with make.
- `CMD` specifies what startup command to run within the container.

When you run an image and generate a container, you add a new writable layer, also called the container layer, on top of the underlying layers. All changes made to the running container, such as writing new files, modifying existing files, and deleting files, are written to this writable container layer.

### Running The Application Using The Dockerfile
##### Building And Running The Dockerfile
After the Dockerfile for the application is created, navigate to the directory in which it was created and enter the following commands:

```s
docker build -t <ApplicationName> .
```

After building the application using the Dockerfile, go ahead and run the application with:

```s
docker run -p 8000:8000 <ApplicationName>
```

where the numbers after `-p` are the ports on which the application should run on.  The application should now be running on http://localhost:8000 if that port was originally open.  If not, try switching what port the application should run on.

##### Stopping The Dockerfile
To stop the application, simply hit `CTRL` + `C` to end the execution.

### Creating The Application's docker-compose File
Now that the project's Dockerfile is configured, built, and successfully running, it is time to create the docker-compose file.  In the same location as the Dockerfile created above, create a new file named `docker-compose.yml`.

A docker-compose file for the application above would look similar to the following:

```yml
version: '3'
services:
  <ApplicationName>:
    build:
      context: .
      dockerfile: Dockerfile
```

In the docker-compose file above, multiple things take place:

1. The version of the Docker compose format is specified as version 3.
2. A service by the name or the application (indicated by "ApplicationName") is defined to represent the application.
3. The build context is specified as the current directory where the Dockerfile is located using the context key (".")
4. The dockerfile key is set to "Dockerfile", the name of the Dockerfile to use when building the application.

##### Building The Application
After adding the above to the docker-compose file, open a new terminal session and enter the following command to build the application:

```ps
docker-compose build
```

##### Creating A Repository For The Image
Once the application is built using the above command, go to [DockerHub](https://hub.docker.com/) in a web browser and login to a Docker account.  From the dashboard, go to the Repositories tab in the top menu, then hit the "Create Repository" button on the page.  To create a new repository for the application, the following fields must be filled out, though the description is optional:

 - `Namespace` - Usually the username of the account, should autofill immediately and can be left as such
 - `Repository Name` - Can be anything, but it is good practice to name it the same as the application being dockerized
 - `Short Description` (optional) - Could be anything or left blank
 - `Visibility` (Public or Private) - Select Public if the image should be available to other Docker users to pull and run locally, Private otherwise

##### Editing The Docker Compose File
After an image is created in DockerHub, change the contents of the docker-compose file to the following, either deleting or commenting out the build configuration:

```yml
version: '3'
services:
  <ApplicationName>:
    image: <Namespace>/<RepositoryName>
    ports:
     - 8000:8000
```

In the reconstructed docker-compose file, the build is removed in order to run the application using the file.  This time, the file specifies the image location (the one created in DockerHub above) by the Namespace and RepositoryName set in the previous step, along with specifying which desired ports the application should run on.

##### Spinning Up The Docker Container
Now, go ahead and run the following command to run the docker-compose file:

```ps
docker-compose up
```

This command will spin up a Docker container for the application's image and begin running it on port 8000 of the machine that it is running on.

##### Stopping The Docker Container
After testing the application as much as desired, stop the application with the following command:

```ps
docker-compose down
```

After stopping the application, open the Docker Desktop application and if not already logged in, do so.  From the dashboard, navigate to the Images tab on the left side of the screen, and find the image created earlier in DockerHub in the Image menu.  To the right of the image's name ("Namespace/RepositoryName"), there is an Actions tab.  Under the Actions tab, click "Show image actions" (three vertical dots), then go ahead and click the "Push to Hub" button.  Now, the image created by the docker-compose file is available under the repository created on DockerHub earlier.

### Deploying The Docker Container On Another Machine
If the application is meant to be hosted on a different machine, the "docker-compose.yml" file can simply be transferred to the desired machine using any file transfer protocol.  However, since only the file needs to be transferred and not the entire application, it is easier just to create another file named "docker-compose.yml" on the desired machine and copy the contents of the most recent version to the new one.

*Note: Docker must be installed on the destination machine to run the Docker compose file.  Depending on what operating system is being used to host the application, [DockerDocs](https://docs.docker.com/engine/install/) has instructions on how to install Docker depending on the user's OS.

Once the Docker engine is installed on the destination machine and the Docker compose file has been created, the file can be run the same way as before:

```ps
docker-compose up
```

The above command runs the application but only until the terminal session is closed.  Once closed, the Docker runtime is killed off and the application is no longer running.  To avoid this, in the event that the goal is to run the application 24/7 (i.e. for a web application), run the Docker compose file in detached mode using -d the same as below:

```ps
docker-compose up -d
```

If the container was spun up successfully, the application will continue running after the terminal session is closed.

### Troubleshooting and Informational Commands
Below you can find a list of most of the useful troubleshooting and informational commands regarding Docker containers:

##### Container Status
To check the status of all Docker containers on a machine, enter the following command:

```ps
docker status
```

##### Check Which Containers Are Running
To check what containers are currently spun up on the machine, use the following command to get a list of them in the terminal:

```ps
docker ps
```

##### Printing Container Logs
The `docker ps` command will print out the ID, Image, Command, Created, Status, Ports, and Names fields of each container running.

If one wants to check the logs of a specific docker container currently running on the machine, it is easist to run the command above to see the container ID of the specific container that one wants the logs for.  Rather than typing in the entire ID into the following command, one only needs to enter the first character of the ID of the container that they wish to view the logs for.  For a container with the ID "5a2b3c4d5e6f", one can just enter the first character, "5", into the following command:

```ps
docker logs -f container-id
```

So after determining the ID of the container one wishes to view the logs for, say container with the ID "5a2b3c4d5e6f", the command to be run would be:

```ps
docker logs -f 5
```

In order to only print the last N log items, use the following:

```ps
docker logs -f container-id --tail N
```

##### Accessing the SQL Server
Use ```docker ps``` to determine the container id of the sql server instance.

Use ```docker exec``` to access the terminal of the sql server docker
```ps
docker exec -it <sql-server-container-id> /bin/bash
```

Login to the sql server using the following:
```ps
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P <sql password from dockerfile>
```

Use the desired database:
```sql
use [revmetrix-u];
GO
```

Execute desired sql commands:
```sql
select * from [User];
GO
```
