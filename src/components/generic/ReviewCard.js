import React from 'react'
import Rating from './Rating'

const ReviewCard = ({data}) => {
 
    return(
        <div className="Reviewcard-mainContainer">
            <div className="ReviewCard-topContainer">
            {data.imageUrl ? <img alt="CustImg" className="ReviewCard-img" src={data.imageUrl}/> :  
               <span className="reviewCard-Avatar">{capitalizeName(data.name)}</span>}
                <span className="ReviewCard-reviewerInfo">
                    <span className="reviewCard-flexRow">
                    <p className="ReviewCard-reviewerName">{data.name}</p>
                    <Rating dark  rating={data.rating} className="CTopSection-Rating"/>
                    </span>
    
                </span>
            </div>
            <p className="ReviewCard-reviewerText">
               {data.review}
            </p>
        </div>
    )
}
export default ReviewCard;

export function capitalizeName(name) {
     if (!name) return
    var namearry = name.split(" ")
    var newCapitalName = ""
    namearry.forEach((x, index) => {
        if(index < 2) newCapitalName = newCapitalName + " " + x.charAt(0).toUpperCase() 
    })

    return (newCapitalName)
}