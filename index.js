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
      },
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
      type: "checklist",
      name: "employeeType",
      message: "Choose an employee role?",
      choice: ["employee", "intern"],
    },
    {
      type: "input",
      name: "employeeName",
      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "managerID",
      message: "What is the employees's ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the employee's email?",
    },
    {
      type: "input",
      name: "managerOfficeNum",
      message: "What is the manager's office number",
    },
  ]);
}
