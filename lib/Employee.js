class Employee {
  constructor(name, id, email) {
    if (typeof name !== "string") {
      throw new Error("Name is not a string");
    }
    if (typeof id !== "number") {
      throw new Error("ID is not a number");
    }
    if (typeof email !== "string") {
      throw new Error("Email is not a string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.employee;
  }
}

module.exports = Employee;
