import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 10 + 1);
console.log(RandomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNum",
        type: 'number',
        message: "Guess a number between 1-10: "
    }
]);
if (answers.userGuessedNum === RandomNumber) {
    console.log("Congragulations, You've guessed the right number.");
}
else {
    console.log("Try again!");
}
