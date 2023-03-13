import React,{useContext} from 'react'
import Modal from 'react-modal'
import AmanImage from '../../../assets/icons/others/paymentDialoge-AMAN.svg'
import PayPalImage from '../../../assets/icons/others/paymentDialoge-paypal.svg'
import CreditImage from '../../../assets/icons/others/paymentDialoge-CREDIT CARD.svg'
import VodafonImage from '../../../assets/icons/others/paymentDialoge-VODAFON.svg'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import { withRouter } from 'react-router-dom'

const PaymentDialog = ({handleClose}) => {

    const { language } = useContext(LanguageStateContext)
    return(
        <Modal
            className="largeInfoDialog-mainContainer"
            isOpen
            onRequestClose={handleClose}
            style={{ overlay: { backgroundColor: 'rgba(167, 167, 167, 0.181)' }}}>
                <i className="far fa-times-circle applyDialog-CloseBtn" style={{marginTop:'10px', color:'darkgray'}} onClick={() => handleClose()}></i> 
       <div className="infoDialog-MainCotainer">
       <p className="infoDialog-ExplinationTitle">{language.infoDialog.PaymentDialog.Title}</p>
       <p className="infoDialog-Payment-Header" style={{fontWeight: "200", margin: "0 6px 0 6px"}}>{language.infoDialog.PaymentDialog.subTitle}</p>
       <span className="flexRowCenterCenter" style={{justifyContent:'space-around'}}>
           <span className="infoDialog-payment-PartContainer">
           <img alt="maincourse" className="infoDialog-Payment-Img" height="20%" src={AmanImage} /> 
            <p className="infoDialog-Payment-Header">{language.infoDialog.PaymentDialog.firstStep}</p>
           </span>
      <span className="infoDialog-payment-PartContainer">
      <img alt="maincourse" className="infoDialog-Payment-Img" height="20%" src={PayPalImage} /> 
       <p className="infoDialog-Payment-Header">{language.infoDialog.PaymentDialog.secondStep}</p>
      </span>
       </span>
       <span className="flexRowCenterCenter" style={{justifyContent:'space-around'}}>
           <span className="infoDialog-payment-PartContainer">
           <img alt="maincourse" className="infoDialog-Payment-Img" height="20%" src={CreditImage} /> 
       <p className="infoDialog-Payment-Header">{language.infoDialog.PaymentDialog.thirdStep}</p>
           </span>
       <span className="infoDialog-payment-PartContainer">
       <img alt="maincourse" className="infoDialog-Payment-Img" height="20%" src={VodafonImage} /> 
       <p className="infoDialog-Payment-Header">{language.infoDialog.PaymentDialog.fourthStep}</p>
       </span>
       </span>
      </div>
       <button className="infoDialog-Place-Btn" onClick={() => {handleClose()}}>{language.infoDialog.secondButton}</button>
        </Modal>
    )
}
export default withRouter(PaymentDialog);