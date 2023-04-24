// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } 
    else if (license == "Apache"){
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (license == "GNU"){
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == "MIT"){
        return "https://github.com/kitdhing/readme-generator/blob/main/LICENSE";
    } 
    else if (license == "Apache"){
        return "https://github.com/apache/.github/blob/main/LICENSE";
    }
    else if (license == "GNU"){
        return "https://github.com/collective/example.p4p5/blob/master/LICENSE.GPL";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license != "None"){
        return `The application is covered under the [${license}](${renderLicenseLink(license)}) License.`;
    } else {
        return "";
    }
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## License 
${renderLicenseBadge(data.license)}\\
${renderLicenseSection(data.license)} 



## Table of Contents
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
${data.github}\\
${data.email}`;
}

module.exports = generateMarkdown;
