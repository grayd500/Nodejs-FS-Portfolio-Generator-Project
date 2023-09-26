// Import the 'inquirer' module
const inquirer = require('inquirer');

// Create an array of questions for the user
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});

// Use inquirer to collect user input
function generateHTML(answers) {
// Create an HTML template with user input
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        // Your CSS goes here
      </style>
    </head>
    <body>
      <h1>${answers.name}</h1>
      <!-- More HTML here -->
    </body>
    </html>
    `;
  }

  const fs = require('fs');

// Write the HTML template to a file
fs.writeFile('portfolio.html', generateHTML(answers), (err) => {
  if (err) throw err;
  console.log('Portfolio generated!');
});

