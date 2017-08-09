## Doctor Lookup 

_By Alena Golovina_
_August 9, 2017_

### Description
Doctor Lookup is a web app that helps you find a doctor if you have a medical issue. The user can input their condition in a form, submit the request with a click on a button and receive a list of doctors working with this issue.

### Setup/Installation Requirements

* Clone the repository to your computer
* Navigate into the project folder
* Run the following commands:
* $ npm install
* $ bower install
* Go to https://developer.betterdoctor.com/ and sign up to get a free API key
* At the top level of the project directory, create a file called .env to store your API key
* Inside the .env file, enter: exports.apiKey = "Your API key"; (Put your API key inside the quotes).
* Run the following commands:
* $ gulp build
* $ gulp serve

### Code Specs

|Behavior-Plain English| Input|	Output|
|---|---|---|
|User inputs their issue into the field and submits with a button.|medical issue -"headache", submit.|A list of doctors appears under the form.|

### Support and contact details

If you have any questions please contact us.

### Technologies Used

* JavaScript
* Node.js
* Gulp
* Bower
* JQuery
* HTML
* Bootstrap
* SCSS


### License
This software is licensed under MIT license.
Copyright (c) 2017 Alena Golovina
