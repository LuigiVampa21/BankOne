const toMonth = 12;
const toPercentage = 0.01;

exports.computeMonthly = (loanObj, rate) => {
  const interest =
    (loanObj.amount * (rate * toPercentage)) / (loanObj.duration * toMonth);
  return interest;
};

exports.computeTotal = (loanObj, interest) => {
  const total = loanObj / (loanObj.duration * toMonth) + interest;
  return total;
};
