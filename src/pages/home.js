import React from "react"
import TextSection from "../components/textSection"
import FooterLink from "../components/footerLink";
import diagram from '../pictures/diagram.png';

const Home = ({totalAmount}) => {
    const frontEndGithubLink = "https://github.com/RangerBlue/bottle-cap-collector-front"
    const linkDesc = <div>React frontend application repository</div>
    const pageContent =
        <div>
            Welcome to <i>Bottle Cap Collector!</i> The page you are seeing now is written in React. Below you can 
            find a diagram that shows the structure of the system and its components, with relations between them. 
            In the Mobile section, you can see a demonstration of the Android mobile application. The API section 
            contains information about backend created in Spring Boot. The Catalog presents all caps, which I have 
            collected so far, you can filter them out or click on the one you are interested in to see more details. 
            In the footer, you can find a link to the GitHub repository of the application. The system was created 
            to fulfill personal needs – to maintain a big collection of bottle caps and to be a playground for 
            learning new technologies and obtaining certification.
            <br></br>
            <br></br>
            At this moment the collection contains <b>{totalAmount}</b> bottle caps.
        </div>
    const pageContentTittle = <div>BOTTLE CAP COLLECTOR PROJECT</div>


    return (
        <div class="container">
            <TextSection text={pageContent}
                tittle={pageContentTittle} />
            <img src={diagram} class="img-fluid" alt="diagram"></img>
            <FooterLink link={frontEndGithubLink} desc={linkDesc}></FooterLink>
        </div>
    )
}


export default Home