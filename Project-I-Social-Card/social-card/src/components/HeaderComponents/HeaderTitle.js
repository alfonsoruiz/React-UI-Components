import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="author-info">
            <h1 className="author-name">Lambda School</h1>
            <p className="author-handle">@LambdaSchool</p>
            <p className="time-stamp">26 jan</p>
        </div>
    );
};

export default HeaderTitle;