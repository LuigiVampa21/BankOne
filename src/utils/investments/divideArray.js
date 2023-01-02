const divideArray = array => {
    let newArray = [];
        const [a,b,c, ...rest] = array;
        newArray = [[a,b,c],[...rest]];
    return newArray;
}

module.exports = divideArray;