import React, {useContext} from 'react';
import CourseSearch from '../../../assets/icons/how-it-works/CourseSearch.svg'
import Dots from '../../generic/dots/Dots'
import Phone from '../../../assets/icons/how-it-works/Phone.svg'
import Apply from '../../../assets/icons/how-it-works/apply_now.svg'
import FreeSession from '../../../assets/icons/how-it-works/FreeSession.svg'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'
function HowItWorks(props) {

    const {language} = useContext(LanguageStateContext)
    const StepDesc = ({ number, title, desc }) => <div  className="HowItWorks-StepContainer">
        <div className="HowItWorks-NumberCircle flexColumnCenterCenter">{number}</div>
        <span className="HowItWorks-textContainer">
            <h5 className="HowItWorks-StepTitle">{title}</h5>
            <p className="HowItWorks-StepSubTitle">{desc}</p>
        </span>
    </div>
    return (
        <div style={{marginTop:"5em"}} className="HowItWorks-Main">
            <h3 className="main-title" >{language.landingPage.howWeOperate.title}</h3>
            <Dots width="2em" color="#416aa6" size="5" />

            <span  className="flexRowCenterSpaceBetween HowItWorks-StepMainContainer">
                <img className="HowItWorks-StepImg" alt="course_search" src={CourseSearch} />
                <StepDesc number="1" title={language.landingPage.howWeOperate.firstPart.title} desc={language.landingPage.howWeOperate.firstPart.discription} />
            </span>
            <span  className="flexRowCenterSpaceBetween HowItWorks-StepMainContainer">
                <StepDesc number="2" title={language.landingPage.howWeOperate.secondPart.title} desc={language.landingPage.howWeOperate.secondPart.discription} />
                <img className="HowItWorks-StepImg" alt="course_search" src={Apply} />

            </span>
            <span  className="flexRowCenterSpaceBetween HowItWorks-StepMainContainer">
                <img style={{width:'40%'}} className="HowItWorks-StepImg" alt="course_search" src={Phone} />
                <StepDesc number="3" title={language.landingPage.howWeOperate.thirdPart.title} desc={language.landingPage.howWeOperate.thirdPart.discription} />
            </span>
            <span   className="flexRowCenterSpaceBetween HowItWorks-StepMainContainer">
                <StepDesc number="4" title={language.landingPage.howWeOperate.fourthPart.title} desc={language.landingPage.howWeOperate.fourthPart.discription} />
                <img style={{ width:'40%'}} className="HowItWorks-StepImg" alt="course_search" src={FreeSession} />
            </span>

        </div>
    );
}

export default HowItWorks;