/*
Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...

So what to do?
Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result... 

Some easy examples:
Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"
*/

function reverseAndCombineText(str) {
  let reduceList;
  const wordList = str.split(' ');
  
  if(wordList.length === 1) {
    return wordList.join();
  } else {
    reduceList = wordList.reduce((acc, word, index) => {
        let reverseWord = word.split('').reverse().join('');
        index === 0 || index % 2 === 0 ? acc.push(reverseWord) : acc.push(acc.pop() + reverseWord);
        return acc;
    }, []);
  };
   
  if(reduceList.length === 1 ) {
      return reduceList.join()
   } else {
      return reverseAndCombineText(reduceList.join(' '))
   };
};

module.exports = { reverseAndCombineText };
