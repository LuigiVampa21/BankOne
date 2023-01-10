const orderingAccount = (array) => {
const chekingAcc = [...array].filter(a => a.type === "checking")[0];
const savingAcc = [...array].filter(a => a.type === "savings")[0];
const ivtAcc = [...array].filter(a => a.type === "investments")[0];

console.log([chekingAcc, savingAcc,ivtAcc]);
return [chekingAcc, savingAcc,ivtAcc]
}

module.exports = orderingAccount;