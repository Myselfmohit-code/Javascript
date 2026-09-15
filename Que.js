//Que 1: take input from the user check number is multiple of 5 or not

/*let number = prompt("Enter a number: ");

if (number % 5 === 0) {
    console.log(number + " is a multiple of 5");
} else {
    console.log(number + " is not a multiple of 5");
}*/

//Que 2: take input from the user check number is even or odd

/*const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (age) => {
    console.log("Your age is:", age);
    rl.close();
});*/

//Que 3: give grade to the student based on marks

/*let marks = prompt("enter your marks: ");
if (marks >= 90) {
    console.log("Grade A");         
}else if (marks >= 60) {
    console.log("Grade B");
}else if (marks >= 40) {
    console.log("Grade C");
}else {
    console.log("Grade D");
}*/

/*export function getTicketPrice(age, isWeekend) {

    if (typeof age !== 'number' || age < 0) {
        throw new Error('Invalid age');
    }

    if (typeof isWeekend !== 'boolean') {
        throw new Error('Invalid isWeekend value');
    }

    let age = 54;

    if (age < 13) {
        price = 8;
    } 

    else if (age >= 13 && age <= 17) {
        price = 12;
    } 

    else if (age >= 18 && age <= 59) {
        price = 15;
    } 

    else {
        price = 10;
    
    }

    
    if (isWeekend) {
        price += 5;
    }

    return price;
}
*/

// the driving simulation program

//export function driveSimulation(speed, signal) {

/*let signal = "green";

    if (signal === "red") {
        console.log("Stop the car ");
    }else if (signal === "yellow") {
        console.log("Slow down the car");
    }else if (signal === "green") {
        console.log("Go");
    }else if (signal ==="Flashing") {
        console.log("Warning: Traffic signal is flashing");
    }else{
        console.log("Invalid traffic signal color");
    }
*/

/*let signal = "GREEN";

if (typeof signal !== "string") {
    console.log("Invalid input: Signal must be a string");
} else {
    switch (signal.toLowerCase()) {
        case "red":
            console.log("Stop the car");
            break;

        case "yellow":
            console.log("Slow down the car");
            break;

        case "green":
            console.log("Go");
            break;

        case "flashing":
            console.log("Warning: Traffic signal is flashing");
            break;

        default:
            console.log("Invalid traffic signal color");
    }
}*/

let marks = 89;
let hasExtraCredit = true;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
} else {

    if (hasExtraCredit) {
        marks = marks + 5;

        // Maximum marks = 100
        if (marks > 100) {
            marks = 100;
        }
    }

    if (marks >= 90) {
        console.log("Grade A");
    } else if (marks >= 80) {
        console.log("Grade B");
    } else if (marks >= 70) {
        console.log("Grade C");
    } else if (marks >= 60) {
        console.log("Grade D");
    } else {
        console.log("Grade F");
    }
}