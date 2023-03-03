const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

//generates html from answers
// const generateHTML = require("src/generateHTML.js");
// const Employee = require("./lib/Employee");

const teamMembers = [];

// function createManager() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is the manager's name?",
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "What is the manager's ID?",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "What is the manager's email?",
//         // validate: (email = () => {
//         //   valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

//         //   if (valid) {
//         //     return true;
//         //   } else {
//         //     console.log("Please enter a valid email");
//         //     return false;
//         //   }
//         // }),
//       },
//       // learn email validation from website below - tailored code to fit needs
//       // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
//       {
//         type: "input",
//         name: "officeNumber",
//         message: "What is the manager's office number",
//       },
//     ])
//     .then((answers) => {
//       const manager = new Manager(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.officeNumber
//       );
//       // teamMembers.push(manager);

//       createTeam();
//     });
// }

// // function createTeam() {
// //   console.log(`
// //       ===============================
// //       ~* CREATING EMPLOYEE ROSTER *~
// //       ===============================`);
// //   inquirer.promt([
// //     {
// //       type: "confirm",
// //       name: "addEmployee",
// //       message: "Would you like to add a new employee?",
// //       // default: false,
// //     },
// //   ]);
// //   if (answers.addEmployee === true)
// //     then(() => {
// //       inquirer.prompt([
// //         ,
// //         {
// //           type: "list",
// //           name: "role",
// //           message: "Choose an employee role",
// //           choices: ["engineer", "intern"],
// //         },
// //       ]);
// //     });
// // }
// function createTeam() {
//   console.log(`
//     ===============================
//     ~* CREATING EMPLOYEE ROSTER *~
//     ===============================`);

//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is the manager's name?",
//       },
//       {
//         type: "number",
//         name: "id",
//         message: "What is the manager's ID?",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "What is the manager's email?",
//         // validate: (email = () => {
//         //   valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

//         //   if (valid) {
//         //     return true;
//         //   } else {
//         //     console.log("Please enter a valid email");
//         //     return false;
//         //   }
//         // }),
//       },
//       // learn email validation from website below - tailored code to fit needs
//       // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
//       {
//         type: "number",
//         name: "officeNumber",
//         message: "What is the manager's office number",
//       },
//     ])
//     .then((answers) => {
//       const manager = new Manager(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.officeNumber
//       );
//       teamMembers.push(manager);
//     })
//     .then(() => {
//       inquirer
//         .prompt([
//           {
//             type: "list",
//             name: "role",
//             message: "Choose an employee role",
//             choices: ["engineer", "intern"],
//           },
//           {
//             type: "input",
//             name: "name",
//             message: "What is the employee's name?",
//           },
//           {
//             type: "number",
//             name: "id",
//             message: "What is the employees's ID?",
//           },
//           {
//             type: "input",
//             name: "email",
//             message: "What is the employee's email?",
//             // validate: (email = () => {
//             //   valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

//             //   if (valid) {
//             //     return true;
//             //   } else {
//             //     console.log("Please enter a valid email");
//             //     return false;
//             //   }
//             // }),
//           },

//           {
//             type: "input",
//             name: "gitHub",
//             message: "What is the engineer's github?",
//             when: (list) => list.role === "engineer",
//           },
//           {
//             type: "input",
//             name: "school",
//             message: "What is the intern's unversity/school?",
//             when: (list) => list.role === "intern",
//           },

//           {
//             type: "confirm",
//             name: "addEmployee",
//             message: "Would you like to add another employee?",
//             // default: false,
//           },
//         ])

//         .then((answers) => {
//           if (answers.role === "engineer") {
//             const engineer = new Engineer(
//               answers.name,
//               answers.id,
//               answers.email,
//               answers.gitHub
//             );
//             teamMembers.push(engineer);
//           } else if (answers.role === "intern") {
//             const intern = new Intern(
//               answers.name,
//               answers.id,
//               answers.email,
//               answers.school
//             );
//             teamMembers.push(intern);
//           }
//         });
//     });
// }

// createTeam();

// //ASYNC WHILE LOOP
// //try ask abc's

// //do you want to add a new teammember else exit
// //separate all three

// // createManager(){
// // await createManager()
// // while (...) {
// //   await createTeam
// // }

// // }

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
        // validate: (email = () => {
        //   valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

        //   if (valid) {
        //     return true;
        //   } else {
        //     console.log("Please enter a valid email");
        //     return false;
        //   }
        // }),
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

      // createTeamMember();
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
        // validate: (email = () => {
        //   valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

        //   if (valid) {
        //     return true;
        //   } else {
        //     console.log("Please enter a valid email");
        //     return false;
        //   }
        // }),
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
      //stop the while loop
      //https://www.w3schools.com/jsref/jsref_break.asp
      break;
    }
  }
}

runAllOfIt();


