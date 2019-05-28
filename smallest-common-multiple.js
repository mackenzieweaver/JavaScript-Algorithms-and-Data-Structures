//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
function smallestCommons(arr) {
  arr = (arr.sort((a, b) => a - b));
  let newArr = [];
  for(let i = arr[0]; i <= arr[1]; i++){
    newArr.push(i);
  }
  console.log(newArr);
  let seguir = true;
  let multiple = 2
  let compare = 0;
  while ( seguir ) {
    compare = arr[1] * multiple;
    newArr.filter(x => compare % x  === 0);
    multiple += 1;
  }
  console.log(newArr);
}


smallestCommons([6, 1]);
