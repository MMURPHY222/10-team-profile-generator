const Engineer = require("../lib/engineer");

describe("Engineer test", () => {
    it("should return correct gitHub", () => {
        const eng = new Engineer("Joe", "4", "JoeJoe@email.com", "JJJ789");
        const gitHub = eng.getGithub();

        expect(gitHub).toEqual("JJJ789");
    })

    it("should return correct name", () => {
        const eng = new Engineer("Joe", "4", "JoeJoe@email.com", "JJJ789");
        const name = eng.getName();
        expect(name).toEqual("Joe");
    });

    it("should return correct id", () => {
        const eng = new Engineer("Joe", "4", "JoeJoe@email.com", "JJJ789");
        const id = eng.getId();
        expect(id).toEqual("4");
    });

    it("should return correct email", () => {
        const eng = new Engineer("Joe", "4", "JoeJoe@email.com", "JJJ789");
        const email = eng.getEmail();
        expect(email).toEqual("JoeJoe@email.com");
    });

    it("should return Engineer", () => {
        const eng = new Engineer("Joe", "4", "JoeJoe@email.com", "JJJ789");
        const role = eng.getRole();

        expect(role).toEqual("Engineer")
    })

});