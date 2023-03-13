import React, { useContext } from 'react'
import imgWeb from '../../assets/icons/landing/notfoundpage.png'
import imgMobil from '../../assets/icons/landing/notFoundImgmobil.png'
import { isMobile } from 'react-device-detect';
import {LanguageStateContext} from '../../service/utils/language/LanguageGlobalState'
import {Helmet} from 'react-helmet'

const NotFoundPage = ({history}) => {
    const {language} = useContext(LanguageStateContext)
    const lng = window.location.pathname.split("/")[1]


    return(
        <div style={{ textAlign:'center', paddingBottom:'7em'}}>
             <Helmet>
            <title>Sorry! the page doesn't exist</title>
            <meta name="description" content="this URL doesn't have a page yet!!" />
            </Helmet>
            {isMobile? <img src={imgMobil} alt="404" style={{marginTop:'5em', width:"15em", height:"13em"}}/> :<img src={imgWeb} alt="404" style={{marginTop:'5em'}}/>}
    <p className="main-title-small">{language.notFoundPage}</p>
    <button className="ApplyCourseDialog-ApplyBtn succ" style={{marginBottom:'auto'}} onClick={() => {history.push(`/${lng}`)}}>{`<<`} {language.backToHome}</button>
        </div>
    )
}
export default NotFoundPage;