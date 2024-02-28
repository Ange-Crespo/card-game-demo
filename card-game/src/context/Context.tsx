import React, { ReactNode, createContext, useReducer } from "react";
import { Action, Card, Deck, Player } from "../interface/interface";

const initialState: Player[] = [
	{
		playerDeck: { deck: [] },
		playerMain: { main: [] },
	},
	{
		playerDeck: { deck: [] },
		playerMain: { main: [] },
	},
];

const userHasCardInDeck = (state: Player[], card: Card, player: string) => {
	if (player === "p1") {
		if (state[0].playerDeck.deck.includes(card)) {
			return removeCard("p1", state, card);
		} else {
			return addCard("p1", state, card);
		}
	} else {
		if (state[0].playerDeck.deck.includes(card)) {
			return removeCard("p2", state, card);
		} else {
			return addCard("p2", state, card);
		}
	}
};

const addCard = (player: string, state: Player[], card: Card) => {
	let a;
	if (player === "p1") {
		a = state[0].playerDeck.deck.filter((c: Card) => c !== card);
		return {
			...state,
			deck: a,
		};
	} else {
		a = state[1].playerDeck.deck.filter((c: Card) => c !== card);
	}
	return {
		...state,
		deck: a,
	};
};

const removeCard = (player: string, state: Player[], card: Card) => {
	let a;
	if (player === "p1") {
		a = state[0].playerDeck.deck.filter((c: Card) => c !== card);
		return [{ ...state[0], playerDeck: { deck: a } }, state[1]];
	} else {
		a = state[1].playerDeck.deck.filter((c: Card) => c !== card);
		return [state[0], { ...state[1], playerDeck: { deck: a } }];
	}
};

const reducer = (state: Player[], action: Action) => {
	switch (action.type) {
		case "ADD_REMOVE_CARD_DECK":
			return userHasCardInDeck(state, action.card, action.player);
        case "ADD_REMOVE_CARD_MAIN":
			return userHasCardInDeck(state, action.card, action.player);
		default:
			return state;
	}
};

export const AppContext = createContext<any>({
    state: initialState,
    dispatch: () => null
  });

export const AppProvider = ({ children } : {children : ReactNode}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider
			value={{
				state: state,
				dispatch,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
