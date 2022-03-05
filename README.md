# Weather-Journal App Project
## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 
The project is a web application that uses the web application programming interface and user data so that it works dynamically to show some data for a city such as the date and temperature in this city and to show the feeling of the user who entered the application
#  The Project folder #
 -1- commentsOnlyJS -> file
      app.js
      server.js
 -2- website  -> file
      app.js  
      index.html                                                     
      styles.css                                               
 -3- README.md                     
 -4- server.js
 # The Added Items to the given starter code  #
 -1- Create javascript codes in  (app.js) file
 -1- Create javascript codes in  (server.js) file 
 -3- change some of styles in css file (styles.css)
 # Node and Express Environemnt #
In this project we are using Node and Express environemnts. Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.The Express app instance should be pointed to the project folder with .html, .css, and .js files.
# Project Dependencies #
The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors(). The body-parser package should be installed and included in the project.
# Local Server #
Local server should be running and producing feedback to the Command Line through a working callback function.
# API Credentials #
Create API credentials on OpenWeatherMap.com or use existing API key inside 
# project steps #
 1- make the server javascript file , first do JS object to act as endpoint for all routes then give value to Listen Port and Require Express to run server and routes , use body-parser as middle-ware and make Cors for cross origin allowance then Initialize the main project folder finally Setup Server and  GET,Post request
 2- Added the get and post routes that returns and add data to projectData object.
 3- Singed up in OpwnWeatherMap to get API key and added it as a global variable at the top of the app.js code. Then used the key to to make a full URL to ask for the data
 4- After data retrieval from the OpenWeatherMap i posted it to the server to be saved in projectData object for later usage.
 5- Getting the data again from our server and using it to update our UI.
 6- Writing a javascript file and running it to test the code
# thanks #
