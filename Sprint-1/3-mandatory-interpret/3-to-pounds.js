const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1.   const penceString = "399p": initializes a string variable with the value "399p"
/* 3-6. const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1): 
   >>>  What this will do is that it will do substring function to the variable penceString where
   >>>  It will start at the 0 index which is the 3 and will stop before the 2nd position which is an expression 
   >>>  It is getting the length of the value of penceString which is 4 and lessing 1 which it is equals to 3. 
   >>>  So it will be penceString.substring(0,3). The answer to this will be declared to the new variable paddedPenceNumberString*/
// 8.   const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") : First it will get the value 
/* >>>  of penceStringWithoutTrailingP and will do the padStart function. So the answer from last variable 
   >>>  is 399. Now if you do padStart with this it will be the same, because the targetlength is 3 but it the length of the variable is 3 also.
   >>>  So you don't have a space to add the 0. The it will be declared inside the variable paddedPenceNumberString. */
/* 9-12. In here, it's the same process from the first substring. It will get the substring of the variable paddedPenceNumberString which is the string 399. 
   >>>  it will start at index 0 and end at the variable length which is 3 and will less 2 based on the expression. 
   >>>  then the answer will be 3 and it will be stored inside the variable pounds. */
/* 14-16. In here there's two functions that will happen. First one is the getting the substring of the variable
   >>>  paddedPenceNumberString which the start index will be the length of that same variable which is 399 which is 3 less 2 and the start will be 1. 
   >>>  then getting the padEnd of the answer from the first function. With length of 2 and will add 0, I think there 
