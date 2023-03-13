import React, { useContext } from 'react';
import Dots from '../dots/Dots'
import InstructorIcon from '../../../assets/icons/landing/landing-instructor-icon.svg'
import live from '../../../assets/icons/landing/landing-live.svg'
import online from '../../../assets/icons/landing/landing-online.svg'
// import { scrollLeft } from '../../landing-page/service'
import OurStoryImage from '../../../assets/icons/aboutus/aboutus-img.png'
import PriceIcon from '../../../assets/icons/landing/landing-price2-icon.svg'
import WhatWeDoImage from '../../../assets/icons/aboutus/aboutus-people.png'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'
import {Helmet} from "react-helmet";

function AboutUs(props) {

    // const [isButtonsDisabled, setIsButtonDisabled] = useState(false)
    const {language} = useContext(LanguageStateContext)
    // const onArrowButtonClicked = (button) => {
    //     setIsButtonDisabled(true)
    //     //to prevent user from double clicking 
    //     setTimeout(() => { setIsButtonDisabled(false) }, 1000);
    //     const scrollAmount = (button === 'Left') ? -240 : 240
    //     scrollLeft(document.getElementById('CourseSection-Container'), scrollAmount, 1000)

    // }

    const Card = ({ imageSrc, header, text }) => <div className="AboutUs-Card-Container">
        <img src={imageSrc} className="AboutUs-Card-Image" alt="Instructor" />
        <h4 className="AboutUs-Card-Header">{header}</h4>
        <div className="AboutUs-Card-Divider"></div>
        <p className="AboutUs-Card-Text">{text}</p>
    </div>
    // const TeamCard = ({ imageUrl, name, jobTitl }) => <div className="Team-Card-Container">
    //     <img src={imageUrl} className="Team-Card-Image" alt="Instructor" />
    //     <h4 style={{ marginBottom: "0.1em" }} className="AboutUs-Card-Header">{name}</h4>
    //     <p style={{ marginTop: "0.1em" }} className="AboutUs-Card-Text">{jobTitl}</p>
    // </div>
    return (
        <div className="AboutUs-MainContainer">
         <Helmet>
            <title>About Courzerve</title>
            <meta name="description" content="a platform that offers live online courses in arabic." />
         </Helmet>

            <div className="AboutUs-UpperContainer">
            <h3 className="UpperContainer-title">{language.aboutUsPage.pageTitle}</h3>
            </div>
            <div className="AboutUs-Container">
                <img alt="OurSTory" className="AboutUs-OurStoryImage" src={OurStoryImage} />
                <div className="AboutUs-SubContainer">
                <h3 className="main-title-small">{language.aboutUsPage.firstTitle}</h3>
                    <Dots className="AboutUs-SubDots" size="4" color="#416aa6" />
                    <p className="AboutUs-Text">{language.aboutUsPage.ourStory.firstSection}</p>
                    <p className="AboutUs-Text2">{language.aboutUsPage.ourStory.secondSection}</p>
                    <p className="AboutUs-Text2"> {language.aboutUsPage.ourStory.thirdSection}</p>
                    <p className="AboutUs-Text2"> {language.aboutUsPage.ourStory.fourthSection}</p>
                </div>
            </div>
        
            <div className="AboutUs-Container">
                <div className="AboutUs-WhatWeDo-SubContainer">
                    <h3 className="main-title-small">{language.aboutUsPage.secondTitle}</h3>
                    <Dots className="AboutUs-SubDots" size="4" color="#416aa6" />
                    <span style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <Card imageSrc={InstructorIcon} header={language.aboutUsPage.whatWeDo.firstPart.title} text={language.aboutUsPage.whatWeDo.firstPart.discription} />
                        <Card imageSrc={live} header={language.aboutUsPage.whatWeDo.secondPart.title} text={language.aboutUsPage.whatWeDo.secondPart.discription} />
                    </span>
                    <span style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <Card imageSrc={online} header={language.aboutUsPage.whatWeDo.thirdPart.title} text={language.aboutUsPage.whatWeDo.thirdPart.discription} />
                        <Card imageSrc={PriceIcon} header={language.aboutUsPage.whatWeDo.fourthPart.title} text={language.aboutUsPage.whatWeDo.fourthPart.discription} />
                    </span>
                </div>
                <img alt="WhatWeDo" className="AboutUs-WhatWeDoImage" src={WhatWeDoImage} />
            </div>
            <div className="AboutUs-Container">
                {/* <div className="AboutUs-TeamSubContainer">
                    <span style={{ margin: "auto" }}>
                        <h3 className="main-title-small">{language.aboutUsPage.thirdTitle}</h3>
                        <Dots className="AboutUs-TeamSubDots" size="4" color="#416aa6" />
                    </span>

                    <div className="AboutUs-Team-Container">
                        <button className="CourseSection-Left-B" disabled={isButtonsDisabled} onClick={() => onArrowButtonClicked('Left')}><i className="fas fa-chevron-left" /></button>
                        <div style={{ height: "auto" }} id="CourseSection-Container">
                            <TeamCard name="Billy Gilmour" jobTitl="Scottish Xavi" imageUrl="https://www.bayernforum.com/threadlogos/17375.jpg" />
                            <TeamCard name="CHO" jobTitl="English Messi" imageUrl="https://tmssl.akamaized.net/images/portrait/originals/392768-1546589840.jpg" />
                            <TeamCard name="Jorginho" jobTitl="Bethoven's rightfull heir" imageUrl="https://resources.premierleague.com/premierleague/photos/players/250x250/p85955.png" />
                            <TeamCard name="Tammy Abraham" jobTitl="Top 3 strikers itw" imageUrl="https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/02/21/13/tammyabraham210220a.jpg" />
                        </div>
                        <button className="CourseSection-Right-B" disabled={isButtonsDisabled} onClick={() => onArrowButtonClicked('Right')}><i className="fas fa-chevron-right" /></button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default AboutUs;