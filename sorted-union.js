//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union/
function uniteUnique(...arr) {  
  // for each array
  for (let i = 0; i < arr.length; i++){     
    // for each value 
    for (let j = 0; j < arr[i].length; j++){ 
      // check all other arrays
      for (let k = 0; k < arr.length; k++){     
        console.log(arr[k]);
        /*
        if (arr[i] === arr[k]){
          continue;
        } 
        */
        /*
        // if value in next array
        if (arr[i + k].includes(arr[i][j])){ 
          // delete value from next array
          arr[i + k].splice(arr[i + 1].indexOf(arr[i][j]), 1); 
        }
        */
      }
    }
  }
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
