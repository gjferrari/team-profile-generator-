const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create an employee object with github added to the class using the getGitHub method", () => {
    const testHub = "ethan40";
    const engineer = new Engineer(
      "Ethan",
      20,
      "enniemeanie@gmail.com",
      testHub
    );
    expect(engineer.getGitHub()).toBe(testHub);
  });

  //testing getRole
  it("should return role as Engineer", () => {
    const testRole = "Engineer";
    const engineer = new Engineer(
      "Ethan",
      20,
      "enniemeanie@gmail.com",
      "ethan40"
    );
    expect(engineer.getRole()).toBe(testRole);
  });

  it("should throw an error if provided no argument", () => {
    //error is thrown when callback is empty
    expect(() => new Employee()).toThrow();
  });
});

