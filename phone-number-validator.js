function telephoneCheck(str) {
  const paren = /[(]\d{3}[)]( |-|\d)\d/;
  const countrycode = /^1\d{10}$/;
  const num = /^\d{10}/;
  if (str.includes('(') || str.includes(')')){
    if(paren.test(str) === false){
      return false;
    }
  }
  if (str[0] === '-'){
    return false;
  }
  str = str.split(/-| |[(]|[)]/).join('');
  if (str.length > 10){
    return countrycode.test(str);
  } else {
    return num.test(str);
  }
}
console.log(telephoneCheck("-1 (757) 622-7382"));
//re.test(str);
//str.match(re);
