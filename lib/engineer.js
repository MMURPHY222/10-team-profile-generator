const Employee = require("./employee");

class Engineer extends Employee {
    constructor(namee, id, email, github) {
        super(namee, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    };

    getRole() {
        return Engineer;
    }
}

module.exports = Engineer;