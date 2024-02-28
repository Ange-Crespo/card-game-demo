import React, { useState } from 'react'
import { IMain, IPlayer } from '../interface/interface';
import { AppContext } from '../context/Context';
import { PlayerHand } from './PlayerHand';

export const Board = () => {
    const { state, dispatch } = React.useContext(AppContext)
    const handOne = state[0].playerMain

    const [isFirstPlayerTurn, setTurn] = useState(true)
    const [field, setField] = useState([]);
    let playerhand: IMain
    if (isFirstPlayerTurn) {
        playerhand = state[0].main
    } else {
        playerhand = state[1].main
    }
    let hand:IMain = {main: [
        {id: 0, name: "", force: 0, hp:0, cost: 0, point:0},
        {id: 0, name: "", force: 0, hp:0, cost: 0, point:0},
        {id: 0, name: "", force: 0, hp:0, cost: 0, point:0},
        {id: 0, name: "", force: 0, hp:0, cost: 0, point:0}
    ]}
  return (
    <div>
        Gameboard
        <PlayerHand {...hand}/>
    </div>
  )
}
