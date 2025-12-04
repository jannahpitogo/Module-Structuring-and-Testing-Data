// Predict and explain first...

// There is nothing wrong in the function but the error is from the console.log outside. 
// It will print the console.log inside the function as well as the outside console.log but
// since console.log returns undefined inside the function it will display in the 2nd console.log is undefined. 

// function multiply(a, b) {
//   console.log(a * b);
// }

//  console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The console.log outside the function will show the string but with undefined in the function call part. 

// Finally, correct the code to fix the problem

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

