const Manager = require("../lib/manager");

describe("manager test", () => {
    it("should return correct role", () => {
        const mom = new Manager("Mom", "10", "mom@moms.com", "1");
        const job = mom.getRole();
        expect(job).toEqual("Manager");
    })

    it("should return correct name", () => {
        const mom = new Manager("Mom", "10", "mom@moms.com", "1");
        const namee = mom.getName();

        expect(namee).toEqual("Mom");
    });

    it("should return correct id", () => {
        const mom = new Manager("Mom", "10", "mom@moms.com", "1");
        const id = mom.getId();

        expect(id).toEqual("10");
    });

    it("should return correct email", () => {
        const mom = new Manager("Mom", "10", "mom@moms.com", "1");
        const email = mom.getEmail();

        expect(email).toEqual("mom@moms.com");
    });
})