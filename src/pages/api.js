import React from "react"
import FooterLink from "../components/footerLink";
import TextSection from "../components/textSection"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import { useState } from "react";
import APISection from "../components/apiSection";
import DataModel from "../components/datamodel";

function API() {
    const [showMainContent, setShowMainContent] = useState([])
    const backendEndGithubLink = "https://github.com/RangerBlue/BottleCapCollector"
    const desc = "Spring Boot backend application repository"

    const apiContent =
        <div>
            Backend API was build in Spring Boot. It is communicating with database through Spring Data JPA and
            it is accessible via REST API for mobile application and website. OpenCV library was used for image
            processing. Application is deployed to Heroku cloud platform.
        </div>
    const apiTittle = <div>Spring Boot</div>

    const bottleCapItems = [
        { tittle: 'CAP' },
        { elem: 'ID, PRIMARY KEY, BIGINT' },
        { elem: 'CAP_NAME, VARCHAR' },
        { elem: 'COLS, INTEGER' },
        { elem: 'CREATION_DATE, TIMESTAMP' },
        { elem: 'DATA, BLOB' },
        { elem: 'DESCRIPTION, VARCHAR' },
        { elem: 'FILE_LOCATION, VARCHAR' },
        { elem: 'GOOGLE_DRIVEID, VARCHAR' },
        { elem: 'INTERSECTION_VALUE, DOUBLE' },
        { elem: 'LAST_PREVIEW_LINK_UPDATE, TIMESTAMP' },
        { elem: 'ROWS, INTEGER' }
    ];
    const comparisonRangeItems = [
        { tittle: 'COMPARISON_RANGE' },
        { elem: 'ID, PRIMARY KEY, INTEGER' },
        { elem: 'MAX_VALUE, DOUBLE' },
        { elem: 'METHOD_NAME, VARCHAR' },
        { elem: 'MIN_VALUE, DOUBLE' },
    ]

    const usersItems = [
        { tittle: 'USERS' },
        { elem: 'USERNAME, PRIMARY KEY, VARCHAR' },
        { elem: 'PASSWORD, DOUBLE' },
        { elem: 'ENABLED, VARCHAR' }
    ]

    const authoritiesItems = [
        { tittle: 'AUTHORITIES' },
        { elem: 'USERNAME, FOREIGN KEY to USERS, VARCHAR' },
        { elem: 'AUTHORITY, VARCHAR' },
    ]

    const datamodelContent =
        <div>
            {<DataModel items={bottleCapItems} />}
            <br />
            {<DataModel items={comparisonRangeItems} />}
            <br />
            {<DataModel items={usersItems} />}
            <br />
            {<DataModel items={authoritiesItems} />}
            <br />
            PostgreSQL was used as database, production server was launched in Heroku Cloud Platform.
        </div>
    const datamodelTittle = "Database model in application consists of 4 tables:"

    const securityTittle = "Spring Boot Security"
    const securityContent =
        <div>
            Application secures its sensitive endpoints. At this moment it supports only <i>ADMIN</i> role -
            only role which allow to alter application database content.
        </div>

    const opencvTittle = "OpenCV 3.4.2"
    const opencvContent =
        <div>
            OpenCV was used in order to calculating images histograms, which is core of similarity recognition
            in system. Comparision can be performed against 4 methods:
            <ul>
                <li>Correlation</li>
                <li>Chi-Square</li>
                <li>Intersection</li>
                <li>Bhattacharyya</li>
            </ul>
            Combined results of results adapted for creation of applicatio <i>similarity model</i> - entity which
            presents how similarity of given cap is distributed. For example :
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
        </div>

    const herokuTittle = "Heroku Cloud Platform"
    const herokuContent =
        <div>
            Application was deployed to Heroku, the reason why it is not accessible bewtween certain hours is that free tier
            was selected and it offers only limited amount of hours per months. Second disadventage is turning application to
            idle state after few minutes of not using it. That is why <a href={"https://cron-job.org/"} target="_blank">
                https://cron-job.org/</a> was utilized to constantly ping application and prevent it for sleeping.
        </div>

    const googleTittle = "Google Drive API"
    const googleContent =
        <div>
            Application is integrated with GoogleDrive, it allows to easily add, remove or delete images. Google Drive also
            has function of image storage. As Google doesn't explicitly share method to provide url to drive images we have to
            use <i>thumbnailLink</i> field. This field contains link to image preview which is small. After removing numbers after
            "=" sign we have access to full resolution image. <br /><br />
            For example:<br />
            <i>https://lh3.googleusercontent.com/Sy4NmhN1dNSVjOLB2gbixc85ZfVc_VklhMKKB6k49Qw-hfJjbJSnjHaXTnJGkj_c4<b>=w190</b></i> <br />
            After:<br />
            <i>https://lh3.googleusercontent.com/Sy4NmhN1dNSVjOLB2gbixc85ZfVc_VklhMKKB6k49Qw-hfJjbJSnjHaXTnJGkj_c4</i> <br /><br />
            Deleted numbers at the end stand for amount of pixels which returned image should contain. Provided amount of pixels
            allows to decide how big image we want - which was very usefull for optimization purposes. The fact that it always return
            square image when we provide pixels part doesn't matter as caps are circles. The second disadventage is the link
            change after approximately 1 hour. That is why application must refreshes links several times at day.
        </div>

    return (
        <div class="container">
            <Router basename="/bottle-cap-collector-front">
                <nav class="navbar navbar-expand-xl justify-content-center" id="navBarMobile" onClick={() => setShowMainContent(false)}>
                    <NavLink to='/api/endpoints' style={{ padding: 20 }} exact activeClassName="active">
                        ENDPOINTS
                    </NavLink>
                    <NavLink to='/api/datamodel' style={{ padding: 20 }} activeClassName="active">
                        DATA MODEL
                    </NavLink>
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
                <Route path='/api/endpoints' component={() => <APISection />} />
                <Route path='/api/datamodel' component={() => <TextSection tittle={datamodelTittle} text={datamodelContent} />} />
                <Route path='/api/security' component={() => <TextSection tittle={securityTittle} text={securityContent} />} />
                <Route path='/api/opencv' component={() => <TextSection tittle={opencvTittle} text={opencvContent} />} />
                <Route path='/api/heroku' component={() => <TextSection tittle={herokuTittle} text={herokuContent} />} />
                <Route path='/api/googledrive' component={() => <TextSection tittle={googleTittle} text={googleContent} />} />
            </Router>
            {showMainContent ? <TextSection text={apiContent}
                tittle={apiTittle} /> : null}
            <FooterLink link={backendEndGithubLink} desc={desc}></FooterLink>
        </div>
    )
}


export default API