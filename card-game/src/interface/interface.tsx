export interface ICard {
    id: number;
    name: string;
    force: number;
    hp: number;
    cost: number;
    point: number;
}

export interface Deck {
    deck : ICard[];
}

export interface Main {
    main : Card[]
}

export interface Player {
    playerDeck : Deck;
    playerMain : Main;
}

export type Action = {
	type: string;
	card: Card;
    player: string;
};
