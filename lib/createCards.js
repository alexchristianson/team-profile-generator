const fs = require("fs");
const generateHTML = require('./generateHTML');

const createCards = (managerObj, engineerObj, internObj) => {

    const cardManager = managerObj.map(manager => {
        return `
    <div class="card ml-3">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot m-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}<a href="mailto:${manager.email}"></a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
    });

    const cardEngineer = engineerObj.map(engineer => {
        return `
    <div class="card ml-3">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses m-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}<a href="mailto:${engineer.email}"></a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`;
    });

    const cardIntern = internObj.map(intern => {
        return `
    <div class="card ml-3">
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate m-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item"><a href="mailto:${intern.email}" target="blank">Email: ${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`;
    });

    fs.writeFileSync("./dist/team.html", generateHTML(cardManager, cardEngineer, cardIntern), "utf-8", function(err){
        if (err) {
            return console.log(err)
        }
    });
}

module.exports = createCards;