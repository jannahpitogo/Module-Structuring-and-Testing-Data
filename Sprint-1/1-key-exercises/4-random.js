const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

/*
> What this will do is it will get the value of maximum and minimum. 
> From the initial value what will happen is that 100 - 1 and then it will add another 1 from the expression. 
> After that it will multiply it to a random float value that is minimum of 0 but will never be greater and be 1. 
> After multiplying both numbers, it will get the whole bigger value from the answer because of Math.floor. 
> After getting the round up value, it will add the initialize value of the minimum variable. 
> This answer to this expression will be stored in the variable num.  */

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
