const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

//generates html from answers
const generateHTML = require("src/generateHTML.js");

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
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
        name: "managerOfficeNum",
        message: "What is the manager's office number",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.manangerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerOfficeNum
      );
      teamMembers.push(manager);

      idArray.push(answers.managerID);

      createTeam();
    });
}
function createTeam() {
  console.log(`
    ===============================
    ~* CREATING EMPLOYEE ROSTER *~
    ===============================`);
  inquirer.prompt([
    {
      type: "list",
      name: "employeeType",
      message: "Choose an employee role",
      choice: ["engineer", "intern"],
    },
    {
      type: "input",
      name: "employeeName",
      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is the employees's ID?",
    },
    {
      type: "input",
      name: "employeeEmail",
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
  ]);
}
