import React from "react"
import VideoCard from "../components/videoCard"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"



function Mobile() {
    const linkCheckCap = "https://drive.google.com/file/d/1Qjx5_mtIxrMq5Y9FkODfdR5vmpEhMaJT/preview";
    const checkCapText = "Check cap functionality allows to validate whether bottle cap you've got is " +
    "already part of your collection or not. Put your cap into circle in camera preview and take picture, "+
    "if picture you have just taken is not fine capture picture once again. If picture is fine similarity " +
    "raport will be preseented. To validate if bottle cap is duplicate you must check by yourself is it " +
    "one of the nine most similar listed below. Table next to picture of your cap show similarity distribution. "+ 
    "For example if 74 items are in 6-7 section it means that 74 caps of collection has similarity match between "+ 
    "60%-70% with your cap. If you decide to save your cap you must type its name which is most likely beverage "+
    "brand and description which is additional informations."

    const linkGallery = "https://drive.google.com/file/d/1i48-yNF8bUzClNdhz6lawkHexyiYVW_n/preview";
    const gallertText = "All caps sit under gallery. "+
    "You can see all of them in descending or ascending order by added date. "+
    "To see bigger picture and more information about cap you are interested in click on it. "+
    "If you have permissions you can edit name and description or delete given cap."

    const linkNoAdmin = "https://drive.google.com/file/d/1piIamlfwRR1p4VLg4GU28SsKhgJIAhXi/preview";
    const noAdminText = "As admin user you are allowed to perform updates, additions, deletions and views. "+
    "If you are not logged in you are restricted to view only functionalities. "+
    "You are allowed to do everything but altering cap gallery. "

    const linkNoInternet = "https://drive.google.com/file/d/1fHmVHqxU--L27tNloqkYv6Q7_no3ZSA9/preview";
    const noInterentText = "If your device doesn't have internet access app won't run. "

    const linkOutOfWork = "https://drive.google.com/file/d/1GvxRKI_BiMXXJu0oZFALBiOkL8f9F08H/preview";
    const outOfWorkText = "Backend API is not available between 00:15 and 10:05 thus application won't run during this time period."

    const linkWhatCapYouAre = "https://drive.google.com/file/d/1PPRMovZQICKTpza7sfzL66dLV4T6xo1a/preview";
    const whatCapYouAreText = "What cap you are allows you to find out to which cap from collection you are most "+
    "similiar. You need to use front camera at put your face in preview circle and take picture. Take picture once "+
    "again if you are not happy with taken picture. After submitting picture you will receive cap from collection " +
    "which is most similar to you. You can share results throught way you prefer."

    const githubLinkMobile = "https://github.com/RangerBlue/mBottleCapCollector"

    return (
        <div class="container">
            <Router basename ="/bottle-cap-collector-front">
                <nav class="navbar navbar-expand-xl justify-content-center" id="navBarMobile">
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
                </nav>
                <Route path='/mobile/check' component={() => <VideoCard link={linkCheckCap} content={checkCapText} />} />
                <Route path='/mobile/whatcapyouare' component={() => <VideoCard link={linkWhatCapYouAre} content={whatCapYouAreText} />} />
                <Route path='/mobile/gallery' component={() => <VideoCard link={linkGallery} content={gallertText} />} />
                <Route path='/mobile/account' component={() => <VideoCard link={linkNoAdmin} content={noAdminText} />} />
                <Route path='/mobile/internet' component={() => <VideoCard link={linkNoInternet} content={noInterentText} />} />
                <Route path='/mobile/outofwork' component={() => <VideoCard link={linkOutOfWork} content={outOfWorkText} />} />
            </Router>
            <div class="mobile-footer">
                <div class="card-footer">
                    <a href={githubLinkMobile} role="button" class="btn btn-primary btn-lg btn-block" 
                    id="repository-button" target="_blank">Android app repository</a>
                </div>
            </div>
            
        </div>


    )
}


export default Mobile