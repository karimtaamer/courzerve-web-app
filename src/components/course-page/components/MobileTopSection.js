import React, { useState, useContext, useEffect } from 'react';
import Rating from '../../generic/Rating'
import { withRouter } from 'react-router-dom'
import VideoDialog from '../../generic/VideoDialog'
import InfoDialog from '../../generic/infoDialoge/InfoDialog'
import {compearDates, refactorMMMMddyyyyDate} from '../../../service/utils/Helpers'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import LargeInfoDialog from '../../generic/infoDialoge/LargeInfoDialog'
import PaymentDialog from '../../generic/ExplinationDialog/PaymentDialog'
import ReactGA from "react-ga";

function MobileTopSection({ course, round, history }) {
    const [isVideo, setIsVideo] = useState(false)
    const { language, getDynamicText } = useContext(LanguageStateContext)
    const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false)
    const [isLargeInfoDialogOpen, setIsLargeInfoDialogOpen] = useState(false)
    const lng = window.location.pathname.split("/")[1]
    // var video = ""
    // if(course["videoCoverURL"]){
    //     video = course.videoKey.split('=')[1]
    //     console.log(video)
    // }
    const [scrollTo, setScollTo] = useState()
    useEffect(() => {
        document.getElementById('CourseReviews') && setScollTo(document.getElementById('CourseReviews').offsetTop)
      // eslint-disable-next-line
   }, [])


    return (
        <div>
            {isInfoDialogOpen && <InfoDialog handleClose={() => { setIsInfoDialogOpen(false) }} Content={getDynamicText("EarlyBirdDialog", [round.earlyBirdDeadline, round.roundEarlyBirdPrice, round.roundPrice])} />}
            {isVideo && <VideoDialog videoKey={course.videoKey} open={isVideo} handleClose={() => { setIsVideo(false) }} />}
            {isLargeInfoDialogOpen && <LargeInfoDialog handleClose={() => { setIsLargeInfoDialogOpen(false) }} />}
            {course["videoCoverURL"] ? <div className="MobileTopSection-Video-Container" >
            <iframe allowFullScreen src={`https://www.youtube.com/embed/${course.videoKey}?autoplay=1rel=0&modestbranding=1&autohide=1`}  className="MobileTopSection-Video-Container"></iframe>
            </div> : <div className="MobileTopSection-Video-Container" style={{ backgroundImage: `url(${course.coursePhotoURL})` }}/>}
            <div className="MobileTopSection-Main-Container">
                <h4 className="MobileTopSection-Header">{course.title}</h4>
                <h5 className="MobileTopSection-SubHeader">{course.subTitle}</h5>
                {course.ratings.ratingSummary && <span className="MobileTopSection-Row" onClick={() => {scrollTo && window.scrollTo({top: scrollTo, behavior: 'smooth'})}}>
                    <Rating dark rating={course.ratings.ratingSummary.averageRating} className="CTopSection-Rating" />
                    <p className="MobileTopSection-T">{Math.round(course.ratings.ratingSummary.averageRating * 10)/10}</p>
                </span>}
                {course.numberOfCustomersApplied && <span className="MobileTopSection-Row">
                    <i className="fas fa-user-plus MobileTopSection-Row-Icon" />
                    <p style={{ margin: "0" }}>{`${round.numberOfCustomersApplied} Students applied`}</p>
                </span>}
                {/* {course.numberOfRoundsCompleted !== 0 && <span className="MobileTopSection-Row">
                    <i className="fas fa-sync MobileTopSection-Row-Icon" />
                    <p style={{ margin: "0", marginLeft: "0.3em" }}>{`${course.numberOfRoundsCompleted} rounds completed`}</p>
                </span>} */}
                <span className="MobileTopSection-Row">
                    <i className="far fa-hourglass MobileTopSection-Row-Icon" />
                    <p style={{ margin: "0", marginLeft: "0.4em",  direction: "rtl" }}>{`${course.duration}`}</p>
                </span>
                <span className="MobileTopSection-Row">
                    <i className="fas fa-file-alt MobileTopSection-Row-Icon" />
                    <p style={{ margin: "0", marginLeft: "0.4em",  direction: "rtl" }}>{`${course.numberOfLectures} ${language.coursePage.ApplySectionTitles.thirdTitle2}`}</p>
                </span>
                <span className="MobileTopSection-Row">
                    <i className="far fa-clock MobileTopSection-Row-Icon" />
                    <p style={{ margin: "0", marginLeft: "0.4em"}} className=""><span className="MobileTopSection-timing">{language.coursePage.ApplySectionTitles.timingTitle}</span> {round &&round["startDate"] ? refactorMMMMddyyyyDate(round.startDate) : <button className="CoursePage-applySection-learnmoreBtn" onClick={() => setIsLargeInfoDialogOpen(true)}>{language.learnMore}</button>} </p>
                </span>
                 <span className="MobileTopSection-Row">
                    <i className="fas fa-money-bill-wave MobileTopSection-Row-Icon" />
                    <p style={{ margin: "0", marginLeft: "0.4em" }}> {language.coursePage.ApplySectionTitles.PaymentTitle} <button className="CoursePage-applySection-learnmoreBtn" onClick={() => {
                         history.push(`/${lng}/course/${course.courseId}/apply`)
                        ReactGA.event({
                            category: `Events`,
                            action: 'Opened Payment dialog'
                          });
                        }} style={{marginRight:"8px"}}> {language.learnMore}</button></p>
                </span>

                {round && compearDates(round.earlyBirdDeadline) &&
                    <div>
                        <span className="MobileTopSection-Row">
                            <i className="fas fa-money-bill-wave MobileTopSection-Row-Icon"></i>
                            <p style={{ margin: "0", marginLeft: "0.4em" }}>{language.coursePage.ApplySectionTitles.secondTitle}:</p>
                            <h5 style={{ margin: '0px', marginLeft: "5px" }}>{`${round.roundPrice} ${language.coursePage.ApplySectionTitles.pricing}`}</h5>
                        </span>
                        <span className="MobileTopSection-Row">
                            <i className="fas fa-dove MobileTopSection-Row-Icon"></i>
                            <p style={{ margin: "0", marginLeft: "0.4em" }}>{language.coursePage.ApplySectionTitles.firstTitle}:</p>
                            <h4 style={{ margin: '0px', marginLeft: '5px', color: '#416aa6' }}>{round.roundEarlyBirdPrice} {language.coursePage.ApplySectionTitles.pricing}</h4>
                            <i className="fas fa-question-circle" style={{ fontSize: '1.2em', color: 'rgba(190, 190, 190, 0.958)', cursor: 'pointer', marginLeft: '5px', marginBottom: '3px' }} onClick={() => { setIsInfoDialogOpen(true) }}></i>
                        </span>
                    </div>
                }

                {course.instructor && <div className="MobileTopSection-Instructor-Container">
                    <img className="MobileTopSection-Instructor-Img" src={course.instructor.photoURL} alt="istructor" />
                    <span className="MobilTopSection-Instructor-info">
                        <h3 className="CoursePage-applySection-Instructor-name">{course.instructor.name}</h3>
                        <h4 className="CoursePage-applySection-titles">{course.instructor.jobTitle}</h4>
                        {course.instructor.averageRating && <div className="CoursePage-applySection-rating" style={{justifyContent:"start"}}><Rating dark rating={course.instructor.averageRating} className="CTopSection-Rating"/> <p className="CoursePage-applySection-titles" style={{marginLeft:"0.8em"}}>{Math.round(course.instructor.averageRating*10)/10}</p></div> }
                    </span>
                    <span onClick={() => history.push(`/${lng}/instructor/${course.instructor.id}`)} className="MobileTopSection-GoToProfile">
                        <u style={{ wordSpacing: "1px" }}>{language.coursePage.ApplySectionTitles.ApplySectionInstructorBtn}</u>
                       {lng === "en" ? <i style={{ marginLeft: '0.5em', fontSize: '1rem' }} className="fas fa-caret-right"/> : <i style={{ marginRight: '0.5em', fontSize: '1rem' }} className="fas fa-caret-left"/>}
                    </span>
                </div>}
            </div>
        </div>
    );
}

export default withRouter(MobileTopSection);