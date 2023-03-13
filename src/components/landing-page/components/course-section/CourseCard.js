import React, { useState, useContext } from 'react';
import VideoDialog from '../../../generic/VideoDialog'
import { withRouter } from 'react-router-dom'
import {LanguageStateContext} from '../../../../service/utils/language/LanguageGlobalState'
import ReactGA from "react-ga";

function CourseCard({ history, course,match }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const {language} = useContext(LanguageStateContext)
    return (
        <div className="CourseCard-Main">
            {isDialogOpen && <VideoDialog videoKey={course.videoKey} open={isDialogOpen} handleClose={() => { setIsDialogOpen(false) }} />}
           {course["videoCoverURL"] ? <div style={{ backgroundImage: `url(${course.coursePhotoURL})` }} alt="maincourse" className="CourseCard-Image"  onClick={() => { setIsDialogOpen(true) }} >
            <span className="playBtn" onClick={() => {
                  ReactGA.event({
                    category: `${course.courseId} Events`,
                    action: 'Opened Video'
                  });
                setIsDialogOpen(true)  }} />
            </div> : <div style={{ backgroundImage: `url(${course.coursePhotoURL})` }} alt="maincourse" className="CourseCard-Image"  onClick={() => { setIsDialogOpen(true) }} />} 
            <div className="CourseCard-Container">
                <img alt="instrutor" className="CourseCard-Instructor-Image" src={course.instructor.photoURL} />
                <p className="CourseCard-Instructor-Name">{course.instructor.name}</p> 
                <h5 className="CourseCard-Name">{course.title}</h5> 



                <span onClick={()=>history.push(`/${match.params.lng}/course/${course.courseId}`)} className="CourseCard-BottomItemContainer">
                    <p >{language.landingPage.courseSection.courseBtn}</p>
                    {match.params.lng === "en" ?<span><i style={{ marginLeft: "0.4em", color: "#416aa6" }} className="fas fa-chevron-right" />
                    <i style={{  color: "#416aa6" }} className="fas fa-chevron-right" /> </span> 
                    : 
                    <span><i style={{ marginLeft: "0.4em", color: "#416aa6" }} className="fas fa-chevron-left" />
                    <i style={{  color: "#416aa6" }} className="fas fa-chevron-left" /> </span>}
                </span>

            </div>
        </div>

    );
}

export default withRouter(CourseCard);