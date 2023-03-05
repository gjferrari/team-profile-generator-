//this will generate the template for html

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

const createPage = () => {
  if Employee.role === Manager 
   
}