/* 
instructions:
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.
*/


//version with comments below!

function reverseString(str){
  const split1 = str.split(" ")

  if(split1.length === 1){
    return str.split("").reverse().join("")
  } else {
    const indexes = split1.map(word => {
      return word.length
    })
    indexes.pop()
    
    const split = str.split(" ").join("").split("").reverse()
    
    const insertSpaces = indexes.reduce((acc, num) => {
        acc += num
        split.splice(acc, 0, " ")
        acc +=1
        return acc
      }, 0)
    return split.join("")
  }
};



// function solve(str){
//   const split1 = str.split(" ")
//   //purely to find out how many spaces we need to insert

//   if(split1.length === 1){ //if there's only one word, simply split by character, reverse the array, join by char and return
//     return str.split("").reverse().join("")
//   } else { //if there's any spaces to handle:
//     //first get an array of the lengths of the words, so we can deduce the index of space
//     const indexes = split1.map(word => {
//       return word.length
//     })
//     indexes.pop() //remove the last item, since we won't need a space at the end
    
//     const split = str.split(" ").join("").split("").reverse()
//     //split the original string without the spaces and reverse it
//     const split2 = indexes.reduce((acc, num) => {
//         acc += num
//         split.splice(acc, 0, " ")
//         acc +=1
//         return acc
//       }, 0)
//     //reintroduce the spaces -line 19 adds one to account for the space you're adding
//   return split.join("")
//     //return the joined string!
//   }
// };

module.exports = { reverseString };
