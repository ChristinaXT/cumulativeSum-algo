// Return an array showing the cumulative sum at each index of an array of integers
// Return: array — integers showing the cumulative sum at each index
// First we set a new array which will be initialized to contain the value at index 0 of list.
// This is because we need a starting reference value to begin our calculations.
// Then we loop through the list starting at index 1 (since we already have the value at list[0].
//   For each item in the array, we add the current value to the previous value and push
//   it to the result array.

let arr = [1,3,5,7];

function cumulativeSum (list) {
  let result = [list[0]];

  for(let i = 1; i < list.length; i++) {
    result.push(list[i] + result[i-1]);
  }

  return result;
}
console.log(cumulativeSum(arr)); // Returns [1, 4, 9, 16]
