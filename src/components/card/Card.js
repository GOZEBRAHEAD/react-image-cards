import React from 'react';
import "./Card.css";

const Card = ({ objData }) => {

    return (
        <div className="card">
            <img className="card__image" src={ objData.download_url } alt={ objData.author }/>
        </div>
    );
};

export default Card;
