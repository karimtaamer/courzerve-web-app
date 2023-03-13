import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import Dots from "../../generic/dots/Dots";
import { usePutRequest } from "../../../service/api/ApiMethods";
import ErrorDialog from "../../generic/error/ErrorDialog";
import SuccessDialog from "../../generic/success/SuccessDialog";
import Loader from "react-loader-spinner";
import { baseUrl } from '../../../service/api/ApiConfig'
import axios from 'axios'
import { isMobile } from 'react-device-detect';
import { withRouter } from 'react-router-dom'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import ReactGA from 'react-ga'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ApplyCourseDialog = (props) => {
  const [response, error, isLoading, makeRequest, cancelRequest] = usePutRequest();
  const [roundApplyError, setRoundApplyError] = useState();
  const lng = window.location.pathname.split("/")[1]
  const [promoToggle, setToggle] = useState(false);
  const [promoLoading, setPromoLoading] = useState(false);
  const [promoVal, setPromoVal] = useState('')
  const [promoChosen, setPromoChosen] = useState()
  // const multiSelectOptions = props.round ? props.round.initialLocations.map(location => { return { label: location, value: location } }) : locations
  const [ApplicationData, setApplicationData] = useState({ roundId: props.round.roundId, paymentStatus: "PENDING_PAYMENT", local: `${lng}`, isContacted : false });
  const [isFieldEmpty, setIsFieldEmpty] = useState();
  const { language, getDynamicText } = useContext(LanguageStateContext)
  const [ddValue, setDDValue] = useState();

  if (isMobile) document.getElementById('mobApplySec').style.display = "none"

  if (response) {
    props.handleClose()
    sessionStorage.setItem('customerName', ApplicationData.name)
    props.history.push(`/${props.match.params.lng}/success/${props.courseName}/1`, props.history.location.pathname)
   
    props.motivationKey && sessionStorage.setItem('motivationVideoKey', props.motivationKey)
    document.body.style.position = "  "
  }

  const onDropDownChange = e => {
    setDDValue(e)
    //optaining the dd value and changing it to backend enum only if necassary
    const backendEnums={"من مكان اخر":"Other","سجلت في كورس سابقا مع كورزيرف":"PastCustomer","ترشيح صديق":"Friend",
    "Took a course with Courzerve before":"PastCustomer"}
  
    const backendValue=backendEnums[e.value]||e.value
    setApplicationData(data => {
      return { ...data, "heardAbtUsFrom": backendValue};
    })
  }

  const onInputChange = e => {
    const value = e.target.value;
    const id = e.target.id;

    setApplicationData(data => {
      return { ...data, [id]: value };
    })
  };

  //will be used for promo code
  useEffect(() => {
    if (!promoVal) return
    const timeout = setTimeout(async () => {
      try {
        setPromoLoading(true)
        const promo = await axios.get(baseUrl + '/promo/name', { headers: { promoName: promoVal} });
        setApplicationData(data => {
          return { ...data, promoId: promo.data.id };
        })
        setPromoChosen(promo.data)
        setPromoLoading(false)
      } catch (error) {
        setPromoLoading(false)
        setPromoChosen('INCORRECT_PROMO')
      }
    }, 1000)
    return () => clearTimeout(timeout)
  }, [promoVal])




  const onApplyClick = async () => {
    if (!ApplicationData){
      return setIsFieldEmpty({en:"Please provide your info",ar:"برجاء "});
    } 
    if (!ApplicationData.name){
      return setIsFieldEmpty({en:"Please provide your name",ar:"برجاء ملىء خانة الإسم"});
    } 
    if (!ApplicationData.age || ApplicationData.age < 0) return setIsFieldEmpty({en:"Please provide your Age",ar:"برجاء ملىء خانة السن"});
    if (!ApplicationData.phoneNumber) return setIsFieldEmpty({en:"Please provide your Phone Number",ar:"برجاء ملىء خانة الرقم حتى نستطيع التواصل معك"});
    if (ApplicationData.phoneNumber.length > 16) return setIsFieldEmpty({en:"Please provide a correct number",ar:"برجاء ملىء خانة الرقم صحيحاً"})
    if (!ApplicationData.email) return setIsFieldEmpty({en:"Please provide your Email",ar:"برجاء ملىء خانة البريد الإلكتروني"});
    if (!ApplicationData.email) return setIsFieldEmpty({en:"Please provide your Email",ar:"برجاء ملىء خانة البريد الإلكتروني"});
    if (!ApplicationData.heardAbtUsFrom) return setIsFieldEmpty({en:"Please tell us from where did you hear about us",ar:"برجاء ملىء جميع البيانات (سمعت عننا منين) "});

    if (props.round) {
      if (promoChosen === 'INCORRECT_PROMO') return setRoundApplyError('Please either disable the promo code or enter a correct one.')
      return await makeRequest("/round/customer", ApplicationData);
    }
  };





  // const toRenderLocation = () => {
  //   if (props.round && props.roundlocation) return <div />;
  //   else {
  //     return (
  //       <div>
  //         <h2 className="ApplyCourseDialog-SubContainer-Title">Locations</h2>
  //         <Dots className="BulletPoint-Dots" size="4" color="#416aa6" />
  //         <h5 className="applyDialog-LocationSubtitle">
  //           Once a location has been picked we'll contact you
  //         </h5>
  //         <div >
  //           <MultiSelect
  //             options={multiSelectOptions}
  //             value={ApplicationData.preferredLocations.map(item => { return { value: item, label: item } })}
  //             disableSearch={true}
  //             hasSelectAll
  //             onChange={e => setApplicationData(data => { return { ...data, preferredLocations: e.map(item => item.value) } })}
  //             labelledBy={"Select"}
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
  // };


    return (
      <Modal
        isOpen={true}
        className="applyCourseDialog-overLay"
        onRequestClose={props.handleClose}
        style={{ overlay: { backgroundColor: "rgba(167, 167, 167, 0.281)" } }}
      >
        {(error || roundApplyError) && (
          <ErrorDialog
            handleClose={() => {
              cancelRequest();
              setRoundApplyError(false)
            }}
            onTryAgain={() => {
              cancelRequest();
              onApplyClick()
              setRoundApplyError(false)

            }}
            content={error ? error.substring(0, error.length - 4) : roundApplyError}
          >
          </ErrorDialog>
        )}
        {/* {response && (
        <SuccessDialog
          message={!props.data.location ? "You have succesfuly applied to this course, we will make sure to contact you once a location is set up." : "You have succesfuly applied to this course"}
          handleClose={() => {
            cancelRequest();
            props.history.push('/success')
          }}
        /> */}
        <i className="far fa-times-circle applyDialog-CloseBtn" onClick={() => props.handleClose()}></i>
        <div className="applyDialog-mainContainer">
          <h2 className="applyDialog-Title">{language.coursePage.applyDialog.title}</h2>
          <h5 className="applyDialog-subtitle">
            {language.coursePage.applyDialog.subTitle}
          </h5>

          <div className="ApplyCourseDialog-FirstSubContainer">
            <h2 className="ApplyCourseDialog-SubContainer-Title">
              {language.coursePage.applyDialog.personalInfo.title}
            </h2>
            <Dots className="BulletPoint-Dots" size="4" color="#416aa6" />
            <div className="ApplyCourseDialog-InputsContainer">
              <span className="ApplyCourseDialog-rowInputContainer">
                <input
                  id="name"
                  className="ApplyCourseDialog-rowInput"
                  placeholder={language.coursePage.applyDialog.personalInfo.name}
                  onChange={onInputChange}
                />
                <input
                  id="age"
                  className="ApplyCourseDialog-rowInput"
                  placeholder={language.coursePage.applyDialog.personalInfo.age}
                  type="number"
                  onChange={e => {
                    onInputChange(e);
                  }}
                />
              </span>
              <input
                id="phoneNumber"
                className="ApplyCourseDialog-Input"
                placeholder={language.coursePage.applyDialog.personalInfo.phoneNumber}
                type="number"
                onChange={onInputChange}
              />
              <input
                id="email"
                className="ApplyCourseDialog-Input"
                placeholder={language.coursePage.applyDialog.personalInfo.email}
                onChange={onInputChange}
              />
               {(props.courseId === "ds" || props.courseId === "oop" )&& <input 
              id="university"
              className="ApplyCourseDialog-Input"
              placeholder={language.coursePage.applyDialog.personalInfo.university}
              onChange={onInputChange}
            />}
 {<Dropdown controlClassName='dd-Controler' menuClassName='dd-menu' className="dd-Container" options={language.coursePage.ApplySectionTitles.dropDownValues } onChange={(e) => onDropDownChange(e)} value={ddValue} placeholder={language.coursePage.applyDialog.personalInfo.extraInfo} />} 
            </div>
          </div>

          <div className="ApplyCourseDialog-SecondSubContainer">
            {/* {toRenderLocation()} */}
          </div>

          <div className="ApplyCourseDialog-promoCode-Container">
            <input
              type="checkbox"
              className="ApplyCourseDialog-promoCode-toggle"
              onChange={() =>{
                if(promoToggle) setPromoChosen(null)
                setToggle(!promoToggle)
              } }
            />
            <h3 className="ApplyCourseDialog-promoCode-checkboxText">
              {language.coursePage.applyDialog.promoSection}
            </h3>
          </div>
         
         
          {promoToggle &&
            <div>
              <input
                id="promocode"
                className="ApplyCourseDialog-Input"
                placeholder={language.coursePage.applyDialog.promoPH}
                onChange={(e) => setPromoVal(e.target.value)}
              />
              {promoChosen === 'INCORRECT_PROMO' && <p style={{ color: "red", margin:"2px" }}>{language.coursePage.applyDialog.promoInCorrect}</p>}
              {promoChosen && promoChosen !== 'INCORRECT_PROMO' && <p style={{ color: "green", margin:"2px" }}>{getDynamicText("PromoSuccess", [promoChosen.discount, props.round.roundPrice])}</p>}
            </div>
          }
           {isFieldEmpty && 
            <p className="applyDialog-emptyField-message">
             {isFieldEmpty[lng]}
            </p>
          }
          {!isLoading && !promoLoading ? (
            <button
              className="ApplyCourseDialog-ApplyBtn"
              onClick={() => {
                onApplyClick()
                ReactGA.event({
                  category: `${props.courseId} Events`,
                  action: 'Customer Applied'
                });}}
            >
              {language.applyBtn}
            </button>
          ) : (
              <Loader
                type="Oval"
                color="#416aa6"
                height={26}
                width={26}
                style={{ marginTop: "30px" }}
              />
            )}
        </div>
      </Modal>
    );
};
export default withRouter(ApplyCourseDialog);
