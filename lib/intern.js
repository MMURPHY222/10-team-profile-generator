// require Employee because that is what is being extended 
const Employee = require("./employee");

// Intern constructor class extends employee
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;