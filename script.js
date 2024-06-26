/* Functions
 * Functions helps make your program more efficient and compartmentalises the code
 * into smaller blocks. This makes it easier to read and easier to find errors.
 */


/* Function sayHello
 * This function writes Hello to the console log.
 */
function sayHello() {
    console.log("Hello");
}


// Funtions will not execute unless they are triggered (call).
sayHello();


/******************************************************************/

/* Function addNumbers
 * function to add two numbers together.
 * accepts two parameters, num1 and num2.
 * sends answer to console.
 */
function addNumbers(num1, num2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

//call the function.
addNumbers(5, 12);      //The function expects two parameters so we send them 2 numbers
addNumbers(11, 3);      //these are called arguments. 
addNumbers(32.8, 45.7); //the same function can run with different arguments.


/******************************************************************/

/* Function addNumbers2
 * function to add two numbers together
 * accepts two parameters, num1 and num2.
 * returns answer.
 */
function addNumbers2(num1, num2){
    let answer = num1 + num2;
    return answer;
}

//call the function.
let sum1 = addNumbers2(12, 24);     // return the value to a new variable
sum1 = addNumbers2(sum1, 25);       // return the value to an existing variable
console.log(addNumbers(2, 4));      // print the value to the user interface

/******************************************************************/

let globalVariable = 10;

function myFunction() {
    let localVariable = 20;
    console.log(`myFunction can see ${globalVariable}`);
    console.log(`myFunction can also see ${localVariable}`);
}

console.error (`This line can not see ${localVariable} as it is out of scope.`);


/******************************************************************/

/* getNumericInput
 * function to prompt for a number and convert to Number type
 * return number.
 */
function getNumericInput() {
    let answer = prompt("Enter a number");
    return Number(answer);
}

// Calling functions embedded like this can be confusing but break it down
// from inside out.  
// This line calls getNumericInput() as two parameters, these will be numbers
// we call addNumbers2 to add them together and return the value.
// console.log sends the value to the console. 

console.log (addNumbers2(getNumericInput(), getNumericInput()));




