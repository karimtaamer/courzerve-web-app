export const baseUrl = "https://courzerve.herokuapp.com"
const NO_INTERNET = "There seems to be a problem with the connection, refresh the page or try again later..."
const SERVER_ERROR = "Server error code: "
const UNKOWN_ERROR = "Something went wrong, try refreshing the page. If the issue presists please contact our customer support."

export function handleApiError(error) {
    var errorMessage=UNKOWN_ERROR
    if (error.message === 'Network Error') {
        return (NO_INTERNET)
    }
    const response = error.response
    if (!response) return (UNKOWN_ERROR)
    // var errorBackend=response.data.errors?response.data.errors[0]:"Unkown error"
    // errorBackend=`${errorBackend} ${response.config.url} ${response.config.method}`
    // sendWsError(`Backend: ${errorBackend}`,localStorage.getItem('email') || sessionStorage.getItem('email') || "no email")

    if (response){
         errorMessage=response.data.errors[0]
    } 
    const statusCode =  response.status
    const firstStatusChar = parseInt(statusCode / 100)
    if (firstStatusChar === 5) {
        return (`${SERVER_ERROR} /${statusCode}`)
    }
    if (statusCode === 404) {
        return (`${errorMessage} /${statusCode}`)
    }
    if (statusCode === 409) {
        return (`${errorMessage} /${statusCode}`)
    }
    if (statusCode === 400) {
        return (`${errorMessage} /${statusCode}`)
    }
    if (statusCode === 422) {
        return (`${errorMessage} /${statusCode}`)
    }
    if (statusCode === 403) {
        return (`${errorMessage} /${statusCode}`)
    }
    if (statusCode === 401) {
        return (`${errorMessage}`)
    }
    return (`${UNKOWN_ERROR} /${statusCode}`)
}
