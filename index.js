// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require('fs');
const path = require("path");
const generatorMarkdown = require('.util/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title?", 
    }

    ,{
        type: "input",
        message: "What is the project about?",
        name: 'Description', 
    }

    ,{
        type: "input",
        message: "Table of Contents",
        name: 'Table of Contents',
    }

    ,{
        type: "input",
        message: "What are the installtion instructions?",
        name: "Installation",
    }

    ,{
        type: "input",
        message: "How do you use this app?",
        name: "Usage",
    }

    ,{
        type: "input",
        message: "What license is being used?",
        name: "License",
    }

    ,{
        type: "input",
        message: "Who Contributed to this project?",
        name: "Contribution", 
    }

    ,{
        type: "input",
        message: "Are there any tests that need to be ran on this app?",
        name: "Tests", 
    }

    ,{
        type: "input",
        message: "Contact me if there are any questions.",
        name: "Questions",
    }

    ,{
        type: "input",
        message: "How do you use this app?",
        name: "Usage",
    }

    ,{
        type: "input",
        message: "What is your Github username?",
        name: "Username",
    }

    ,{
        type: "input",
        message: "What is youe email address?",
        name: "Email",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console(data)
        if (err) {
            return console.log(err)
        }else{
            console.log("success")
        }
        })
    }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}


// Function call to initialize app
init();
