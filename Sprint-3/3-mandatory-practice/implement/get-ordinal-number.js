function getOrdinalNumber(num) {
    if (num === 1) return `${num}st`;
    else if (num === 2) return `${num}nd`;
    else if (num === 3) return `${num}rd`;
    else {
        return `${num}th`;
    }
 }

module.exports = getOrdinalNumber;