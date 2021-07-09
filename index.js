const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

console.log(Employee);
console.log(Manager);
console.log(Engineer);
console.log(Intern);

let Mark = new Employee("Mark", "34589", "Mark@email.com");

console.log(Mark);

console.log(Mark.getName());