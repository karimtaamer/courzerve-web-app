import React, { useState } from 'react';
import SlideToggleContent from '../../../generic/animations/SlideToggle'
import ReactGA from "react-ga";

function FaqExtender({ question, answer, width, isChatBot }) {
    const [scrollDownVisible, setIsScrollDownVisible] = useState(false)
    const [isMainContainerVisible, setIsMainContainerVisible] = useState(true)


    const openDiv = () => {
        setIsScrollDownVisible(!scrollDownVisible)
        scrollDownVisible && isChatBot && ReactGA.event({category: `feature Events`, action: 'question Clicked', label: question});
        //Creating a timeout in extender because the closing of scrolll takes time 
        !isMainContainerVisible?setTimeout(() => { setIsMainContainerVisible(true) }, 350):setIsMainContainerVisible(false)
    }
    return (
        <div style={width ? {width:'100%'}: {}}>

            <div onClick={openDiv} className={!scrollDownVisible && isMainContainerVisible?"FAQ-Extender-Container":"FAQ-Open-Extender-Container"}>
                <p className="FAQ-Title">{question}</p>
                <i style={!scrollDownVisible && isMainContainerVisible?{color:"#416aa6"}:{color:"white"}} className={!scrollDownVisible && isMainContainerVisible?"fas fa-chevron-down JobCard-Arrow":"fas fa-chevron-up JobCard-Arrow"}></i>
            </div>
            <SlideToggleContent isVisible={scrollDownVisible}>
                <div onClick={openDiv} className="FAQ-Opened-Text-Container">
                    {answer}
                </div>
            </SlideToggleContent>
        </div>
    );
}

export default FaqExtender;