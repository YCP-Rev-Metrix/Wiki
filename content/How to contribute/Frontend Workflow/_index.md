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
![image1](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/f444f625-dbc4-467d-8abc-e5db5e32b667)

After your screen has refreshed, you should see a screen similar to the following screen below. After this has been done select New Issue:
![image2](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/07347520-4d8b-4b86-8dd3-d88e3510d412)

Give the issue a name and a description, and make sure to click Assign Yourself under the Assignees tab. 
![image3](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/f5cdef0a-1c92-4e78-8aaf-28c6d8f0836d)

After this is done, assign the issue a Label that is corresponding to whatever you are trying to implement (whether it’s patching a bug or adding new functionality) and click Submit New Issue.
![image4](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/69be8c70-0d0c-4706-bf9d-dd5e321df5f0)

This issue will eventually be connected with a branch but this can’t happen until that branch is created so onto our next topic:

---
### Creating a Branch
Run the following commands within a terminal window: 

git checkout -b {name of branch} <- creates branch locally

Ex: git checkout -b 8-update-gitignore 

git push origin {branch name} 

This branch will now show up on the Github repo on the website GUI, to ensure this branch is up to date with the master run the following commands within the same terminal:

git fetch

git merge origin/master

Once this is done be sure to associate the branch to an issue

---
### Linking an issue to a branch
Within the Issues tab click on the issue you previously created and click the gear next to the Development section on the right side. After clicking this gear, traverse through the Github repository and select your newly created branch.
![image5](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/151e30ed-f958-451b-93bc-c4c33d82f346)

This will allow you to close this issue once this branch has been PR’d into the master, as the branch should also then be deleted to create a new branch to tackle the next issue.
-Basically a branch is a temporary work space rather than a permanent one
-Create an issue->make a branch for it->Code a bunch->PR->delete->repeat

---
### Creating a Pull Request

Select the Commit section found in the top left section of the Rider tab, shown below:
![image6](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/fe5c1dd0-9809-40c9-9a3e-ca6ef6f1b966)

Select the files you would like to Commit (Found in Unversioned Files) and check their boxes. DO NOT commit .gitignore. Once they’ve been selected press Commit and Push… (If you selected Commit you must follow the instructions specified in {Section B} before trying to make a PR if you selected Commit and Push… feel free to ignore them)

After the changes have been Pushed to the remote branch, go to the Github repository website and you should see something like this:
![image7](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/4cfaabbd-6c97-4049-b0ee-dfad5f488239)

If you select Compare & pull request Github will automatically generate you a Pull Request that will pull your branch into master.

Once the pull request has been accepted and merged into master, delete your branch & issue as specified below.

### {Section B}
#### If you selected "Commit" you must follow these instructions before attempting to make a PR
Click on the Git button found in the bottom left section of the tab, shown below:
![image8](https://github.com/YCP-Rev-Metrix/Wiki/assets/98890475/886973a2-cfa6-41e1-85f1-7bd939e29739)

Once that has been opened, right-click on the Local branch that you’ve been working on (in this example it’s 18-Screentoscreen underneath the Local section) and select Push… 

Once your Local branch has been pushed to the Remote, the Remote branch will have all the changes that you have coded on your device and a Pull Request can be made.

---
### Deleting a Branch
Input these commands into your terminal:

Git branch -d {branchname} <- deletes branch locally

git push origin --delete {branchname}  <- deletes branch remotely
