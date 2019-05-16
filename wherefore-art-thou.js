function whatIsInAName(collection, source) {
  var arr = [];
  for (let item in collection){
    let decide = [];
    for (let key in source){
      if (collection[item].hasOwnProperty(key)){
        if (collection[item][key] === source[key]){
          decide.push(true);
        } else {
          decide.push(false);
        }
      } else {
        decide.push(false);
      }
    }
    if (!decide.includes(false)) {
      arr.push(collection[item]);
    }
  }
  return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
