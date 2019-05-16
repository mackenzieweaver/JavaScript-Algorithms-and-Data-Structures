function checkCashRegister(price, cash, cid) {

  // constants and variables
  const insf = 'INSUFFICIENT_FUNDS';
  const closed = 'CLOSED';
  const open = 'OPEN';
  const name = ['ONE HUNDRED','TWENTY','TEN','FIVE','DOLLAR','QUARTER','DIME','NICKEL','PENNY'];
  const value = [100,20,10,5,1,.25,.1,.05,.01];
  let change = {'status': open, 'change': []};

  // calc total in cash drawer
  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++){
    cidTotal += cid[i][1];
  }
  let total = parseFloat(cidTotal.toFixed(2))

  // and print it
  /*
  console.log(price);
  console.log(cash);
  for (let i = 0; i < cid.length; i++){
    console.log(cid[i]);
  }
  console.log('total: ' + total);
  */

  //subtract the cash from the price
  let dif = cash - price;
  console.log(dif);

  //TODO **************************
  // loop
  // is greater than 100? 20? 10? 5? 1? .25? .1? .05? .01?
  for (let i = 0; i < value.length; i++){
    if(dif > value[i]){
      console.log('greater than ' + value[i]);
      if(cid[])
      // do we have those? (yes - how many?) (no - go to next one down)
      console.log(dif / value[i]);
    }
  }
  // subtract from dif - go back to loop

  // if cash-in-drawer is less than the change due, 
  // or if you cannot return the exact change.
  if (total < dif){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  // if it is equal to the change due.
  // cash-in-drawer as the value for the key change 
  if (total === dif){
    return {status: "CLOSED", change: [money]};
  }

  // Otherwise, 
  // return {status: "OPEN", change: [...]}
  // with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

  //prints
  //console.log(change.status);
  //console.log(change.change);
  return change;
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
