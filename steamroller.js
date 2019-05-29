// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
function steamrollArray(arr) {
   return arr.reduce((arr1, arr2) => Array.isArray(arr2) ? arr1.concat(steamrollArray(arr2)) : arr1.concat(arr2), []);
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
