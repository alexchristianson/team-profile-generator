const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var team = [];

function startPrompts () {
    function teamManager() {
        inquirer.prompt(
            [
                {
                    type: 'input',
                    message: "What is the team manager's name?",
                    name: 'name'
                },
                {
                    type: 'input',
                    message: "What is the team manager's id?",
                    name: 'id'
                },
                {
                    type: 'input',
                    message: "What is the team manager's email?",
                    name: 'email'
                },
                {
                    type: 'input',
                    message: "What is the team manager's office number?",
                    name: 'officeNumber'
                }
            ]
        ).then(response => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            team.push(manager);
            addEmployee();
        })
    }
    function addEmployee() {
        inquirer.prompt(
            [
                {
                    type: 'list',
                    message: 'What type of team member do you want to add?',
                    name: 'employeeType',
                    choices: [
                        "Engineer",
                        "Intern",
                        "I don't want to add any more team members"
                    ]
                }
            ]
        ).then(response => {
            if (response.employeeType === "None") {
                generateHTML();
            } else if (response.employeeType === "Engineer") {
                engineerPrompts();
            } else if (response.employeeType === "Intern") {
                internPrompts();
            }
        });
    };
    function engineerPrompts() {
        inquirer.prompt(
            [
                {
                    type: 'input',
                    message: "What is the engineer's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Enter ID.",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Enter email address.",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Enter github username.",
                    name: "github"
                }
            ]
        ).then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(engineer);
            addEmployee();
        })
    };
    function internPrompts() {
        inquirer.prompt(
            [
                {
                    type: "input",
                    message: "What is the intern's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is the intern's id.",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is the intern's email address.",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is the intern's school?",
                    name: "school"
                }

            ]
        ).then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            team.push(intern);
            addEmployee();
        })
    }
    function generateHTML() {
        fs.writeFileSync("./dist/team.html", generateEmployees(team),"UTF-8")
        // if error add ", error => console.log(error)"
    }
};