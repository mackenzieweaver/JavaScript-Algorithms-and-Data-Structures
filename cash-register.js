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

  // where the magic happens
  let dif = cash - price;
  for (let i = 0; i < value.length; i++){ // is greater than 100? 20? 10? 5? 1? .25? .1? .05? .01?
    let arr = [];  
    let num = 0;
    if (dif >= value[i]){
      num = value[i] * (Math.floor(dif/value[i]));
      if (num > cid[cid.length - 1 - i][1]){
        num = cid[cid.length - 1 - i][1];
      }
      arr.push(name[i]);      
      arr.push(num);
      dif = (dif - num).toFixed(2);
      change.change.push(arr);
    }
  }
  console.log(change.status);
  console.log(change.change);
  return change;
}
checkCashRegister(
  3.26, 
  100, 
  [
    ["PENNY", 1.01],      // 0
    ["NICKEL", 2.05],     // 1
    ["DIME", 3.1],        // 2
    ["QUARTER", 4.25],    // 3
    ["ONE", 90],          // 4
    ["FIVE", 55],         // 5
    ["TEN", 20],          // 6
    ["TWENTY", 60],       // 7
    ["ONE HUNDRED", 100]  // 8
  ]
);
