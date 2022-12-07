const Employee = require("../lib/Employee.js");

test("Employee", () => {
  it("should create an object with a name, id number, and email if provided valid arguments", () => {
    const employee = new Employee("Sam", 69, "sammyboy@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });

  //gitName
  test("should throw an error if provided no argument", () => {
    const callBack = () => new Employee();

    //error is thrown when callback is empty
    expect(callBack).toThrow();
  });

  it("should throw an error if not provided an id number", () => {});
});

//unfinished
