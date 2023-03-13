import React, {useContext} from 'react'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import Aman from '../../../assets/icons/others/paymentDialoge-AMAN.svg'
import PayPal from '../../../assets/icons/others/paymentDialoge-PayPal.png'
import CreditCard from '../../../assets/icons/others/paymentDialoge-CREDIT CARD.png'
import VodafoneCash from '../../../assets/icons/others/paymentDialoge-VODAFON.svg'
import Cash from '../../../assets/icons/others/paymentDialoge-Cash.svg'
import Basic from '../../../assets/icons/others/star.svg'
import Advanced from '../../../assets/icons/others/Rocket.svg'

function PricingCard (props){
    const { language, getDynamicText } = useContext(LanguageStateContext)
    return(
        <div className="main-pricingCard">
           <div className="firstPricingContainer"> 
           {props.data.name == "Basic Level" || props.data.name == "المستوى الأساسي" ? <img className="image-pricingCard" src={Basic}/> : (props.data.name == "Advanced Level" || props.data.name == "المستوى المتقدم") && <img className="image-pricingCard" src={Advanced}/>}
           <span className="firstPricingSubContainer">
           <p className="title-pricingCard">{props.data.name}</p>
            <h3 className="price-pricingCard">{props.data.totalPaymentAmount} <p style={{margin:"0 0.1em 0 0.1em"}}> {language.coursePage.pricingCourseDialog.currency}</p></h3>
            {/* {props.data.installmentText ? <p className="text-pricingCard"> {props.data.installmentText}</p> : <span style={{height:"37px"}}/>} */}
            <p className="percentage-pricingCard">{language.coursePage.ApplySectionTitles.seventhTitle}</p>
           </span>
               </div> 
               <div className="mainBenefitsContainer">
              {props.data.benefits.map((benefit, index) => <span key={index} className="flexRowCenterStart" style={{marginBottom: "0.3em"}}>
              <i className="fas fa-check-circle checkBenefit"></i>
              <p className="text-pricingCard" style={{margin: "0px"}}>{benefit}</p>
              </span>)}
          </div>
            <div className="flexRowCenterCenter">
                {props.collectionMethods.map((method) => {if(method === "VodafoneCash") return <img alt="VodafoneImg" key="VodafoneImg" className="icon-pricingCard" src={VodafoneCash}/>
            if(method === "Aman") return <img alt="AmanImg" key="AmanImg" className="icon-pricingCard" src={Aman}/>
            if(method === "CreditCard") return <img alt="CreditCardImg" key="CreditCardImg" style={{width:"2.4em", height:"2.4em", marginRight:"0.2em", marginLeft:"0.2em"}} className="icon-pricingCard" src={CreditCard}/>
            if(method === "PayPal") return <img alt="PayPalImg" key="PayPalImg" style={{width:"2.4em", height:"2.4em", marginRight:"0.2em", marginLeft:"0.2em"}} className="icon-pricingCard" src={PayPal}/>
            if(method === "Cash") return <img alt="CashImg" key="CashImg" style={{width:"2.4em", height:"2.4em", marginRight:"0.2em", marginLeft:"0.2em"}} className="icon-pricingCard" src={Cash}/>
            })}
            </div>
        </div>
    )
}
export default PricingCard