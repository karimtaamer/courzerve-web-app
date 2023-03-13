import React, { useContext } from 'react';
import { AllCoursesStateContext } from '../AllCoursesState'
import Rating from '../../generic/Rating'
import { withRouter } from 'react-router-dom'
// import { useGetRequest } from '../../../service/api/ApiMethods'
import CoursesSearch from './CourseSearch'

function AllCoursesList({history}) {
    const { filteredCourses } = useContext(AllCoursesStateContext)
    // const [instructor, isInstructorLoading, instructorError, cancelRequest] = useGetRequest(`/instructor/${applyData.course.instructor.id}`);
    const lng = window.location.pathname.split("/")[1]
    const CourseItem = ({ title , description, instructor, category, rating, courseImg, courseId}) => 
    
    
    <div className="flexRowCenterStart allCourseCard-mainContainer">
        <img src={courseImg} alt="course" className="allCourseCard-courseImg"/>
        <div className="flexColumnStartStart allCourseCard-RightContainer">
        <div className="flexRowStartCenter allCourseCard-topContainer">
            <div className="allCourseCard-topContainer-left">
                <p className="allCourseCard-title">{title}</p>
                <p className="allCourseCard-category">{category}</p>
            </div>
            <div className="allCourseCard-topContainer-right">
                <Rating dark rating={rating}/>
            </div>
        </div>
        <div className="allCourseCard-discription" dangerouslySetInnerHTML={{ __html: description }}></div>
        <span className="flexRowCenterStart allCourseCard-instructorContainer">
        <img src={instructor.photoURL} alt="instructor" className="allCoursesPage-applySection-InstructorImg"/>
        <span className="allCourseCard-instructorInfo-container">
            <p className="allCourseCard-instructorName">{instructor.name}</p>
            <p className="allCourseCard-instructoJobTitles">{instructor.jobTitle}</p>
            </span>     
            <button className="allCourseCard-btn" onClick={() => {history.push(`${lng}/course/${courseId}`)}}>Apply</button>
        </span>
       

</div>
    </div>


    return (
        <div  className='allCoursePage-main'>
            <CoursesSearch/>
            {/* <input className="allCoursesPage-search" placeholder='Search course name'/> */}
            {filteredCourses.map(course => <CourseItem key={course.courseId} courseId={course.courseId} title={course.title} instructor={course.instructor} rating={course.ratings.allRatings.length > 0  && course.ratings.ratingSummary.averageRating} description={course.description} category={course.category} courseImg={course.coursePhotoURL}/>)}
        </div>
    );
}

export default withRouter(AllCoursesList);