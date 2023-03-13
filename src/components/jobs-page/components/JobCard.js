import React, { useState, useContext } from 'react';
import SlideToggleContent from '../../generic/animations/SlideToggle'
import ApplyDilaog from './apply-dialog/ApplyDialog'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState';

function JobCard({ title, responsibilities,requirements, imageUrl, id }) {
    const [scrollDownVisible, setIsScrollDownVisible] = useState(false)
    const [isMainContainerVisible, setIsMainContainerVisible] = useState(true)
    const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false)
    const {language} = useContext(LanguageStateContext)

    const closeDiv = () => {
        setIsScrollDownVisible(false)
        setTimeout(() => { setIsMainContainerVisible(true) }, 250);
    }
    const openDiv = () => {
        setIsScrollDownVisible(true)
        setIsMainContainerVisible(false)
    }
    return (
        <div style={{ width: "100%" }}>
            {!scrollDownVisible && isMainContainerVisible &&
                <div onClick={openDiv} className="JobCard-Container">
                    <i className={`${imageUrl} JobCard-Img`} />
                    <p className="JobCard-Title">{title}</p>
                    <i className="fas fa-chevron-down JobCard-Arrow"></i>

                </div>}
                {isApplyDialogOpen && <ApplyDilaog id={id} handleClose={() => {setIsApplyDialogOpen(false)}}/>}
            <SlideToggleContent isVisible={scrollDownVisible}>
                <div className="JobCard-Opened-Container">
                    <div onClick={closeDiv} className="JobCard-Opened-Top-Container">
                        <i style={{ color: "white" }} className={`${imageUrl} JobCard-Img`} />
                        <p style={{ color: "white" }} className="JobCard-Title">{title}</p>
                        <i style={{ color: "white" }} className="fas fa-chevron-up JobCard-Arrow"></i>
                    </div>
                    <div onClick={closeDiv} className="JobCard-Opened-Text-Container">
                        <h5 className="JobCard-Opened-Text-H">{language.instructorJobsPage.jobCard.firstPart}</h5>
                        {responsibilities.map((item, index) => <p key={index} className="JobCard-Opened-Text-P">{item}</p>)}
                        <h5 className="JobCard-Opened-Text-H">{language.instructorJobsPage.jobCard.secondPart}</h5>
                        {requirements.map((item, index) => <p key={index} className="JobCard-Opened-Text-P">{item}</p>)}
                    </div>
                    <button className="JobCard-Button" onClick={() => {setIsApplyDialogOpen(true)}}> {language.applyNowBtn} <i style={{ marginLeft: '0.5em' }} className="fas fa-chevron-right" /></button>
                </div>
            </SlideToggleContent>
        </div>
    );
}

export default JobCard;