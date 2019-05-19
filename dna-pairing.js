function pairElement(str) {
  let ans = [];
  let pairs = {
    'A': ['A', 'T'],
    'C': ['C', 'G'],
    'G': ['G', 'C'],
    'T': ['T', 'A'],
  }
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++){
    ans.push(pairs[strArr[i]]);
  }
  return ans;
}

pairElement("GCG");
