const getCardsInOrder = cards => {
    const cardsArray = [...cards].sort((a,b) => a.type.localeCompare(b.type))
    return cardsArray;
}

module.exports = getCardsInOrder;