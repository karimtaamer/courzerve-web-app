import React, { useContext } from 'react'
 import successImage from '../../assets/icons/landing/SuccessImage.png'
 import successReview from '../../assets/icons/others/Success.png'
import { isMobile } from 'react-device-detect';
import { LanguageStateContext } from '../../service/utils/language/LanguageGlobalState'
import {Helmet} from 'react-helmet'

const SucessPage = ({ history ,match}) => {
    const { language, getDynamicText } = useContext(LanguageStateContext)
    var courseName = history.location.pathname.substring(12, history.location.pathname.length-2)
    var identifer = history.location.pathname.substring(history.location.pathname.length-1)
    console.log(identifer)
    var CustomerName = sessionStorage.getItem('customerName');
    var motivationKey = sessionStorage.getItem('motivationVideoKey')
    
  window.gtag('event', 'conversion', {
      'send_to': 'AW-619801358/B85FCLD1uPEBEI7WxacC',
      'transaction_id': ''
  });
  
    return (
        <div className="mainPageContainer" style={{ textAlign: 'center', paddingBottom: '3em', width: '100%' }}>
            <Helmet>
            <title>Thank you {CustomerName}</title>
            <meta name="description" content="Successfully applied for the course" />
            </Helmet>
            {motivationKey ? 
            <iframe allowFullScreen src={`https://www.youtube.com/embed/${motivationKey}?autoplay=1rel=0&modestbranding=1&autohide=1`}  className="successPage-videoContainer"></iframe>
            :
             <img img src={identifer == "1" ? successImage : identifer == "2" && successImage} alt="SorryImageNotFound" style={isMobile?{ marginTop: '5em', width: "80%" }: { marginTop: '5em', width: "35%", }} />
            }
                   <p className="main-title-small" style={{ width: isMobile ? "80%" : '60%', marginRight: 'auto', marginLeft: 'auto', marginTop: '2em' }}  dangerouslySetInnerHTML={{ __html: identifer == 1 ? getDynamicText("SuccessPage", [CustomerName, courseName]): identifer == 2 && getDynamicText("SuccessPageReview", [CustomerName, courseName])}}></p>
            <button className="ApplyCourseDialog-ApplyBtn succ" style={{ marginBottom: 'auto' }} onClick={() => { history.push(`/${match.params.lng}`) }}>{`<<`} {language.backToHome}</button>
        </div>
    )
}
export default SucessPage;