import React from "react";
import { ICard } from "../interface/interface";
import "../card.css"

interface Props {
    card: ICard
}

export const Card: React.FC<Props> = (props:Props) => {
    
    return (
        <div className="card">
            <span className="name">{props.card.name}</span>
            <span className="force">{props.card.force}</span>
            <span className="hp">{props.card.hp}</span>     
            <span className="cost">{props.card.cost}</span>
            <span className="point">{props.card.point}</span>
        </div>
    );
}