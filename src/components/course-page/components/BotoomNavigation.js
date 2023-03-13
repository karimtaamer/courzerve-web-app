import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

function BotoomNavigation(props) {
    const [scrollPostion, setScrollPostion] = useState(0)
    const [postions, setPostions] = useState({})
    const {language} = useContext(LanguageStateContext)
    const [isVisible, setIsVisiable] = useState(false)

    const [isDisc, setIsDisc] = useState()
    useEffect(() => {
        setTimeout(() => { setIsVisiable(true) }, 900);
        document.addEventListener('scroll', () => setScrollPostion(window.scrollY))
        setIsDisc(document.getElementById('CourseDesc').scrollHeight > 0 ? true : false)
        const CourseWhenAndWherePos = document.getElementById('CourseWhatYoullLearn').scrollHeight
        const ContentPos = CourseWhenAndWherePos + document.getElementById('CourseWhenAndWhere').scrollHeight
        const RequirmentPos = ContentPos + document.getElementById('CourseContent').scrollHeight
        const DescPos = RequirmentPos + document.getElementById('CourseRequirments').scrollHeight
        const ReviewsPos = DescPos + document.getElementById('CourseDesc').scrollHeight
        const FaqPos = ReviewsPos + document.getElementById('CourseFAQ').scrollHeight + 200
        // const ReviewsPos = FaqPos + document.getElementById('CourseFAQ').scrollHeight + 200
        setPostions({
            CourseWhenAndWherePos: CourseWhenAndWherePos, ContentPos: ContentPos, RequirmentPos: RequirmentPos,
            DescPos: DescPos, ReviewsPos: ReviewsPos, FaqPos: FaqPos
        })
    }
        // eslint-disable-next-line
        , [document.getElementById('CourseDesc').scrollHeight])

    const getScrollObject = (pos) => {
        return {
            top: pos + 160,
            behavior: 'smooth',
        }
    }
    return (
        <div className="CourseBottom-Container">
           {isVisible && <div className="CourseBottom-SubContainer">
    <div onClick={() => window.scrollTo(getScrollObject(0))} className={scrollPostion > 0 && scrollPostion < postions.CourseWhenAndWherePos ? "CourseBottom-Item" : "CourseBottom-Item-NotChosen"}>{language.coursePage.firstTitleNav}</div>
    <div onClick={() => window.scrollTo(getScrollObject(postions.CourseWhenAndWherePos))} className={scrollPostion > postions.CourseWhenAndWherePos && scrollPostion < postions.ContentPos ? "CourseBottom-Item" : "CourseBottom-Item-NotChosen"}>{language.coursePage.secondTitle}</div>
    <div onClick={() => window.scrollTo(getScrollObject(postions.ContentPos))} className={scrollPostion > postions.ContentPos && scrollPostion < postions.RequirmentPos ? "CourseBottom-Item" : "CourseBottom-Item-NotChosen"}>{language.coursePage.thirdTitle}</div>
                <div onClick={() => window.scrollTo(getScrollObject(postions.RequirmentPos))} className={scrollPostion > postions.RequirmentPos && scrollPostion < postions.DescPos ? "CourseBottom-Item" : "CourseBottom-Item-NotChosen"}>{language.coursePage.fourthTitle}</div>
   {isDisc && <div onClick={() => window.scrollTo(getScrollObject(postions.DescPos))} className={scrollPostion > postions.DescPos && scrollPostion < postions.ReviewsPos ? "CourseBottom-Item" : "CourseBottom-Item-NotChosen"}>{language.coursePage.fifthTitle}</div>} 
   {document.getElementById('CourseReviews') &&  <div onClick={() => window.scrollTo(getScrollObject(postions.ReviewsPos))} className={scrollPostion > postions.ReviewsPos && scrollPostion < postions.FaqPos ? "CourseBottom-Item" : "CourseBottom-Item-NotChosen"}>{language.coursePage.reviewSection.title}</div>}
                <div onClick={() => window.scrollTo(getScrollObject(postions.FaqPos))} className={scrollPostion > postions.FaqPos ? "CourseBottom-Item" : "CourseBottom-Item-NotChosen"}>{language.coursePage.sixthTitle}</div>
            </div>}

            {/* <div onClick={() => window.open('https://Facebook.com/messages/t/219118678099809')} className="CourseBottom-Arrow-Container"><i className="fab fa-facebook-messenger CourseBottom-Arrow" /></div> */}
        </div>
    );
}
//window.scrollTo(getScrollObject(-150))

export default withRouter(BotoomNavigation);