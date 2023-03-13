import React, {useState, useContext} from 'react'
import ChatBot from './ChatBot'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState';
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";

const ChatBotBtn = ({history}) => {
    const [isChatBotOpen, setIsChatBotOpen] = useState(false)
    const {language} = useContext(LanguageStateContext)
    const isApply = history.location.pathname.split("/")[4]
    
    return(
        <div>
 {!isApply && <button className={isChatBotOpen ? "landingPage-helpBtnClose" : "landingPage-helpBtn"} onClick={() => {
    ReactGA.event({
        category: `feature Events`,
        action: 'ChatBot clicked'
        });
     setIsChatBotOpen(true)
     }}>{language.chatbot.chatBotBtn}</button>}
        {isChatBotOpen && <ChatBot handleClose={() => {setIsChatBotOpen(false)}}></ChatBot>}
        </div>
    )
}
export default withRouter(ChatBotBtn);