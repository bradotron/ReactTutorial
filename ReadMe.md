# Overview
The goal of this repository is to run through the basic setup of a Full-Stack Web Application. The app will take the form of a community blogging platform with very basic functionality. Users will be able to create, retrieve, update, and delete blog posts and comments.

## The Stack
### [MySQL](https://www.mysql.com/)
### [Express](https://expressjs.com/)
### [Node](https://nodejs.org/en/)
### [React](https://reactjs.org/)

# Pre-Requisites

## Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
Source control will save you. Commit early and often. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Install MySQL [MySQL](https://www.mysql.com/)

## Install [Node](https://nodejs.org/en/)

## Install [Yarn](https://classic.yarnpkg.com/en/)

## Confirm Installations
Open a terminal (git-bash.exe)

```
npm -v
node -v
yarn -v
```
If you receive any "unknown command errors" confirm you installed the software.

## Install Some Global Node Packages
Open your terminal, navigate to your projects/source directory and install a couple node packages globally.
```
npm install -g express-generator
npm install -g create-react-app
npm install -g concurrently
npm install -g nodemon
```
# Getting Started 
## Creating the Baseline/Template App
Open your terminal, navigate to your projects/source directory and install a couple node packages globally.

Use the Express Generator tool to scaffold an empty express application, without a view engine. The express application will be the back-end.
```
express --view=no-view ReactTutorial
```
Navigate into the newly created folder and scaffold an empty React application that will serve as the front-end.
```
cd ReactTutorial && npx create-react-app client
```
## Initialize Source Control
Create-React-App incluces the "git init" command in the script. First we need to clear out this nested repo. Using Windows Explorer, navigate to your project folder, into the client directory. Make sure you have 'view hidden' checked. Delete the .git folder.

Now we can create one git repository for the project. In the terminal, navigate to your project folder and initialize the git repository.
```
git init
```
### Create the Git Ignore File

In the terminal window, type:
```
touch .gitignore
```
This will create an empty file. Open this file with a text editor and paste in this rudimentary template. This will prevent any files with the extensions listed or in the directories identified from being included in your source control. This saves lots of space on any remote repository, and can be used to protect sensitive information (ports, database login information, crypto salts, etc.)

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.env
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
There are more comprehensive templates online, a quick google search will find them.

## Clean Up Un-needed Files
delete ReactTutorial/routes/index.js
delete ReactTutorial/public
delete ReactTutorial/views

# Prepare to Run the App
## Installing Dependancies
Node 

npm install
cd client && yarn install

## create .env file

touch .env

```
PORT = 12345
NODE_ENV = development
DEBUG = express:*
```

replace 12345 with whatever you like

open ReactTutorial/bin/www 
insert this at the top:

require('dotenv').config();

## update ReactTutorial/package.json
```
{
  "name": "reacttutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node ./bin/www",
    "start:dev": "concurrently \"nodemon ./bin/www --ignore 'client/*'\" \"npm run client\"",
    "client": "cd client && npm run start",
    "install": "cd client && yarn install",
    "build": "cd client && yarn && yarn run build"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "dotenv": "^8.2.0",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "if-env": "^1.0.4",
    "morgan": "~1.9.1"
  },
  "devDependencies": {
    "concurrently": "^5.1.0",
    "nodemon": "^2.0.2"
  }
}

```
## update ReactTutorial/client/package.json
  "proxy": "http://localhost:59441"
```
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.3.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
}

```

## update app.js
app.use(express.static(path.join(__dirname, 'client/build')));

```
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/users', usersRouter); 

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

module.exports = app;

```

make sure any API routs are above this handler 

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

# Setting up Local MSSQL Database
## Find Local Database Name
Open MSSM (Microsoft SQL Server Manager)
Click Cancel on the login
Click + next to Database Engine
Click + next to Local Server Groups
  note the name of the local server
  it should have a small green circle with an arrow in it 

## Enable TCP/IP Connection to Local Database
Windows Key > type "Computer Management"
Open Computer Management
Expand "Services and Applications"
Expand "SQL Server Configuration Manager"
Expand "SQL Server Network Configuration"
Click on Protocols for MSSQLSERVER
  In the tab to the right,
    right-click on "TCP/IP"
    select "Enable"

## Create A Database
Open MSSM
Connect to your local database Engine
In the "Object Explorer" Window, click the + next to your database
  Right-click the "Databases" folder, click "New Database"
  Input a name, write it down for later


# Adding a Database
## Update .env
To protect database names/usernames/passwords add some info to the .env file.
The username, password, and database should be for your local MSSQL Database Engine. Input the database name you created in the DB_DATABASE field.

```
DB_USER = username
DB_PASSWORD = password
DB_DATABASE = database
```

## Install Sequelize
```
npm install --save sequelize sequelize-cli
npm install --save tedious
```
### Delete the Config Folder
Since we are using the .env file, delete this folder.

## Add Some Models
Use this handy tool to create some models for this example:
https://sequelizeui.app/

Open the page. Click the </> Code button. Click "Download" in the top-right. Open the zip file and copy the "db" folder into your project directory. You should now see something like this in your project folder:

```
ReactTutorial/
  db/
    models/
      comment.js
      post.js
      tag.js
      user.js
    index.js
```

## db/index.js
Add this config object after the CommentModel import. Make sure to replacy 'YOUR_INSTANCE' with the database name you noted earlier.

```
let config = {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "dialect": "mssql",
  "dialectOptions": {
    instanceName: 'YOUR_INSTANCE',
    trustedConnection: true  
  }
};
```
Replace
```
const sequelize = new Sequelize({
  dialect: 'sqlite',
  store: ':memory'
});
```
With
```
const sequelize = new Sequelize(config.database, config.username, config.password, config);
```

## Update /bin/www
Update this file to first sync the models with the database, then start the express server.

From:
```
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
```
To:
```
/**
 * Sync the models with the database, then start the server
 */
models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening);
});
```

https://sequelize.org/master/manual/migrations.html

working from here to set up the migrations and seeders