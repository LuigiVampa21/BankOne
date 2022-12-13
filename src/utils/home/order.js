const order = arg => {
    const accounts = [...arg].sort((a,b) => b.amount - a.amount );
    return accounts;
  };
  
  module.exports = order;