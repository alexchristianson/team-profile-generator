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
            // function to restart prompts
        })
    }
    function addEmployee() {
        inquirer.prompt(
            [
                {
                    type: 'list',
                    message: 'What type of employee do you want to add?',
                    name: 'employeeType',
                    choices: [
                        "Engineer",
                        "Intern",
                        "None"
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
    }
    function engineerPrompts() {
        inquirer.prompt()
    }
    function internPrompts() {
        inquirer.prompt()
    }
    function generateHTML() {
        fs.writeFileSync("./output/team.html", generateEmployees(team),"UTF-8")
        // if error add ", error => console.log(error)"
    }
};