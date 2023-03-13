import React, {useContext} from 'react'
import {AllCoursesStateContext} from '../AllCoursesState'

const CourseSearch = () => {
    const { courses, setFilteredCourses } = useContext(AllCoursesStateContext)

//|| value == course.title.slice(0,value.length)

const onSearch = (e) => {
    var trst = []
    var tttrrr = []
       var values = e.target.value.toLowerCase().split(" ")
       var flage = false
       values.forEach(value => {
        courses.forEach((course, index) => {
            flage = false
            if(value === course.title.toLowerCase().slice(0,value.length)){
                 tttrrr.push(course)
            }
            course.keywords.forEach(keyword => {
                if(value === keyword.slice(0,value.length) && !flage){
                    flage = true
                   return trst.push(course)
                }  
            })
           
        }) 
    })
      
        const final = trst.filter(item1=>tttrrr.some(item2=>
             item2.courseNumber === item1.courseNumber))
     
        setFilteredCourses(final)
}

    return(
        <div className="allCoursesPage-mainContainer">
             <i className="fas fa-search searchicon" style={{color:'rgba(146, 140, 140, 0.418)'}}></i>
        <input className="allCoursesPage-search" onChange={(e) => {onSearch(e)}} placeholder="Search"/>
        </div> 
    )
}
export default CourseSearch