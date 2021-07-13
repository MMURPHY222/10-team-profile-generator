// requires file set to be tested
const Intern = require("../lib/intern");

describe("Intern test", () => {
    // checks that getSchool returns the correct value
    it("should return correct school", () => {
        const int = new Intern("Mary", "6", "mm@yahoo.com", "Emory");
        const school = int.getSchool();

        expect(school).toEqual("Emory");
    });

    it("should return correct name", () => {
        const int = new Intern("Mary", "6", "mm@yahoo.com", "Emory");
        const namee = int.getName();

        expect(namee).toEqual("Mary");
    });

    it("should return correct id", () => {
        const int = new Intern("Mary", "6", "mm@yahoo.com", "Emory");
        const id = int.getId();

        expect(id).toEqual("6");
    });

    it("should return correct email", () => {
        const int = new Intern("Mary", "6", "mm@yahoo.com", "Emory");
        const email = int.getEmail();

        expect(email).toEqual("mm@yahoo.com");
    });

    it("should return Intern", () => {
        const int = new Intern("Mary", "6", "mm@yahoo.com", "Emory");
        const role = int.getRole();

        expect(role).toEqual("Intern")
    })

})