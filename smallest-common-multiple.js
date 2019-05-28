//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
function smallestCommons(arr) {
  // Ascending order
  arr = (arr.sort((a, b) => a - b));  
  // all values between the 2 input values (inclusive)
  let newArr = [];
  for(let i = arr[0]; i <= arr[1]; i++){
    newArr.push(i);
  }
  let seguir = true;
  let multiple = 2
  let scm = 0;
  while ( seguir ) {    
    // compare multiples of the largest value in the array
    scm = arr[1] * multiple++;
    // remove all values that divide evenly
    if (newArr.filter(num => (compare % num)  !== 0).length === 0){
      // if there are none left exit the loop
      seguir = false;
    }
  }
  // the smallest common factor
  return scm;
}


smallestCommons([6, 1]);
