import React, { useState, useContext } from 'react'
import Dots from '../dots/Dots'
import { usePostRequest } from '../../../service/api/ApiMethods'
import Loader from 'react-loader-spinner'
import SuccessDialog from '../success/SuccessDialog'
import ErrorDialog from '../error/ErrorDialog'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'
import {Helmet} from "react-helmet";

const ContactUsPage = ({history}) => {
    const [contactRespons, contactIsError, contactIsLoading, contactMakeRequest, cancelRequest] = usePostRequest();
    const [inputData , setInputData] = useState({'name': "" , 'email': "", 'message': ""})
    const {language} = useContext(LanguageStateContext)
    const onSubmitClicked = () => {
        if(inputData.name && inputData.email && inputData.message){
        contactMakeRequest('/customer/contactus', inputData)
        setInputData({'name': "" , 'email': "", 'message': ""})
        }
    }


    const onDataCollect = (e) => {
        var id = e.target.id
        var input = e.target.value
        setInputData(data => { return { ...data, [id]: input } })
    }



    return (
        <div className="contactus-mainContainer">
            <Helmet>
            <title>Customer Support</title>
            <meta name="description" content="a platform that offers live online courses in arabic." />
            </Helmet>
            {contactRespons && contactRespons.message === "success" && <SuccessDialog handleClose={() => {cancelRequest()}} content="Your message has been sent"/>}
            {contactIsError && <ErrorDialog handleClose={() => {cancelRequest()}} content="Your message hasn't been sent"/>}
            <div className="contactus-upperContainer">
            <h3 className="UpperContainer-title">{language.contactUsPage.pageTitle}</h3>
            </div>
            <   div className="test">
                <div className="contactus-detail-container">
                <h4 className="contactus-message-title">{language.contactUsPage.firstTitle}</h4>
                    <Dots className="contactus-Dots" size="5" color="#416aa6" />
                    <p className="contactus-detail-discription">{language.contactUsPage.ContactDetails.discription}</p>
                    <div className="contactus-detail-phone-container">
                        <i className="fas fa-phone-alt" style={{ fontSize: '1.6em', color: '#416aa6' }}></i>
                        <div style={{ marginLeft: '14px' }}>
                            <h5 className="contactus-detail-phone">{language.contactUsPage.ContactDetails.phoneNumber}</h5>
                          
                        </div>
                    </div>
                    <div className="contactus-detail-phone-container">
                        <i className="far fa-envelope" style={{ fontSize: '1.6em', color: '#416aa6' }}></i>
                        <div style={{ marginLeft: '14px', textAlign: 'start' }}>
                            <h5 className="contactus-detail-phone">{language.contactUsPage.ContactDetails.email}</h5>
                           
                        </div>
                    </div>
                </div>
                <div className="contactus-message-container">
                    <h4 className="contactus-message-title">{language.contactUsPage.secondTitle}</h4>
                    <Dots className="contactus-dots-message" size="5" color="#416aa6" />
                    <input id="name" className="contactus-message-input" placeholder={language.contactUsPage.messageSection.firstPH} value={inputData.Name} onChange={(e) => onDataCollect(e) }></input>
                    <input id="email" className="contactus-message-input" placeholder={language.contactUsPage.messageSection.secondPH} value={inputData.Email} onChange={(e) => { onDataCollect(e) }}></input>
                    <textarea  className="contactus-message-message" id="message" rows="6" cols="50" placeholder={language.contactUsPage.messageSection.thirdPH} value={inputData.Message} onChange={(e) => { onDataCollect(e) }}></textarea>
                    {contactIsLoading ? <span className="ContactUs-loadingContainer"><Loader type="Oval" color="#416aa6" height={26} width={26} /></span>
                        : <button className="contactus-message-submit-btn" onClick={() => { onSubmitClicked() }}>{language.contactUsPage.messageSection.submitBtn}</button>}
                </div>
            </div>
        </div>
    )
}
export default ContactUsPage;