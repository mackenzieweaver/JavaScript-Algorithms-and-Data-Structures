// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
function addTogether(...args) {
  // make sure all arguments are numbers
  if (args.every(x => typeof x === 'number')){
    // if we have the first number but not the second
    if(args[0] && !args[1]){
      // return a function
      return function(arg) {
        // which adds the number that was given plus another
        return args[0] + arg;
      }
    } 
    // otherwise, if we have both numbers
    else {
      // return their sum
      return args[0] + args[1];
    }
  }
  return;
}

addTogether(2,3);
