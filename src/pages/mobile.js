import React from "react"
import VideoCard from "../components/videoCard"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import FooterLink from "../components/footerLink";
import { useState } from "react"
import TextSection from "../components/textSection"

function Mobile() {
    const [showMainContent, setShowMainContent] = useState([])
    const linkCheckCap = "https://drive.google.com/file/d/1Qjx5_mtIxrMq5Y9FkODfdR5vmpEhMaJT/preview";
    const checkCapText =
        <div>
            <i>Check cap</i> functionality allows you to validate whether a bottle cap you have is already a part
            of your collection. Put your cap into a circle in the camera preview and take a picture. If the image
            is not fine, you can try again. When the picture is fine, proceed to see a similarity report. The report
            shows you images of nine caps, which are the most similar to the one you photographed. The final decision
            is yours. To clear your doubts, there is a similarity distribution table next to the picture of your cap.
            The number under each section represents the number of caps in the given similarity range (the green 9-10
            range means the highest similarity; the red 0-1 range is the lowest). For a duplicated bottle cap there
            should be at least 1 under the most green sections. If you decide to save your cap, you must type in its
            name (most likely the beverage brand) and a description with some additional information.
        </div>

    const linkGallery = "https://drive.google.com/file/d/1i48-yNF8bUzClNdhz6lawkHexyiYVW_n/preview";
    const gallertText =
        <div>
            You can always see your whole caps collection under the <i>Gallery</i>. Put your bottle caps in a descending
            or ascending order; sort them by the date they were added. Click on a chosen cap to see a bigger picture and
            more information. If you have proper permissions you can edit the name and the description or even delete the
            given cap.
        </div>

    const linkNoAdmin = "https://drive.google.com/file/d/1piIamlfwRR1p4VLg4GU28SsKhgJIAhXi/preview";
    const noAdminText =
        <div>
            As an admin user, you are allowed to perform updates, additions and deletions. Without the account, you are restricted 
            to only view the functionalities – you cannot alter the bottle cap collection.
        </div>

    const linkNoInternet = "https://drive.google.com/file/d/1fHmVHqxU--L27tNloqkYv6Q7_no3ZSA9/preview";
    const noInterentText =
        <div>
            If your device does not have an Internet access, the application will not run.
        </div>

    const linkOutOfWork = "https://drive.google.com/file/d/1GvxRKI_BiMXXJu0oZFALBiOkL8f9F08H/preview";
    const outOfWorkText =
        <div>
            Backend API is not available between 00:15 and 07:00 thus application will not run during this time.
        </div>

    const linkWhatCapYouAre = "https://drive.google.com/file/d/1PPRMovZQICKTpza7sfzL66dLV4T6xo1a/preview";
    const whatCapYouAreText =
        <div>
            <i>What cap you are</i> is a fun functionality to figure out which bottle cap in your collection is the most
            similar to your own face. You need to use the front camera. Put your face in the preview circle and take a shot.
            If you are not happy with the picture, you can always try again. If the photo is fine, submit it. You will
            receive an image of a bottle cap that is the most similar to your photo. Share the results with friends via
            Messenger, Instagram or any usual way you like, or save it on your Google Drive.
        </div>

    const linkSettings = "https://drive.google.com/file/d/1rzGqftQGJXAROcMCtGH7rifvFaVcpGGZ/preview";
    const settingsText =
        <div>
            If an image you have just taken does not look correctly and it seems to be rotated you should switch on 
            the <i>rotate image</i> option. It allows application to rotate picture to position as it has been seen in the preview.
            On different devices the orientation of a captured picture is stored in a different way - to access it we must save 
            the picture first and read tags with <i>ExifInterface </i> class. As no image is saved in the device storage in the 
            application, we must deal with it manually.
        </div>    

    const githubLinkMobile = "https://github.com/RangerBlue/mBottleCapCollector"
    const desc = "Android mobile application repository"
    const downloadLink = "https://drive.google.com/file/d/1sFWvBFz8N2KjqK-XCCxseqVd56ooSgsO/view?usp=sharing"

    const mobileTittle = "Android";
    const mobileDescprition =
        <div>
            Mobile application was built for Android System. It communicates with backend via REST API. This app is an entry 
            point for maintaining content of the cap collection. A user should use it to capture pictures of bottle caps. 
            A target version of the project is <i>28</i>. There were two libraries used during development:
            <ul>
                <li>Retrofit - HTTP client for Android,</li>
                <li>Picasso - displaying images.</li>
            </ul>
        </div>

    return (
        <div class="container">
            <Router basename="/bottle-cap-collector-front">
                <nav class="navbar navbar-expand-xl justify-content-center" id="navBarMobile" onClick={() => setShowMainContent(false)}>
                    <NavLink to='/mobile/check' style={{ padding: 20 }} exact activeClassName="active">
                        CHECK CAP
                    </NavLink>
                    <NavLink to='/mobile/whatcapyouare' style={{ padding: 20 }} activeClassName="active">
                        WHAT CAP YOU ARE
                    </NavLink>
                    <NavLink to='/mobile/gallery' style={{ padding: 20 }} activeClassName="active">
                        GALLERY
                    </NavLink>
                    <NavLink to='/mobile/account' style={{ padding: 20 }} activeClassName="active">
                        ACCOUNT
                    </NavLink>
                    <NavLink to='/mobile/internet' style={{ padding: 20 }} activeClassName="active">
                        INTERNET ACCESS
                    </NavLink>
                    <NavLink to='/mobile/outofwork' style={{ padding: 20 }} activeClassName="active">
                        OUT OF WORK
                    </NavLink>
                    <NavLink to='/mobile/settings' style={{ padding: 20 }} activeClassName="active">
                        SETTINGS
                    </NavLink>
                </nav>
                <Route path='/mobile/check' component={() => <VideoCard link={linkCheckCap} content={checkCapText} />} />
                <Route path='/mobile/whatcapyouare' component={() => <VideoCard link={linkWhatCapYouAre} content={whatCapYouAreText} />} />
                <Route path='/mobile/gallery' component={() => <VideoCard link={linkGallery} content={gallertText} />} />
                <Route path='/mobile/account' component={() => <VideoCard link={linkNoAdmin} content={noAdminText} />} />
                <Route path='/mobile/internet' component={() => <VideoCard link={linkNoInternet} content={noInterentText} />} />
                <Route path='/mobile/outofwork' component={() => <VideoCard link={linkOutOfWork} content={outOfWorkText} />} />
                <Route path='/mobile/settings' component={() => <VideoCard link={linkSettings} content={settingsText} />} />
            </Router>
            {showMainContent ? <TextSection text={mobileDescprition}
                tittle={mobileTittle} /> : null}
            <FooterLink link={githubLinkMobile} desc={desc} download = {downloadLink}></FooterLink >
        </div>
    )
}
export default Mobile