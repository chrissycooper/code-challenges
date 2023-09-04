//Write a function that takes in a string, removes the spaces, and returns the resulting string.

//REFACTORED SOLUTION
function noSpace1(x){
  return x.split(" ").join("");
};


// ORIGINAL SOLUTION
function noSpace0(x){
  var y = "";

  for (var i = 0; i < x.length; i++){
    if (x[i] !== " "){
      y = y + x[i];
    }
  } 

  return y;

};


/* 
ANALYSIS
The original solution creates a new variable and reassigns it, making it's space complexity higher. 
Both solutions loop through the string (x) passed into the function, making the time complexity both O(n) notation.
The refactored solution is easier to read, putting it just over the finish line as our winner.
I look forward to learning regular expressions and revisiting this problem again in the future.
*/

module.exports = { noSpace0, noSpace1 };
