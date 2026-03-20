class Deck {
    private cards: string[];

    constructor() {
        this.cards = this.createDeck();
        this.shuffle();
    }

    private createDeck(): string[] {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const deck = [];
        for (const suit of suits) {
            for (const value of values) {
                deck.push(value + ' of ' + suit);
            }
        }
        return deck;
    }

    public shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    public deal(count: number): string[] {
        return this.cards.splice(0, count);
    }
}

export default Deck;