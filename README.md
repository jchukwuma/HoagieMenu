# Hoagie Test App

This is a sample Hoagie front-end application to get an idea of how one can work on frontend projects at Hoagie.


## Install the necessary tools
To start, make sure you install the following:
1. [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. [Node.js](https://nodejs.org/en/download/)
1. [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
1. [Visual Studio Code](https://code.visualstudio.com/download) with the following extensions:
    1. [LiveShare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
    1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (this is not being used currently but will be useful in the future)

## Run the project
First, open the command line terminal and clone the repository in the directory of your choosing by typing
```
git clone git@github.com:HoagieClub/test-app.git
```
Then, open the new folder in Visual Studio code and through terminal. Once you're inside the folder (you can do e.g. `cd test-app`) run the following to install prerequisites and start the web server. 
```
yarn
yarn dev
```
If everything is right, you should get the following:
```
...
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
...
```
Now, head to http://localhost:3000/ and ensure you see a sample Hoagie website. If everything works (except authentication), you're good to go.