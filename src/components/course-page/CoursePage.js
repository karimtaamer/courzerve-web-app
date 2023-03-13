import React, { useEffect, useState, useRef, useContext } from 'react';
import BulletPoints from './components/BulletPoints'
import FAQ from './components/FAQ/FAQ'
import Dots from '../generic/dots/Dots'
import TopSection from './components/TopSection'
import WhenAndWhereSection from './components/WhenAndWhereSection'
import ApplySection from './components/ApplySection'
import Content from './components/content/Content'
import { useGetRequest } from '../../service/api/ApiMethods'
import MainLoading from '../generic/MainLoading'
import BottomNavigation from './components/BotoomNavigation'
import ReviewSection from './components/reviewsection/ReviewSection'
import VideoDialog from '../generic/VideoDialog'
import { isMobile } from 'react-device-detect';
import MobileTopSection from './components/MobileTopSection'
import MobileApplySection from './components/MobileApplySection'
import { LanguageStateContext } from '../../service/utils/language/LanguageGlobalState';
import { Helmet } from 'react-helmet'

function CoursePage(props) {
    const windowUrl = window.location.pathname;
    const pathNames = windowUrl.split("/")
    const lng = pathNames[1]
    const [isNavVisible, setIsNavVisible] = useState(false)
    const [data, isLoading, error] = useGetRequest(`/course/round/${lng}`, { headers: { 'courseId': props.match.params.id } });
    const [isScrollAfterMainSection, setIsScrollAfterMainSection] = useState(false)
    const [isBottomNavVisible, setIsBottomNavVisible] = useState(false)
    const [isSeeMoreOpen, setIsSeeMoreOpen] = useState(false)
    const [isVideo, setIsVideo] = useState(false)
    const [isFixed, setIsFixed] = useState(false)
    const { language } = useContext(LanguageStateContext)
    var faqSection = null

    if (error && error.split("/")[1] === "400") {
        props.history.push(`/${lng}/error`)
    }

    if (data) {
        sessionStorage.setItem('courseFAQs', JSON.stringify(data.course.FAQ))
    }

    useEffect(() => {

        // setTimeout(function () { setIsNavVisible(true) }, 5000);

         if (document.getElementById("FAQSection") && pathNames[4] && pathNames[4] === 'reviews' && data.course.ratings.allRatings.length > 0) {
            var oldURL = windowUrl.substring(0, windowUrl.length - 8)
             window.history.pushState({}, "", oldURL);
             faqSection = document.getElementById("FAQSection")
             faqSection.scrollIntoView(false)
         } 
         else
            if (document.getElementById("FAQSection") && pathNames[4] && pathNames[4] === 'reviews') {
                var oldURL = windowUrl.substring(0, windowUrl.length - 8)
                window.history.pushState({}, "", oldURL);
                window.scrollTo(0, 0)
            } else {
                window.scrollTo(0, 0)
            }

        document.addEventListener('scroll', () => {
            setIsScrollAfterMainSection(window.scrollY > 150)
            setIsBottomNavVisible(true)
            // At the bottom
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) setIsBottomNavVisible(false)
        });
        const applyInPathName = pathNames[4]
        if (applyInPathName === "apply") setIsFixed(true);

        // eslint-disable-next-line
    }, [isLoading])


    const Description = () => {
        const scrollToRef = (ref) => {
            window.scrollTo(0, ref.current.offsetTop - 100)
        }
        const myRef = useRef(null)
        const executeScroll = () => scrollToRef(myRef)
        return (<div ref={myRef} id="CourseDesc" className="CoursePage-Desc">
            <div>
                <h3 className="main-title">{language.coursePage.fifthTitle}</h3>
                <Dots className="main-dots" size="4" color="#416aa6" />
                <div className="CoursePage-Disc-Content" style={isSeeMoreOpen ? {} : { height: "20em", overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: data.course.description }} />
                <button className="CoursePage-Desc-SeeMore" onClick={() => {
                    executeScroll()
                    setIsSeeMoreOpen(!isSeeMoreOpen)

                }}>{isSeeMoreOpen ? "See Less" : "See More"}</button>
            </div>
        </div>)
    }

    if (isLoading || !data) return <MainLoading size={120} />
    return (
        <div style={isFixed ? { position: "fixed", width: "100%" } : { width: "100%" }}>
            <Helmet>
                <title>{data.course.title}</title>
                <meta name="description" content={data.course.subTitle} />
            </Helmet>
            {isMobile && <MobileApplySection round={data.round} course={data.course} />}
            {isVideo && <VideoDialog videoKey={data.course.videoKey} open={isVideo} handleClose={() => { setIsVideo(false) }} />}
            {isMobile ? <MobileTopSection course={data.course} round={data.round} /> : <TopSection course={data.course} round={data.round} />}
            {!isMobile && <ApplySection isPostionOnTop={isScrollAfterMainSection} applyData={data} />}
            <div className="main">
                <span id="CourseWhatYoullLearn" className={lng === "en" ? "CoursePage-RowContainer" : "CoursePage-RowContainerAr"}>
                    {/* <BulletPoints className="" title={language.coursePage.firstTitle} points={data.course.learningOutcomes} /> */}
                    <div id=" " className="CoursePage-WhatYoullLearn">
                        <h3 style={{marginBottom:"4px"}} className="main-title">{data.course.courseId === "juniors" ? language.coursePage.firstTitle2 : language.coursePage.firstTitle}</h3>
                        <Dots className="main-dots" size="4" color="#416aa6" />
                        <div className="CoursePage-WhatToLearnText"  dangerouslySetInnerHTML={{ __html: data.course.learningOutcomes }} />
                    </div>
                    {data.course["videoCoverURL"] ? <iframe allowFullScreen src={`https://www.youtube.com/embed/${data.course.videoKey}`} className="CoursePage-videoCover-container"></iframe>
                        :
                        <div className="CoursePage-videoCover-container" style={{ backgroundImage: `url(${data.course.coursePhotoURL})` }} />}
                    {/* {data.course["videoCoverURL"] ? <div className="CoursePage-videoCover-container" style={{ backgroundImage: `url(${data.course.videoCoverURL})` }}>
                        <span className="playBtn" onClick={() => { 
                              ReactGA.event({
                                category: `${data.course.courseId} Events`,
                                action: 'Opened Video'
                              });
                            setIsVideo(true) }} />
                    </div> :  <div className="CoursePage-videoCover-container" style={{ backgroundImage: `url(${data.course.coursePhotoURL})` }}/>} */}
                </span>
                <WhenAndWhereSection data={data.round} />
                <Content course={data.course} />
                <BulletPoints id="CourseRequirments" title={language.coursePage.fourthTitle} points={data.course.requirements} />
                <Description />
                <div id="FAQSection">
                    <ReviewSection data={data.course} />
                </div>
                <FAQ course={data.course} />



            </div>

            {isBottomNavVisible && !isMobile && isNavVisible && <BottomNavigation />}
        </div>
    );
}

export default CoursePage;