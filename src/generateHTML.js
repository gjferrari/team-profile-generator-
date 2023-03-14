const employeeChoices = [];

const createManager = (manager) => {
  //return is implied in arrow functions
  `<div class="col-4 mt-4">
<div class="card h-100">
  <div class="card-header bg-primary text-white">
    <h3>${manager.name}</h3>
    <h4>Manager</h4>
    <i class="fa-solid fa-person-harassing"></i>
  </div>
  <div class="card-body">
    <p class="id">ID: ${manager.id}</p>
    <p class="email">
      Email: <a href="mailto:${manager.email}">${manager.email}</a>
    </p>
    <p class="office">Office Number: ${manager.officeNumber}</p>
  </div>
</div>
</div>`;
};

const createEngineer = (engineer) => {
  //return is implied in arrow functions
  `<div class="col-4 mt-4">
<div class="card h-100">
  <div class="card-header bg-primary text-white">
    <h3>${engineer.name}</h3>
    <h4>Engineer</h4>
    <i class="fa-solid fa-person-harassing"></i>
  </div>
  <div class="card-body">
    <p class="id">ID: ${engineer.id}</p>
    <p class="email">
      Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
    </p>
    <p class="github">Github: ${engineer.gitHub}</p>
  </div>
</div>
</div>`;
};

const createIntern = (intern) => {
  //return is implied in arrow functions
  `<div class="col-4 mt-4">
<div class="card h-100">
  <div class="card-header bg-primary text-white">
    <h3>${intern.name}</h3>
    <h4>Intern</h4>
    <i class="fa-solid fa-person-harassing"></i>
  </div>
  <div class="card-body">
    <p class="id">ID: ${intern.id}</p>
    <p class="email">
      Email: <a href="mailto:${intern.email}">${intern.email}</a>
    </p>
    <p class="school">School: ${intern.school}</p>
  </div>
</div>
</div>`;
};

const setRoles = (data) => {
  roleArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // Call Team Manager function
    if (role === "Manager") {
      const managerCard = createManager(employee);

      roleArray.push(managerCard);
    }

    // Call Engineer function
    if (role === "Engineer") {
      const engineerCard = createManager(employee);

      roleArray.push(engineerCard);
    }

    //  Call Intern function
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      roleArray.push(internCard);
    }
  }
  const employeeCards = roleArray.join("");

  const generateTeam = createTeamHtml(employeeCards);
  return generateTeam;
};

const createTeamHtml = () => {
  `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="dist/style.css" />
  <title>Document</title>
</head>
<body>
  <header>
    <nav class="navbar" id="navbar">
      <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text"
        >Team Profile</span
      >
    </nav>
  </header>
  <main>
    <div class="container">
      <div class="row justify-content-center" id="team-cards">
        <!--Team Cards-->
        ${employeeCards} 
      </div>
    </div>
  </main>
</body>
</html>
`;
};
//this will generate the template for html

export default setRoles;
