import React, { useState } from 'react';
import SlideToggleContent from '../../../generic/animations/SlideToggle'
import TootTip from '../../../generic/TootTip'
import VideoDialog from '../../../generic/VideoDialog'
import { isMobile } from 'react-device-detect';


function ContentExtender({ content, index, }) {
    const [scrollDownVisible, setIsScrollDownVisible] = useState(false)
    const [isMainContainerVisible, setIsMainContainerVisible] = useState(true)
    const [isVideoClicked, setIsVideoClicked] = useState(false)

    const PlayPromo = ({ text, color,className }) => <TootTip style={{ color: color }} className={className} text="Click to play promo">
        <i style={{ marginRight: "0.5em" }} className="fas fa-play-circle" />
        <p>{text}</p>
    </TootTip >







    const openDiv = () => {
        setIsScrollDownVisible(!scrollDownVisible)
        //Creating a timeout in extender because the closing of scrolll takes time 
        !isMainContainerVisible ? setTimeout(() => { setIsMainContainerVisible(true) }, 350) : setIsMainContainerVisible(false)
    }
    return (
        <div style={{ width: "100%" }}>
            {isVideoClicked && <VideoDialog open={isVideoClicked} videoKey={content.sectionVideoKey} handleClose={() => { setIsVideoClicked(false) }} />}
            <div onClick={openDiv} className={!scrollDownVisible && isMainContainerVisible ? "CourseContent-Extender-Container" : "CourseContent-Open-Extender-Container"}>
                <div style={{height:"fit-content"}}>
                    <p style={isMobile?{margin:0}:{}} className="FAQ-Title">{`Section ${index + 1}`}</p>
                    {isMobile && content.sectionVideoKey && <span style={{margin:0}} onClick={() => setIsVideoClicked(true)}><PlayPromo className="CourseContent-Mobile-PromoContainer" color={!scrollDownVisible && isMainContainerVisible ? "#416aa6" : "white"} text={!scrollDownVisible && isMainContainerVisible ? 'Promo Available' : 'Play Promo'} /></span>}
                </div>

                <p style={!scrollDownVisible && isMainContainerVisible ? {} : { color: "white" }} className="CourseContent-SubTitle">{`( ${content.sectionTitle} )`}</p>
                {content.sectionVideoKey && <span onClick={() => setIsVideoClicked(true)}><PlayPromo className="CourseContent-PromoContainer" color={!scrollDownVisible && isMainContainerVisible ? "#416aa6" : "white"} text={!scrollDownVisible && isMainContainerVisible ? 'Promo Available' : 'Play Promo'} /></span>}
                <p style={!scrollDownVisible && isMainContainerVisible ? {} : { color: "white" }} className="CourseContent-hrsT">{`${content.totalHrs} hrs`}</p>
                <i style={!scrollDownVisible && isMainContainerVisible ? { color: "#416aa6" } : { color: "white" }} className={!scrollDownVisible && isMainContainerVisible ? "fas fa-chevron-down" : "fas fa-chevron-up "}></i>
            </div>
            <SlideToggleContent isVisible={scrollDownVisible}>
                <div onClick={openDiv} >
                    {content.lessons.map((lesson, index) => <div
                        key={index}
                        style={index === content.lessons.length - 1 ? { borderRadius: "0 0 0.8em 0.8em" } : {}}
                        className="CourseContent-Section-Container">
                        <i style={{ marginRight: "1em", fontSize: "1.5rem" }} className="far fa-file" />
                        <p>{lesson}</p>

                    </div>)}

                </div>
            </SlideToggleContent>
        </div>
    );
}

export default ContentExtender;