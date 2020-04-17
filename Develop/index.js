
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// const api = require("./utils/api")



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
        name: "URL",
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
        type: "input",
        name: "license",
        message: "What kind of license should your project have?"
      },
      {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
      },
      {
        type: "input",
        name: "using",
        message: "What does the user need to know about using the repo?"
      },
      {
        type: "input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?"
      },
      
    ])
    
  };

  function generateReadMe(answers) {
    return `
  # ${answers.title} Project 
    By: ${answers.github}
  
  # Description:
    ${answers.description}

  # Table of Contents:
    
    * Installation 
    * Usage
    * License
    * Contributing
    * Tests


  # Installation

    ${answers.install}

  # Usage

    ${answers.using}


  # License

    ${answers.license}


  # Contributing

    ${answers.contributions}


  # Tests

    ${answers.tests}


  `;
  }
  

  promptUser()
    .then(function(answers) {
        const readME = generateReadMe(answers)
    
        return writeFileAsync("README.md", readME);
    })
    .then(function() {
        console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
        console.log(err);
    })



// return api.getUser()

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
