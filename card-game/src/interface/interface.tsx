export interface ICard {
    id: number;
    name: string;
    force: number;
    hp: number;
    cost: number;
    point: number;
}

export interface IDeck {
    deck : ICard[];
}

export interface IMain {
    main : ICard[]
}

export interface IPlayer {
    playerDeck : IDeck;
    playerMain : IMain;
}

export type IAction = {
	type: string;
	card: ICard;
    player: string;
};
