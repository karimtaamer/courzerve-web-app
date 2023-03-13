import React, { useState } from 'react'
import firebase from '../../service/utils/Firebase';
import FileUploader from "react-firebase-file-uploader";
import Loader from 'react-loader-spinner'
import ErrorDialog from '../generic/error/ErrorDialog'

const FirebaseButton = ({storagePath,children,className,onSuccess,randomizeFilename}) => {
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)
    
   const handleUploadSuccess = filename => {
        firebase
          .storage()
          .ref(storagePath)
          .child(filename)
          .getDownloadURL()
          .then(url =>{
              setIsLoading(false)
            onSuccess(url, filename)
          } );
      };


    return (
        <label style={{display:'flex', justifyContent:'center'}} className={className} >
            {isError && <ErrorDialog handleClose={() => {setIsError(false)}} content="Please try again later"/>}
            {children}
            {isLoading && <Loader style={{marginLeft:'4px'}} type="Oval" color="#416aa6" height={13} width={13} />}
    <FileUploader
                hidden
                randomizeFilename={randomizeFilename}
                accept="*"
                storageRef={firebase.storage().ref(storagePath)}
                onUploadError={() => {setIsError(true)}}
                onUploadStart={()=>{setIsLoading(true)}}
                onUploadSuccess={handleUploadSuccess}
            />
        </label>
    )
}
export default FirebaseButton