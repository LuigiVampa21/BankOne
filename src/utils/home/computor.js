// const account_checking = require("../bank_account/account_checking")
// const account_savings = require("../bank_account/account_savings")
// const account_investments = require("../bank_account/account_investments")


const sum = (arg, all = false) => {
  let accounts = [...arg];
  console.log(accounts);
  if(!all){
    accounts = [...arg].filter(a => a.type !== "investments");
  }
  const accountsEmpty = [...arg].every(a => a.amount == '0.00');
  if(accountsEmpty) return '0.00';
  const total = [...accounts].reduce((acc, curr) => {
    return +acc + +curr.amount;
  }, 0);
  console.log(total);
  return total;
};

module.exports = sum;


// const amountTotal = sum([account_checking,account_savings,account_investments], 'all');
// console.log(amountTotal);