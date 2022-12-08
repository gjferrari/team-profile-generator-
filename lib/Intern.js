const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    if (typeof name !== "string") {
      throw new Error("Name is not a string");
    }
    if (typeof id !== "number") {
      throw new Error("ID is not a number");
    }
    if (typeof email !== "string") {
      throw new Error("Email is not a string");
    }
    if (typeof school !== "string") {
      throw new Error("School is not a string");
    }
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
