import React, { useContext } from 'react';
import Dots from '../../../generic/dots/Dots'
import ContentExtender from './ContentExtender'
import {LanguageStateContext} from '../../../../service/utils/language/LanguageGlobalState'

function Content({ course }) {
    const {language} = useContext(LanguageStateContext)
    return (
        <div id="CourseContent" className="FAQ-MainContainer">
            <h3 className="main-title">{language.coursePage.thirdTitle}</h3>
            <Dots className="Faq-Dots" size="5" color="#416aa6" />

            {course.courseContents.map((content,index) => <ContentExtender key={index} index={index} content={content} />)}
        </div>
    );
}

export default Content;