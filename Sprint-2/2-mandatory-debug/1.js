// Predict and explain first...
//  the function will return nothing, since it was already ended by the semicolon where the next expression
// will do nothing since the function already returned something which is undefined. 
//  For the console.log outside it will show "The sum of 10 and 32 is undefined" since the function returned undefined. 
// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// It does not return an error but logged the string but inside the function call it returned undefined. 
// Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
