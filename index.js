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


// BONUS

// Promises: A Promise in JavaScript represents a value that may not be available yet but will be at some point. It simplifies handling asynchronous operations over callbacks. The .then() and .catch() methods are used to handle resolved or rejected promises, respectively.
// Async/Await: This is syntactic sugar built on top of Promises, designed to make asynchronous code look and behave more like synchronous code. This is very useful for avoiding "callback hell."
// Event Emitters: In Node.js, you can use Event Emitters to handle asynchronous events. This is useful in scenarios where you want multiple parts of your application to react to the same asynchronous operation.
// Observables: This is an advanced concept and is part of the ReactiveX library. Observables are similar to promises but can be canceled and can return multiple values over time.