const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  it("should create an object with a name, id number, and email if provided valid arguments", () => {
    const employee = new Employee("Sam", 69, "sammyboy@gmail.com");

    // expect(employee.name).toEqual("Sam");
    // expect(employee.id).toEqual(69);
    // expect(employee.email).toEqual("sammyboy@gmail.com");
    expect(employee.getName()).toBe("Sam");
    expect(employee.getID()).toBe(69);
    expect(employee.getEmail()).toBe("sammyboy@gmail.com");
  });

  it("should throw an error if provided no argument", () => {
    //error is thrown when callback is empty
    expect(() => new Employee()).toThrow();
  });
});
