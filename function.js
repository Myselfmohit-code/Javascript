/* function myFunction() {
    console.log("Hello, World!");
    console.log("This is a sample function.");
 }

myFunction(); */

// myFunction(msg){  //parameter
   // console.log(msg);
//myFunction("Hello, World!"); //argument 


/*function sum(a, b) {
    console.log(a + b);
}

sum(5, 10); // Output: 15 
*/


/*
function sum(a, b) {
    s = a + b;
    return s;
}

let result = sum(5, 10);
console.log(result); // Output: 15 */


// Arrow functions

/*const sum = (a, b) => {
    return a + b;
}*/

// Que 
// find vowels in a string using function 

/*function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(findVowels("hello world")); */

// Arrow function to find vowels in a string

/* const findVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;  

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(findVowels("Hello World")); // Output: 3    */

 
// for each 
/*
let arr = [1, 2, 3, 4, 5];
arr.forEach((element) => { 
    console.log(element);
}); 
*/
// map 

/*
let num = [1, 2, 3, 4, 5];

num.map((element) => {
    console.log(element * 2);
});
*/

//filter
/*
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((element) => {
    return element % 2 === 0;
});
console.log(evenNumbers);
*/
//reduce
/*
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); */


//Que 2 

let marks = [45, 78, 89, 90, 56, 67, 88];
 let topper = marks.filter((element) => {
    if (element >= 60) {
        console.log(element);
    }
});
console.log(topper);
