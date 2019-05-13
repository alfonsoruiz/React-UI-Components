import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className="card-content">
            <h2 className="card-heading">Get Started With React</h2>
            <p className="card-description">React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
            <a className="card-link" href="https://reactjs.org">reactjs.org</a>
        </div>
    );
};

export default CardContent;
