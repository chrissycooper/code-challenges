/*
Write a function named alienLanguage, that accepts 1 parameter:str. str is a sentence.

Translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. The last letter of each word in the sentence should be lowercase, and the other letters should be capitalized. Looks very strange? Because this is the form of the alien language ;-)

for example:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd" 
*/

function alienLanguage(str){
  let split = str.toUpperCase().split(" ")
  
  for (let i = 0; i < split.length; i++) {
    let substr = split[i][split[i].length-1].toLowerCase()
    split[i] = split[i].slice(0, split[i].length-1) + substr
  }
  return split.join(" ")
};

module.exports = { alienLanguage };

//COMMENTS
// function alienLanguage(str){
//   let split = str.toUpperCase().split(" ");
//   //takes the whole string sets it upper case and splits it be spaced into an array
  
//   for (let i = 0; i < split.length; i++) {
//     //loop de loop by word
//     let substr = split[i][split[i].length-1].toLowerCase()
//     //create variable substring of the last letter, make it lower case
//     split[i] = split[i].slice(0, split[i].length-1) + substr
//     //reassign the current word, by splitting the word up to the last letter and replacing the last letter with substring
//     //I chose this route over using .replace() for edge cases that have repeating letters (since replace only replaces the first instance)
//   }
//   return split.join(" ");
  
// };
