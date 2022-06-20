// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
      type: 'input',
      message: 'License: ',
      name: 'license',
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
        writeToFile(fileName, data); 
    })
}

// Function call to initialize app
init();



inquirer
  .prompt([  //promise and we're waiting for user to answer all these questions below
  //name, location, bio, github url, linked url
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    }
])

.then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;


    const bioHTML = `<!DOCTYPE html>
    <html lang="en-US">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
      <title>About Me</title>
    </head>
    
    <body>
        <h1>Name: ${data.name}</h1>
        <h2>Location: ${data.location}</h2>
        <h2>Biography</h2>
        <p>${data.bio}</p>
        <h2>Github URL: ${data.github}</h2>
        <h2>LinkedIn URL: ${data.linkedin}</h2>
    </body>
    </html>`;

    console.log(bioHTML)

    fs.writeFile(filename, bioHTML, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });