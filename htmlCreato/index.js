const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ yourName, address, linkedIn, gitHub, whiteChoice }) => {
    `<!DOCTYPE html>
    <html lang="en-us">
        <head>
            <meta charset="UTF-8">
            <title>My Bio</title>
            <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
        </head>
        <body>
            <div>
                <H1>Hello! My name is ${yourName}</H1>
                <p>I am situated in ${address}</p>
            </div>
            <div>
                <H2>BIO</H2>
            </div>
            <div>
                <H2>Check out my</H2>
                <li>LinkedIn: ${linkedIn}</li>
                <li>GitHub: ${gitHub}</Li>
            </div>
            <div>
                <H2>I think white is a ${whiteChoice}! (It's allegedly a colour!)</H2>
            </div>
        </body>
    </html>`
};

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'yourName',
    },
    {
      type: 'input',
      message: 'What state/country are you situated in?',
      name: 'address',
    },
    {
      type: 'editor',
      message: 'Tell me a little more about you! (Bio)',
      name: 'bio'  
    },
    {
      type: 'input',
      message: 'what is your LinkedIn URL?',
      name: 'linkedIn',
    },
    {
      type: 'input',
      message: 'what is your GitHub URL?',
      name: 'gitHub',
    },
    {
      type: 'list',
      message: 'Would you classify white as a colour?',
      name: 'whiteChoice',
      choices: ['Yes', 'No'],
      },
  ])
  .then((answers) => {

      console.log(answers);

      const htmlPageContent = generateHTML(answers);

      fs.writeFile('index.html', htmlPageContent, (err) => {
        err ? console.error(err) : console.log('Success!');
      })
  }
  );
