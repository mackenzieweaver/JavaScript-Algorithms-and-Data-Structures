//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
function truthCheck(collection, pre) {
  for(let i = 0; i < collection.length; i++){
    if(!collection[i][pre]){
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, 
            {"user": "Dipsy", "sex": "male", "age": 3}, 
            {"user": "Laa-Laa", "sex": "female", "age": 5}, 
            {"user": "Po", "sex": "female", "age": 4}], 
           "age");
