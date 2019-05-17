function checkCashRegister(price, cash, cid) {
  const name = ['ONE HUNDRED','TWENTY','TEN','FIVE','DOLLAR','QUARTER','DIME','NICKEL','PENNY'];
  const value = [100, 20, 10, 5, 1, .25, .1, .05, .01];
  let change = {'status': open, 'change': []};
  // total in cash drawer
  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++){
    cidTotal += cid[i][1];
  }
  let total = parseFloat(cidTotal.toFixed(2))

  // example: 0.50 cents
  let dif = cash - price;
  let answer = [];  
  for (let i = 0; i < value.length; i++){ // is greater than 100? 20? 10? 5? 1? .25? .1? .05? .01?
    let arr = [];  
    let num = 0;
    if (dif >= value[i]){
      num = value[i] * (Math.floor(dif/value[i]));
      arr.push(name[i]);
      arr.push(num);
      dif -= num;
    }
    answer.push(arr);
  }
  return change;
}
checkCashRegister(
  2.40, 
  20.00, 
  [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ]
);
