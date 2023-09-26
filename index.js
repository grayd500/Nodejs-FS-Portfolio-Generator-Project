// Import the 'inquirer' module
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for the user
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },

  {
    type: 'input',
    name: 'location',
    message: 'What city and state are you in?',
  },

  {
    type: 'input',
    name: 'bio',
    message: 'Tell us a little bit about yourself',
  },

  {
    type: 'input',
    name: 'linkedIn',
    message: 'Please provide a link to your Linkedin profile.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide a link to your github profile.',
  }
];

// Use inquirer to collect user input
function generateHTML(answers) {
    return `
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Your CSS goes here */
  </style>
</head>
    <body>
      <h1>${answers.name}</h1>
      <p>Location: ${answers.location}</p>
      <p>Bio: ${answers.bio}</p>
      <p>LinkedIn: <a href="${answers.linkedIn}">${answers.linkedIn}</a></p>
      <p>GitHub: <a href="${answers.github}">${answers.github}</a></p>
      <!-- More HTML here -->
    </body>
    </html>
    `;
  }

  // Use inquirer to collect user input
inquirer.prompt(questions)
.then((answers) => {
  console.log(answers);

  const fs = require('fs');

 // Write the HTML template to a file
 fs.writeFile('portfolio.html', generateHTML(answers), (err) => {
    if (err) throw err;
    console.log('Portfolio generated!');
  });
});
