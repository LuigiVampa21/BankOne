const sum = arg => {
  const accounts = [...arg].filter(a => a.type !== "investments");
  const accountsEmpty = [...arg].every(a => a.amount == '0.00');
  if(accountsEmpty) return '0.00';
  const total = [...accounts].reduce((acc, curr) => {
    return +acc + +curr.amount;
  }, 0);
  return total;
};

module.exports = sum;
