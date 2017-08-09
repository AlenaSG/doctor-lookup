Weather-App-Node.

##Instalation Instrustions.

Create a file in the root folder .env with this content: exports.apiKey = "7b06a53a30e9798b45bc59fffe66416f"; Create an account at https://openweathermap.org/ to get your own API key.

Google Maps APIs from Google Doc

https://developers.google.com/maps/documentation/javascript/adding-a-google-map
##Doctors Office, August 9, 2017

By Alena Golovina

###Description
Doctors Office is a web app that helps you find a doctor if you have a medical issue. The user can input their condition in a form, submit the request with a click on a button and receive a list of doctors working with this issue.

###Setup/Installation Requirements

Clone the repository to your computer
Navigate into the project folder
Run the following commands:
$ npm install
$ bower install
Go to https://developer.betterdoctor.com/ and sign up to get a free API key
At the top level of the project directory, create a file called .env to store your API key
Inside the .env file, enter: exports.apiKey = "Your API key"; (Put your API key inside the quotes).
Run the following commands:
$ gulp build
$ gulp serve

###Code Specs

|Behavior-Plain English| Input|	Output
|User inputs their issue into the field and submits with a button.|medical issue -"headache", submit.|A list of doctors appears under the form.

###Support and contact details

If you have any questions please contact us.

###Technologies Used

JavaScript
Node.js
Bower
Gulp
JQuery
Bootstrap
SCSS
HTML

Copyright (c) 2017 Alena Golovina
