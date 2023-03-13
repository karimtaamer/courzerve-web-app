import React from 'react';
import axios from 'axios'
import { baseUrl, handleApiError } from './ApiConfig'
import { useHistory } from "react-router-dom";
const username = 'admin'
const password = "340#n=|'f2f_(Ep"
var basicAuth = 'Basic ' + btoa(username + ':' + password);
axios.defaults.headers.common['Authorization'] = basicAuth


export const useGetRequest = (requestPath, headers, refactorMethod) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    // let history = useHistory();
    // const lng = window.location.pathname.split("/")[1]
    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(baseUrl + requestPath, headers);
                refactorMethod ? setResponse(refactorMethod(res.data)) : setResponse(res.data);
                setIsLoading(false)
            } catch (error) {
                setError(handleApiError(error));
            }
        };

        fetchData();
        // eslint-disable-next-line
    }, []);

    const cancelRequest = () => {
        setResponse(null)
        setError(null)
        setIsLoading(false)
    }
    return [response, isLoading, error, cancelRequest];
};


export const useOnDemandGetRequest = () => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const makeRequest = async (requestPath, refactorMethod, headers) => {
        setIsLoading(true);
        try {
            const res = await axios.get(baseUrl + requestPath, headers);
            refactorMethod ? setResponse(refactorMethod(res.data)) : setResponse(res.data);
            setIsLoading(false)
        } catch (error) {
            setError(handleApiError(error));
        }

    }
    const cancelRequest = () => {
        setResponse(null)
        setError(null)
        setIsLoading(false)
    }
    return [response, error, isLoading, makeRequest, cancelRequest];
};



export const usePostRequest = () => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const makeRequest = async (requestPath, requestData, refactorMethod, headers) => {
        setIsLoading(true);
        try {
            const res = await axios.post(baseUrl + requestPath, requestData, headers);
            refactorMethod ? setResponse(refactorMethod(res.data)) : setResponse(res.data);
            setIsLoading(false)
        } catch (error) {
            setError(handleApiError(error));
        }

    }
    const cancelRequest = () => {
        setResponse(null)
        setError(null)
        setIsLoading(false)
    }
    return [response, error, isLoading, makeRequest, cancelRequest];
};


export const usePutRequest = () => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const makeRequest = async (requestPath, requestData, refactorMethod, headers) => {
        setIsLoading(true);
        try {
            const res = await axios.put(baseUrl + requestPath, requestData, headers);
            refactorMethod ? setResponse(refactorMethod(res.data)) : setResponse(res.data);
            setIsLoading(false)
        } catch (error) {
            setError(handleApiError(error));
        }

    }
    const cancelRequest = () => {
        setResponse(null)
        setError(null)
        setIsLoading(false)
    }
    return [response, error, isLoading, makeRequest, cancelRequest];
};


export function sendWsError(error,path) {
    return new Promise((resolve, reject) => {
        axios.post(baseUrl + `/ws/error`, {error:`${path}==${error.message}`})
            .then(res => {
                resolve()
            })
            .catch(error => {
            //   console.log(error)
            })
    })
}