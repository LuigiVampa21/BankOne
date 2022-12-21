const getDigitalCard = cards => {
    const digitalCard = [...cards].filter(c => c.type === 'digital');
    return digitalCard[0].id
}

module.exports = getDigitalCard;