import React from "react";
import './item.styles.css';

//{id, image, name_english, base_HP, base_Defense, base_Attack}

const Item = (props) => {
    return(
        <div className="item">
            <img src={props.pokemon.image} loading="lazy" alt={props.pokemon.name_english}/>
            <h3 className="align-center">{props.pokemon.name_english.toUpperCase()}</h3>
            <div className="meta-container space-between">
                <div className="hp">HP: {props.pokemon.base_HP}</div>
                <div className="hp">Defense: {props.pokemon.base_Defense}</div>
                <div className="attack">Attack: {props.pokemon.base_Attack}</div>
            </div>
        </div>
    )
}

export default Item;