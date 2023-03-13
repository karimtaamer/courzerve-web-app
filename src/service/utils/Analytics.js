import React, { useEffect } from "react";
import ReactGA from "react-ga";


//HOC to track page views
export const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  
  };

  const HOC = props => {
    useEffect(() => trackPage(props.location.pathname), [
      props.location.pathname
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};


/* for the below section we have three params
requestStart: when the browser issues a request to get the webpage from the server
responsesStart: when the first byte of the website arrives
responseEnd: When the last byte of the website arrives*/


//latency is = responsesStart - requestStart
// export const initServerLatencyTest = () => {
//   const callback = list => {
//     list.getEntries().forEach(entry => {
//       console.log("Server Latency",entry.responseStart - entry.requestStart )
//       ReactGA.timing({
//         category: "Load Performace",
//         variable: 'Server Latency',
//         value: entry.responseStart - entry.requestStart 
//       })
//     })
//   }

//   var observer = new PerformanceObserver(callback);
//   observer.observe({ entryTypes: ['navigation'] })
//   console.log("initServerLatencyTest",observer)
// }


// //Download time is = requestStart - requestStart
// export const initDownloadTimeTest = () => {
//   const callback = list => {
//     list.getEntries().forEach(entry => {
//       console.log("DOWENLOAD TIME", entry.responseEnd - entry.responseStart)
//       ReactGA.timing({
//         category: "Load Performace",
//         variable: 'Download time',
//         value: entry.responseEnd - entry.responseStart
//       })
//     })
//   }

//   var observer = new PerformanceObserver(callback);
//   observer.observe({ entryTypes: ['navigation'] })
// }


// //Total app load time is = requestStart - requestStart
// export const initTotalAppLoadTimeTest = () => {
//   const callback = list => {
//     list.getEntries().forEach(entry => {
//       console.log("TOTAL APP LOAD TIME", entry.responseEnd - entry.requestStart)
//       ReactGA.timing({
//         category: "Load Performace",
//         variable: 'Total app load time',
//         value: entry.responseEnd - entry.requestStart
//       })
//     })
//   }

//   var observer = new PerformanceObserver(callback);
//   observer.observe({ entryTypes: ['navigation'] })
// }
