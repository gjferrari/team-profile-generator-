const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

//generates html from answers
const generateHTML = require("./src/generateHTML");

const teamMembers = [];

async function createManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      // learn email validation from website below - tailored code to fit needs
      // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
      {
        type: "number",
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
    })
    .catch((err) => {
      console.log(err, "error");
    }); // Return a Promise
}
async function createTeamMember() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Choose an employee role",
        choices: ["engineer", "intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is the employees's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },

      {
        type: "input",
        name: "gitHub",
        message: "What is the engineer's github?",
        when: (list) => list.role === "engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's unversity/school?",
        when: (list) => list.role === "intern",
      },

      {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        // default: false,
      },
    ])

    .then((answers) => {
      const addEmployee = answers.addEmployee;
      if (answers.role === "engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.gitHub
        );
        teamMembers.push(engineer);
      } else if (answers.role === "intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        teamMembers.push(intern);
      }
      return addEmployee;
    }); // Return a Promise
}

async function runAllOfIt() {
  await createManager();

  let weSayYesToCreatingAnotherTeammate = true;
  while (weSayYesToCreatingAnotherTeammate) {
    const addAnotherEmployee = await createTeamMember();
    if (addAnotherEmployee === true) {
      //then restart prompt and ask follow questions about new employee
    } else {
      const newFile = createFile();
      writeFile(newFile);
      //stop the while loop
      //https://www.w3schools.com/jsref/jsref_break.asp
      break;
    }
  }
  console.log(teamMembers);
}

runAllOfIt();

// console.log(answers);
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("You've sucessfull generated a team page!");
    }
  });
};

const createFile = () => {
  return generateHTML(teamMembers);
};
