import React from 'react';
import logoWide from '../../../assets/icons/logo/logo-wide-white.png'
import { withRouter } from 'react-router-dom'
import ReactGA from "react-ga";


function Footer(props) {
    const splittedPath = window.location.pathname.split("/")
    const lng = splittedPath[1]
    const isApplyDialogOpen = splittedPath[splittedPath.length - 1] === 'apply'
    if (isApplyDialogOpen) return null
    return (
        <div className="Footer-Container">
            <img className="Footer-Logo" src={logoWide} alt="Logo" />
            <span className="Footer-SocialMedia-Container">
                <a href="https://rebrand.ly/courzerve_facebook" rel="noopener noreferrer" target="_blank" className="Footer-SocialMedia-Circle"> <i className="fab fa-facebook-square" style={{color:'white'}}/></a>
                <a href="https://www.linkedin.com/company/courzerve/" rel="noopener noreferrer" target="_blank" className="Footer-SocialMedia-Circle"> <i className="fab fa-linkedin-in" style={{color:'white'}}></i></a>
                <a href="https://rebrand.ly/courzerve_insta" rel="noopener noreferrer" target="_blank" className="Footer-SocialMedia-Circle"> <i className=" fab fa-instagram" style={{color:'white'}}/></a>
            </span>
            

            <span className="Footer-Links-Container">
            <span style={{marginRight:'0.8em'}}>
            {lng === "en" ? <span className="footer-Language" onClick={() => {
                    ReactGA.event({
                        category: `Localization Events`,
                        action: 'Changed Lng to arabic'
                    });
                    const path = window.location.pathname.substr(3)
                    props.history.push(`/ar${path}`)
                    window.location.reload();
                }}><i className="fas fa-globe"/> AR</span>
                    :
                    <span className="footer-Language" onClick={() => {
                        ReactGA.event({
                            category: `Localization Events`,
                            action: 'Changed Lng to english'
                        });
                        const path = window.location.pathname.substr(3)
                        props.history.push(`/en${path}`)
                        window.location.reload();
                    }}><i className="fas fa-globe"/> En</span>}
            </span>
            <span className="footer-linksonly">
                <u className="Footer-Links-Text"  onClick={() => {
                    window.scrollTo(0, 0)
                    props.history.push(`${lng}/about`)
                }}>About Us</u>
                <u className="Footer-Links-Text">{`Terms & Conditions`}</u>
                </span>
            </span>
            
        </div>
    );
}

export default withRouter(Footer);