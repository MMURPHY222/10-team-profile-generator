// engineer constructor class extends employee
const Employee = require("./employee");

// Manager constructor class extends employee
class Manager extends Employee {
    constructor(namee, id, email, officeNumber) {
        super(namee, id, email);
        this.officeNumber = officeNumber
    }

    getOffice() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;