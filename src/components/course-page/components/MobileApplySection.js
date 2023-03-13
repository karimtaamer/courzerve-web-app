import React, { useState, useContext, useEffect } from 'react';
import ApplyCoursePricingDialog from './ApplyCoursePricingDialog'
import { withRouter } from "react-router-dom";
import {compearDates} from '../../../service/utils/Helpers'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import ReactGA from "react-ga";

function MobileApplySection({ round, course, history }) {
    const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false)
    const { language } = useContext(LanguageStateContext)
    // document.getElementById('mobApplySec').style.display = "block"
    const handelCloseDialog = () => {
        const isDialogOpen = history.location.pathname.slice(0, -6)
    history.push(`${isDialogOpen}`)
        // history.push('/success')
        document.body.style.position = "";
        document.getElementById('mobApplySec').style.display = "flex"
        setIsApplyDialogOpen(false);
    };

    useEffect(() => {
        const apply = window.location.pathname.split("/")[4]
        if(apply === "apply") setIsApplyDialogOpen(true);
    }, [])

    const handelSuccess = () => {
        setIsApplyDialogOpen(false);
        // history.push(`/success/${}`)
        document.body.style.position = "";
    }
    if (!round)
        return (
            <div className="CoursePage-MobileApplySection-Container" id="mobApplySec" >
                {isApplyDialogOpen && <ApplyCoursePricingDialog round={round} CourseId={course.courseId} motivationKey={course.motivationVideoKey} courseName={course.title} handleClose={() => { handelCloseDialog() }} onSuccess={() => { handelSuccess() }} />}
                {/* <div className="CoursePage-MobileApplySection-Price-Container">
                    <h5 className="CoursePage-MobileApplySection-PriceSub" style={{ fontWeight: 'bold' }}>Round has not started yet</h5>
                    <p className="CoursePage-MobileApplySection-PriceSub">{language.coursePage.ApplySectionTitles.seventhTitle}</p>
                </div>
                <div className="CoursePage-MobileApplySection-B-Container"> */}
                    <button className="CoursePage-MobileApplySection-B" onClick={() => {
                        ReactGA.event({
                            category: `${course.courseId} Events`,
                            action: 'Opened Apply dialog'
                        });
                        setIsApplyDialogOpen(true)
                    }}>{language.coursePage.applyBtn}</button>
                {/* </div> */}
                {/* <div onClick={() => window.open('http://m.me/courzerve')} className="mobileApplySection-messanger-Container"><i className="fab fa-facebook-messenger facebookIconMobile" /></div> */}
            </div>
        )

    //     const OnSalePrice = ({ discountPrice, originalPrice }) => <div className="flexRowCenterSpaceBetween" style={{ width: '100%' }}>
    //     {/* <h3 className="CoursePage-applySection-topTitle">{language.coursePage.ApplySectionTitles.secondTitle}</h3> */}
    //     <h4 className="CoursePage-applySection-topFieldBigger"> {applyData.round.discountPrice} {language.coursePage.ApplySectionTitles.pricing}</h4>
    //     <h4 className="CoursePage-applySection-topFieldToBeSale">
    //       {applyData.round.roundPrice} {language.coursePage.ApplySectionTitles.pricing}
    //     </h4>
    //   </div>
    
    //   const OriginalPrice = ({ discountPrice, originalPrice }) => <div className="flexRowCenterSpaceBetween" style={{ width: '100%' }}>
    //     <h4 className="CoursePage-applySection-topFieldBigger">  {applyData.round.roundPrice} {language.coursePage.ApplySectionTitles.pricing}</h4>
    
    //   </div>


    return (
        <div className="CoursePage-MobileApplySection-Container" id="mobApplySec" >
            {isApplyDialogOpen && <ApplyCoursePricingDialog round={round} CourseId={course.courseId} motivationKey={course.motivationVideoKey} courseName={course.title} handleClose={() => { handelCloseDialog() }} onSuccess={() => { handelSuccess() }} />}
            <div className="CoursePage-MobileApplySection-Price-Container">
                 <h5 className="CoursePage-MobileApplySection-PriceSub">{language.coursePage.ApplySectionTitles.pricing}</h5> 
                <p className="CoursePage-MobileApplySection-Price">{language.coursePage.ApplySectionTitles.seventhTitle}</p>
            </div>
            <div className="CoursePage-MobileApplySection-B-Container">
                <button className="CoursePage-MobileApplySection-B" onClick={() => {  history.push(`${history.location.pathname}/apply`) }}>{language.coursePage.applyBtn}</button>
            </div>
            {/* <div onClick={() => window.open('http://m.me/courzerve')} className="mobileApplySection-messanger-Container"><i className="fab fa-facebook-messenger facebookIconMobile" /></div> */}
        </div>
    );
}

export default withRouter(MobileApplySection);