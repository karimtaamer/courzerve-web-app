import React from 'react';
import { AllCoursesStateProvider } from './AllCoursesState'
import { useGetRequest } from '../../service/api/ApiMethods'
import List from './components/AllCoursesList'
import Loading from '../generic/MainLoading'
function AllCourses(props) {
    // eslint-disable-next-line
    const [courses, isCoursesLoading, coursesError, cancelRequest] = useGetRequest(`/course/all/en`);
if(isCoursesLoading) return <Loading/>
    return (
        <div className="flexColumnCenterStart allCoursePage-mainContainer">
            <div className="allCoursePage-topContainer">
            <h3 className="UpperContainer-title">Courses</h3>
            </div>
            <AllCoursesStateProvider allCourses={courses}>
                <List />
            </AllCoursesStateProvider>
        </div>
    );
}

export default AllCourses;