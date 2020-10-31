let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rzQ)2D?/",
  database: "office_db",
});

connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Success, id: " + connection.threadId);
  }

  office();
});

// main function that prompts start questions
function office() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
          { name: "Input", value: 0 },
          { name: "View", value: 1 },
          { name: "Update", value: 2 },
        ],
      },
    ])
    .then(function (res) {
      choiceInput(res);
    });
}

// this frunction inputs into employee, role and department tables depending on the user's choice, it calls the functions
function choiceInput(res) {
  if (res.option === 0) {
    inquirer
      .prompt([
        {
          type: "list",
          name: "toPut",
          message: "Which table would you like input?",
          choices: [
            { name: "Employee", value: 0 },
            { name: "Role", value: 1 },
            { name: "department", value: 2 },
          ],
        },
      ])
      .then(function (res) {
        if (res.toPut == 0) {
          toInputEmployee();
        } else if (res.toPut == 2) {
          toInputDepartment();
        } else if (res.toPut == 1) {
          toInputRole();
        } else {
          connection.end();
        }
      });
  }
}

//function that prompts for employee

function toInputEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "fname",
        message: "Type the first name of the employee you would like to input",
      },
      {
        type: "input",
        name: "lname",
        message: "Type the last name of the employee you would like to input ",
      },
      {
        type: "input",
        name: "role",
        message: "Type the role id of the employee ",
      },
      {
        type: "input",
        name: "manageId",
        message: "Type the id of the employee's manager",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.fname,
          last_name: answer.lname,
          role_id: answer.role,
          manager_id: answer.manageId,
        },
        function (err) {
          if (err) {
            throw err;
          } else {
            console.log("Successfully sent to database!");
            office();
          }
        }
      );
    });
}

//function that prompts for departments

function toInputDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "dname",
        message: "Type the name of this department",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.dname,
        },
        function (err) {
          if (err) {
            throw err;
          } else {
            console.log("Successfully sent to database!");
            office();
          }
        }
      );
    });
}

//function that prompts for roles
function toInputRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Type in the title of this role",
      },
      {
        type: "input",
        name: "salary",
        message: "Type in the salary",
      },
      {
        type: "input",
        name: "dep_id",
        message: "What is the department id?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.dep_id,
        },
        function (err) {
          if (err) {
            throw err;
          } else {
            console.log("Successfully sent to database!");
            office();
          }
        }
      );
    });
}

//using inquirer will make list asking what user wants to do,
//if put role is clicked they ask which role they would like to input, storing answer into database
//will put a user input after will carry them back to main list

//if user wants to view, it gives them options of what they would like to view
//will display table of their answer

//If update is chosen, they are allowed to update role
//a list of the names will appear and they will choose and update role
