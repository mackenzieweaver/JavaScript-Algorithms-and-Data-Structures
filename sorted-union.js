//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union/
function uniteUnique(...arr) {  
  // for each array
  for (let i = 0; i < arr.length; i++){     
    // for each value 
    for (let j = 0; j < arr[i].length; j++){ 
      // check all other arrays
      for (let k = 0; k < arr.length; k++){
        if (arr[i] === arr[k]){               
          console.log(arr[k]);
          j += 1;
        }
      }
    }
  }
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
