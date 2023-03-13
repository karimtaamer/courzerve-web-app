 import React from 'react'
import YouTube from 'react-youtube';
import Modal from 'react-modal'
import Loader from "react-loader-spinner";

const customStyles = {  
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : 'transparent',
      border                : 'none',

    }
  };

  

const Testvideo = (props) => {
    const opts = {
        height: '400',
        width: '600',
        playerVars: { 
          autoplay: 1
        }
      };
      const optsmobile = {
        height: '200',
        width: '300',
        playerVars: { 
          autoplay: 1
        }
      }
     function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
      }
      

    return(
        <Modal 
        isOpen={props.open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={props.handleClose}
        style={customStyles}>
     <span style={{marginBottom:'10px', position:'absolute' , top:'0px' , left: '0px'}}><i className="fas fa-times" style={{color:'black'}} onClick={() => {props.handleClose()}}/></span> 
     <span style={{position:'absolute', top: '30%', left:'35%', zIndex:'-60'}}>
      <Loader
            type="Oval"
            color="#416aa6"
            height={100}
            width={100}
            style={{ marginTop: "30px" }}
          />
      </span>
    <div style={{zIndex:'1000'}}>
<YouTube  
videoId={props.videoKey}
        opts={window.innerWidth >= 768 ? opts:optsmobile}
        onReady={(e) => _onReady(e)}></YouTube>
    </div>
    </Modal>
    )
}
export default Testvideo