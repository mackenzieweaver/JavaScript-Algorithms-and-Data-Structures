function fearNotLetter(str) {
  let arr = str.split('');
  let num = arr.map(x => x.charCodeAt(0));
  for(let i = 1; i < num.length; i++){
    let a = num[i];
    let b = num[i - 1];
    if (a !== b + 1){
      return String.fromCharCode(b + 1);
    }
  }
  return;
}

fearNotLetter("abce");
