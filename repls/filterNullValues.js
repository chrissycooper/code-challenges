//filter out key/value pairs that are null

const dataArray = [
  {
      "id": 1,
      "name": "bri",
      "other_id": "9",
      "url": null,
      "setting": null
  },
  {
      "id": 2,
      "name": "school",
      "other_id": "99",
      "url": "google.com",
      "setting": "code_only"
  },
  {
      "id": 3,
      "name": "tuna",
      "other_id": "23",
      "url": null,
      "setting": "direct_pay"
  }
]


// after clean up it should look like this: 
const filteredArray = [
    {
        "id": 1,
        "name": "bri",
        "other_id": "9",
    },
    {
        "id": 2,
        "name": "school",
        "other_id": "99",
        "url": "google.com",
        "setting": "code_only"
    },
    {
        "id": 3,
        "name": "tuna",
        "other_id": "23",
        "setting": "direct_pay"
    }
]

//CODE GOES HERE 

const filterNullValues = (arr) => {
  const keys = Object.keys(arr[0])
   return arr.map((obj) => {
      //read each key and remove it if null
      keys.forEach((key) => {
        obj[key] === null && delete obj[key]
      })
     return obj
    })
}

//I like this version because it uses the delete keyword which is new to 
//me, but maybe we try to figure out a way with a better time complexity

module.exports = { dataArray, filteredArray, filterNullValues };