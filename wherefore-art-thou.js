function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let sourceKeys = Object.getOwnPropertyNames(source);
  for (let i = 0; i < sourceKeys.length; i++){
    for (let item in collection){
      for (let prop in collection[item]){
        if (sourceKeys[i] === prop && source[sourceKeys[i]] === collection[item][prop]){
          arr.push(collection[item]);
        }
      }
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
