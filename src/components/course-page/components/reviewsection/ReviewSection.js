import React, { useContext, useState, useEffect } from 'react'
import Rating from '../../../generic/Rating'
import Dots from '../../../generic/dots/Dots'
import ReviewCard from '../../../generic/ReviewCard'
import {LanguageStateContext} from '../../../../service/utils/language/LanguageGlobalState'
import ReactGA from 'react-ga'


const ReviewSection = ({ data }) => {
  const {language} = useContext(LanguageStateContext)
  const [overFlow, setOverFlow] = useState(data.ratings.allRatings.length > 3 ? true : false)
  useEffect(() => {
  data.ratings.allRatings.forEach((reviewer, index) => { 
      if(reviewer.imageUrl) {
      data.ratings.allRatings.splice(0, 0, reviewer)
        data.ratings.allRatings.splice(index+1, 1)
    } })
}, [])
    const toRender = () => {
        if (data.ratings.ratingSummary) {
            return (
                <div id="CourseReviews" className="reviewSection-mainContainer">
                    <h3 className="main-title">{language.coursePage.reviewSection.title}</h3>
                    <Dots className="main-dots" size="4" color="#416aa6" />
                    <div className="reviewSection-subContainer">
                        <div className="reviewSection-AverageConainer">
                            <h4 className="reviewSection-AverageConainer-title">{language.coursePage.reviewSection.firstSubTitle}</h4>
                            <div className="reviewSection-averageContainer-box">
                                <h1 className="reviewSection-averageValue">{Math.round(data.ratings.ratingSummary.averageRating*10)/10}</h1>
                                <Rating dark rating={data.ratings.ratingSummary.averageRating} className="CTopSection-Rating" />
                                <h3 className="reviewSection-averagereviews">{Math.round(data.ratings.ratingSummary.totalNumberOfRatings*10)/10} {language.coursePage.reviewSection.innerTitle}</h3>
                            </div>
                        </div>
                        <div className="reviewSection-DetailedContainer">
                            <h4 className="reviewSection-AverageConainer-title">{language.coursePage.reviewSection.secondSubTitle}</h4>
                            <div className="reviewSection-DetailedContainer-box">
                                <div className="reviewSection-DetailedContainer-subContainers">
                                <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${data.ratings.ratingSummary.ratingDistribution.fiveStar * 100}%`}}></span>
                                    </div>
                                    <Rating dark rating={5} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{Math.round(data.ratings.ratingSummary.ratingDistribution.fiveStar * 100)}%</span>
                                </div>
                                <div className="reviewSection-DetailedContainer-subContainers">
                                    <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${data.ratings.ratingSummary.ratingDistribution.fourStar * 100}%`}}></span>
                                    </div>
                                    <Rating dark rating={4} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{Math.round(data.ratings.ratingSummary.ratingDistribution.fourStar * 100)}%</span>
                                </div>
                                <div className="reviewSection-DetailedContainer-subContainers">
                                <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${data.ratings.ratingSummary.ratingDistribution.threeStar * 100}%`}}></span>
                                    </div>
                                    <Rating dark rating={3} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{Math.round(data.ratings.ratingSummary.ratingDistribution.threeStar * 100)}%</span>
                                </div>
                                <div className="reviewSection-DetailedContainer-subContainers">
                                <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${data.ratings.ratingSummary.ratingDistribution.twoStar * 100}%`}}></span>
                                    </div>
                                    <Rating dark rating={2} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{Math.round(data.ratings.ratingSummary.ratingDistribution.twoStar * 100)}%</span>
                                </div>
                                <div className="reviewSection-DetailedContainer-subContainers">
                                <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${data.ratings.ratingSummary.ratingDistribution.oneStar * 100}%`}}></span>
                                    </div>
                                    <Rating dark rating={1} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{Math.round(data.ratings.ratingSummary.ratingDistribution.oneStar * 100)}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%' }}>
                        {data.ratings.allRatings && data.ratings.allRatings.map((reviewer,index) => reviewer.isApproved && (index < 3 && overFlow) && <ReviewCard key={reviewer.name+index} data={reviewer} />)}
                        {data.ratings.allRatings && data.ratings.allRatings.map((reviewer,index) => reviewer.isApproved && !overFlow && <ReviewCard key={reviewer.name+index} data={reviewer} />)}
                    {overFlow ? <div className="reviewSection-showMore" id="showMoreBtn" onClick={(e)=> { 
                        setOverFlow(false) 
                        document.getElementById("CourseReviews").scrollIntoView(true)
                    ReactGA.event({
                        category: `Rating Events`,
                        action: 'Show more clicked'
                      })}}>Show more <i className="fas fa-angle-down" style={{marginLeft: '0.2em'}}></i></div>: data.ratings.allRatings.length > 3 ? <div className="reviewSection-showMore" onClick={()=> setOverFlow(true)}>Show less <i className="fas fa-angle-up"  style={{marginLeft: '0.2em'}}></i></div>:<div/>}
                    
                    </div>
                </div>
            )
        }
        else if (!data.ratings) {
            return (<div></div>)
        }
    }

    return (
        <div>
            {toRender()}
        </div>
    )

}
export default ReviewSection