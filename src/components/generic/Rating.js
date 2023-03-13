import React from 'react';

function Rating({ rating, className, dark }) {
    rating = Math.round(rating * 2) / 2
    const getStarBasedOnRating = (currentIndex) => {
        if (currentIndex <= Math.floor(rating)) return <i style={{ color: "#FFDC64" }} className="fas fa-star" />
        else if (currentIndex === Math.round(rating)) return <i style={{ color: "#FFDC64" }} className="fas fa-star-half-alt" />
        else return <i style={{ color: dark ? "#929292b4" : "white" }} className="far fa-star" />
    }
    return (
        <div style={{ display: "flex" }} className={className}>
            {getStarBasedOnRating(1)}
            {getStarBasedOnRating(2)}
            {getStarBasedOnRating(3)}
            {getStarBasedOnRating(4)}
            {getStarBasedOnRating(5)}

        </div>
    );
}

export default Rating;