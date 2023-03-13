import React, { useState, useContext } from 'react';
import { scrollLeft } from '../service'
import Dots from '../../generic/dots/Dots'
import { useGetRequest } from '../../../service/api/ApiMethods'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

function Testmonials(props) {
    const [isButtonsDisabled, setIsButtonDisabled] = useState(false)
    // eslint-disable-next-line
    const [response, isLoading, error, cancelRequest] = useGetRequest('/statistics/testimonial');
    const {language} = useContext(LanguageStateContext)
    const onArrowButtonClicked = (button) => {
        setIsButtonDisabled(true)
        //to prevent user from double clicking 
        setTimeout(() => { setIsButtonDisabled(false) }, 1000);
        const scrollAmount = (button === 'Left') ? -290 : 290
        scrollLeft(document.getElementById('Testmonials-Container'), scrollAmount, 1000)

    }

    const renderTestmonialCards = () => {
         return response.map(elemnt =>
            <div key={elemnt.id} className="Testmonials-Card-Container">
                <img alt="TestmonialImg" className="Testmonials-Card-Image" src={elemnt.customerImageUrl} />
                <div className="Testmonials-Card-Main">
                    <h4 className="Testmonials-Card-H">{elemnt.customerName}</h4>
                    <p className="Testmonials-Card-SubH" dir='rtl' lang='ar'> {language.testmonialsGrad} {elemnt.courseName}</p>
                    <i className="fas fa-quote-left Testmonials-Card-Icon" />
                    <div className="Testimonials-card-TextContainer">
                    <p className="Testmonials-Card-Text">{elemnt.testimonial}</p>
                    </div>
                </div>
            </div>)
    }

    return (
        <div >
            {response && response.length > 0 ? <div>
            <span className="Testmonials-Title-Container">
            <h3 className="CourseSection-Title-H">{language.testemonials}</h3>
                <Dots className="CounterSection-Dots" size="4" color="#416aa6"/>
            </span>
            <div className="CourseSection-Main">
                <button className="CourseSection-Left-B" disabled={isButtonsDisabled} onClick={() => onArrowButtonClicked('Left')}><i className="fas fa-chevron-left" /></button>
                <div id="Testmonials-Container">
                    { renderTestmonialCards()}
                </div>
                <button className="CourseSection-Right-B" disabled={isButtonsDisabled} onClick={() => onArrowButtonClicked('Right')}><i className="fas fa-chevron-right" /></button>
            </div>
        </div>
        :
        <div/>}
        </div>
       
    );
}

export default Testmonials;