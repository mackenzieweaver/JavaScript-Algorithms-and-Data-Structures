//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
function truthCheck(collection, pre) {
  collection.forEach(x => {if(!x.hasOwnProperty(pre)){return false}});
  return true;
}
//false, 0, "", null, undefined and NaN).

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
