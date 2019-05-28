//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
function smallestCommons(arr) {
  arr = (arr.sort((a, b) => a - b));
  let start = arr[0];
  let end = arr[1];
  arr = [];
  for(let i = start; i <= end; i++){
    arr.push(i);
  }
  console.log(arr);
}


smallestCommons([5, 1]);
