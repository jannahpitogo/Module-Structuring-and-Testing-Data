// Predict and explain first...

// Why will an error occur when this program runs?
// I think because you have already declared it by calling(making) the function then you declared it again
// as const which will result as a redeclaration error. As well as it didn't call the function and just logged it at the end
// where there is no inputted value for the variable decimalNumber. The error is also will come from the console.log(decimalNumber)
// because the decimalNumber is not defined outside the function making it return an error. 

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// what's happening in the function is that it's getting a value from the decimalNumber variable 
// And then assigning another value in decimalNumber and then inside the percentage variable it's getting the decimalNumber value
// and multiply it to 100 and adding a percentage sign at the end, making it a string because of the template literals and 
// storing it inside the percentage and the function returning it. Logging it also the decimalNumber variable.

// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;                          //removing the redeclaration here
  const percentage = `${decimalNumber * 100}%`;
  console.log(decimalNumber);                   //adding the console.log inside so that it will not return an error

  return percentage;
}

convertToPercentage(1234567);                   //added a function call

