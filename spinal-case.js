function spinalCase(str) {
  let arr = str.match(/[A-Z]/g); // find the capitals

  str = str.split('');
  for (let i = 1; i < arr.length; i++){
    let index = str.indexOf(arr[i]);
    str[index] = str[index].toLowerCase();
    if(str[index - 1] !== ' '){
      str.splice(index, 0, ' ');
    }
  }

  str = str.join('');
  str = str.replace(/[_]|\s/g, '-').toLowerCase();
  console.log(str);
  return str;
}

spinalCase("AllThe-small Things");
