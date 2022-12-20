const hasSecondCardFn = (array, bool) => {
let newArray = []
for (const a of array){
    // eslint-disable-next-line no-prototype-builtins
    if(a.hasOwnProperty('hasSecondCard')){
        a.hasSecondCard = bool;
        a.mode = bool;
    }
    newArray = [...newArray, a]
}
    return newArray;
}

const hasInsurancesFn = card => {
if(card.insurances) return true;
return false;
}

const setInsurances = (array) => {
console.log(array);
let newArray = []
for (const a of array){
    // eslint-disable-next-line no-prototype-builtins
    if(a.hasOwnProperty('hasInsurances')){
        a.hasInsurances = true;
        a.mode = true;
    }
    newArray = [...newArray, a]
}
    return newArray;
}

module.exports = {hasSecondCardFn, hasInsurancesFn, setInsurances};