+++
title = "Frontend Github Workflow"
weight = 100
description = 'How to create a branch of the frontend repository and make changes'
+++

#There is an updated workflow that includes creating issues found in the shared Drive with the following filepath:
RevMetrix/Github Workflow Docs/RMX Frontend Workflow
I'll add this information into here later, I'm a little burnt out after making that document.

### Prerequisites
Before making any changes or creating a branch, run `git pull` in your Visual Studo terminal to ensure you have the most recent changes.



---
### Creating Branch and Editing
Type the following into your Visual Studio terminal to create a branch of the Github repository:
- `git checkout -b <BRANCHNAME>`    

Once the branch is created, write your code and stage the changes. You will see something similar to the following when your changes are staged:

![](staging.png?width=25vw&lightbox=false)

---
### Commit Changes
In your VS terminal, enter the following command, where "<MESSAGE>" is your commit message, to commit your changes to your branch of the repository:
- `git commit -m "<MESSAGE>"`

---
### Push Changes
To finalize your commits, push them to your branch with the following command:
- `git push`

If there is an error pushing your changes to the branch, you will be given a command to run which fixes the issue.

---
### Create Pull Request
Instructions for creating a pull request can be found on Github's documentation page [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

---
### Delete Your Local Branch
Once the pull request is accepted and has merged with the Test branch, run the following command in your Visual Studio terminal to delete the branch from your local machine:
- `git branch -d <BRANCHNAME>`
