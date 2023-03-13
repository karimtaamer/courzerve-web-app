import React, { useState, useEffect, useContext } from 'react';
import Autosuggest from 'react-autosuggest';
import { useOnDemandGetRequest } from '../../../service/api/ApiMethods'
import Loader from 'react-loader-spinner'
import { withRouter } from 'react-router-dom'
import ReactGA from "react-ga";
import {LanguageStateContext} from '../../../service/utils/language/LanguageGlobalState'

function SearchAutoSuggest({ history }) {
    const [searchResponse, searchIsError, searchIsLoading, searchMakeRequest, cancelRequest] = useOnDemandGetRequest();
    const [suggestions, setSuggestions] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [value, setValue] = useState('')
    const {language} = useContext(LanguageStateContext)
    const lng = window.location.pathname.split("/")[1]

    useEffect(() => {
        const timeout = setTimeout(() => {
          setValue({ type: "CHANGE_INPUT", val: value });
        }, 2000)
    
        // if this effect run again, because `value` changed, we remove the previous timeout
        return () => clearTimeout(timeout)
      }, [value])

    function escapeRegexCharacters(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }



    function getSuggestions(value) {
        const escapedValue = escapeRegexCharacters(value.trim());
        setValue(escapeRegexCharacters(value.trim()))
        if (escapedValue === '') {
            return [];
        }

        searchMakeRequest(`/course/search`, null, { headers: { searchQuery: escapedValue } })

    }



    function renderSuggestion(suggestion) {

        return (
            <div className="LandingPage-Landing-Search-SuggestContainer">
                <img className="LandingPage-Landing-Search-img" alt="suggestion" src={suggestion.coursePhotoURL} />
                {suggestion.title}

            </div>
        );
    }

    return (
        <div className="LandingPage-Landing-Search-Input-Container">
            <Autosuggest
                suggestions={searchResponse || []}
                onSuggestionsFetchRequested={({ value }) => getSuggestions(value)}
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={suggestion => {
                    ReactGA.event({
                        category: `${suggestion.courseId} Events`,
                        action: 'Search enter'
                      });
                    history.push(`${lng}/course/${suggestion.courseId}`)}}
                renderSuggestion={renderSuggestion}
                inputProps={{
                    placeholder: `${language.landingPage.landingPageSearchPH}`,
                    value: inputValue,
                    onChange: (event, { newValue, method }) => {

                        setInputValue(newValue)

                    }
                }} />
            {searchResponse && searchResponse.message === "Could not find courses with the search query" ?
                <span className="LandingPage-Landing-Search-B"><i style={{color:"red"}} className="fas fa-exclamation-circle"></i>
                </span> :
                <span className="LandingPage-Landing-Search-B">
                    {!searchIsLoading ?
                        <i className="fas fa-search" /> :
                        <Loader
                            type="Oval"
                            color="#416aa6"
                            height={20}
                            width={20}
                        />}</span>}
        </div>
    );
}

export default withRouter(SearchAutoSuggest)