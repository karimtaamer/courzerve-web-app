import React, {useContext} from 'react'
import Dots from '../../generic/dots/Dots'
import { useSpring, animated } from 'react-spring'
import {useGetRequest} from '../../../service/api/ApiMethods'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

const CounterSection = (props) => {
    // eslint-disable-next-line
    const [response, isLoading, error, cancelRequest]  = useGetRequest('/statistics/counter')
    const {language} = useContext(LanguageStateContext)
    const Counterprops = useSpring({ to : props.onShow && response && {first: response.numberOfGraduatedStudents, second: response.numberOfActiveRounds, third: response.numberOfCourses}, from: { first: 0, second: 0, third: 0}, delay:"600", config: {mass: 20, friction: 65, tension: 80} })


    // if(response){
    //     setCounterProps({ to :{first: response.numberOfGraduatedStudents, second: response.numberOfActiveRounds, third: response.numberOfCourses}, from: { first: 0, second: 0, third: 0}, delay:"1000", config: {mass: 20, friction: 45, tension: 30} })
    // }

    return(
        <div className="flexColumnCenterCenter CounterSection-mainContainer">
           <p className="CounterSection-Title">{language.landingPage.ourNumbers.Title}</p>
           <Dots className="CounterSection-Dots" size="4" color="white"/>

        <div className="CounterSection-mainCont">
           <div className="CounterSection-CounterContainer st">
           <i className="fas fa-user-graduate" style={{color:'#222222d8', fontSize:'2.8em', marginTop:'0.6em'}}></i>
    <animated.div className="CounterSection-Counter">{Counterprops.first.interpolate(val => Math.floor(val))}</animated.div>
           <p className="CounterSection-CounterTitle">{language.landingPage.ourNumbers.firstTitle}</p>
           </div>

           <div className="CounterSection-CounterContainer nd" >
           <i className="fas fa-book" style={{color:'rgba(255, 255, 255, 0.85)', fontSize:'2.8em', marginTop:'0.6em'}}></i>
           <animated.div className="CounterSection-Counter md" >{Counterprops.second.interpolate(val => Math.floor(val))}</animated.div>
           <p className="CounterSection-CounterTitle md">{language.landingPage.ourNumbers.secondTitle}</p>
           </div>

           <div className="CounterSection-CounterContainer rd">
           <i className="fas fa-user-graduate" style={{color:'#222222d8', fontSize:'2.8em', marginTop:'0.6em'}}></i>
           <animated.div className="CounterSection-Counter">{Counterprops.third.interpolate(val => Math.floor(val))}</animated.div>
           <p className="CounterSection-CounterTitle">{language.landingPage.ourNumbers.thirdTitle}</p>
           </div>

           </div>
        </div>
    )
}
export default CounterSection