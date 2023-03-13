import React from 'react';
import Loader from 'react-loader-spinner'

function MainLoading({size}) {
    return (
        <div style={{ marginBottom: "30em" }} className="CourseSection-Title-Container">
            <Loader
                type="Oval"
                color="#416aa6"
                height={size || 110}
                width={ size || 110}
            />
        </div>
    );
}

export default MainLoading;