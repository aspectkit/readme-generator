const fs = require('fs');
const inquirer = require('inquirer');
const gm = require('./generateMarkdown')


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}


function init() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the project title?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the project description?",
            name: "description",
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "installation",
        },
        {
            type: "input",
            message: "What is the usage information?",
            name: "usage",
        },
        {
            type: "input",
            message: "What are the contribution guidelines?",
            name: "contribution",
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "test",
        },
        {
            type: "checkbox",
            message: "What License are you using?",
            choices: ["Apache", "GNU", "MIT", "None"],
            name: "license",
        },
        {
            type: "input",
            message: "Enter your Github username: ",
            name: "github",
        },
        {
            type: "input",
            message: "Enter your email address: ",
            name: "email",
        }
    ]).then((response) =>
        writeToFile("GeneratedREADME.md", gm(response))
    );
}

// Function call to initialize app
init();
