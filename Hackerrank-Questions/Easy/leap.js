// const readline = require("readline-sync");
// let year = readline.question("Enter the year name: ");

for (let i = 1000; i <= 3000; i++) {
    if (
        (i % 4 === 0 && i % 100 !== 0) ||
        (i % 100 === 0 && i % 400 === 0)
    ) {
        console.log(i);
    } 
}
