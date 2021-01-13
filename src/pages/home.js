import React from "react"
import TextSection from "../components/textSection"
import FooterLink from "../components/footerLink";
import diagram from '../diagram.png';

const Home = () => {
    const frontEndGithubLink = "https://github.com/RangerBlue/bottle-cap-collector-front"
    const linkDesc = <div>React frontend application repository</div>
    const pageContent =
        <div>
            Welcome to <i>Bottle Cap Collector!</i> The page you are browsing now is written in React. Diagram below shows
            structure of the system and its components and how they are communicating. In the Mobile section you can find
            demonstration of Android mobile application. API section contains information about backend created in Spring Boot.
            Catalog presents all caps which I have collected so far, you can filter them out and click of the one you are
            interested in to see more details. In the footer you can find link to GitHub repository of given application.
        </div>
    const pageContentTittle = <div>BOTTLE CAP COLLECTOR PROJECT</div>

    return (
        <div class="container">
            <TextSection text={pageContent}
                tittle={pageContentTittle} />
            <img src={diagram} class="img-fluid"></img>
            <FooterLink link={frontEndGithubLink} desc={linkDesc}></FooterLink>
        </div>
    )
}


export default Home