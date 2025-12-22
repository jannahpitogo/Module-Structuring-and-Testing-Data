const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    expect(getCardValue("A♠")).toEqual(11);
    expect(getCardValue("2♠")).toEqual(2);
    expect(getCardValue("5♠")).toEqual(5);
    expect(getCardValue("J♠")).toEqual(10);
    expect(getCardValue("Q♠")).toEqual(10);
    expect(getCardValue("K♠")).toEqual(10);
    expect(getCardValue("10♠")).toEqual(10);
    expect(getCardValue("1234789")).toEqual("Invalid card rank");
    });

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
