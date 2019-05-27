// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes/
function sumPrimes(num) {
  let ans = 0;
  let arr = [];

  // Fill up the array
  for (let k = 2; k <= num; k++){
    arr.push(k);
  }

  // Loop the square root of the number amount of times (ex: sqrt(30) = 5)
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    // Starting at the square (ex: 2 * 2  = 4) then add i (2, 3, 4, 5)
    for (let j = i*i; j <= num; j += i){
      // If the number is still in the array
      if(arr.includes(j)){
        // Remove that multiple of i (ex: 2, 4, 6, 8, 10)
        arr.splice(arr.indexOf(j), 1);
      }
    }
  }

  console.log(arr);
  return num;
}

sumPrimes(30);
