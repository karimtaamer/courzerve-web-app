import React, { createContext } from 'react'
import { english, getEnglishDynamicText } from "./english"
import { arabic, getArabicDynamicText } from "./arabic"

export const LanguageStateContext = createContext()


export const LanguageStateProvider = ({ match, children }) => {

    const windowUrl = window.location.pathname;
    const pathNames = windowUrl.split("/")
    const lng = pathNames[1]


    const language = (lng === 'ar' || !lng) ?  arabic : english
    const getDynamicText = (lng === 'ar' || !lng) ?  getArabicDynamicText : getEnglishDynamicText




    return (
        <LanguageStateContext.Provider value={{ language, getDynamicText }}>
            {children}
        </LanguageStateContext.Provider>
    )
}