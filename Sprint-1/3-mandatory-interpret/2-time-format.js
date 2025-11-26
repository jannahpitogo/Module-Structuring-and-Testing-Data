const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are a total of 6 declarations. 

// b) How many function calls are there?

// There are 1 function called here which is the console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// This movieLength % 60 means 8784 % 60 where the % is getting the remainder of the number if it is divided to the other number, in this case 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// It's just a mathematical expression in a code form. The movieLength is declared with 8784 value, minus the remainingSeconds where it will get >>
// >>  the answer to the expression movieLength % 60. After getting the answer from that two variable it will be divided to 60. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// It's just getting and storing the value to the result variable. Kind of look like a timer. It can also be named as movieTime or movieLength.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// I think it would work with different value of integer even if it is negative or a float value. But I don't think that there is a movie that is negative and only a few milliseconds. 
