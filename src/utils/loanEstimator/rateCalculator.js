const toMonth = 12;

exports.compute = (loanObj, magicNumber) => {
  const rate =
    (loanObj.amount / loanObj.income / (loanObj.duration * toMonth)) *
    (loanObj.amount / loanObj.income / magicNumber);
  return rate.toFixed(2);
};
