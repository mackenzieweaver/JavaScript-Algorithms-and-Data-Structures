// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {

  let afterUpper = after.split('');
  afterUpper[0] = afterUpper[0].toUpperCase();
  afterUpper = afterUpper.join('');

  str = str.split(' ');
  let index = str.indexOf(before);
  let word = str[index].split('');
  str = str.join(' ');
  
  if (word[0] === word[0].toUpperCase()){
    return str.replace(before, afterUpper);
  }

  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
