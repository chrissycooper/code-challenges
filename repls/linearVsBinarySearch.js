//An exploration of the difference between linear and binary search
//linear search
const myArr = [1, 3, 14, 37, 58, 212]

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return true
    } else if (arr[i] > val){  
      return false
    }
  }
}

// console.log(linearSearch(myArr, 7))
// console.log(linearSearch(myArr, 212))
// console.log(linearSearch(myArr, 1))