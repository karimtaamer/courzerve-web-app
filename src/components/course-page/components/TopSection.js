import React, { useEffect, useState } from 'react';
import Rating from '../../generic/Rating'
function TopSection({ course, round }) {
   const [scrollTo, setScollTo] = useState()
     useEffect(() => {
        document.getElementById('CourseReviews') && setScollTo(document.getElementById('CourseReviews').offsetTop)
       // eslint-disable-next-line
    }, [])
    
    return (
        <div className="CTopSection-Container">
            <div className="CTopSection-LeftSubContainer">
                <h4 className="CTopSection-Header">{course.title}</h4>
                <h5 className="CTopSection-SubHeader">{course.subTitle}</h5>
            </div>
            <div className="CTopSection-RightSubContainer">
                <span className="CTopSection-Row" onClick={() => {scrollTo && window.scrollTo({top: scrollTo, behavior: 'smooth'})}}>
                    {course.ratings.ratingSummary && <Rating dark rating={course.ratings.ratingSummary.averageRating} />}
                    {course.ratings.ratingSummary && <p className="CTopSection-T">{Math.round(course.ratings.ratingSummary.averageRating*10)/10}</p>}
                </span>
                <span className="Footer-SocialMedia-Container" style={{width:'6em'}}>
                <a href="https://rebrand.ly/courzerve_facebook" rel="noopener noreferrer" target="_blank" className="Footer-SocialMedia-Circle cr"> <i className="fab fa-facebook-f" /></a>
                {/* <a href="https://www.linkedin.com/company/courzerve/" target="_blank" className="Footer-SocialMedia-Circle"> <i className="fab fa-linkedin-in" style={{color:'white'}}></i></a> */}
                <a href="https://rebrand.ly/courzerve_insta" rel="noopener noreferrer" target="_blank" className="Footer-SocialMedia-Circle cr"> <i className=" fab fa-instagram" /></a>
            </span>

                {course.numberOfCustomersApplied && <span className="CTopSection-Row">
                    <i style={{ marginRight: "0.8em", fontSize: "1.5rem" }} className="fas fa-user-plus" />
                    <p style={{ margin: "0" }}>{`${course.numberOfCustomersApplied} Students applied`}</p>
                </span>}
                {/* {course.numberOfRoundsCompleted !== 0 && <span className="CTopSection-Row">
                    <i style={{ marginRight: "0.8em" }} className="fas fa-sync" />
                    <p style={{ margin: "0" }}>{`${course.numberOfRoundsCompleted} rounds completed`}</p>
                </span>} */}

            </div>


        </div>
    );
}

export default TopSection;