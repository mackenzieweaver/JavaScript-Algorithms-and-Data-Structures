// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes/
function sumPrimes(num) {
  let ans = 0;
  let arr = [];

  // Fill up the array
  for (let k = 2; k <= num; k++){
    arr.push(k);
  }


  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    for (let j = i*i; j <= num; j += i){
      if(arr.includes(j)){
        arr.splice(arr.indexOf(j), 1);
      }
    }
  }
  console.log(arr);
  return num;
}

sumPrimes(30);
