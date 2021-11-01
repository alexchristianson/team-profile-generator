const generateHTML = (managerCard, engineerCard, internCard) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/5c41295d6a.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12 jumbotron mb-4">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                    ${managerCard}
                    ${engineerCard}
                    ${internCard}
            </div>
        </div>
    </body>
    </html>`;
}

module.exports = generateHTML;