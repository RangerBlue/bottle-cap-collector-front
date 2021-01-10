import React from "react"
import VideoCard from "../components/videoCard"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"



function Mobile() {
    const linkCheckCap = "https://drive.google.com/file/d/1Qjx5_mtIxrMq5Y9FkODfdR5vmpEhMaJT/preview";
    const linkGallery = "https://drive.google.com/file/d/1i48-yNF8bUzClNdhz6lawkHexyiYVW_n/preview";
    const linkNoAdmin = "https://drive.google.com/file/d/1piIamlfwRR1p4VLg4GU28SsKhgJIAhXi/preview";
    const linkNoInternet = "https://drive.google.com/file/d/1fHmVHqxU--L27tNloqkYv6Q7_no3ZSA9/preview";
    const linkOutOfWork = "https://drive.google.com/file/d/1GvxRKI_BiMXXJu0oZFALBiOkL8f9F08H/preview";
    const linkWhatCapYouAre = "https://drive.google.com/file/d/1PPRMovZQICKTpza7sfzL66dLV4T6xo1a/preview";

    return (
        <div class="container">
            <Router>
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
                <Route path='/mobile/check' component={() => <VideoCard link={linkCheckCap} content={"check cap"} />} />
                <Route path='/mobile/whatcapyouare' component={() => <VideoCard link={linkWhatCapYouAre} content={"what cap you are"} />} />
                <Route path='/mobile/gallery' component={() => <VideoCard link={linkGallery} content={"gallery"} />} />
                <Route path='/mobile/account' component={() => <VideoCard link={linkNoAdmin} content={"account"} />} />
                <Route path='/mobile/internet' component={() => <VideoCard link={linkNoInternet} content={"internet"} />} />
                <Route path='/mobile/outofwork' component={() => <VideoCard link={linkOutOfWork} content={"outofwork"} />} />
            </Router>
        </div>


    )
}


export default Mobile