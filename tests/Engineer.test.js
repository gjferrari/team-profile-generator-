const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create an object with a name, id number, email, and github if provided valid arguments", () => {
    const engineer = new Engineer(
      "Ethan",
      20,
      "enniemeanie@gmail.com",
      "ethan40"
    );

    expect(employee.getName).toEqual("Ethan");
    expect(employee.getID).toEqual(20);
    expect(employee.getEmail).toEqual("enniemeanie@gmail.com");
    expect(employee.getGitHub).toEqual("ethan40");
  });

  //gitName
  it("should throw an error if provided no argument", () => {
    //error is thrown when callback is empty
    expect(() => new Employee()).toThrow();
  });

  it("should throw an error if provided no argument", () => {
    //error is thrown when callback is empty
    expect(() => new Employee()).toThrow();
    
  });

  it("should throw an error if provided no argument", () => {
    //error is thrown when callback is empty
    expect(() => new Employee()).toThrow();
  });
});
