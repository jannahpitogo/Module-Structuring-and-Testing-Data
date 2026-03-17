// Predict and explain first...

// Predict the output of the following code:
// It will return an error because getLastDigit function does not take any parameters,
// but we are getting the last digit of a number passed. So what will happen is that it will convert the number passed
// to a string where in it will slice the last digit of the number passed.  
// But since there is no parameter in the function but the num is declared outside the function, 
// It will always return the last digit if the num variable which is 3.

// As well as it is declared as a constant so it cannot be changed.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
/*  'The last digit of 42 is 3'
    'The last digit of 105 is 3'
    'The last digit of 806 is 3'*/

// Explain why the output is the way it is
// The function did not run properly because there is no parameter passed. So the value of num is 
// the one it's getting. As well as it is declared as const so it will always return the last digit of it's value. 
// Finally, correct the code to fix the problem

// const num = 103; // I remove it because it's not needed to be declared since the variable will be in a function. 

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
