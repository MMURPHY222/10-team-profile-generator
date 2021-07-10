const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// console.log(Employee);
// console.log(Manager);
// console.log(Engineer);
// console.log(Intern);

// let Mark = new Employee("Mark", "34589", "Mark@email.com");

// console.log(Mark);

// console.log(Mark.getName());

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
        console.log(answers);
        if(answers.type == "Engineer") {
            engQs();
        } else if (answers.type = "Intern") {
            intQs();
        }
    });
}

// runs based on choice, - uses inquirer to prompt engineer questions
function engQs () {
    inquirer
    .prompt(engineerQuestions)
    .then((engAnswers) => {
        console.log(engAnswers);
        if(engAnswers.engType == "Engineer") {
            engQs();
        } else if (engAnswers.engType = "Intern") {
            intQs();
        }
    });
}

// also runs based on choice, - uses inquirer to prompt intern questions
function intQs () {
    inquirer
    .prompt(internQuestions)
    .then((intAnswers) => {
        console.log(intAnswers)
        if(intAnswers.intType == "Engineer") {
            engQs();
        } else if (intAnswers.intType = "Intern") {
            intQs();
        }
    });
}

// calls manager questions on page load
managerQs();