const sum = arg => {
  const accounts = [...arg].filter(a => a.type !== "investments");
  const total = [...accounts].reduce((acc, curr) => {
    return +acc + +curr.amount;
  }, 0);
  return total;
};

module.exports = sum;
