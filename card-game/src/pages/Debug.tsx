import React from 'react'
import { Card } from '../component/Card'
import { ICard } from "../interface/interface";
import { cards } from "../cards/cards";

const newCard : ICard = { 
    id: Math.random(),
    name: "Raichu",
    force: 3,
    hp: 120,
    cost: 5,
    point: 4 
  }

export const Debug = () => {
    const updateNewCard = ()=>{
        return cards[Math.random()*200];
    };
  return (
    <><button onClick={()=>updateNewCard()}>Click to Update Card</button><div>DeBuG o_O'</div><Card card={newCard} /></>
  );
}