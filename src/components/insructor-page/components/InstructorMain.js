import React, { useState, useEffect } from 'react';
import Rating from '../../generic/Rating'
function InstructorMain({ instructor }) {
    const [isScrollAfterTopSection, setIsScrollAfterTopSection] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setIsScrollAfterTopSection(window.scrollY > 150)
        });
        // eslint-disable-next-line
    }, [])

    return (
        <div style={isScrollAfterTopSection ? { top: 70 } : {}} className="InstructorMain-MainContainer flexColumnCenterStart">
            <img className="InstructorMain-Img" src={instructor.photoURL} alt="Instructor" />
            <h5 className="InstructorMain-Title">{instructor.name}</h5>
            <p className="InstructorMain-SubTitle">{instructor.jobTitle}</p>
            {instructor.ratings.ratingSummary && <span className="flexRowCenterCenter InstructorMain-Rating-Container">
                <Rating rating={instructor.ratings.ratingSummary.averageRating} dark />

                <p style={{ margin: "0", marginLeft: "1em" }}>{Math.round(instructor.ratings.ratingSummary.averageRating*10)/10}</p>
            </span>
            }
        </div>
    );
}

export default InstructorMain;