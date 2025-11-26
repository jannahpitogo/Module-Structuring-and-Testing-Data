let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// There is 1 function called which is the console.log() in line 10. 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// THe error is in line 5. There is no comma inside the replace all condition. 

// c) Identify all the lines that are variable reassignment statements

// Line 4 and Line 5

// d) Identify all the lines that are variable declarations 

// Line 1, 2, 7, and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//  This replaces the coma to nothing since there is nothing in the replaceValue space in line 5.
