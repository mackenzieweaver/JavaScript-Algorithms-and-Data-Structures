// 6/6  tests pass
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {

  const name = ['ONE HUNDRED','TWENTY','TEN','FIVE','ONE','QUARTER','DIME','NICKEL','PENNY'];
  const value = [100, 20, 10, 5, 1, .25, .1, .05, .01];
  const ascVal = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
  const ascNam = ['PENNY', 'NICKEL', 'DIME', 'QUARTER', 'DOLLAR', 'FIVE', 'TEN', 'TWENTY', 'ONE HUNDRED'];
  let change = {'status': 'OPEN', 'change': []};

  // total in cash drawer
  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++){
    cidTotal += cid[i][1];
  }
  let total = parseFloat(cidTotal.toFixed(2))
  let dif = cash - price;
  if(total < dif){
    change.status = 'INSUFFICIENT_FUNDS'
    return change;
  }
  if (total === dif){
    change.status = 'CLOSED'
    change.change = cid;
    return change;
  }

  console.log(dif);
  // where the magic happens
  for (let i = 0; i < value.length; i++){ // is greater than 100? 20? 10? 5? 1? .25? .1? .05? .01?
    let arr = [];  
    let num = 0;
    if (dif >= value[i]){
      num = value[i] * (Math.floor(dif/value[i])); // .5 / .25 = 2 - 2 * .25 = .5
      if (num > cid[cid.length - 1 - i][1]){
        num = cid[cid.length - 1 - i][1];
      }
      arr.push(name[i]);      
      arr.push(num);
      dif = (dif - num).toFixed(2);
      change.change.push(arr);
    }
  }
  if(dif > 0){
    change.status = 'INSUFFICIENT_FUNDS'
    change.change = [];
    return change;
  }
  return change;
}
checkCashRegister(
  19.5, 
  20, 
  [
    ["PENNY", 0.01],      // 0
    ["NICKEL", 0],     // 1
    ["DIME", 0],        // 2
    ["QUARTER", 0],    // 3
    ["ONE", 1],          // 4
    ["FIVE", 0],         // 5
    ["TEN", 0],          // 6
    ["TWENTY", 0],       // 7
    ["ONE HUNDRED", 0]  // 8
  ]
);
