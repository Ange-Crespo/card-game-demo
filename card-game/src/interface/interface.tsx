export interface Card {
    id: number;
    name: string;
    force: number;
    hp: number;
    cost: number;
    point: number;
}

export interface Deck {
    deck : Card[];
}
