import React from 'react';
import './card.styles.css'


const Card  = (props) => {

    return(
        <div className="card-container">
        <img alt="monster" src={`https://robohash.org/PC${props.user.id}.png?set=set2&size=150x150`} /> 

            <h2> {props.user.name}</h2>
        </div>
    )
}

export default Card;