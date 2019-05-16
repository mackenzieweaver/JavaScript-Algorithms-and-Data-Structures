function palindrome(str) {
  str = str.toLowerCase();
  let re = /[a-z0-9]/g;
  str = str.match(re);
  let forward = str.join(\"\");
  let backward = str.reverse().join(\"\");
  if(forward === backward){
    return true;
  }
  return false;
}
palindrome("not a palindrome");
