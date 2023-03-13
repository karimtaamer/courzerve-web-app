import React from 'react'
// import ErrorDialog from '../../components/generic/error/ErrorDialog'
// import {sendWsError} from '../api/ApiMethods'
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }
    async componentDidCatch(error, errorinfo) {
        this.setState({
            hasError: true,
            error : error,
            errorInfo : errorinfo
        })
       
        // await sendWsError(error,window.location)
        // this.props.history.push('/')
        // window.location.reload()
    }

   

    render() {
        // if (this.state.hasError) {
        //     return (<div>
        //         {/* <ErrorDialog open={this.state.hasError} content="Oopes Error Has Occurred" handleClose={() => (this.props.history.push('/'))}></ErrorDialog> */}
        //     </div>)
        // }
        return this.props.children
    }
}
export default withRouter(ErrorBoundary);