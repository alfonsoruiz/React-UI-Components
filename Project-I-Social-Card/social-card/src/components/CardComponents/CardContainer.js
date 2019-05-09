import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const cardContainer = props => {
    return (
        <div className="card">
            <a href="https://reactjs.org">
                <CardBanner />
                <CardContent />
            </a>
        </div>
    );
};

export default cardContainer;