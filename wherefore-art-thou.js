function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (let keys in source){
    for (let item in collection){
      for (let prop in collection[item]){
        if (keys === prop && source[keys] === collection[item][prop]){
          arr.push(collection[item]);
        }
      }
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
