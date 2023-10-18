+++
title = "Frontend Github Workflow"
weight = 100
description = 'How to create a branch of the frontend repository and make changes'
+++

### Prerequisites
Most of these instructions at JetBrains Rider specific, as that is what we are using to develop the Frontend Application.

---
### Creating an Issue
Go to the Frontend Github repository, using the following link: https://github.com/YCP-Rev-Metrix/FrontEnd/tree/master

Within this page click on the Issues tab, which should be found in the following location:
![image8](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/bd1298f7-43fb-4e86-88fb-742914410626)


After your screen has refreshed, you should see a screen similar to the following screen below. After this has been done select New Issue:
![image2](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/07347520-4d8b-4b86-8dd3-d88e3510d412)

Give the issue a name and a description, and make sure to click Assign Yourself under the Assignees tab. 
![image5](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/5cd079d3-456f-4a4f-b7d9-fe74afaaca67)

After this is done, assign the issue a Label that is corresponding to whatever you are trying to implement (whether it’s patching a bug or adding new functionality) and click Submit New Issue.
![image7](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/3fc83472-1372-4b30-9e89-ae8a41c0ce99)


This issue will eventually be connected with a branch but this can’t happen until that branch is created so onto our next topic:

---
### Creating a Branch
Run the following commands within a terminal window: 

`git checkout -b {name of branch}` <- creates branch locally

Ex:

`git checkout -b 8-update-gitignore` 

`git push origin {branch name}`

This branch will now show up on the Github repo on the website GUI, to ensure this branch is up to date with the master run the following commands within the same terminal:

`git fetch`

`git merge origin/master`

Once this is done be sure to associate the branch to an issue

---
### Linking an issue to a branch
Within the Issues tab click on the issue you previously created and click the gear next to the Development section on the right side. After clicking this gear, traverse through the Github repository and select your newly created branch.
![image3](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/746df549-3e4b-4c84-9a7e-e6569254114c)


This will allow you to close this issue once this branch has been PR’d into the master, as the branch should also then be deleted to create a new branch to tackle the next issue.
-Basically a branch is a temporary work space rather than a permanent one
-Create an issue->make a branch for it->Code a bunch->PR->delete->repeat

---
### Creating a Pull Request

Select the Commit section found in the top left section of the Rider tab, shown below:
![image4](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/b83306bd-f597-459a-9cc6-f26e5d4317f4)

Select the files you would like to Commit (Found in Unversioned Files) and check their boxes. DO NOT commit .gitignore. Once they’ve been selected press Commit and Push… (If you selected Commit you must follow the instructions specified in {Section B} before trying to make a PR if you selected Commit and Push… feel free to ignore them)

After the changes have been Pushed to the remote branch, go to the Github repository website and you should see something like this:
![image1](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/8d9f54e6-4323-4d36-bef5-739dd437d683)

If you select Compare & pull request Github will automatically generate you a Pull Request that will pull your branch into master.

Once the pull request has been accepted and merged into master, delete your branch & issue as specified below.

### {Section B}
#### If you selected "Commit" you must follow these instructions before attempting to make a PR
Click on the Git button found in the bottom left section of the tab, shown below:
![image6](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/14d4bc7d-b03e-4794-8bc9-d9ba4af3a02d)


Once that has been opened, right-click on the Local branch that you’ve been working on (in this example it’s 18-Screentoscreen underneath the Local section) and select Push… 

Once your Local branch has been pushed to the Remote, the Remote branch will have all the changes that you have coded on your device and a Pull Request can be made.

---
### Deleting a Branch
Input these commands into your terminal:

`git branch -d {branchname}` <- deletes branch locally

`git push origin --delete {branchname}`  <- deletes branch remotely
