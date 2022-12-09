exports.compute = amount => {
  if (amount < 20000) {
    return 0.75;
  }
  if (amount < 100000) {
    return 1.5;
  }
  if (amount < 500000) {
    return 3;
  }
};
