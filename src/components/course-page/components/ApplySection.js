import React, { useState, useContext, useEffect } from "react";
import Rating from "../../generic/Rating";
import ApplyCoursePricingDialog from "./ApplyCoursePricingDialog";
import { withRouter } from "react-router-dom";
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import InfoDialog from '../../generic/infoDialoge/InfoDialog'
import ReactGA from "react-ga";
import { compearDates, refactorMMMMddyyyyDate } from "../../../service/utils/Helpers"
import LargeInfoDialog from '../../generic/infoDialoge/LargeInfoDialog'
import PaymentDialog from '../../generic/ExplinationDialog/PaymentDialog'

const CourseApplyPart = ({ isPostionOnTop, applyData, history }) => {
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const { language, getDynamicText } = useContext(LanguageStateContext)
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false)
  const lng = window.location.pathname.split("/")[1]
  const [isLargeInfoDialogOpen, setIsLargeInfoDialogOpen] = useState(false)
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false)


  const handelCloseDialog = () => {
    const isDialogOpen = history.location.pathname.slice(0, -6)
    history.push(`${isDialogOpen}`)
    document.body.style.position = "";
    setIsApplyDialogOpen(false)
  };
  const OnSalePrice = ({ discountPrice, originalPrice }) => <div className="flexColumnCenterSpaceBetween" style={{ width: '100%' }}>
    {/* <h3 className="CoursePage-applySection-topTitle">{language.coursePage.ApplySectionTitles.secondTitle}</h3> */}
    <h4 className="CoursePage-applySection-topFieldBigger"> {applyData.round.discountPrice} {language.coursePage.ApplySectionTitles.pricing}</h4>
    <h4 className="CoursePage-applySection-topFieldToBeSale">
      {applyData.round.roundPrice} {language.coursePage.ApplySectionTitles.pricing}
    </h4>
  </div>

  const OriginalPrice = ({ discountPrice, originalPrice }) => <div className="flexColumnCenterSpaceBetween" style={{ width: '100%' }}>
    <h3 className="CoursePage-applySection-topTitle">{language.coursePage.ApplySectionTitles.secondTitle}</h3>
    <h4 className="CoursePage-applySection-topFieldBigger">  {applyData.round.roundPrice} {language.coursePage.ApplySectionTitles.pricing}</h4>

  </div>


  useEffect(() => {
    const apply = window.location.pathname.split("/")[4]
    if (apply === "apply") setIsApplyDialogOpen(true);
  }, [])


  return (
    <div
      style={isPostionOnTop ? { top: 32 } : {}}
      className="CoursePage-ApplySection-mainContainer"
    >
      {isApplyDialogOpen && (
        <ApplyCoursePricingDialog
          round={applyData.round}
          motivationKey={applyData.course.motivationVideoKey}
          courseId={applyData.course.courseId}
          courseName={applyData.course.title}
          handleClose={() => {
            handelCloseDialog();
          }}
        />
      )}
      {isInfoDialogOpen && <InfoDialog handleClose={() => { setIsInfoDialogOpen(false) }} Content={getDynamicText("EarlyBirdDialog", [applyData.round.earlyBirdDeadline, applyData.round.roundEarlyBirdPrice, applyData.round.roundPrice])} />}
      {isLargeInfoDialogOpen && <LargeInfoDialog handleClose={() => { setIsLargeInfoDialogOpen(false) }} />}
      {isPaymentDialogOpen && <PaymentDialog handleClose={() => { setIsPaymentDialogOpen(false) }}/>}
      {applyData['round'] ? <div className="CoursePage-applySecrion-SubContainers-First">
 
      </div> : <p className="CoursePage-applySecrion-SubContainers CoursePage-applySection-topTitleNoRound">{language.coursePage.ApplySectionTitles.sixthTitle}</p>}
      <div className="CoursePage-applySecrion-meddleContainer">

        <div className="CoursePage-applySecrion-meddleSubContainers">
          <span className="flexRowCenterCenter levels">
            <i className="fas fa-file-alt" style={{ color: "#416aa6", marginRight: '4px', marginLeft: "4px" }}></i>{" "}
            <h3 className="CoursePage-applySection-titles">{language.coursePage.ApplySectionTitles.thirdTitle}</h3>
          </span>
          <h4 className="CoursePage-applySection-fields">
            {applyData.course.numberOfLectures > 10 ? `${applyData.course.numberOfLectures} ${language.coursePage.ApplySectionTitles.thirdTitle2}` : `${applyData.course.numberOfLectures} ${language.coursePage.ApplySectionTitles.thirdTitle3}`}
          </h4>
        </div>

        <div className="CoursePage-applySecrion-meddleSubContainers">
          <span className="flexRowCenterCenter levels">
            <i className="far fa-hourglass" style={{ color: "#416aa6", marginRight: '4px', marginLeft: "4px" }}></i>
            <h3 className="CoursePage-applySection-titles">{language.coursePage.ApplySectionTitles.fourthTitle}</h3>
          </span>
          <h4 className="CoursePage-applySection-fields">
            {applyData.course.duration}
          </h4>
        </div>

        <div className="CoursePage-applySecrion-meddleSubContainers">
          <span className="flexRowCenterCenter levels" >
            <i className="far fa-clock" style={{ color: "#416aa6", marginRight: '3px', marginLeft: "3px" }}></i>{" "}
            <h3 className="CoursePage-applySection-titles">{language.coursePage.ApplySectionTitles.timingTitle}</h3>
          </span>
          <h4 className="CoursePage-applySection-fields" style={{ direction: "ltr"}}>
        {applyData.round && applyData.round['startDate'] ? refactorMMMMddyyyyDate(applyData.round.startDate) : <button className="CoursePage-applySection-learnmoreBtn" onClick={() => setIsLargeInfoDialogOpen(true)}>{language.learnMore}</button>}

          </h4>
        </div>

        {/* <div className="CoursePage-applySecrion-meddleSubContainers">
          <span className="flexRowCenterCenter">
            <i className="fas fa-pencil-alt" style={{ color: "#416aa6", marginRight: '4px', fontSize: '0.9rem', marginLeft:"4px" }}></i>
            <h3 className="CoursePage-applySection-titles">{language.coursePage.ApplySectionTitles.fifthTitle}</h3>
          </span>
          <h4 className="CoursePage-applySection-fields">
            {applyData.course.courseLevel}
          </h4>
        </div> */}

        {/* <div className="CoursePage-applySecrion-meddleSubContainers">
          <span className="flexRowCenterCenter">
            <i className="fas fa-money-bill-wave" style={{ color: "#416aa6", marginRight: '3px', marginLeft: "3px" }}></i>{" "}
            <h3 className="CoursePage-applySection-titles">{language.coursePage.ApplySectionTitles.PaymentTitle}</h3>
          </span>
          <button className="CoursePage-applySection-learnmoreBtn">Learn more</button>
        </div> */}
        
      </div>
      {applyData.course.instructor && (
        <div className="CoursePage-applySecrion-SubContainers">
          <img
            className="CoursePage-applySection-InstructorImg"
            src={applyData.course.instructor.photoURL}
            alt="istructor"
          />
          <span className="flexColumnCenterStart">
            <h3 className="CoursePage-applySection-Instructor-name">
              {applyData.course.instructor.name}
            </h3>
            <h4 className="CoursePage-applySection-titles">
              {applyData.course.instructor.jobTitle}
            </h4>

            {applyData.course.instructor["averageRating"] &&
              <div className="flexRow" onClick ={() => {
                history.push(`/${lng}/instructor/${applyData.course.instructor.id}`)
                window.scrollTo(500,0)
              } }>
                <Rating
                  dark
                  rating={applyData.course.instructor.averageRating}
                  className="CTopSection-Rating"
                />
                <p className="CoursePage-applySection-titles" style={{ marginLeft: "0.3em" }}>{Math.round(applyData.course.instructor.averageRating * 10)/10}</p>
              </div>}
            <div
              onClick={() => history.push(`/${lng}/instructor/${applyData.course.instructor.id}`)}
              className="CoursePage-applySection-gotoInstructor"
            >
              {language.coursePage.ApplySectionTitles.ApplySectionInstructorBtn}
              <i
                style={lng === "en" ?{ marginLeft: "0.2em" } : {marginRight: "0.3em"}}
                className= {lng === "en" ? "fas fa-angle-double-right" : "fas fa-angle-double-left"} 
              />
            </div>
          </span>
        </div>
      )}
      <div className="CoursePage-applySection-applyPart">
        <button
          className="CoursePage-applySection-btn"
          onClick={() => {
            ReactGA.event({
              category: `${applyData.course.courseId} Events`,
              action: 'Opened Pricing dialog'
            });
            if(history.location.pathname.split("/")[4]){
              var newURL = history.location.pathname.substring(0, history.location.pathname.length-8)
            history.push(`${newURL}/apply`)
            } else{
              history.push(`${history.location.pathname}/apply`)
            }
            // setIsApplyDialogOpen(true);
          }}
        >
          {language.coursePage.applyBtn}
          <i
                style={lng === "en" ?{ marginLeft: "0.2em" } : {marginRight: "0.3em"}}
                className= {lng === "en" ? "fas fa-angle-double-right" : "fas fa-angle-double-left"} 
              />
        </button>
        <p className="CoursePage-applySection-applyPart-text" >{language.coursePage.ApplySectionTitles.seventhTitle}</p>
      </div>

    </div>
  );
};
export default withRouter(CourseApplyPart);



