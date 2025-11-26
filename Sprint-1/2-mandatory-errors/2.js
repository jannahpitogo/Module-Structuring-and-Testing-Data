// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";

//You can't print because the value of the variable cityofBirth was declared after the print expression.
//So it doesn't know what the value of cityofBirth. 
//To fix this declared the value first then do the print.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
