// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes/
function sumPrimes(num) {
  let sum = 0;
  let arr = [];
  for(let i = 2; i <= num; i++){
    arr.push(i);
  }
  console.log(arr);
  return num;
}

sumPrimes(10);
