const toMonth = 12;

exports.compute = (loanObj, magicNumber) => {
  const rate =
    (loanObj.amount / loanObj.income / (loanObj.duration * toMonth)) *
    (loanObj.amount / loanObj.income / magicNumber);
  if (rate == Infinity || isNaN(rate)) return 0;
  return rate.toFixed(2);
};
