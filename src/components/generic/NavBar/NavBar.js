import React, { useState, useEffect, useContext } from 'react';
import logoWideWhite from '../../../assets/icons/logo/logo-wide.png'
import logo from '../../../assets/icons/logo/logo.png'
import { withRouter } from 'react-router-dom'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import SlideToggleContent from '../animations/SlideToggle'
import ReactGA from "react-ga";

function NavBar(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrollAfterLanding, setIsScrollAfterLanding] = useState(false);
    const { language } = useContext(LanguageStateContext)

    const windowUrl = window.location.pathname;
    const pathNames = windowUrl.split("/")
    const lng = pathNames[1]

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY > 10;
            setIsScrollAfterLanding(isTop)

        });
    }, [])



    return (
        <div className="NavBar-MainContainer">
            <div style={isScrollAfterLanding || props.history.location.pathname.split("/")[2] === 'success' ? { backgroundColor: "#416aa6", boxShadow: "0px 3px 4px #4e4e4e32" } : { backgroundColor: "transparent" }} className="NavBar-SubContainer">
            <img className={isScrollAfterLanding ? "NavBar-Logo-Wide" : props.history.location.pathname === '/en' || props.history.location.pathname === '/ar' ? "NaveBar-Logo-nonScroll": "NavBar-Logo-Wide"} src={isScrollAfterLanding ? logoWideWhite : props.history.location.pathname === '/en' || props.history.location.pathname === '/ar'? logo : logoWideWhite} alt="Logo" onClick={() => {
                    window.scrollTo(0, 0)
                    props.history.push(`/${lng}`)
                }} />
                {/* <span><i class="fas fa-globe"/> En</span> */}
                <div style={isScrollAfterLanding ? { color: "white" } : props.history.location.pathname === '/en' || props.history.location.pathname === '/ar'? { color: "#707070" } : { color: "white" }} onClick={() => setIsVisible(!isVisible)} className="NavBar-BurgerMenu"><i className="fas fa-bars"></i></div>
                    <button onClick={() => {
                        if (props.history.location.pathname === `/${lng}`) {
                        if (document.getElementById('courseSection')) document.getElementById('courseSection').scrollIntoView({ behavior: "smooth" })
                        else window.scrollTo(3000, 0)
                        }
                        else {
                        props.history.push(`/${lng}`)
                        window.scrollTo(3000, 0)
                        }
                    }} style={isScrollAfterLanding ? { color: "white" } : props.history.location.pathname === '/en' || props.history.location.pathname === '/ar'? { color: "#707070" } : { color: "white" }} className="NavBar-B">{language.navBar.firstBtn}</button>
                    <button onClick={() => {
                        props.history.push(`/${lng}/about`)
                        window.scrollTo(0, 0)
                    }} style={isScrollAfterLanding ? { color: "white" } : props.history.location.pathname === '/en' || props.history.location.pathname === '/ar'? { color: "#707070" } : { color: "white" }}className="NavBar-B">{language.navBar.secondBtn}</button>
                    <button onClick={() => {
                        window.scrollTo(0, 0)
                        props.history.push(`/${lng}/jobs`)
                    }} style={isScrollAfterLanding ? { color: "white" } : props.history.location.pathname === '/en' || props.history.location.pathname === '/ar'? { color: "#707070" } : { color: "white" }} className="NavBar-B">{language.navBar.thirdBtn}</button>
                    <span className="NavBar-SeperationLine" style={isScrollAfterLanding ? { height: '26px', borderRight: 'solid 1px rgba(235, 235, 235, 0.466)' } : { height: '26px' }} />
                    <button onClick={() => {
                        window.scrollTo(0, 0)
                        props.history.push(`/${lng}/contactus`)
                    }} className={isScrollAfterLanding || props.history.location.pathname.split("/")[2] === 'success' ? "NavBar-SignUp-B-White" : "NavBar-SignUp-B"}>{language.navBar.fourthBtn}</button>

                {lng === "en" ? <span className="NavBar-Language" style={isScrollAfterLanding ? { color: "white" } : props.history.location.pathname === '/en' || props.history.location.pathname === '/ar'? { color: "#707070" } : { color: "white" }} onClick={() => {
                    ReactGA.event({
                        category: `Localization Events`,
                        action: 'Changed Lng to arabic'
                    });
                    const path = window.location.pathname.substr(3)
                    props.history.push(`/ar${path}`)
                    window.location.reload();
                }}><i className="fas fa-globe"/> AR</span>
                    :
                    <span className="NavBar-Language" style={isScrollAfterLanding ? { color: "white" } : props.history.location.pathname === '/en' || props.history.location.pathname === '/ar'? { color: "#707070" } : { color: "white" }} onClick={() => {
                        ReactGA.event({
                            category: `Localization Events`,
                            action: 'Changed Lng to english'
                        });
                        const path = window.location.pathname.substr(3)
                        props.history.push(`/en${path}`)
                        window.location.reload();
                    }}><i className="fas fa-globe"/> En</span>}
            </div>

            <SlideToggleContent isVisible={isVisible}>
                <div className="NavBar-Links-Container">
                    <p onClick={() => {
                        if (props.history.location.pathname === `/${lng}`) window.scrollTo({ top: 2000, behavior: 'smooth' })
                        else {
                            props.history.push(`/${lng}`)
                            window.scrollTo({ top: 2000, behavior: 'smooth' })
                        }
                    }} className="NavBar-Links-text">{language.navBar.firstBtn}</p>
                    <p onClick={() => {
                        props.history.push(`/${lng}/about`)
                        setIsVisible(false)
                    }} className="NavBar-Links-text">{language.navBar.secondBtn}</p>
                    <p onClick={() => {
                        props.history.push(`/${lng}/jobs`)
                        setIsVisible(false)
                    }} className="NavBar-Links-text">{language.navBar.thirdBtn}</p>
                    <p onClick={() => {
                        props.history.push(`/${lng}/contactus`)
                        setIsVisible(false)
                    }} className="NavBar-Links-text">{language.navBar.fourthBtn}</p>
                    {lng === "en" ? <p className="NavBar-Links-text" style={{textAlign:"right"}} onClick={() => {
                        const path = window.location.pathname.substr(3)
                        props.history.push(`/ar${path}`)
                        window.location.reload();
                    }}>عربي <i className="fas fa-globe"/></p>
                        :
                        <p className="NavBar-Links-text" style={{textAlign:"left"}} onClick={() => {
                            const path = window.location.pathname.substr(3)
                            props.history.push(`/en${path}`)
                            window.location.reload();
                        }}><i className="fas fa-globe"/> English</p>}

                </div>
            </SlideToggleContent>
        </div>
    );
}

export default withRouter(NavBar);