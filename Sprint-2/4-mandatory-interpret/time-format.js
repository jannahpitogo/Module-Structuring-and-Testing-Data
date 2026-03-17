function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// pad will be called 3 times. 

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// The value will be the totalHours which is 0. 

// c) What is the return value of pad is called for the first time?
// It's gonna be 00 and a string because it was converted to a string and padded with a 0 at the start.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// For the last call, it would be 1 because the remainingSeconds is 1 when the input is 61 seconds. Where 1 is the one that's gonna be inputted inside the pad function. 

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The return value would be "01" because the number 1 is converted to a string and padded with a 0 at the start to make it two digits.
