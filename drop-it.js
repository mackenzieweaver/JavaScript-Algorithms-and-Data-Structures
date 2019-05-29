//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
function dropElements(arr, func) {
  let i = 0;
  while(func(arr[i]) === false){
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) { return n >= 3; });
