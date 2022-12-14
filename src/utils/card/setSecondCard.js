const hasSecondCardFn = (array, bool) => {
// console.log(array);
console.log(bool);
let newArray = []
for (const a of array){
    // eslint-disable-next-line no-prototype-builtins
    if(a.hasOwnProperty('hasSecondCard')){
        a.hasSecondCard = bool
    }
    newArray = [...newArray, a]
}
    // const newArray = [...array].forEach(a => a.hasSecondCard = bool)
    console.log(newArray);
    return newArray;
}

module.exports = hasSecondCardFn;