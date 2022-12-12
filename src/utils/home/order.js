const order = arg => {
    console.log(arg);
    const accounts = [...arg].sort((a,b) => b.amount - a.amount );
    return accounts;
  };
  
  module.exports = order;