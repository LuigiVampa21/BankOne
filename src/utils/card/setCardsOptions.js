/* eslint-disable no-prototype-builtins */

const hasSecondCardFn = (array, boolSC, boolIN) => {
let newArray = []
for (const a of array){
    if(a.hasOwnProperty('hasSecondCard')){
        a.hasSecondCard = boolSC;
        a.mode = boolSC;
    }
    newArray = [...newArray, a]
}
    return hasInsurancesFn(newArray, boolIN);
}

const hasInsurancesFn = (array, bool)=> {
    // console.log(array);
let newArray = []
for (const a of array){
    if(a.hasOwnProperty('hasInsurances')){
        a.hasInsurances = bool;
        a.mode = bool;
    }
    newArray = [...newArray, a]
}
// console.log(newArray);
    return newArray;
}

const resetCardDetails = array =>{
    let newArray = []
    array.forEach(a => {
        if(a.hasOwnProperty('hasSecondCard')){
            a.hasSecondCard = null;
            a.mode = false;
        }
        if(a.hasOwnProperty('hasInsurances')){
            a.hasInsurances = null;
            a.mode = false;
        }
        a.mode = false;
        newArray = [...newArray, a]
    })
    return newArray;
}


module.exports = {hasSecondCardFn, hasInsurancesFn, resetCardDetails};