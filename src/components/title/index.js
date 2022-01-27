import React from 'react';
import './Title.scss';

function Title({children}) {
    return (
        <div className="container">
                <div className="content">
                    <h1 className="display-4 text-white">{children}</h1>
                </div>
        </div>
    )
}

export default Title
