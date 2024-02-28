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

    function mod(n:number, m:number) {
        return ((n % m) + m) % m;
      }
    const [card, setCard] = React.useState(newCard);
    const [cardID, setCardId] = React.useState(0);
    
    const getCardPrevious = (cardID:number)=>{
        let id = mod(cardID-1,200);
        setCardId(id);
        setCard(cards[cardID]);
    };

    const getCardNext = (cardID:number)=>{
        let id = mod(cardID+1,201);
        setCardId(id);
        setCard(cards[cardID]);
    };

    const getCardRandomly = ()=>{
        let cardID = Math.floor((Math.random()*201));
        setCardId(cardID);
        setCard(cards[cardID]);
    };
  return (
    <>  
        <button onClick={()=>getCardPrevious(cardID)}>Previous</button>
        <button onClick={()=>getCardRandomly()}>Click to Update Card</button>
        <button onClick={()=>getCardNext(cardID)}>Next</button>
        <div>DeBuG o_O'</div><Card card={card}/>
    </>
  );
}