import React from 'react'
import { Card } from '../component/Card'
import { cards } from "../cards/cards";
import { ICard } from '../interface/interface';


export const DeckBuilder = () => {

  return (
    <>
    <div>DeckBuilder</div>
    {cards.map((card: ICard) => {
      return <Card card={card}></Card>
    }
      
      )}
    );
   
    </>
  )
}