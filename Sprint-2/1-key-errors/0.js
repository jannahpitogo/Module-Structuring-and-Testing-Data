// Predict and explain first...
// What will happen is that it will capitalize the first letter of inputted string, 
// and then it will get also the inputted string and slice (show) from the index 1 to the end. 
// And stored it to the str (same variable)
//and return str

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// capitalise("hello world!");

// The error is due to the "str" already declared, when you call a function, javascript is making
// a new declaration with the value you inputted. So declaring it again inside will declare it again causing an error. 


function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

capitalise("hello world!");