import React, { useContext } from 'react';
import Dots from '../../generic/dots/Dots'
import { useGetRequest } from '../../../service/api/ApiMethods'
import { withRouter } from 'react-router-dom'
import Rating from '../../generic/Rating'
import Loader from 'react-loader-spinner'
import ErrorDialog from '../../generic/error/ErrorDialog'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

function InstrucotCourses({ course, match, history }) {
    const [data, isLoading, error, cancelRequest] = useGetRequest(`/instructor/course`, { headers: { 'instructorid': match.params.id } });
    const {language} = useContext(LanguageStateContext)
    const lng = window.location.pathname.split("/")[1]

    const CourseCard = ({ image, title, courseId, rating }) => <div className="flexRowCenterStart InstructorCourses-Card-Container">
        <img className="InstructorCourses-Card-Img" alt="Course" src={image} />
        <span style={{ height: "92%" }} className="flexColumnStartSpaceBetween">
            <p className="InstructorCourses-Card-Title">{title}</p>
            {rating.ratingSummary && <Rating dark rating={rating.ratingSummary.averageRating} />}
            <button onClick={() => history.push(`/${lng}/course/${courseId}`)} className="InstructorCourses-Card-B">{language.applyNowBtn}</button>
        </span>
    </div>
    return (
        <div style={{ marginTop: "3em" }}>
              {error && <ErrorDialog handleClose={() => {cancelRequest() }} content={language.errorText.text1}></ErrorDialog>}
            <h3 className="main-title">{language.instructorPage.coursesTitle}</h3>
            <Dots className="main-dots" size="4" color="#416aa6" />
            {isLoading && <Loader type="Oval" color="#416aa6" height={40} width={40} />}
            <div className="InstructorCourses-Courses-Container">
                {data && data.map(course => <CourseCard key={course.courseId} courseId={course.courseId} image={course.coursePhotoURL} rating={course.ratings} title={course.title} />)}



            </div>
        </div>
    );
}

export default withRouter(InstrucotCourses);