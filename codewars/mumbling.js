// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// With each letter, capitalize the first one, and duplicate it, one more than the last - with a dash
  const split = s.split('')
  const accum = split.reduce((acc, cv, index) => {
    //add the same number of strings as the index
   let string = cv.toUpperCase()
   for (var i=0; i < index; i++) {
     string += cv.toLowerCase()
   }
   index > 0 ? acc += '-' + string : acc += string
    return acc
  }, '')
  return accum
}

module.exports = { accum };
