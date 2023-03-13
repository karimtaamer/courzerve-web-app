import React from 'react'
import Modal from 'react-modal'

const  SucessPage = ({Content, handleClose}) => {

    return(
        <Modal
            className="mainStatusdialog"
            isOpen
            onRequestClose={handleClose}
            style={{ overlay: { backgroundColor: 'rgba(167, 167, 167, 0.181)' }, width:'6em', padding:'0px'}}>
        <div className="dialog-mainDiv" style={{height:'16em', margin:'0px', marginTop:'-10px'}}>
             <i className="far fa-times-circle applyDialog-CloseBtn" style={{marginTop:'12px', color:'black'}} onClick={() => handleClose()}></i>
                <div className="wave"><i className="far fa-question-circle innerInfoImg"></i></div>
             <p className="infoDialogContent" style={{margin:'2em 2.2em auto 2.2em'}}>{Content}</p>
        </div>
        </Modal>
    )
}
export default SucessPage;