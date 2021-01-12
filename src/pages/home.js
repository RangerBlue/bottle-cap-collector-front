import React from "react"
import TextSection from "../components/textSection"
import FooterLink from "../components/footerLink";

const Home = () => {
    const frontEndGithubLink = "https://github.com/RangerBlue/bottle-cap-collector-front"
    const buttonText = "React frontend application repository"

    return (
        <div class="container">
            <TextSection text="Lorem Ipsum is simply dummy text of the printing and typesetting industr"
                tittle="TITTLE" />
            <FooterLink link={frontEndGithubLink} buttonText={buttonText}></FooterLink>
        </div>

    )
}


export default Home