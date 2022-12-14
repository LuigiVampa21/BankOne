const hasSecondCardFn = (array, bool) => {
let newArray = []
for (const a of array){
    // eslint-disable-next-line no-prototype-builtins
    if(a.hasOwnProperty('hasSecondCard')){
        a.hasSecondCard = bool;
        a.mode = true;
    }
    newArray = [...newArray, a]
}
    return newArray;
}

module.exports = hasSecondCardFn;