https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
function sumFibs(num) {
  let a = 1;
  let b = 1;
  let sum = 0;
  let ans = 1;
  while(sum <= num){
    if(b % 2 !== 0){
      ans += b;
    }
    sum = a + b;
    a = b;
    b = sum;    
  }
  console.log(ans);
  return ans;
}

sumFibs(75026);
