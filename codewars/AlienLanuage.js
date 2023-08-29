function alienLanguage(str){
  let split = str.toUpperCase().split(" ")
  
  for (let i = 0; i < split.length; i++) {
    let substr = split[i][split[i].length-1].toLowerCase()
    split[i] = split[i].slice(0, split[i].length-1) + substr
  }
  return split.join(" ")
};

//with comments
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
