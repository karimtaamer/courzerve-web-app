import React,{useContext} from 'react'
import Modal from 'react-modal'
import ExpImage from '../../../assets/icons/course/Explination.png'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import { withRouter } from 'react-router-dom'

const   ExplinationDialog = ({handleClose}) => {
    const { language } = useContext(LanguageStateContext)
    return(
        <Modal
            className="largeInfoDialog-mainContainer"
            isOpen
            onRequestClose={handleClose}
            style={{ overlay: { backgroundColor: 'rgba(167, 167, 167, 0.181)' }}}>
                <i className="far fa-times-circle applyDialog-CloseBtn" style={{marginTop:'10px', color:'darkgray'}} onClick={() => handleClose()}></i> 
       <div className="infoDialog-MainCotainer">
       <p className="infoDialog-ExplinationTitle">{language.infoDialog.PlaceDialog.firstSectionTitle} <span>{language.infoDialog.PlaceDialog.secondSectionTitle}</span></p>
       <img alt="maincourse" className="infoDialog-topImage" height="20%" src={ExpImage} /> 
       <div className="infoDialog-sectionsDiv">
           <span className="infoDialog-section">1</span>
    <p className="infoDialog-sectionText">{language.infoDialog.PlaceDialog.firstStep}</p>
           </div>
           <div className="infoDialog-sectionsDiv" style={{marginTop:'0.6em'}}>
           <span className="infoDialog-section">2</span>
    <p className="infoDialog-sectionText">{language.infoDialog.PlaceDialog.secondStep}</p>
           </div>
           <div className="infoDialog-sectionsDiv" style={{marginTop:'0.6em'}}>
           <span className="infoDialog-section">3</span>
    <p className="infoDialog-sectionText">{language.infoDialog.PlaceDialog.thirdStep}</p>
           </div>
       </div>
       <button className="infoDialog-Place-Btn" onClick={() => {handleClose()}}>{language.infoDialog.secondButton}</button>
        </Modal>
    )
}
export default withRouter(ExplinationDialog);