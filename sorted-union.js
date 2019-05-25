//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union/
function uniteUnique(...arr) {
  let myArr = [];
  // for each array
  for (let i = 0; i < arr.length; i++){     
    // for each value 
    for (let j = 0; j < arr[i].length; j++){ 
      // check all other arrays
      for (let k = 0; k < arr.length; k++){
        // skip self
        if (arr[i] == arr[k]){
          continue;
        }
        // if other array includes current value
        if(arr[k].includes(arr[i][j])){
          // delete it from that array
          arr[k].splice(arr[k].indexOf(arr[i][j]), 1);
        }
      }
    }
  }
  for (let l = 0; l < arr.length; l++){
    myArr = myArr.concat(arr[l]);
  }
  return myArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
