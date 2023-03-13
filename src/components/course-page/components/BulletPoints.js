import React from 'react';
import Dots from '../../generic/dots/Dots'

function BulletPoints({id, title, points, className }) {
    return (
        <div id={id} className={className}>
            <h3 className="main-title">{title}</h3>
            <Dots className="main-dots" size="4" color="#416aa6" />
            {points.map(point =>
                <div  key={point} className="BulletPoint-Point"> 
                    <span className="BulletPoint-Dot"></span>
                    <p className="BulletPoint-T">{point}</p>
                </div>)}
        </div>
    );
}

export default BulletPoints;