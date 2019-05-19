function spinalCase(str) {
  let arr = str.match(/[A-Z]/g); // find the capitals
  str = str.split('');
  for (let i = 0; i < arr.length; i++){
    let index = str.indexOf(arr[i]);
    if (index > 0){ // not the first letter of the string
      if(str[index - 1] !== ' ' &&  str[index - 1] !== '_'){
        str.splice(index, 0, ' ');
      } else if (str[index - 1] === '_'){
        str.splice(index - 1, 1, ' ');
      }
    }
  }
  str = str.join('');
  str = str.replace(/[_]|\s/g, '-').toLowerCase();
  console.log(str);
  return str;
}

spinalCase('The_Andy_Griffith_Show');
