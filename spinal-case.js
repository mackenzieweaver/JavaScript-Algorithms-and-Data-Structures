function spinalCase(str) {
  let arr = str.match(/[A-Z]/g); // arr of capitals
  console.log(arr);
  for (let i = 1; i < arr.length; i++){
    str.splice(indexOf(str[arr[i]]), 0, ' ');
  }
  console.log(str);
  //str = str.replace(/[_]|\s/g, '-').toLowerCase();
  //console.log(str.split(/[_]|\s|[A-Z]/));
  return str;
}

console.log(spinalCase("AllThe-small Things"));
