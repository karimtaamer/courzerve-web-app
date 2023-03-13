import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import Loader from "react-loader-spinner";
import { withRouter } from 'react-router-dom'
import PricingCard from './PricingCard'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import ReactGA from 'react-ga'
import ApplyCourseDialog from './ApplyCourseDialog'
import BenefitsDialog from './BenefitsDialog'

function ApplyCoursePricingDialog (props) {
    const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false)
    const { language } = useContext(LanguageStateContext)
    const [isClicked, setIsClicked] = useState(props.round.paymentMethods[0])
    const [loading, setLoading] = useState(false)
    const [isBenefitsDialogOpen, setIsBenefitsDialogOpen] = useState(false)


const onLevelClick = (level , event) => {
    if(event.target.textContent === isClicked.name) return setLoading(false)
    setLoading(true)
    setTimeout(function() {
        setIsClicked(level)
    },500);
    
}

 useEffect(() => {
     if(loading === true) setLoading(false)
 },[isClicked])

    return (
        <Modal
        isOpen={true}
        className="pricingCourseDialog-overLay"
        onRequestClose={props.handleClose}
        style={{ overlay: { backgroundColor: "rgba(167, 167, 167, 0.281)" } }}
      >
          {isApplyDialogOpen && (
        <ApplyCourseDialog
          round={props.round}
          motivationKey={props.motivationKey}
          courseId={props.courseId}
          courseName={props.courseName}
          handleClose={() => {
            // handelCloseDialog();
            setIsApplyDialogOpen(false)
          }}
        />)}

        {isBenefitsDialogOpen && 
        <BenefitsDialog title={isClicked.subTitle} benefits={isClicked.levelBenefits} handleClose={() => {setIsBenefitsDialogOpen(false)}}/>}

<i className="far fa-times-circle applyDialog-CloseBtn" onClick={() => props.handleClose()}></i>
        <div className="applyDialog-mainContainer pricingMain">
          <h2 className="applyDialog-Title">{language.coursePage.pricingCourseDialog.title}</h2>
          <h5 className="applyDialog-subtitle">
            {language.coursePage.pricingCourseDialog.subTitle}
          </h5>
          {props.round &&  props.round.paymentMethods && props.round.paymentMethods.length > 1 ?<div className="main-levelContainer">
              {props.round &&  props.round.paymentMethods && props.round.paymentMethods.map((paymentMethod) => {return <span key={paymentMethod.name} className={isClicked.name === paymentMethod.name ? "PricingLevelsClicked" : "PricingLevels"}> 
              <button className={isClicked.name === paymentMethod.name ? "Button-PricingLevelsClicked" : "Button-PricingLevels"}  onClick={(e) => onLevelClick(paymentMethod, e)}>{paymentMethod.name}</button>  </span>})}
          </div> : <button className="Button-PricingLevelsClicked">{props.round.paymentMethods[0].name}</button> }
          <div className="main-methods">
              <div className="flexRowCenterCenter levels" style={{width:"fit-content", margin:"0 auto 1em auto", paddingTop: "0.3em"}} >
              {isClicked && !loading ? isClicked.levels.map((method) => {return <PricingCard key={method.methodId} collectionMethods={isClicked.collectionMethods} data={method}/>}) :
               <Loader
                type="Oval"
                color="#416aa6"
                height={56}
                width={56}
                style={{ margin: "7em" }}
              /> }
              </div>

          </div>
            <button
              className="ApplyCourseDialog-ApplyBtn succ"
              style ={{width: "250px", margin: "0px", marginTop: "0.5em"}}
              onClick={() => {
                setIsApplyDialogOpen(true)
                ReactGA.event({
                  category: `${props.courseId} Events`,
                  action: 'opened Apply Dialog'
                });}}
            >
              {language.applyNowBtn}
            </button>
            <p className="applyDialog-subtitle" style={{margin:"0"}}>{language.coursePage.pricingCourseDialog.bottomInfoText}</p>
</div>
</Modal>
    )
} 

export default withRouter(ApplyCoursePricingDialog);