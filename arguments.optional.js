// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
function addTogether(...args) {
  if (args.every(x => typeof x === 'number')){
    if(args[0] && !args[1]){
      return function(arg) {
        return args[0] + arg;
      }
    } else {
      return args[0] + args[1];
    }
  }
  return;
}

addTogether(2,3);
