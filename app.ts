#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Display a Colourfull Welcome Message

console.log(chalk.bold.cyanBright("\n \t Muhammad Mehdi Raza"));
console.log("=".repeat(60));

// Prompt the User to Enter a Sentance

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter a sentence",
    }
    
]);

// Trimming the sentence and splitting it in to words based on "space"

let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence

console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`))
console.log("=".repeat(60));