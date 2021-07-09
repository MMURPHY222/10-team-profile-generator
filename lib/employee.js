class Employee{
    constructor(namee, id, email) {
        this.name = namee;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return Employee;
    }
}

module.exports = Employee;