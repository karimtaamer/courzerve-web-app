import React, { useContext } from 'react'
import Modal from 'react-modal'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

const SuccessDialog = (props) => {

    const { language } = useContext(LanguageStateContext)

    return (
        <Modal
            className="mainStatusdialog"
            isOpen
            onRequestClose={props.handleClose}
            style={{ overlay: { backgroundColor: 'rgba(167, 167, 167, 0.181)' } }}>
            <div className="dialog-mainDiv">
                <i className="fas fa-thumbs-up" style={{ color: '#6DE0AB', fontSize: '2em', marginBottom: '0.6em' }}></i>
                <p className="dialog-content">{props.message || 'Your request has been submitted successfully!'}</p>
                <p className="dialog-content">{props.content}</p>
            <button className="successBtn" onClick={() => { props.handleClose() }}>{language.successDialogBtn}</button>
            </div>
        </Modal>
    )
}
export default SuccessDialog;