enum Suit {
    HEARTS,
    DIAMONDS,
    CLUBS,
    SPADES,
}

enum Rank {
    TWO = 2,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK = 11,
    QUEEN = 12,
    KING = 13,
    ACE = 14,
}

class Card {
    suit: Suit;
    rank: Rank;

    constructor(suit: Suit, rank: Rank) {
        this.suit = suit;
        this.rank = rank;
    }

    toString(): string {
        return \
            `${Rank[this.rank]} of ${Suit[this.suit]}`;
    }

    getRankValue(): number {
        return this.rank;
    }
}

export { Card, Suit, Rank };