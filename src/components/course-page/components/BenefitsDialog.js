import React from "react";
import Modal from "react-modal";
import BenefitsIcon from '../../../assets/icons/others/benifits2.svg'
function BenefitsDialog (props) {



    return (
        <Modal
        isOpen={true}
        className="mainStatusdialog"
        onRequestClose={props.handleClose}
        style={{ overlay: { backgroundColor: "rgba(167, 167, 167, 0.281)"} }}
      >
          <i className="far fa-times-circle applyDialog-CloseBtn" style={{marginTop:'10px'}} onClick={() => props.handleClose()}></i>
          <div className="applyDialog-mainContainer" >
            <img alt="BenefitImg" src={BenefitsIcon}/>
          <h5 className="title-pricingCard" style={{marginBottom:"2em", marginTop:"2em"}}>
            {props.title}
          </h5>
          <div className="mainBenefitsContainer">
              {props.benefits.map((benefit, index) => <span key={index} className="flexRowCenterStart" style={{marginBottom:"1em"}}>
              <i className="fas fa-check-circle checkBenefit"></i>
              <p className="text-pricingCard" style={{margin: "0px"}}>{benefit}</p>
              </span>)}
          </div>
            </div>
          </Modal>
    )
} 
export default BenefitsDialog;