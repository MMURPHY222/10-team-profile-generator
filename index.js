const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let team = [];

// array containing objects  of all manager questions
let managerQuestions = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "manName",
    },

    {
        type: "input",
        message: "What is your manager's id?",
        name: "manId",
    },

    {
        type: "input",
        message: "What is your manager's email?",
        name: "manEmail",
    },

    {
        type: "input",
        message: "What is your manager's office number?",
        name: "manOffice",
    },

    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "type",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    },

]

// array containing objects of all engineer questions
let engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engName",
    },

    {
        type: "input",
        message: "What is your engineer's id?",
        name: "engId",
    },

    {
        type: "input",
        message: "What is your engineer's email?",
        name: "engEmail",
    },

    {
        type: "input",
        message: "What is your engineer's gitHub?",
        name: "engGitHub",
    },

    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "engType",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    },
]

// array containing objects of all intern questions
let internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "intName",
    },

    {
        type: "input",
        message: "What is your intern's id?",
        name: "intId",
    },

    {
        type: "input",
        message: "What is your intern's email?",
        name: "intEmail",
    },

    {
        type: "input",
        message: "What is your intern's school?",
        name: "intSchool",
    },

    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "intType",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    },
]

// function run on page load - uses inquirer to prompt manager questions
function managerQs() {
    console.log("Please build your team.")
    inquirer
    .prompt(managerQuestions)
    .then((answers) => {
        let manager = new Manager(`${answers.manName}`, `${answers.manId}`, `${answers.manEmail}`, `${answers.manOffice}`);
        team.push(manager);

        switch(answers.type) {
            case "Engineer":
                engQs();
                break;
            case "Intern":
                intQs();
                break;
            case "I don't want to add any more team members":
                console.log("Thank you we will now make your team");
                makeHTML(team);
                break;
            default:
                console.log("Something went wrong please start over");
        }

        // makeManager(answers);
    })

}

// runs based on choice, - uses inquirer to prompt engineer questions
function engQs () {
    inquirer
    .prompt(engineerQuestions)
    .then((engAnswers) => {
        
        let engineer = new Engineer(`${engAnswers.engName}`, `${engAnswers.engId}`, `${engAnswers.engEmail}`, `${engAnswers.engGitHub}`);
        team.push(engineer);

        switch(engAnswers.engType) {
            case "Engineer":
                engQs();
                break;
            case "Intern":
                intQs();
                break;
            case "I don't want to add any more team members":
                console.log("Thank you we will now make your team");
                makeHTML(team);
                break;
            default:
                console.log("Something went wrong please start over");
        }
    });
}

// also runs based on choice, - uses inquirer to prompt intern questions
function intQs () {
    inquirer
    .prompt(internQuestions)
    .then((intAnswers) => {
        
        let intern = new Intern(`${intAnswers.intName}`, `${intAnswers.intId}`, `${intAnswers.intEmail}`, `${intAnswers.intSchool}`);
        team.push(intern);

        switch(intAnswers.intType) {
            case "Engineer":
                engQs();
                break;
            case "Intern":
                intQs();
                break;
            case "I don't want to add any more team members":
                console.log("Thank you we will now make your team");
                makeHTML(team);
                break;
            default:
                console.log("Something went wrong please start over");
        }
    });
}

function makeHTML(team) {
    console.log("IM MAKING THE HTML");
    console.log("This logs the team array correctly " + team);

    const HTMLPageContent = writeHTML(team);

    fs.writeFile('index.html', HTMLPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
}

const writeHTML = (team) =>
    `this is it guys ${team}`;

// calls manager questions on page load
managerQs();