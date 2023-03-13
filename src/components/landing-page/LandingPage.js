import React, { useState, useEffect, useContext } from 'react';
import CoursesSection from './components/course-section/CoursesSection'
import TestmonialSection from './components/Testmonials'
import InstructorSection from './components/InstructorSection'
// import CounterSection from './components/CounterSection'
import { useSpring, animated } from 'react-spring'
// import AutoSuggest from './components/SearchAutoSuggest'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import { LanguageStateContext } from '../../service/utils/language/LanguageGlobalState'
import Check from '../../assets/icons/landing/check.svg'
import LandingLaptop from '../../assets/icons/landing/landingSectionBottomImg2.svg'

function LandingPage() {
    // let { lng } = useParams();

    const [isScrollInCourses, setIsScrollInCourses] = useState(false);
    const [isScrollInTestmonials, setIsScrollInTestmonials] = useState(false);
    // const [isScrollInCounter, setIsScrollInCounter] = useState(false)
    const [isScrollInWhyChooseUs, setIsScrollInWhyCHooseUs] = useState(false)
    const [isScrollInHowItWorks, setIsScrollInHowItWorks] = useState(false);
    const { language } = useContext(LanguageStateContext)

    // const springPorpsForCourses = useSpring({ config: { duration: 1000 }, opacity: isScrollInCourses ? 1 : 0, from: { opacity: 0 } })
    const springPorpsForTestmonials = useSpring({ config: { duration: 1000 }, opacity: isScrollInTestmonials ? 1 : 0, from: { opacity: 0 } })
    // const springPropsForCounter = useSpring({ config: { duration: 1000 }, opacity: isScrollInCounter ? 1 : 0, from: { opacity: 0 } })
    // const springPorpsForWhyChooseUs = useSpring({ config: { duration: 1000 }, opacity: isScrollInWhyChooseUs ? 1 : 0, from: { opacity: 0 } })
    const springPorpsForHowItWorks = useSpring({ config: { duration: 1000 }, opacity: isScrollInHowItWorks ? 1 : 0, from: { opacity: 0 } })
    // const coursesSection = document.getElementById('courseSection') && document.getElementById("courseSection").offsetTop

    useEffect(() => {

        document.addEventListener('scroll', () => {
            window.scrollY > 0 && !isScrollInWhyChooseUs && setIsScrollInWhyCHooseUs(true)
            window.scrollY > 600 && !isScrollInHowItWorks && setIsScrollInHowItWorks(true)
            window.scrollY > 2000 && !isScrollInCourses && setIsScrollInCourses(true)
            window.scrollY > 2100 && !isScrollInTestmonials && setIsScrollInTestmonials(true)
            // window.scrollY > 2600 && !isScrollInCounter && setIsScrollInCounter(true)
        });
        // eslint-disable-next-line 
        // {language.landingPage.landingPageMainText}  {language.landingPage.landingPageSubTitle}
        
    }, [])
    return (

        <div style={{ height: "100%" }}>
            <div className="LandingPage-Landing-Container">
                <div>
                <h3 className="LandingPage-Landing-Header">{language.landingPage.landingPageMainText}</h3>
                 <p className="LandingPage-Landing-SubHeader">{language.landingPage.landingPageSubTitle}</p>
                </div>
                <div className="landingPage-CheckMainContainer">
                    <div className="landingSection-webMob">
                    <span className="landingPage-checkInnerContainer">
                        <img src={Check} alt="Check"></img>
                        <span>
                             <h5 className="landingPage-UpperCheckText">{language.landingPage.checks.firstTop}</h5> 
                            <h4 className="landingPage-LowerCheckText">{language.landingPage.checks.firstBottom}</h4>
                        </span>
                    </span>
                    <span className="landingPage-checkInnerContainer">
                        <img src={Check} alt="Check"></img>
                        <span>
                            <h5 className="landingPage-UpperCheckText">{language.landingPage.checks.secondTop}</h5> 
                            <h4 className="landingPage-LowerCheckText">{language.landingPage.checks.secondBottom}</h4>
                        </span>
                    </span>
                    </div>
                    <div className="landingSection-webMob">
                    <span className="landingPage-checkInnerContainer">
                        <img src={Check} alt="Check"></img>
                        <span>
                             <h5 className="landingPage-UpperCheckText">{language.landingPage.checks.thirdTop}</h5> 
                            <h4 className="landingPage-LowerCheckText">{language.landingPage.checks.thirdBottom}</h4>
                        </span>
                    </span>
                    <span className="landingPage-checkInnerContainer">
                        <img src={Check} alt="Check"></img>
                        <span>
                            <h5 className="landingPage-UpperCheckText">{language.landingPage.checks.fourthTop}</h5>
                            <h4 className="landingPage-LowerCheckText">{language.landingPage.checks.fourthBottom}</h4>
                        </span>
                    </span>
                    </div>
                </div>
                {/* <AutoSuggest /> */}
                <button className="landingSection-btn" onClick={() => {
                    if (document.getElementById('courseSection')) document.getElementById('courseSection').scrollIntoView(false,{ behavior: "smooth" })
                    else window.scrollTo(3000, 0)
                    }}>{language.landingPage.landingCourseBtn}</button>
                 <img className="landingSection-bottomImg" src={LandingLaptop} alt="MainImg"></img> 
            </div>
            <WhyChooseUs />
            <animated.div style={springPorpsForHowItWorks} ><HowItWorks /></animated.div>
            {/* <animated.div style={springPorpsForCourses} > */}
            <CoursesSection />
            {/* </animated.div>  */}
             {/* <animated.div style={springPropsForCounter}><CounterSection onShow={isScrollInCounter} /></animated.div> */}
            <animated.div style={springPorpsForTestmonials} ><TestmonialSection /></animated.div> 
            <InstructorSection />
        </div>


    );
}

export default LandingPage;