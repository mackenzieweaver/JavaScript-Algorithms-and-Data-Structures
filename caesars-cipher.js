function rot13(str) {
  let ans = [];
  for (let i = 0; i < str.length; i++){ // for each letter in str
    let num = str[i].charCodeAt(0);
    let decode = '';
    if (num >= 78 && num < 91){
      decode = String.fromCharCode(num - 78 + 65);
    } else if (num > 64 && num < 79) {
      decode = String.fromCharCode(num + 13);
    } else {
      decode = str[i];
    }
    ans.push(decode);
  }
  return ans.join('');
}
console.log(rot13("SERR CVMMN!"));
