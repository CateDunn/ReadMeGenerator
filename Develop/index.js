
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "url",
        message: "Enter the URL of your project"
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Write a short description of your project"
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
          "MIT", 
          "GNU", 
          "Apache"
        ]
      },
      {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?"
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
      },
      
    ])

};


function generateMarkdown(answers) {
return `# ${answers.title} By: ${answers.github}
  
## Description: 

${answers.description}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation 
To use, install the following package(s): ${answers.installation}

## Usage

  ${answers.usage}

## License

${answers.license}

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg) ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

## Contributing

${answers.contributing}

## Tests

${answers.tests}

This was created by ${answers.github}
Check out the project at ${answers.url}
You can contact me at ${answers.email}


  `;
  }
  

  promptUser()
    .then(function(answers) {
        const readME = generateMarkdown(answers)
    
        return writeFileAsync("ReadMe.md", readME);
    })
    .then(function() {
        console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
        console.log(err);
    })





// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
