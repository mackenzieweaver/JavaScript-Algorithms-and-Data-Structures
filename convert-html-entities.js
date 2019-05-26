https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
function convertHTML(str) {
  let symbols = {
    '&': '&amp;', 
    '<': '&lt;', 
    '>': '&gt;', 
    '\"': '&quot;', 
    '\'': '&apos;',
  }
  let keys = Object.keys(symbols);
  str = str.split('');
  for (let i in str){
    
    if(keys.includes(str[i])){
      str.splice(i, 1, symbols[str[i]]);
    }
    
  }
  str = str.join('');
  return str;
}

convertHTML("Dolce & Gabbana");
