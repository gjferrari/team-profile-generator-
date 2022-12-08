const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    if (typeof name !== "string") {
      throw new Error("Name is not a string");
    }
    if (typeof id !== "number") {
      throw new Error("ID is not a number");
    }
    if (typeof email !== "string") {
      throw new Error("Email is not a string");
    }
    if (typeof gitHub !== "string") {
      throw new Error("Github is not a string");
    }

    super(name, id, email);
    this.gitHub = gitHub;
  }

  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
