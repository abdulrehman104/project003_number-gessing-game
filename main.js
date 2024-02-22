import inquirer from "inquirer";
// let answer = Math.floor(Math.random() * 10 + 1);
// let guess = await inquirer.prompt({
//   type: "number",
//   name: "userNum",
//   message: "Guess a number between 1 to 10",
// });
// if (guess.userNum === answer) {
//   console.log("Correct! your guess a correct number");
// } else {
//   console.log("Wrong Number Try again");
// }
// import inquirer from "inquirer";
async function runGuessingGame() {
    const totalRounds = 3; // Change this to the desired number of rounds
    for (let round = 1; round <= totalRounds; round++) {
        let answer = Math.floor(Math.random() * 10 + 1);
        let guess = await inquirer.prompt({
            type: "number",
            name: "userNum",
            message: `Round ${round}: Guess a number between 1 to 10`,
        });
        if (guess.userNum === answer) {
            console.log("Correct! You guessed the correct number.");
        }
        else {
            console.log(`Wrong number. The correct answer was ${answer}.`);
        }
    }
}
runGuessingGame();
