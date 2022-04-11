// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }
  if (license === 'Boost') {
    return '[![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Mozilla') {
    return '(https://opensource.org/licenses/MPL-2.0)';
  }
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT';
  }
  if (license === 'Boost') {
    return '[Boost](https://www.boost.org/LICENSE_1_0.txt)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `
    ${license}
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  #### ${data.description}.
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [GitHub Username](#github-username)
  * [Contact Info](#contact-info)

  ## Installation
  #### ${data.installation}.
  ## Usage
  #### ${data.usage}.
  ## License
  ${renderLicenseSection(data.license)}
  ## Contribution
  #### ${data.contribution}.
  ## Tests
  #### ${data.tests}.
  ## Questions
  #### For additional questions, please contact me in this email address: ${data.questions}.
  ## GitHub Username 
  #### My username for GitHub is ${data.githubUsername}.
`;
}

module.exports = generateMarkdown;
