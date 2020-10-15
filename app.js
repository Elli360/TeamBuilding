const Manager = require("./manager.js");
const Engineer = require("./engineer.js");
const Intern = require("./intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//this function starts
function start(){
        console.log("Let's begin building your software team");
        console.log("Choose the role for your employee");
        inquirer.prompt([{
                type: "list",
                message: "Choose from this list",
                choices:["Manager","Engineer","Intern"],
                name: "role"
                }
        ])
.then(function(response){
        let role = response.role;
        if (role == "Manager"){
                manager()
        } else if (role == "Engineer"){
                engineer()
        } else if (role == "Intern"){
                intern()
        }
        let output = `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">`;

            fs.writeFileSync("main.html", output);

})
}
function manager(){
    inquirer. prompt([
{
        type: "input",
        message: "Manager name",
        name: "nameOfmanager"
},
{
        type: "input",
        message: "Manager email",
        name: "emailOfmanager"
},
{
        type: "input",
        message: "Manager phone number",
        name: "phonenumberOfmanager"
},
])
.then(function(response){
    let nameOfmanager = response.nameOfmanager;
    let emailOfmanager = response.emailOfmanager;
    let phonenumberOfmanager = response.phonenumberOfmanager;
    let output = new Manager(nameOfmanager, emailOfmanager, 1, phonenumberOfmanager).addProfile();
    fs.appendFileSync("main.html", output + `\n`) 

})}
function engineer(){
        inquirer. prompt([
    {
            type: "input",
            message: "Engineer name",
            name: "nameOfengineer"
    },
    {
            type: "input",
            message: "Engineer email",
            name: "emailOfengineer"
    },
    {
            type: "input",
            message: "Engineer GitHub",
            name: "engineerGithub"
    },
    ])
    .then(function(response){
        let nameOfengineer = response.nameOfengineer;
        let emailOfengineer = response.emailOfengineer;
        let engineerGithub = response.engineerGithub;
        let output = new Engineer(nameOfengineer, emailOfengineer, 2, engineerGithub).addProfile();
        fs.appendFileSync("main.html", output + `\n`) 
    
    })}
    function intern(){
        inquirer. prompt([
    {
            type: "input",
            message: "Intern name",
            name: "nameOfintern"
    },
    {
            type: "input",
            message: "Intern email",
            name: "emailOfintern"
    },
    {
            type: "input",
            message: "Intern school name",
            name: "schoolnameForintern"
    },
    ])
    .then(function(response){
        let nameOfintern = response.nameOfintern;
        let emailOfintern = response.emailOfintern;
        let schoolnameForintern = response.schoolnameForintern;
        let output = new Intern(nameOfintern, emailOfintern, 3, schoolnameForintern).addProfile();
        fs.appendFileSync("main.html", output + `\n`) 
    
    })}

start()