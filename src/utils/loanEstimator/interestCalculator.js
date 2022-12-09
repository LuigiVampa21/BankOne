const toMonth = 12;
const toPercentage = 0.01;

exports.computeMonthly = (loanObj, rate) => {
  let interest =
    (loanObj.amount * (rate * toPercentage)) / (loanObj.duration * toMonth);
  if (interest == Infinity || isNaN(interest)) return 0;
  return interest.toFixed(2);
};

exports.computeTotalInterest = (loanObj, monthlyInterest) => {
  let totalInterest = monthlyInterest * (loanObj.duration * toMonth);
  if (totalInterest == Infinity || isNaN(totalInterest)) return 0;
  return totalInterest.toFixed(2);
};

exports.computeTotalMonthly = (loanObj, interest) => {
  let total = loanObj.amount / (loanObj.duration * toMonth) + +interest;
  if (total == Infinity || isNaN(total)) return 0;
  return total.toFixed(2);
};

exports.computeTotal = (loanObj, totalMonthly) => {
  let total = totalMonthly * (loanObj.duration * toMonth);
  if (total == Infinity || isNaN(total)) return 0;
  return total.toFixed(2);
};
