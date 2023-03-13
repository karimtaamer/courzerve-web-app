import React, { useState, useEffect, useContext } from "react"
import { withRouter } from 'react-router-dom'
import Dots from '../generic/dots/Dots'
import StarRating from './StarRating'
import LevelsComponent from './LevelsComponent'
import { useGetRequest, usePostRequest, usePutRequest } from '../../service/api/ApiMethods'
import { LanguageStateContext } from '../../service/utils/language/LanguageGlobalState'
import {courseDataHandler, InstructorDataHandler} from './ReviewPageHandler'
import FirebaseButton from '../generic/FirebaseButton'
import ErrorDialog from '../generic/error/ErrorDialog'
import MainLoading from '../generic/MainLoading'
import {Helmet} from 'react-helmet'
import Loader from "react-loader-spinner";

const ReviewPage = (props) => {
const [courseData, setCourseData] = useState()
const [instructorData, setInstructorData] = useState()
const [isScrollAfterMainSection, setIsScrollAfterMainSection] = useState(false)
const { language, getDynamicText } = useContext(LanguageStateContext)
const [isError, setIsError] = useState(false)
const lng = window.location.pathname.split("/")[1]
const [data, isLoading] = useGetRequest(`/course/round/${lng}`, { headers: { 'courseId': props.match.params.id } });
// eslint-disable-next-line
const [courseResponse, courseError, isCourseLoading, courseMakeRequest, courseCancelRequest] = usePostRequest()
// eslint-disable-next-line
const [instructorResponse, instructorError, isInstructorLoading, instructorMakeRequest, instructorCancelRequest] = usePutRequest()
const [isSuccessLoading, setIsSuccessLoading]= useState(false)
useEffect(() => {
    window.scrollTo(0, 0)
    document.addEventListener('scroll', () => {
        setIsScrollAfterMainSection(window.scrollY > 150)
    });
    // eslint-disable-next-line
}, [])

if(courseResponse && instructorResponse){
    sessionStorage.setItem('customerName', courseData.name)
    props.history.push(`/${lng}/success/${data.course.courseId}/2`)
} 

const onConfirmClicked = async() => {
    setIsSuccessLoading(true)
    if(!courseData) return setIsError(true)
    if(courseData.email && emailValidation(courseData.email) ){
       return setIsError(true)
    }
    if(courseData && (courseData.name ) && (courseData.contentAmount && courseData.contentSatisfaction && courseData.instructorHelp && courseData.courzerveSupport && courseData.courseRating && instructorData.instructorRating && courseData.courseReview && instructorData.instructorReview)){
    courseDataHandler(courseData, data.round.roundId, data.course.courseId, courseMakeRequest)
    InstructorDataHandler(courseData, instructorData, instructorMakeRequest, data.course.instructor.id)
    } else {
        setIsError(true)
    }
}

  const onChangeCourse = (e) => {
    const id = e.target.id
    const info = e.target.value.trim()
    setCourseData(data => { return { ...data, [id]: info } })
    }

    const onChangeInstructor = (e) => {
        const id = e.target.id
        const info = e.target.value
        setInstructorData(data => { return { ...data, [id]: info } })
        }

        const closeError = () => {
            setIsError(false)
             setIsSuccessLoading(false)
        }

    return(
        <div className="reviewPageMainContainer">
            <Helmet>
            <title>Place Your Rating</title>
            <meta name="description" content="rate our courses and instructors" />
            </Helmet>

{(isError || courseError ) && <ErrorDialog handleClose={() => {isError ? closeError() : courseError ? courseCancelRequest(): instructorError && instructorCancelRequest()}} content={isError ? "Please make sure to fill all fields" : courseError && courseError.substring(0 ,courseError.length-4) }/>}

            <div className="reviewPage-UpperContainer">
             {/* <h3 className="UpperContainer-title">{language.reviewPage.title}</h3> */}
            </div>
            <div className="reviewPage-mainInnerContainer">
            <div className="reviewPage-mainReviewContainer" style={isScrollAfterMainSection ? { top: 60 } : {}}>
               {isLoading ? <MainLoading size="6em"/> : <div> <p style={{textAlign:'center'}} dangerouslySetInnerHTML={{ __html: getDynamicText("ReviewPara",[data && data.course.title]) }}/>
                <div >
                    <span className="reviewPage-courseInfoSection">
                        <img className="reviewPage-roundImg" alt="CourseImg" src={data && data.course.coursePhotoURL}></img>
                    <p style={{minWidth:'65%'}}>{data && data.course.title}</p>
                    </span>
                </div>
                <div>
                    <span className="reviewPage-courseInfoSection">
                    <img className="reviewPage-roundImg" alt="InstructorImg" src={data && data.course.instructor.photoURL}></img>
                    <p style={{minWidth:'65%'}}>{data && data.course.instructor.name}</p>
                    </span>
                </div> 
                </div>}
            </div>

            <div className="reviewPage-MainReviewRatingSection">
            <div className="reviewPage-SubContainer">
                <h3 className="main-title">{language.reviewPage.firstTitle}</h3>
                <Dots className="AboutUs-Dots" size="5" color="#416aa6" />
                <div className="reviewPage-MainSectionInfoSection">
                <input id="name" className="review-input" placeholder={language.reviewPage.firstPH} onChange={(e) => {onChangeCourse(e)}}></input>
                 <input id="email" className="review-input" placeholder={language.reviewPage.secondPH} onChange={(e) => {onChangeCourse(e)}}></input>
                {/*<input id="phoneNumber" className="review-input" placeholder={language.reviewPage.thirdPH} onChange={(e) => {onChangeCourse(e)}}></input> */}
                <div className="review-input" style={{paddingTop:'0.1em', paddingBottom:'0.1em'}}>
                    <FirebaseButton
                        randomizeFilename={false}
                        className="firebase-button"
                        storagePath={courseData && `/reviewImg/${courseData.name}`}
                        onSuccess={(url, filename) => {
                             !courseData && (!courseData["name"] && !courseData["email"]) && setIsError(true)
                             setCourseData(data => { return { ...data, 'imageUrl': url, 'filename': filename } })
                        }}>Choose file</FirebaseButton> {(courseData && courseData.filename) ? courseData.filename : "Upload your photo"}</div>
                </div>
            </div>
            <div className="reviewPage-SubContainer">
                <h3 className="main-title">{language.reviewPage.secondTitle}</h3>
                <Dots className="AboutUs-Dots" size="5" color="#416aa6" />
                <div className="reviewPage-MainSectionRatingSection">
                    <span className="ReviewPage-ratingSection">
                        <p className="reviewPage-feedbackText">{language.reviewPage.firstQuestion}</p>
                        <LevelsComponent ChosenBack={(e) => setCourseData(data => { return { ...data, "contentAmount": e } })}></LevelsComponent>
                    </span>
                    <span className="ReviewPage-ratingSection">
                        <p className="reviewPage-feedbackText">{language.reviewPage.secondQuestion}</p>
                        <LevelsComponent id="contentSatisfaction" ChosenBack={(e) => setCourseData(data => { return { ...data, "contentSatisfaction": e } })}></LevelsComponent>
                    </span>
                    <span className="ReviewPage-ratingSection">
                        <p className="reviewPage-feedbackText">{language.reviewPage.thirdQuestion}</p>
                        <LevelsComponent id="instructorHelp" ChosenBack={(e) => setCourseData(data => { return { ...data, "instructorHelp": e } })}></LevelsComponent>
                    </span>
                    <span className="ReviewPage-ratingSection">
                        <p className="reviewPage-feedbackText">{language.reviewPage.fourthQuestion}</p>
                        <LevelsComponent id="courzerveSupport" ChosenBack={(e) => setCourseData(data => { return { ...data, "courzerveSupport": e } })}></LevelsComponent>
                    </span>
                    
                </div>

            </div>
            <div className="reviewPage-SubContainer">
            <h3 className="main-title">{language.reviewPage.thirdTitle}</h3>
                <Dots className="AboutUs-Dots" size="5" color="#416aa6" />
                <div className="reviewPage-MainSectionReviewSection">
                <span className="ReviewPage-ratingSection">
                        <p className="reviewPage-feedbackText">{language.reviewPage.firstRating}</p>
                        <StarRating ratingBack={(e) => setCourseData(data => { return { ...data, "courseRating": e } })}></StarRating>
                    </span>
                    <span className="ReviewPage-ratingSection">
                        <p className="reviewPage-feedbackText">{language.reviewPage.secondRating}</p>
                        <StarRating ratingBack={(e) => setInstructorData(data => { return { ...data, "instructorRating": e } })}></StarRating>
                    </span>
                        <textarea id="courseReview" placeholder={language.reviewPage.firstRatingPH} rows="3" className="review-inputArea" onChange={(e) => {onChangeCourse(e)}}></textarea>
                        <textarea id="instructorReview" placeholder={language.reviewPage.secondRatingPH} rows="3"  className="review-inputArea" onChange={(e) => {onChangeInstructor(e)}}></textarea>
                </div>
            </div>
            {!isSuccessLoading ? <button className="reviewPage-Confirm-btn" onClick={() => {onConfirmClicked()}}>{language.reviewPage.submitBtn}</button>: 
            <Loader
                type="Oval"
                color="#416aa6"
                height={26}
                width={26}
                style={{ marginTop: "30px" }}
              />}
            </div>
            
            </div>
           
        </div>
    )
        
    
}
export default withRouter(ReviewPage);

export const emailValidation = (email) => {
    if(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)){
        return false;
    }
    else return true
}