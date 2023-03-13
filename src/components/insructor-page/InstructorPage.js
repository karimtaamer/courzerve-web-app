import React, { useContext } from 'react';
import InstructorMain from './components/InstructorMain'
import AboutMe from './components/AboutMe'
import InstructorCourses from './components/InstrucotCourses'
import ReviewSection from './components/InstructorReview'
import { useGetRequest } from '../../service/api/ApiMethods'
import { withRouter } from 'react-router-dom'
import MainLoading from '../generic/MainLoading'
import {LanguageStateContext} from '../../service/utils/language/LanguageGlobalState'
import ErrorDialog from '../generic/error/ErrorDialog'
import {Helmet} from 'react-helmet'

function InstructorPage({ props, match }) {
    const lng = window.location.pathname.split("/")[1]
    const [data, isLoading, error, cancelRequest] = useGetRequest(`/instructor/${match.params.id}/${lng}`);
    const {language} = useContext(LanguageStateContext)

    if (isLoading || !data) return <MainLoading />
    return (
        <div>
            <Helmet>
            <title>{data.name} | {data.jobTitle ? data.jobTitle: "Courzerve"}</title>
            <meta name="description" content={data.jobTitle} />
            </Helmet>
             {error && <ErrorDialog handleClose={() => {cancelRequest() }} content={language.errorText.text1}></ErrorDialog>}
            <div className="InstructorPage-UpperContainer flexColumnCenterCenter">
                <h3 className="UpperContainer-title">{language.instructor}</h3>
                <h5 className="InstructorPage-SubTitle">{data.name}</h5>
            </div>
            <div className="main InstructorPage-MainContainer" >
                <InstructorMain instructor={data} />
                <AboutMe aboutMe={data.aboutMe || "no about me yet"} />
                <InstructorCourses />
                {data.ratings.ratingSummary && <ReviewSection ratings={data.ratings} />}

                 
            </div>

        </div>
    );
}

export default withRouter(InstructorPage);