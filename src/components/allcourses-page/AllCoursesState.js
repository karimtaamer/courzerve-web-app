import React, { useState, createContext } from 'react'


export const AllCoursesStateContext = createContext()


export const AllCoursesStateProvider = ({ allCourses,children }) => {
    //Will act as the default value in case user clears filters (search,sort,filter)
    const [courses, setCourses] = useState(allCourses || [])
    //will be the data rendered and the data we perform the filters on
    const [filteredCourses, setFilteredCourses] = useState(allCourses || [])
    return (
        <AllCoursesStateContext.Provider value={{courses, setCourses,filteredCourses,setFilteredCourses}}>
            {children}
        </AllCoursesStateContext.Provider>
    )
}