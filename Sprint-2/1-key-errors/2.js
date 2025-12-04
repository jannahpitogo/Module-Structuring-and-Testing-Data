
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// The error is that inside the function square it should be a variable not the value itself. Aside from there
// should be a function call for the function to run. 

// function square(3) {
//     return num * num;
// }

// The error was a SyntaxError: Unexpected Number

// This means that there is something wrong in the syntax of the function where there is an unexpected number in the expression. 
// where it should be an identifier | variable name. 

// Finally, correct the code to fix the problem

function square(num) {
    return num * num;
}

square(8);


