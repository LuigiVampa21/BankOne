const formatter = numbers =>{
    const formattedCardNumbers = numbers.match(/.{1,4}/g);
    return formattedCardNumbers.join(' - ');

} 

const dateFormatter = numbers =>{
    const formattedDateNumbers = numbers.replace(/\//, " / ");
    return formattedDateNumbers;

} 

module.exports = {formatter, dateFormatter};