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
//[
//     {
//         "id": 1,
//         "name": "bri",
//         "other_id": "9",
//     },
//     {
//         "id": 2,
//         "name": "school",
//         "other_id": "99",
//         "url": "google.com",
//         "setting": "code_only"
//     },
//     {
//         "id": 3,
//         "name": "tuna",
//         "other_id": "23",
//         "setting": "direct_pay"
//     }
// ]