const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employeeList = [];

createManager();
createIntern();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "name",

        },
        {
            type: "number",
            message: "what is your id?",
            name: "id"

        },
        {
            type: "input",
            message: "what is your email?",
            name: "email"

        },
        {
            type: "input",
            message: "what is your github?",
            name: "github",

        },


    ]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeList.push(engineer);
        fs.writeFile(outputPath, render(employeeList), 'utf-8')
    });
};
createEngineer();

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "name",

        },
        {
            type: "number",
            message: "what is your id?",
            name: "id"

        },
        {
            type: "input",
            message: "what is your email?",
            name: "email"

        },
        {
            type: "number",
            message: "what is your office number?",
            name: "officeNumber",

        },

    ]).then(function (answers) {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeList.push(manager);
        fs.writeFile(outputPath, render(employeeList), 'utf-8')
    });
};
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "name",

        },
        {
            type: "number",
            message: "what is your id?",
            name: "id"

        },
        {
            type: "input",
            message: "what is your email?",
            name: "email"

        },
        {
            type: "input",
            message: "what school do you attend?",
            name: "school",

        },

    ]).then(function (answers) {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeList.push(intern);
        fs.writeFile(outputPath, render(employeeList), 'utf-8')
    });
};





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```






