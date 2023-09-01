#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


 const sleep = () =>{
   
     return new Promise ((res) =>{
        setTimeout(res, 2000);
     }) 
 }


async function  welcome() {

    let rainbowTitle = chalkAnimation.rainbow("let's Start Calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(
                ` _____________________
|  _________________  |
| | Khanzada     0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`
    );
    
}

 await welcome();


 async function AskQuestion() {
    await inquirer
     .prompt([
     
     {
            type: "list",
            name: "operator",
            message: chalk.bgMagentaBright("Which operations do you want perform?\n"),
            choices: ["Add", "Subract", "Multiply", "Divide"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first Number = ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second Number = ",
        },

  ])
  .then((answers) => {
       //console.log(answers);
       if(answers.operator == "Add"){console.log(chalk.red(` ${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`))}

       else if (answers.operator == "Subract"){console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`))}
      
       else if (answers.operator == "Multiply"){console.log(chalk.bgBlueBright(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`))}
      
       else if (answers.operator == "Divide"){console.log(chalk.bgGray(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`))}

       else{
        
        console.log("Error");

       }

  })

 };

  async function startAgain() {
          
   
    do {
        await  AskQuestion();
        var restart = await inquirer.prompt({
          type: "input",
          name: "restart",
          message: "Do you want to restart? Yes or No",
        });
      } while (
        restart.restart.toLowerCase() === "yes" ||
        restart.restart.toLowerCase() === "y"
      );
  }

startAgain();




