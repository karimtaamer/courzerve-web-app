import React, {useContext, useState} from 'react'
import Rating from '../../generic/Rating'
import Dots from '../../generic/dots/Dots'
import ReviewCard from './../../generic/ReviewCard'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

const ReviewSection = ({ ratings }) => {
    const {language} = useContext(LanguageStateContext)
    const [overFlow, setOverFlow] = useState(ratings.allRatings.length > 3 ? true : false)
            return (
                <div style={{marginTop:"3em"}} className="reviewSection-mainContainer">
                    <h3 className="whenWhereSection-Title">{language.coursePage.reviewSection.title}</h3>
                    <Dots className="main-dots" size="4" color="#416aa6" />
                    <div className="reviewSection-subContainer">
                        <div className="reviewSection-AverageConainer">
                            <h4 className="reviewSection-AverageConainer-title">{language.coursePage.reviewSection.firstSubTitle}</h4>
                            <div className="reviewSection-averageContainer-box">
                                <h1 className="reviewSection-averageValue">{Math.round(ratings.ratingSummary.averageRating*10)/10}</h1>
                                <Rating rating={ratings.ratingSummary.averageRating} className="CTopSection-Rating" />
            <h3 className="reviewSection-averagereviews">{ratings.ratingSummary.totalNumberOfRatings} {language.coursePage.reviewSection.innerTitle}</h3>
                            </div>
                        </div>
                        <div className="reviewSection-DetailedContainer">
                         <h4 className="reviewSection-AverageConainer-title">{language.coursePage.reviewSection.secondSubTitle}</h4>
                            <div className="reviewSection-DetailedContainer-box">
                                <div className="reviewSection-DetailedContainer-subContainers">
                                <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${ratings.ratingSummary.ratingDistribution.fiveStar * 100}%`}}></span>
                                    </div>
                                    <Rating rating={5} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{Math.round(ratings.ratingSummary.ratingDistribution.fiveStar * 100)}%</span>
                                </div>
                                <div className="reviewSection-DetailedContainer-subContainers">
                                    <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${ratings.ratingSummary.ratingDistribution.fourStar * 100}%`}}></span>
                                    </div>
                                    <Rating rating={4} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{Math.round(ratings.ratingSummary.ratingDistribution.fourStar * 100)}%</span>
                                </div>
                                <div className="reviewSection-DetailedContainer-subContainers">
                                <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${ratings.ratingSummary.ratingDistribution.threeStar * 100}%`}}></span>
                                    </div>
                                    <Rating rating={3} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{Math.round(ratings.ratingSummary.ratingDistribution.threeStar * 100)}%</span>
                                </div>
                                <div className="reviewSection-DetailedContainer-subContainers">
                                <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${ratings.ratingSummary.ratingDistribution.twoStar * 100}%`}}></span>
                                    </div>
                                    <Rating rating={2} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{Math.round(ratings.ratingSummary.ratingDistribution.twoStar * 100)}%</span>
                                </div>
                                <div className="reviewSection-DetailedContainer-subContainers">
                                <div className="reviewSection-bars">
                                        <span className="reviewSection-barInner" style={{width:`${ratings.ratingSummary.ratingDistribution.oneStar * 100}%`}}></span>
                                    </div>
                                    <Rating rating={1} className="CTopSection-Rating" />
                                    <span className="reviewSection-ratingPercentage">{ratings.ratingSummary.ratingDistribution.oneStar * 100}%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%' }}>
                        {ratings.allRatings && ratings.allRatings.map((reviewer,index) => reviewer.isApproved && (index < 3 && overFlow) && <ReviewCard key={reviewer.name+index} data={reviewer} />)}
                        {ratings.allRatings && ratings.allRatings.map((reviewer,index) => reviewer.isApproved && !overFlow && <ReviewCard key={reviewer.name+index} data={reviewer} />)}
                    {overFlow ? <div className="reviewSection-showMore" onClick={()=> setOverFlow(false)}>Show more <i className="fas fa-angle-down" style={{marginLeft: '0.2em'}}></i></div>: ratings.allRatings.length > 3 ? <div className="reviewSection-showMore" onClick={()=> setOverFlow(true)}>Show less <i className="fas fa-angle-up"  style={{marginLeft: '0.2em'}}></i></div>:<div/>}
                     
                    </div>
                </div>
            )
       

}
export default ReviewSection