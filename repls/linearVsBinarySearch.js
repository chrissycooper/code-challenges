//An exploration of the difference between linear and binary search
//linear search
const myArr = [1, 3, 14, 37, 58, 212];

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return true
    } else if (arr[i] > val){  
      return false
    }
  }
};

// console.log(linearSearch(myArr, 7));
// console.log(linearSearch(myArr, 212));
// console.log(linearSearch(myArr, 1));


const binarySearch = (arr, val) => {
  let lowerEnd = 0;
  let upperEnd = arr.length - 1;
  while (lowerEnd <= upperEnd) {
  let midIndex = Math.floor(upperEnd + lowerEnd / 2)
    if (val === arr[midIndex]){
      return midIndex
    } else if (val > arr[midIndex]){
      lowerEnd = midIndex +1
    } else if (val < arr[midIndex]){
      upperEnd = midIndex -1
    }
  };
  return 'no match';
};

console.log(binarySearch(myArr, 7));
console.log(binarySearch(myArr, 212));
console.log(binarySearch(myArr, 1));
