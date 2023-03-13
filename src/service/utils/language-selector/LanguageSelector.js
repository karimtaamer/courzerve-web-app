import React from 'react';


const windowUrl = window.location.pathname;
const pathNames = windowUrl.split("/")
const lng = pathNames[1]


const EnglishScss = React.lazy(() => import('./EnglishScss'));
const ArabicScss = React.lazy(() => import('./ArabicScss'));


const LanguageSelector: React.FC = ({ children }) => (
    <>
        <React.Suspense fallback={() => null}>
            {!lng && <ArabicScss />}
            {lng === 'en' && <EnglishScss />}
            {lng === 'ar' && <ArabicScss />}
        </React.Suspense>
        {children}
    </>
);

export default LanguageSelector;