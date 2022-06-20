// TODO: Include packages needed for this application
//import inquirer from 'inquirer'
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js"); 

// TODO: Create an array of questions for user input
const questions = [    
    {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'README Description: ',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation instructions: ',
    name: 'install',
  },
  {
      type: 'input',
      message: 'Usage information: ',
      name: 'usage',
  },
  {
      type: 'input',
      message: 'Contribution guidelines: ',
      name: 'contribute',
  },
  {
      type: 'input',
      message: 'Test instructions: ',
      name: 'test',
  },
  {
      type: 'list',
      message: 'License: ',
      name: 'license',
      choices: ['Apache 2.0', "Eclipse Public License 1.0", "MIT", "IBM"],
  },
  {
      type: 'input',
      message: 'GitHub Username: ',
      name: 'username',
  },
  {
      type: 'input',
      message: 'Email: ',
      name: 'email',
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
    .then((data) => {
        const fileName = 'README.md'; 
        writeToFile(fileName, generateMarkdown(data)); 
    });
}

// Function call to initialize app
init();

