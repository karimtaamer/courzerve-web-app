import React, { useContext } from 'react';
import Dots from '../generic/dots/Dots'
import HandShake from '../../assets/icons/jobs/jobs-handshake.svg'
import Talent from '../../assets/icons/jobs/jobs-talent.svg'
import Clock from '../../assets/icons/jobs/jobs-clock.svg'
import Pencil from '../../assets/icons/jobs/jobs-pencil.svg'
import JobCard from './components/JobCard'
import { useGetRequest } from '../../service/api/ApiMethods'
import Loader from 'react-loader-spinner'
import {LanguageStateContext} from '../../service/utils/language/LanguageGlobalState'
import ErrorDialog from '../generic/error/ErrorDialog'
import {Helmet} from 'react-helmet'

function JobsPage(props) {
    const [response, isLoading, error, cancelRequest] = useGetRequest('/jobs');
    const {language} = useContext(LanguageStateContext)

    return (
        <div className="jobs-MainContainer">
            <Helmet>
            <title>Work with Courzerve</title>
            <meta name="description" content="a platform that offers live online courses in arabic." />
            </Helmet>
            {error && <ErrorDialog handleClose={() => {cancelRequest() }} content={language.errorText.text1}></ErrorDialog>}
            <div className="Jobs-UpperContainer">
            <h3 className="UpperContainer-title">{language.instructorJobsPage.pageTitle}</h3>
            </div>

            <div className="Jobs-Values-Container">
            <h3 className="main-title">{language.instructorJobsPage.firstTitle}</h3>
                <Dots width="2em" color="#416aa6" size="5" />
                <div  className="Jobs-Cards-Container">
                    <div className="Jobs-Values-Card-Container">
                        <div className="Jobs-Values-Card-Container-Border"></div>
                        <img className="Jobs-Values-Card-Image" src={HandShake} alt="Why Choose us" />
                        <p className="Jobs-Values-Card-Main-T">{language.instructorJobsPage.ourValues.firstPart.title}</p>
                        <p className="Jobs-Values-Card-Sub-T">{language.instructorJobsPage.ourValues.firstPart.discription}</p>
                    </div>

                    <div className="Jobs-Values-Card-Container">
                        <div className="Jobs-Values-Card-Container-Border2"></div>
                        <img className="Jobs-Values-Card-Image" src={Talent} alt="Why Choose us" />
                        <p className="Jobs-Values-Card-Main-T">{language.instructorJobsPage.ourValues.secondPart.title}</p>
                        <p className="Jobs-Values-Card-Sub-T">{language.instructorJobsPage.ourValues.secondPart.discription}</p>
                    </div>
                    <div className="Jobs-Values-Card-Container">
                        <div className="Jobs-Values-Card-Container-Border"></div>
                        <img className="Jobs-Values-Card-Image" src={Clock} alt="Why Choose us" />
                        <p className="Jobs-Values-Card-Main-T">{language.instructorJobsPage.ourValues.thirdPart.title}</p>
                        <p className="Jobs-Values-Card-Sub-T">{language.instructorJobsPage.ourValues.thirdPart.discription}</p>
                    </div>
                    <div className="Jobs-Values-Card-Container">
                        <img className="Jobs-Values-Card-Image" src={Pencil} alt="Why Choose us" />
                        <p className="Jobs-Values-Card-Main-T">{language.instructorJobsPage.ourValues.fourthPart.title}</p>
                        <p className="Jobs-Values-Card-Sub-T">{language.instructorJobsPage.ourValues.fourthPart.discription}</p>
                    </div>
                </div>

            </div>
            <div className="Jobs-Values-Container">
                <h3 className="main-title">{language.instructorJobsPage.secondTitle}</h3>
                <Dots width="2em" color="#416aa6" size="5" />
                {isLoading && <span style={{ marginTop: "2em" }}><Loader
                    type="Oval"
                    color="#416aa6"
                    height={80}
                    width={80}
                /></span>}

                {!isLoading && response && response.map((job, index)=><JobCard key={index} responsibilities={job.responsibilities} requirements={job.requirements} imageUrl={job.imageUrl} title={job.title} id={job.id}/>)}
            </div>
        </div>

    );
}

export default JobsPage;