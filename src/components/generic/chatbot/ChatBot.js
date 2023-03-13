import React, {useContext} from 'react'
import Modal from 'react-modal'
import FaqExtender from '../../course-page/components/FAQ/FaqExtender'
import { withRouter } from 'react-router-dom'
import {MainFaq} from './FaqsConst'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState';


const ChatBot = ({handleClose, history}) => {

    const lng = window.location.pathname.split("/")[1]
    const {language} = useContext(LanguageStateContext)
    const location = window.location.pathname.split("/")[2]
    const FAQ = sessionStorage.getItem('courseFAQs') && location === "course" && JSON.parse(sessionStorage.getItem('courseFAQs'))

const FAQCourse = () => {
    return (
        <div style={{width:'inherit', height:'inherit', overflow:'auto'}}>
            {FAQ.map(section =>  {if(section.visible === true) return <FaqExtender question={section.question} answer={section.answer} width={true} isChatBot={true}></FaqExtender>})}
        </div>
    )
}

const FAQLanding = () => {
    return (
        <div style={{width:'inherit', height:'inherit', overflow:'auto'}}>
        {lng === "en" ?  MainFaq.english.landing.map(section => 
            <FaqExtender question={section.question} answer={section.answer} width={true} isChatBot={true}/>
        ) 
    :
    MainFaq.arabic.landing.map(section => 
        <FaqExtender question={section.question} answer={section.answer} width={true} isChatBot={true}/>
    )}
    </div>
    )
}

    return(
        <Modal
            className="ChatBot-mainContainer"
            isOpen
            onRequestClose={handleClose}
            style={{ overlay: { backgroundColor: 'rgba(140, 140, 140, 0.241)' }, width:'6em', padding:'0px'}}>
        <div className="ChatBot-Div" >
            <p className="ChatBot-mainTitle">{language.chatbot.title}</p>
            <i className="far fa-times-circle ChatBot-CloseBtn" style={{color:'grey'}} onClick={() => handleClose()}></i>
            <div className="ChatBot-mainInfoSection">
                {FAQ ? FAQCourse() : FAQLanding()}
            </div>
            <div className="ChatBot-CloseSection" >
                <p className="Chatbot-infoText">{language.chatbot.bottomText} <a onClick={() => {
                handleClose()
                history.push(`/${lng}/contactus`)}}>{language.chatbot.contactUs}</a></p>
            </div>
        </div>
        </Modal>
    )
}
export default withRouter(ChatBot);