const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create an employee class with added school using getSchool Method", () => {
    const testSchool = "The Royal Tampa Academy of Dramatic Tricks";
    const intern = new Intern("Ruby", 41, "rubyrose@gmail.com", testSchool);
    expect(intern.getSchool()).toBe(testSchool);
  });

  //testing getRole
  it("should return role as Intern", () => {
    const testRole = "Intern";
    const intern = new Intern(
      "Ruby",
      41,
      "rubyrose@gmail.com",
      "The Royal Tampa Academy of Dramatic Tricks"
    );
    expect(intern.getRole()).toBe(testRole);
  });

  it("should throw an error if provided no argument", () => {
    //error is thrown when callback is empty
    expect(() => new Employee()).toThrow();
  });
});
