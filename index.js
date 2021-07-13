const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let team = [];
let managerTeam = [];
let internTeam = [];
let engineerTeam = [];
let bigString = "";

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

    console.log(team);
    // console.log("IM MAKING THE HTML");
    // console.log(team[0]);

    team.forEach(element => {
        if(element.getRole() == "Manager") {
            // makeManagerCard(element);
            // managerTeam.push(element);
            // console.log(makeManagerCard(element));
            bigString += makeManagerCard(element);

        } else if(element.getRole() == "Intern") {
            // makeInternCard(element);
            // internTeam.push(element);
            // console.log(internTeam)
            // console.log(makeInternCard(element));
            bigString += makeInternCard(element);

        } else if(element.getRole() == "Engineer") {
            // makeEngineerCard(element);
            // engineerTeam.push(element);
            // console.log(engineerTeam);
            // console.log(makeEngineerCard(element));
            bigString += makeEngineerCard(element);

        }
    })
        const HTMLPageContent = writeHTML();

    fs.writeFile('./dist/index.html', HTMLPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    }

    // console.log(managerTeam);
    // });



function makeManagerCard(manager){ 
    return `<div class="card my-style" style="width: 18rem;">
    <div class="card-body bg-info text-light">
      <h5 class="card-title">${manager.name}</h5>
      <p class="card-text">☕Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item"><a href="mailto:${manager.email}">Email</a></li>
      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
  </div>`
}

function makeInternCard(intern) {
    return `<div class="card my-style" style="width: 18rem;">
    <div class="card-body bg-info text-light">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text">🎓Intern</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item"><a href="mailto:${intern.email}">Email</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>`
}

function makeEngineerCard(engineer) {
    return `<div class="card my-style" style="width: 18rem;">
    <div class="card-body bg-info text-light">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text">👓Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item"><a href="mailto:${engineer.email}">Email</a></li>
      <li class="list-group-item"><a href="https://github.com/${engineer.github}">Github</a></li>
    </ul>
  </div>`
}

const writeHTML = () =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
      <title>Team Page</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid bg-danger">
    <div class="container">
    <h1 class="display-4 text-light">My Team</h1>
    </div>
    </div>
    <div class = "d-flex flex-row justify-content-around">
    ${bigString}
    </div>
    <footer>
    </footer>
    </body>`;



// const writeHTML = (team) => 
//     `what is this ${team}`

// calls manager questions on page load
managerQs();
