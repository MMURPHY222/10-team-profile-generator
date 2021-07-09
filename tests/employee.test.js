const Employee = require("../lib/employee");

describe("employee test", () => {

    it("should return correct name", () => {
        const emp = new Employee("Mark", "2", "mark@gmail.com");
        const name = emp.getName();
        expect(name).toEqual("Mark");
    });

    it("should return correct id", () => {
        const emp = new Employee("Mark", "2", "mark@gmail.com");
        const id = emp.getId();
        expect(id).toEqual("2");
    });

    it("should return correct email", () => {
        const emp = new Employee("Mark", "2", "mark@gmail.com");
        const email = emp.getEmail();
        expect(email).toEqual("mark@gmail.com");
    });

    it("should return employee", () => {
        const emp = new Employee("Mark", "2", "mark@gmail.com");
        const role = emp.getRole();

        expect(role).toEqual("Employee")
    })

});