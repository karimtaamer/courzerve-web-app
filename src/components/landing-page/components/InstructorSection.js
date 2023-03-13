import React, {useContext, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

function InstructorSection(props) {
    const {language} = useContext(LanguageStateContext)
    const lng = window.location.pathname.split("/")[1]

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="InstructorSection-MainContainer">
            <h4 className="InstructorSection-Header">{language.landingPage.jobSection}</h4>

            <button onClick={()=>props.history.push(`/${lng}/jobs`)} className="InstructorSection-B"  >{language.landingPage.jobSectionBtn}</button>
        </div>
    );
}

export default withRouter(InstructorSection);