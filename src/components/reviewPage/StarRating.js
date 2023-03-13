import React, {useState} from 'react'

const StarRating = ({ratingBack}) => {
const [rating,setRating] = useState(0)

    const Rating = (e) => {
       setRating(e)
        ratingBack(e)
    }


    return(
<div>
    <span  onClick={() => Rating(1)}>{rating>=1 ? <i className="fas fa-star" style={{color:"#416aa6",fontSize:'1.5em'}}></i>:<i className="far fa-star" style={{fontSize:'1.5em'}}></i>}</span>
    <span  onClick={() => Rating(2)}>{rating>=2 ? <i className="fas fa-star" style={{color:"#416aa6",fontSize:'1.5em', marginLeft:'0.3em'}}></i>:<i className="far fa-star" style={{fontSize:'1.5em', marginLeft:'0.3em'}}></i>}</span>
    <span  onClick={() => Rating(3)}>{rating>=3 ? <i className="fas fa-star" style={{color:"#416aa6",fontSize:'1.5em', marginLeft:'0.3em'}}></i>:<i className="far fa-star" style={{fontSize:'1.5em', marginLeft:'0.3em'}}></i>}</span>
    <span  onClick={() => Rating(4)}>{rating>=4 ? <i className="fas fa-star" style={{color:"#416aa6",fontSize:'1.5em', marginLeft:'0.3em'}}></i>:<i className="far fa-star" style={{fontSize:'1.5em', marginLeft:'0.3em'}}></i>}</span>
    <span  onClick={() => Rating(5)}>{rating>=5 ? <i className="fas fa-star" style={{color:"#416aa6",fontSize:'1.5em', marginLeft:'0.3em'}}></i>:<i className="far fa-star" style={{fontSize:'1.5em', marginLeft:'0.3em'}}></i>}</span>
</div>
    )
}
export default StarRating