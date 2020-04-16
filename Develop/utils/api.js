
const inquirer = require("inquirer");
const axios = require("axios");

//get username
const api = {
  getUser(username) {
    inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  //then console log response from github profile
    .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
      
        const email = res.data.email
        console.log(email)
        const profImage = res.data.avatar_url
        console.log(profImage)
      });    
   
  });

      
  }
};

module.exports = api;
