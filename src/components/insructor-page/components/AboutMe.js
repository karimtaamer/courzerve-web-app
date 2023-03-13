import React, {useContext} from 'react';
import Dots from '../../generic/dots/Dots'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'

function AboutMe({aboutMe}) {
    const { language } = useContext(LanguageStateContext)

    return (<div style={{marginTop:"2em"}}  className="CoursePage-Desc">
        <h3 className="main-title">{language.instructorPage.aboutMeTitle}</h3>
        <Dots className="main-dots" size="4" color="#416aa6" />
        <div className="InstructorPage-aboutme" dangerouslySetInnerHTML={{ __html: aboutMe }} />

      
    </div>)
}

export default AboutMe;