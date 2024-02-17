// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// function majorityElement(array){
//     const length = Math.floor((array.length)/2);
//     for(let i = 0; i<array.length; i++){
//         let count = 0;

//     }

// }

// const nums = [2,2,1,1,1,2,2];
// majorityElement(nums);

// function majorityElement(nums) {
//   const n = nums.length;
//   const threshold = Math.floor(n / 2);
//   const countMap = {};

//   for (let num of nums) {
//     countMap[num] = (countMap[num] || 0) + 1;
//     if (countMap[num] > threshold) {
//       return num;
//     }
//   }
//   return null;
// }

// const nums = [2, 2, 1, 1, 1, 2, 2];

// function func(array1, array2) {
//   const concatenatedArray = [...array1].concat([...array2]);
//   return concatenatedArray;
// }

// const array1 = [
//   {
//     id: 1,
//     x: 2,
//     y: 3,
//   },

//   {
//     id: 2,
//     x: 3,
//     y: 6,
//   },
// ];

// const array2 = [
//   {
//     id: 2,
//     x: 10,
//     y: 20,
//   },
//   {
//     id: 3,
//     x: 0,
//     y: 0,
//   },
// ];

// const result = func(array1, array2);
// console.log(result);