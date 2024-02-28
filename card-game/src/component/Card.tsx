import * as React from "react";
import { ICard } from "../interface/interface";
import "../card.css"

export default function Card() {
    const [isHovered, setIsHovered] = React.useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const highlightStyle = {
        backgroundColor: isHovered ? '#e0e0e0' : 'transparent', // Change the background color when hovered
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
      };
    const newCard : ICard = { 
        id: Math.random(),
        name: "pikachu",
        force: 3,
        hp: 120,
        cost: 5,
        point: 4 
      }
    return (
        <div
        className="card"
        style={highlightStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <span className="name">{newCard.name}</span>
            <span className="force">{newCard.force}</span>
            <span className="hp">{newCard.hp}</span>     
            <span className="cost">{newCard.cost}</span>
            <span className="point">{newCard.point}</span>
        </div>
    );
}