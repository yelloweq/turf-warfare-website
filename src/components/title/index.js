import React from 'react';
import './Title.scss';

function Title({children}) {
    return (
        <div className="title-wrapper">
            <div className="title-container">
                <div className="content">
                    <div className="text">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Title
