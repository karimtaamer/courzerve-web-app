import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Switch, Route, Redirect } from 'react-router';
import LandingPage from './components/landing-page/LandingPage'
import NavBar from './components/generic/NavBar/NavBar'
// import Footer from './components/generic/footer/Footer'
import ContactUsPage from './components/generic/contactus-page/ContactUsPage';
import AboutUsPage from './components/generic/aboutus-page/AboutUs'
import JobsPage from './components/jobs-page/JobsPage'
import CoursePage from './components/course-page/CoursePage'
import InstructorPage from './components/insructor-page/InstructorPage'
import ErrorBoundary from './service/utils/ErrorBoundary'
 import AllCourses from './components/allcourses-page/AllCourses'
import NotFoundPage from './components/generic/NotFoundPage'
import SuccessPage from './components/generic/SuccessPage'
import { LanguageStateProvider } from './service/utils/language/LanguageGlobalState'
import { withTracker } from './service/utils/Analytics'
import {Helmet} from "react-helmet";
import ReviewPage from './components/reviewPage/ReviewPage'
import ChatBotBtn from './components/generic/chatbot/ChatBotBtn'
import { useHistory } from "react-router-dom";
ReactGA.initialize("UA-149916670-1",{ gaOptions: { siteSpeedSampleRate: 100 }});



function App() {

let history = useHistory()
  useEffect(() => {
    if(window.location.pathname === "/index.html") {
      history.push("/ar")
      window.location.reload()
    }
// eslint-disable-next-line
}, [])

  return (
    <div style={{ minHeight: "100vh" }}>
      <Helmet>
        <title>Courzerve</title>
        <meta name="description" content="The platform to find the course that fits your needs" />
      </Helmet>
      <ErrorBoundary>
        <LanguageStateProvider>
          <NavBar />
 <ChatBotBtn/>
          <Switch>
            <Route exact path='/' render={() => (<Redirect to="/ar" />)} />
            <Route exact path='/:lng' component={withTracker(LandingPage)} />
            <Route exact path='/:lng/contactus' component={withTracker(ContactUsPage)} />
            <Route exact path='/:lng/about' component={withTracker(AboutUsPage)} />
            <Route exact path='/:lng/jobs' component={withTracker(JobsPage)} />
            <Route exact path='/:lng/course/:id' component={withTracker(CoursePage)} />
            <Route exact path='/:lng/course/:id/reviews' component={withTracker(CoursePage)} />
            <Route exact path='/:lng/course/:id/apply' component={withTracker(CoursePage)} />
            <Route exact path='/:lng/instructor/:id' component={withTracker(InstructorPage)} />
             <Route exact path='/:lng/allcourses' component={withTracker(AllCourses)} /> 
            <Route exact path='/:lng/review/:id' component={withTracker(ReviewPage)}/>
            <Route exact path='/:lng/success/:id/:check' component={SuccessPage} />
            <Route component={withTracker(NotFoundPage)} />
          </Switch>

        </LanguageStateProvider>
      </ErrorBoundary>
    </div>

  );
}

export default App;
