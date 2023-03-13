import React, { useState, useContext } from 'react'
import Modal from 'react-modal'
import SuccessDialog from '../../../generic/success/SuccessDialog'
import ErrorDialog from '../../../generic/error/ErrorDialog'
import Loader from 'react-loader-spinner'
import { usePostRequest } from '../../../../service/api/ApiMethods'
import FirebaseButton from '../../../generic/FirebaseButton'
import {LanguageStateContext} from '../../../../service/utils/language/LanguageGlobalState'

const ApplyDialog = (props) => {
    const [data, setData] = useState({ "name": "", "email": "", "phoneNumber": "", "cvUrl": ""})
    const [response, error, isLoading, makeRequest, cancelRequest] = usePostRequest()
    const {language} = useContext(LanguageStateContext)
    const [errorDialog, setErrorDialog] = useState(false)
    const [isFieldEmpty, setIsFieldEmpty] = useState()


    const onInputChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        setData(data => { return { ...data, [id]: value } })
    }

    const onApplyClick = async () => {
        if (data.name && data.email && data.phoneNumber && data.cvUrl) {
            await makeRequest('/jobs/apply', data, null, { headers: { 'jobId': props.id } })
        }
        else {
            if (!data.name) setIsFieldEmpty("Name")
            else if (!data.email) setIsFieldEmpty("email")
            else if (!data.phoneNumber) setIsFieldEmpty("Phone number")
            else if (!data.cvUrl) setIsFieldEmpty("CV")
        }

    }

    return (
        <Modal
            isOpen
            className="applyDialog-overLay"
            onRequestClose={props.handleClose}
            style={{ overlay: { backgroundColor: 'rgba(167, 167, 167, 0.281)' } }}>

            {(error || errorDialog) && <ErrorDialog handleClose={() => { error ? cancelRequest() : errorDialog && setErrorDialog(false) }} content={error ? "Please try again later" : errorDialog && "Please provide your name and email before uploading the C.V."}></ErrorDialog>}
            {response && <SuccessDialog handleClose={() => { cancelRequest() }} />}
            <i className="far fa-times-circle applyDialog-CloseBtn" onClick={() => props.handleClose()}></i>
            <div className="applyDialog-mainContainer">
                <h2 className="applyDialog-Title">{language.instructorJobsPage.jobDialog.title}</h2>
                <h5 className="applyDialog-subtitle">{language.instructorJobsPage.jobDialog.subTitle}</h5>
                {isFieldEmpty && <p className="applyDialog-emptyField-message">* Please provide {isFieldEmpty}</p>}
                <h6 className="applyDialog-input-title">{language.instructorJobsPage.jobDialog.name}</h6>
                <input id="name" onChange={(e) => { onInputChange(e) }} className="applyDialog-input" />
                <h6 className="applyDialog-input-title">{language.instructorJobsPage.jobDialog.email}</h6>
                <input id="email" onChange={(e) => { onInputChange(e) }} className="applyDialog-input" />
                <h6 className="applyDialog-input-title">{language.instructorJobsPage.jobDialog.phoneNumber}</h6>
                <input id="phoneNumber" type="number" onChange={(e) => { onInputChange(e) }} className="applyDialog-input" />
                <h6 className="applyDialog-input-title">{language.instructorJobsPage.jobDialog.resume}</h6>
                <div className="applyDialog-Resume-input">
                    <FirebaseButton
                        randomizeFilename={false}
                        className="firebase-button"
                        storagePath={`/cvs/${data.name}-${data.email}`}
                        onSuccess={(url, filename) => {
                            !data.name && !data.email && setErrorDialog(true)
                            setData(data => { return { ...data, 'cvUrl': url, filename: filename } })
                        }}>Choose file</FirebaseButton> {data.filename ? data.filename : "No file included"}</div>
                <h6 className="applyDialog-input-title2">{language.instructorJobsPage.jobDialog.extraInfo}</h6>
                <textarea  className="applyDialog-inputbox" id="aboutYourself" rows="6" cols="40"s onChange={(e) => { onInputChange(e) }}></textarea>
                    {!isLoading ? <button className="applyDialog-Btn" onClick={() => { onApplyClick() }}>{language.applyBtn}</button> :
                    <Loader type="Oval" color="#416aa6" height={26} width={26} style={{ marginTop: "30px" }} />}
            </div>
        </Modal>
    )
}
export default ApplyDialog