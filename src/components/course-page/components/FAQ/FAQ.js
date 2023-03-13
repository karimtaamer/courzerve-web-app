import React, { useContext } from 'react';
import FaqExtender from './FaqExtender'
import Dots from '../../../generic/dots/Dots'
import {LanguageStateContext} from '../../../../service/utils/language/LanguageGlobalState'
import { withRouter } from 'react-router-dom';

function FAQ({ course, history }) {
    const {language} = useContext(LanguageStateContext)
    const lng = window.location.pathname.split("/")[1]

    return (
        <div id="CourseFAQ" className="FAQ-MainContainer">
            <h3 className="main-title">{language.coursePage.sixthTitle}</h3>
            <Dots className="Faq-Dots" size="5" color="#416aa6" />
    <p className="FAQ-Desc">{language.coursePage.faqSubTitle}  <button onClick={() => history.push(`/${lng}/contactus`)} style={{textDecoration:'none', color:'#416aa6', border:"none", backgroundColor:"transparent", width:"80px", marginTop:"2px"}}>{language.contactUsPage.pageTitle}</button></p> 
   
            
            <div className="FAQ-Questions-Container">
                <div className="FAQ-Questions-ColumnContainer">
                    {course.FAQ.map((item, index) => {
                        if (index % 2 === 0) return <FaqExtender key={item.question + index} question={item.question} answer={item.answer} />
                        else return null
                    })}
                </div>
                <div className="FAQ-Questions-ColumnContainer">
                {course.FAQ.map((item, index) => {
                        if (index % 2 === 0) return null
                        else return <FaqExtender key={item.question + index} question={item.question} answer={item.answer} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default withRouter(FAQ);