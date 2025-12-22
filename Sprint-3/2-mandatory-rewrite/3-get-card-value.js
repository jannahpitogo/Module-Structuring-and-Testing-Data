function getCardValue(card) {
    const rank = card.slice(0, -1);
    const value = parseInt(rank);

    if (rank === "A") return 11;
    else if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;
    else if (value >= 2 && value <= 9) {
        return value;
    } else {
        return "Invalid card rank"
    }
}
module.exports = getCardValue;