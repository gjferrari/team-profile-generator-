const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    if (typeof name !== "string") {
      throw new Error("Name is not a string");
    }
    if (typeof id !== "number") {
      throw new Error("ID is not a number");
    }
    if (typeof email !== "string") {
      throw new Error("Email is not a string");
    }
    if (typeof officeNumber !== "number") {
      throw new Error("Office Number is not a number");
    }

    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
