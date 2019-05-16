function checkCashRegister(price, cash, cid) {
  // constants and variables
  const insf = 'INSUFFICIENT_FUNDS';
  const closed = 'CLOSED';
  const open = 'OPEN';
  let change = {
    'status': open,
    'change': []
  };
  console.log(price);
  console.log(cash);

  // print cash in drawer
  for (let i = 0; i < cid.length; i++){
    console.log(cid[i]);
  }

  // calc total
  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++){
    cidTotal += cid[i][1];
  }
  let total = parseFloat(cidTotal.toFixed(2))
  // and print it
  console.log('total: ' + total);

  //TODO **************************
  //subtract the cash from the price

  // Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

  // Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

  //Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

  //prints
  //console.log(change.status);
  //console.log(change.change);
  return change;
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
