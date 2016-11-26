This will be a quickstart with all the basic command lines in order to use Git.

Link to the cheat sheet:

https://education.github.com/git-cheat-sheet-education.pdf

Another helpful command is the:

	git help -a

To get Started, Press the green "Clone or download" button 
Copy the link, which is "https://github.com/MarkusG92/GSE.git"

Go to your prefered Directory on your machine and use the command:

	git clone https://github.com/MarkusG92/GSE.git

This will create a local copy of the git project

Thats it, now you're already set up! :)

------------------------------------------------------------------------------

General Workflow:

	git pull
	git add filename
	git commit -m "your commit msg goes here"
	git push

------------------------------------------------------------------------------

In the Following the basic Commands are explained for working with a subversion tool:

Pull:

Usage:

	git pull

When to use: 
You want to start coding so you get the latest version of the project

------------------------------------------------------------------------------
Add:

Usage:

	git add filename

or to add all new files

	git add *

When to use:
You have created or edited a file and want to add it towards staging.

------------------------------------------------------------------------------
Remove:

Usage:

	git rm filename

When to use:
You want to remove a file which has no purpose anymore from the git project

------------------------------------------------------------------------------
Commit:

Usage:

	git commit -m "write your change notes here"

When to use:
You have edited a file or already added a new file and you want to commit it

------------------------------------------------------------------------------
Push: 

Usage:

	git push

When to use:
Send the changes you have made to the remote repository
