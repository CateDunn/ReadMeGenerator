
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// const api = require("./utils/api")
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your new project?"
      },
      {
        type: "input",
        name: "description",
        message: "Write a brief description of your project"
      },
      {
        type: "input",
        name: "table of contents",
        message: "Enter table of contents?"
      },
      {
        type: "input",
        name: "installation",
        message: "What are the directions for installation?"
      },
      {
        type: "input",
        name: "contributing",
        message: "Who will be contributing"
      },
      {
        type: "input",
        name: "tests",
        message: "??"
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "tests",
        message: "What is your email address?"
      },
      
    ]).then(function(response){
        console.log(response)
        fs.writeFile("README.md", response, function(err) {

            if (err) {
              return console.log(err);
            }
          
            console.log("Successfully created README!");
          
          });
    })
    
  };
  

  promptUser();
  
  
























// return api.getUser()

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
