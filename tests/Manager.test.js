const Manager = require("../lib/Manager");
const Engineer = require("../lib/Manager");

describe("Manager", () => {
  it("should create an employee object with office number", () => {
    const testOfficNumber = 101;
    const manager = new Manager(
      "Ethan",
      20,
      "enniemeanie@gmail.com",
      testOfficNumber
    );
    expect(manager.getOfficeNumber()).toBe(testOfficNumber);
  });

  //testing getRole
  it("should return role as Manager", () => {
    const testRole = "Manager";
    const manager = new Manager("Ethan", 20, "enniemeanie@gmail.com", 101);
    expect(manager.getRole()).toBe(testRole);
  });

  it("should throw an error if provided no argument", () => {
    //error is thrown when callback is empty
    expect(() => new Employee()).toThrow();
  });
});
