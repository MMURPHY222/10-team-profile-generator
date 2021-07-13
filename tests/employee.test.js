// requires file set to be tested
const Employee = require("../lib/employee");

// description of overall grouping of tests
describe("employee test", () => {
    // individual test checking to see that get Name returns the correct name of the new employee
    it("should return correct name", () => {
        const emp = new Employee("Mark", "2", "mark@gmail.com");
        const name = emp.getName();
        expect(name).toEqual("Mark");
    });

    // individual test checking to see that get ID returns the correct id of the new employee
    it("should return correct id", () => {
        const emp = new Employee("Mark", "2", "mark@gmail.com");
        const id = emp.getId();
        expect(id).toEqual("2");
    });

    // individual test checking to see that get email returns the correct email of the new employee
    it("should return correct email", () => {
        const emp = new Employee("Mark", "2", "mark@gmail.com");
        const email = emp.getEmail();
        expect(email).toEqual("mark@gmail.com");
    });

    // individual test checking to see that get Role returns the correct role of the new employee
    it("should return employee", () => {
        const emp = new Employee("Mark", "2", "mark@gmail.com");
        const role = emp.getRole();

        expect(role).toEqual("Employee")
    })

});