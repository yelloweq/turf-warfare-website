import React from 'react';
import './Title.scss';

function Title({children}) {
    return (
        <div class="title-wrapper">
            <div className="content">
                <div className="text">{children}</div>
            </div>
        </div>
    )
}

export default Title
