import React, { useState, useContext } from 'react'
import Modal from 'react-modal'
import SuccessDialog from '../../generic/success/SuccessDialog'
import ErrorDialog from '../../generic/error/ErrorDialog'
import Loader from 'react-loader-spinner'
import { LanguageStateContext } from '../../../service/utils/language/LanguageGlobalState'
import { usePostRequest } from '../../../service/api/ApiMethods'

const InterestedDialog = (props) => {
    const [data, setData] = useState({ "name": "", "email": "", "phoneNumber": "" })
    const [response, error, isLoading, makeRequest, cancelRequest] = usePostRequest()
    const { language } = useContext(LanguageStateContext)
    const [errorDialog, setErrorDialog] = useState(false)
    const [isFieldEmpty, setIsFieldEmpty] = useState()

    const onInputChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        setData(data => { return { ...data, [id]: value } })
    }

    const onApplyClick = async () => {
        data.title = props.courseTitle
        if (data.name && data.email && data.phoneNumber && data.title) {
            await makeRequest('/survey', data)
        }
        else {
            if (!data.name) setIsFieldEmpty("Name")
            else if (!data.email) setIsFieldEmpty("email")
            else if (!data.phoneNumber) setIsFieldEmpty("Phone number")
        }

    }

    return (
        <Modal
            isOpen
            className="interestedDialog-overLay"
            onRequestClose={props.handleClose}
            style={{ overlay: { backgroundColor: 'rgba(167, 167, 167, 0.281)' } }}>

            {errorDialog && <ErrorDialog handleClose={() => { error ? cancelRequest() : errorDialog && setErrorDialog(false) }} content={error ? "Please try again later" : errorDialog && "Please provide your name and email before uploading the C.V."}></ErrorDialog>}
            {response && <SuccessDialog handleClose={() => {
                cancelRequest()
                props.handleClose()
            }} />}
            <i className="far fa-times-circle applyDialog-CloseBtn" onClick={() => props.handleClose()}></i>
            <div className="applyDialog-mainContainer">
                <h2 className="applyDialog-Title">{props.courseTitle}</h2>
                <h5 style={{ textAlign: "center" }} className="applyDialog-subtitle">{language.interestedDialog.subTitle}</h5>
                {isFieldEmpty && <p className="applyDialog-emptyField-message">* Please provide {isFieldEmpty}</p>}
                <h6 className="applyDialog-input-title">{language.instructorJobsPage.jobDialog.name}</h6>
                <input id="name" onChange={(e) => { onInputChange(e) }} className="applyDialog-input" />
                <h6 className="applyDialog-input-title">{language.instructorJobsPage.jobDialog.email}</h6>
                <input id="email" onChange={(e) => { onInputChange(e) }} className="applyDialog-input" />
                <h6 className="applyDialog-input-title">{language.instructorJobsPage.jobDialog.phoneNumber}</h6>
                <input id="phoneNumber" type="number" onChange={(e) => { onInputChange(e) }} className="applyDialog-input" />
                {!isLoading ? <button style={{ marginBottom: "1em" }} className="applyDialog-Btn" onClick={() => { onApplyClick() }}>I am interested</button> 
                    : <Loader type="Oval" color="#416aa6" height={26} width={26} style={{ marginTop: "30px" }} />}
            </div>
        </Modal>
    )
}
export default InterestedDialog