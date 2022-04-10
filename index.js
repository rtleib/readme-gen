// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'what is the title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'how would to describe your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'what kind of license would you like?',
    choices: ['Mozilla', 'MIT', 'Boost', 'None'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
