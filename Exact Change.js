function checkCashRegister(price, cash, cid) {
  var changeDue = (cash * 100 - price * 100) / 100,
      currency = [
        ["ONE HUNDRED", 100.00],
        ["TWENTY", 20.00],
        ["TEN", 10.00],
        ["FIVE", 5.00],
        ["ONE", 1.00],
        ["QUARTER", 0.25],
        ["DIME", 0.10],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
      ],
      change = [];

  function cashToGive(slicer) {
    var cashInDrawer = 0;
    cid.slice(slicer).forEach(function(val) {
      cashInDrawer += val[1]*100;
    });
    cashInDrawer /= 100;
    return cashInDrawer;
  }

  if (changeDue === cashToGive()) {    // If I had exact cash, 'Closed' will tell me to give it all :D
    return "Closed";
  }

  function giveChange(currName, value, rev) {
    if (changeDue >= value && cid[cid.length-rev][1] > 0) {    // If I can use this bill
      change.push([currName, 0]);                              // Then I push it into your change
      // -- This is to prevent float issues when adding numbers: -- //
          cid[cid.length-rev][1] = Math.ceil(cid[cid.length-rev][1] * 100);
          changeDue = Math.ceil(changeDue * 100);
          value = Math.ceil(value * 100);
      // --------------------------------- //
      while (changeDue >= value && cid[cid.length-rev][1] > 0) {
        cid[cid.length-rev][1] -= value;      // <-- I loose this bill
        change[change.length-1][1] += value;  // <-- When I give it to you
        changeDue -= value;                   // <-- And this is what I still owe you..
      }
      // -- Reset to original values (preventing float issues) -- //
          changeDue /= 100;
          cid[cid.length-rev][1] /= 100;
          change[change.length-1][1] /= 100;
      // --------------------------------- //
    }
  }

  currency.forEach(function(val, ind) {      // I run through all my currency from hi to low values
    giveChange(val[0], val[1], (ind + 1));   // And give you the highest I can for the remaining amount
  });

  // Here is your change, ma'am.  (or 'I don't have enough change, sorry.. :P)
  return changeDue === 0 ? change : "Insufficient Funds";
}



// ----------- TESTER ------------ //

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

