import React from "react"
import FooterLink from "../components/footerLink";
import TextSection from "../components/textSection"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import { useState } from "react";
import { AnimatedSwitch } from 'react-router-transition';

function API() {
    const [showMainContent, setShowMainContent] = useState([])
    const backendEndGithubLink = "https://github.com/RangerBlue/BottleCapCollector"
    const desc = "Spring Boot backend application repository"

    const apiContent =
        <div>
            The backend API was built in Spring Boot. It communicates with database through Spring 
            Data JPA and it is accessible via REST API for mobile application and website. OpenCV 
            library was used for image processing. Application is deployed to Heroku cloud platform.
        </div>
    const apiTittle = <div>Spring Boot</div>

    const securityTittle = "Spring Boot Security"
    const securityContent =
        <div>
            The application secures its sensitive endpoints. At this moment, it supports 
            only <i>ADMIN</i> role - the role that allows you to alter application database content.
        </div>

    const opencvTittle = "OpenCV 3.4.2"
    const opencvContent =
        <div>
            OpenCV was used in order to calculate images histograms, which is a core of similarity recognition in the system. 
            Comparison can be performed with 4 methods:
            <ul>
                <li>Correlation</li>
                <li>Chi-Square</li>
                <li>Intersection</li>
                <li>Bhattacharyya</li>
            </ul>
            Combined results of each method were adapted to create the application  <i>similarity model</i>. It is an entity presenting 
            the similarity distribution of a given cap, basing on the given bottle cap collection. For example:
            <pre>
                "similarityDistribution": <br />
                [
                    0,
                    0,
                    0,
                    2,
                    151,
                    131,
                    35,
                    11,
                    0,
                    0
                ],
            </pre>
            Value at index <i>n</i> means how many caps has similarity between <i>(0+10*n)%</i> and <i>(10+10*n)%</i>. In given example
            11 caps has similarity on level <i>70-80%</i>.
        </div>

    const herokuTittle = "Heroku Cloud Platform [Outdated as Heroku did not support free tier anymore]"
    const herokuContent =
        <div>
           The application was deployed to Heroku free tier, so this is the reason why the application is not accessible between certain 
           hours (Heroku free tier offers only limited number of hours per month). Another challenge was turning application to idle 
           state after few minutes without usage. This is why  <a href={"https://cron-job.org/"} target="_blank" rel="noopener noreferrer">
                https://cron-job.org/</a> was utilized to constantly ping the application and prevent it from “sleeping”.
        </div>

    const googleTittle = "Google Drive API"
    const googleContent =
        <div>
            The application is integrated with GoogleDrive, which allows you to easily add, remove or delete images. Google Drive also has a 
            function of an images storage. As Google does not explicitly share the method to provide url to drive images, I had to use  
            <i>thumbnailLink</i> field. This field contains a link to an image preview, which is small. After removing numbers after "=" sign 
            I got an access to full resolution image. <br /><br />
            For example:<br />
            <i>https://lh3.googleusercontent.com/Sy4NmhN1dNSVjOLB2gbixc85ZfVc_VklhMKKB6k49Qw-hfJjbJSnjHaXTnJGkj_c4<b>=w190</b></i> <br />
            After:<br />
            <i>https://lh3.googleusercontent.com/Sy4NmhN1dNSVjOLB2gbixc85ZfVc_VklhMKKB6k49Qw-hfJjbJSnjHaXTnJGkj_c4</i> <br /><br />
            Deleted numbers at the end stand for a number of pixels which the returned image should consist of. It was very useful for 
            optimization process – I could decide how big image I want to show just by changing numbers. The fact that it always returns a 
            square image does not matter as caps are circles (also symmetrical figures). Another challenge here was the link changing after 
            approximately 1 hour. This is why the application must refresh links several times a day.
        </div>

    return (
        <div class="container">
            <Router basename="/bottle-cap-collector-front">
                <nav class="navbar navbar-expand-xl justify-content-center" id="navBarMobile" onClick={() => setShowMainContent(false)}>
                    <NavLink to='/api/security' style={{ padding: 20 }} activeClassName="active">
                        SECURITY
                    </NavLink>
                    <NavLink to='/api/opencv' style={{ padding: 20 }} activeClassName="active">
                        OPENCV
                    </NavLink>
                    <NavLink to='/api/heroku' style={{ padding: 20 }} activeClassName="active">
                        HEROKU
                    </NavLink>
                    <NavLink to='/api/googledrive' style={{ padding: 20 }} activeClassName="active">
                        GOOGLE DRIVE
                    </NavLink>
                </nav>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 1 }}
                    atActive={{ opacity: 1 }}
                    transitionAppear={true}
                    className="switch-wrapper">
                    <Route path='/api/security' component={() => <TextSection tittle={securityTittle} text={securityContent} />} />
                    <Route path='/api/opencv' component={() => <TextSection tittle={opencvTittle} text={opencvContent} />} />
                    <Route path='/api/heroku' component={() => <TextSection tittle={herokuTittle} text={herokuContent} />} />
                    <Route path='/api/googledrive' component={() => <TextSection tittle={googleTittle} text={googleContent} />} />
                </AnimatedSwitch>
            </Router>
            {showMainContent ? <TextSection text={apiContent}
                tittle={apiTittle} /> : null}
            <FooterLink link={backendEndGithubLink} desc={desc}></FooterLink>
        </div>
    )
}


export default API