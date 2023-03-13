import React, { useState, useEffect, useContext } from 'react';
import { scrollLeft } from '../../service'
import CourseCard from './CourseCard'
import { useGetRequest } from '../../../../service/api/ApiMethods'
import Loader from 'react-loader-spinner'
import Dots from '../../../generic/dots/Dots'
import ErrorDialog from '../../../generic/error/ErrorDialog'
import { isMobile } from 'react-device-detect';
import {LanguageStateContext} from '../../../../service/utils/language/LanguageGlobalState'
import CourseCommingSoon from '../../../generic/commingSoon/CourseCommingSoon'
import {CommingSoonArray} from '../../../../service/utils/CommingSoonCourses'


function CoursesSection(props) {
    const [isButtonsDisabled, setIsButtonDisabled] = useState(false)
    const windowUrl = window.location.pathname;
    const pathNames = windowUrl.split("/")
    const lng = pathNames[1]
    const [response, isLoading, error, cancelRequest] = useGetRequest(`/course/all/${lng}`);
    const [renderedCourses, setRenderedCourses] = useState([])
    const [courseCategories, setCourseCategories] = useState([])
    const [chosenCatgeory] = useState('All Courses')
    const {language} = useContext(LanguageStateContext)

    useEffect(() => {
        if (!response || !response.length > 0) return
        //only enter when there is no categories
        if (courseCategories.length === 0) {
            const categories = [...new Set(response.map(course => course.category))]
            const commingSoonCategories = [...new Set(CommingSoonArray.map(course => course.category))]
            setCourseCategories(categories.concat(commingSoonCategories).filter((item, i, ar) => ar.indexOf(item) === i))
        }
        if (chosenCatgeory === "All Courses") {
        setRenderedCourses(response.concat(CommingSoonArray))
        }
       
        else {
            const concatArray = response.concat(CommingSoonArray)
             setRenderedCourses(concatArray.filter(course => course.category === chosenCatgeory))
            }
    }   // eslint-disable-next-line
        , [response, chosenCatgeory])

    const onArrowButtonClicked = (button) => {
        setIsButtonDisabled(true)
        //to prevent user from double clicking 
        setTimeout(() => { setIsButtonDisabled(false) }, 1000);
        var scrollAmount = 0
        if(isMobile)  scrollAmount = (button === 'left') ? -240 : 240
        else scrollAmount = (button === 'Left') ? -520 : 520
        scrollLeft(document.getElementById('CourseSection-Container'), scrollAmount, 1000)
    }


    if (isLoading)
        return <span className="CourseSection-Title-Container"><Loader
            type="Oval"
            color="#416aa6"
            height={110}
            width={110}
        /></span>




    return (
        <div id="courseSection" >
            {error && <ErrorDialog handleClose={() => {cancelRequest() }} content={language.errorText.text1}></ErrorDialog>}
            <span className="CourseSection-Title-Container">
            <h3 className="main-title" >{language.landingPage.courseSection.title}</h3>
                <Dots width="2em" color="#416aa6" size="5" />
            </span>

            {/* <ul className="CourseSection-CategoriesContainer">
                <li style={chosenCatgeory === "All Courses" ? chosenCategoryStyle : {}} onClick={() => setChosenCatgeory('All Courses')} className="CourseSection-CategoriesContainer-Item">All Courses</li>

                {courseCategories.map((category, key) => <li key={key} style={chosenCatgeory === category ? chosenCategoryStyle : {}} onClick={() => setChosenCatgeory(category)} className="CourseSection-CategoriesContainer-Item">{category}</li>)}

            </ul> */}

            <div className="CourseSection-Main">
                <button className="CourseSection-Left-B" disabled={isButtonsDisabled} onClick={() => onArrowButtonClicked('Left')}><i className="fas fa-chevron-left" /></button>
                <div id="CourseSection-Container">
                    {renderedCourses.map((course, key) =>{
                        if(course["isCommingSoon"] !== undefined) return <CourseCommingSoon key={key} courseName={course.title}/>
                        else return <CourseCard key={course.id} course={course} />
                    })}

                </div>
                <button className="CourseSection-Right-B" disabled={isButtonsDisabled} onClick={() => onArrowButtonClicked('Right')}><i className="fas fa-chevron-right" /></button>
            </div>
        </div>
    );
}


export default CoursesSection;