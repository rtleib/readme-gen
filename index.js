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
    message: 'what would you like to describe in the description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'what would you like to describe in the installation?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'what would you like to describe in the usage?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'what kind of license would you like?',
    choices: ['Mozilla', 'MIT', 'Boost', 'None'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'what would you like to describe in the contribution?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'what would you like to describe in the tests?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'what would you like to describe in the questions?',
  },
  {
    type: 'input',
    name: 'github username',
    message: 'please enter your link to your GitHub profile',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is a good email address to contact you for additional questions?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (error) => {
    if (error) throw error;
    console.log('success');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    // var markdown = generateMarkdown(answers)
    // console.log(markdown)
    writeToFile('README.md', generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
