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
  
  This was created by ${answers.github}.
  Check out the project at ${answers.url}.
  You can contact me at ${answers.email}.
  
    `;
    }

module.exports = generateMarkdown;
