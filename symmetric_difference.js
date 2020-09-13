/*
Explanation:

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. 
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. 
So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. 
The returned array must contain only unique values (no duplicates).

*/

/* Solution */
function sym(...args) {
  let answer = [];
  for(let i = 0; i < args.length; i++){ // each array
    args[i] = [...new Set(args[i])]; // delete repeats
    for(let j = 0; j < args[i].length; j++){ // each element
      if(!answer.includes(args[i][j])){ // if the answer does not include the number
        answer.push(args[i][j]); // add it
      }
      else if(answer.includes(args[i][j])){ // if the answer does include the number
        answer.splice(answer.indexOf(args[i][j]), 1); // delete it
      }
    }
  }
  return answer;
}
sym([1, 2, 3, 3], [5, 2, 1, 4]);
