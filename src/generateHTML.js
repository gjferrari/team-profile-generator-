//this will generate the template for html

inquirer.prompt()

const createManager = (manager) => {
  //return is implied in arrow functions
  `<div class="card employee-info">
    <div class="card-header bg-primary text-white
        <h2 class="card-title>${manager.name}</h2>`;
};

const createIntern = (intern) => {
  //return is implied in arrow functions
  `<div class="card employee-info">
    <div class="card-header bg-primary text-white
        <h2 class="card-title>${intern.name}</h2>`;
};
