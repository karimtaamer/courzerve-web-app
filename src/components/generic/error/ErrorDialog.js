import React, { useContext } from 'react'
import Modal from 'react-modal'
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

const ErrorDialog = (props) => {

    const {language} = useContext(LanguageStateContext)

    const onTryAgainClicked = () => {
       if(props.onTryAgain()) props.onTryAgain()
       else props.handleClose()

    }


    return (
        <Modal
            isOpen
            className="mainStatusdialog"
            onRequestClose={props.handleClose}
            style={{ overlay: { backgroundColor: 'rgba(167, 167, 167, 0.181)' } }}>
            <div className="dialog-mainDiv">
                <i className="fas fa-thumbs-down" style={{ color: 'red', fontSize: '2em', marginBottom: '0.8em' }}></i>
                <p className="dialog-content">{language.errorDialog}</p>
                <p className="dialog-content">{props.content}</p>
                <div style={{ marginTop: '1.3em' }}>
    <button className="errorbtn" style={{ borderRight: 'solid 1px rgba(167, 167, 167, 0.459)', borderRadius: '0 0 0 12px' }} onClick={() => { props.handleClose() }}>{language.errorDialogBtn[0]}</button>
    <button className="errorbtn" style={{ color: '#426AA7', borderRadius: '0 0 12px 0' }} onClick={() => onTryAgainClicked() }>{language.errorDialogBtn[1]}</button>
                </div>
            </div>
        </Modal>
    )

}
export default ErrorDialog