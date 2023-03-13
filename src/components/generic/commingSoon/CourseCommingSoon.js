import React, { useState, useContext } from 'react';
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import InterestedDialog from './InterestedDialog'
import ComingSoonImage from '../../../assets/icons/others/coming_soon.png'
function CourseCommingSoon({ courseName }) {
    const { language } = useContext(LanguageStateContext)
    const [isDialogOpen, setIsDialogOpen] = useState(false)


    return (
        <div className="CourseCard-Main-commingSoon">
            {isDialogOpen && <InterestedDialog handleClose={() => { setIsDialogOpen(false) }} courseTitle={courseName} />}

            <img alt="maincourse" className="CourseCard-Image" src={ComingSoonImage} />

            <div className="CourseCard-Container">
                <h5 className="CourseCard-Name">{courseName}</h5>
    <button  onClick={() => { setIsDialogOpen(true) }} className="intresetedDialog-ApplyButton">{language.comingSoonCard}</button>
                {/* <span  className="CourseCard-BottomItemContainer">
                    <p >{language.landingPage.courseSection.courseCommingSoonBtn}</p>
                    <i style={{ marginLeft: "0.4em", color: "#416aa6" }} className="fas fa-chevron-right" />
                    <i style={{ color: "#416aa6" }} className="fas fa-chevron-right" />
                </span> */}

            </div>
        </div>

    );
}

export default CourseCommingSoon;