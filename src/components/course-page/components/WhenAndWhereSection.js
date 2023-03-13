import React, { useContext, useState } from 'react'
import Dots from '../../generic/dots/Dots'
import CoursePlace from '../../../assets/icons/course/CoursePlaceImg.svg'
import CourseTime from '../../../assets/icons/course/CourseTimeImg.svg'
import {refactorMMMMddyyyyDate} from '../../../service/utils/Helpers'
import CourseWillTakePlaceOn from '../../../assets/icons/course/CourseWillTakePlaceOn.svg'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import LargeInfoDialog from '../../generic/infoDialoge/LargeInfoDialog'
import ExplinationDialog from '../../generic/ExplinationDialog/ExplinationDialog'
import ReactGA from "react-ga";

const WhenAndWhereSection = ({ data }) => {
    //TODO: Put proper locattions
   // const locations = ["Maadi", "6 October", "Sheikh Zayed", "Dokkie", "Mansoura", "Alexandria"]
    const { language } = useContext(LanguageStateContext)
    var [isLargeInfoDialogOpen, setIsLargeInfoDialogOpen] = useState(false)
    const [isExplinationDialogOpen, setIsExplinationDialogOpen] = useState(false)
    const ToBeRendered = () => {
        if (!data || !data.location) {
            return (
                <div id="CourseWhenAndWhere" className="whenWhereSection-mainContainer">
                    <h3 className="whenWhereSection-Title">{language.coursePage.secondTitle}</h3>
                    <Dots className="main-dots" size="4" color="#416aa6" />
                    <div className="whenWhereSection-subcontainerInit">
                        <h4 className="whenWhereSection-subTitle">{language.coursePage.WhenWhereSubTitle}</h4>
                        {/* <div className="whenWhereSection-LocationContainer">
                            {data ? data.initialLocations.map((location, index) =>
                                <span key={index} className="whenWhereSection-LocationBtn">{location}</span>
                            ): locations.map((location, index) =>
                            <span key={index} className="whenWhereSection-LocationBtn">{location}</span>
                        ) }
                        </div> */}
                    </div>
                </div>
            )
        }

        else if (data.location) {
            return (
                <div id="CourseWhenAndWhere" className="whenWhereSection-mainContainer">
                     {isLargeInfoDialogOpen && <LargeInfoDialog handleClose={() => {setIsLargeInfoDialogOpen(false)}}/>}
                     {isExplinationDialogOpen && <ExplinationDialog handleClose={() => {setIsExplinationDialogOpen(false)}}/>}
                    <h3 className="whenWhereSection-Title">{language.coursePage.secondTitle}</h3>
                    <Dots className="main-dots" size="4" color="#416aa6" />
                    <div className="whenWhereSection-subcontainer">
                        <span className="whenWhereSection-parts">
                            <img src={CourseWillTakePlaceOn} alt="coursePalce" className="whenWhereImg" />
                            <p className="whenWhereSection-sectionTitle">{language.coursePage.whenAndWhere.firstTitle}</p>
                            {data['startDate'] ? 
                            <p className="whenWhereSection-Info">{refactorMMMMddyyyyDate(data.startDate)}</p> 
                            :
                            <div style={{textAlign:"center"}}>
                            <p className="whenWhereSection-Info">{language.tobeAnnounced}</p>
                            <button className="whenWhereSection-whenBtn" onClick={() => setIsLargeInfoDialogOpen(true)}>{language.learnMore}</button>
                            </div>
                            }
                        </span>
                        <span className="whenWhereSection-parts">
                            <img src={CoursePlace} alt="coursePalce" className="whenWhereImg" />
                            <p className="whenWhereSection-sectionTitle">{language.coursePage.whenAndWhere.secondTitle}</p>
                            <p className="whenWhereSection-Info">{data.location}</p>
                            <button className="whenWhereSection-whenBtn" onClick={() => {
                                setIsExplinationDialogOpen(true)
                                ReactGA.event({
                                    category: `Events`,
                                    action: 'Opened Explination dialog'
                                  });
                                }}>{language.learnMore}</button>
                        </span>
                        <span className="whenWhereSection-parts">
                            <img src={CourseTime} alt="courseTime" className="whenWhereImg" style={{ fontSize: '0.8rem' }} />
                            <p className="whenWhereSection-sectionTitle">{language.coursePage.whenAndWhere.thirdTitle}</p>
                            {data.slots.length > 0 ? data.slots.map((slot, index) => <p key={index} className="whenWhereSection-Info">{slot.day} ({slot.from}-{slot.to})</p>) : <p className="whenWhereSection-Info">{language.tobeAnnounced}</p>}
                        </span>
                        {/* <span className="whenWhereSection-parts">
                            <img src={CourseAddress} alt="CourseAddress" className="whenWhereImg" />
                            <p className="whenWhereSection-sectionTitle">Detailed Address</p>
                            <p className="whenWhereSection-Info">{data.location.address}</p>
                        </span> */}
                    </div>
                </div>
            )
        }
    }


    return (
        <div>
            {ToBeRendered()}
        </div>
    )
}
export default WhenAndWhereSection