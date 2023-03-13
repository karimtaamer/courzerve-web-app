import React, {useContext} from 'react';
import InstructorIcon from '../../../assets/icons/landing/landing-instructor-icon.svg'
import PriceIcon2 from '../../../assets/icons/landing/landing-price2-icon.svg'
import live from '../../../assets/icons/landing/landing-live.svg'
import online from '../../../assets/icons/landing/landing-online.svg'
import Dots from '../../generic/dots/Dots'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

function LandingSection() {
    const {language} = useContext(LanguageStateContext)
    return (
        <div className="WhyChooseUs-Container">
            <h3 className="main-title" >{language.landingPage.whyChooseUs.title}</h3>
            <Dots width="2em" color="#416aa6" size="5" />
            <div className="WhyChooseUs-Cards-Container">
                <div className="WhyChooseUs-Card-Container">
                    <img className="WhyChooseUs-Card-Image" src={online} alt="Why Choose us" />
                    <span className="WhyChooseUsSub">
                        <p className="WhyChooseUs-Card-Main-T">{language.landingPage.whyChooseUs.firstPart.title}</p>
                        <p className="WhyChooseUs-Card-Sub-T">{language.landingPage.whyChooseUs.firstPart.discription}</p>
                    </span>
                </div>

                <div className="WhyChooseUs-Card-Container">
                    <img className="WhyChooseUs-Card-Image" src={live} alt="Why Choose us" />
                    <span className="WhyChooseUsSub">
                        <p className="WhyChooseUs-Card-Main-T">{language.landingPage.whyChooseUs.secondPart.title}</p>
                        <p className="WhyChooseUs-Card-Sub-T">{language.landingPage.whyChooseUs.secondPart.discription}</p>
                    </span>
                </div>
                <div className="WhyChooseUs-Card-Container">
                    <img className="WhyChooseUs-Card-Image" src={InstructorIcon} alt="Why Choose us" />
                    <span className="WhyChooseUsSub">
                        <p className="WhyChooseUs-Card-Main-T">{language.landingPage.whyChooseUs.thirdPart.title}</p>
                        <p className="WhyChooseUs-Card-Sub-T">{language.landingPage.whyChooseUs.thirdPart.discription}</p>
                    </span>
                </div>
                <div className="WhyChooseUs-Card-Container">
                    <img className="WhyChooseUs-Card-Image" src={PriceIcon2} alt="Why Choose us" />
                    <span className="WhyChooseUsSub">
                        <p className="WhyChooseUs-Card-Main-T">{language.landingPage.whyChooseUs.fourthPart.title}</p>
                        <p className="WhyChooseUs-Card-Sub-T">{language.landingPage.whyChooseUs.fourthPart.discription}</p>
                    </span>
                </div>
            </div>

        </div>
    );
}

export default LandingSection;