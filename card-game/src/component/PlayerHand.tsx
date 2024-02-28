import React, { useState } from 'react'
import { AppContext } from '../context/Context';
import Card from './Card';
import { IMain } from '../interface/interface';
import '../hand.css'

export const PlayerHand = (cards: IMain) => {
    return (
        <div className='hand'>
            {cards.main.map(() => <Card/>)}
        </div>
    )
}