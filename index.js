const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

//generates html from answers
const generateHTML = require("src/generateHTML.js");
// const Employee = require("./lib/Employee");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: (email = () => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        }),
      },
      // learn email validation from website below - tailored code to fit needs
      // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);

      idArray.push(answers.id);

      createTeam();
    });
}
function createTeam() {
  console.log(`
    ===============================
    ~* CREATING EMPLOYEE ROSTER *~
    ===============================`);
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Choose an employee role",
        choice: ["engineer", "intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employees's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
        validate: (email = () => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        }),
      },

      {
        type: "input",
        name: "gitHub",
        message: "What is the engineer's github?",
        when: (list = () => list.employeeType === "engineer"),
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's unversity/school?",
        when: (list = () => list.employeeType === "intern"),
      },

      {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?",
      },
    ])

    .then((answers) => {
      // const employee = new Employee(
      //   answers.employeeName,
      //   answers.employeeType,
      //   answers.employeeID,
      //   answers.employeeEmail,
      //   answers.gitHub,
      //   answers.school
      // );

      if (answers.role === "engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.email,
          answers.id,
          answers.gitHub
        );
      } else if (answers.role === "intern") {
        const intern = new Intern(
          answers.name,
          answers.email,
          answers.id,
          answers.school
        );
      }
    });
  teamMembers.push(employee);

  //   idArray.push(answers.managerID);
}
