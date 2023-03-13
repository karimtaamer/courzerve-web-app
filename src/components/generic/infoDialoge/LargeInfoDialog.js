import React,{useContext} from 'react'
import Modal from 'react-modal'
import Englishimage from '../../../assets/icons/others/timingDialog.png'
import arabicimage from '../../../assets/icons/others/timmingDialog2.png'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import { withRouter } from 'react-router-dom'

const   LargeInfoDialpg = ({Content, handleClose, history}) => {
    const lng = window.location.pathname.split("/")[1]
    const { language } = useContext(LanguageStateContext)
    return(
        <Modal
            className="largeInfoDialog-mainContainer"
            isOpen
            onRequestClose={handleClose}
            style={{ overlay: { backgroundColor: 'rgba(167, 167, 167, 0.181)' }}}>
            <i className="far fa-times-circle applyDialog-CloseBtn" style={{marginTop:'10px', color:'darkgray'}} onClick={() => handleClose()}></i> 
       <div className="infoDialog-MainCotainer">
       {lng === "en" ? <img alt="maincourse" className="infoDialog-topImage" height="20%" src={Englishimage} /> : <img alt="maincourse" className="infoDialog-topImage" height="20%" src={arabicimage} />}
       <div className="infoDialog-SectionContainer">
           <div className="infoDialog-sectionsDiv">
           <span className="infoDialog-section">1</span>
    <p className="infoDialog-sectionText">{language.infoDialog.timeDialog.firstStep}</p>
           </div>
           <div className="infoDialog-sectionsDiv" style={{marginTop:'0.6em'}}>
           <span className="infoDialog-section">2</span>
    <p className="infoDialog-sectionText">{language.infoDialog.timeDialog.secondStep}</p>
           </div>
           <div className="infoDialog-sectionsDiv" style={{marginTop:'0.6em'}}>
           <span className="infoDialog-section">3</span>
    <p className="infoDialog-sectionText">{language.infoDialog.timeDialog.thirdStep}</p>
           </div>
       </div>
       <div className="flexColumnCenterCenter infoDialog-btnSection" >
       <button className="applyDialog-Btn" onClick={() => {history.push(`${window.location.pathname}/apply`)}}>{language.infoDialog.button}</button>
       <button className="applyDialogCancelBtn" onClick={() => handleClose()}>{language.infoDialog.cancelBtn}</button>
       </div>
      
       </div>
        </Modal>
    )
}
export default withRouter(LargeInfoDialpg);