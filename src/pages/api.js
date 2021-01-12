import React from "react"
import FooterLink from "../components/footerLink";
import TextSection from "../components/textSection"

function API() {
    const backendEndGithubLink = "https://github.com/RangerBlue/BottleCapCollector"
    const buttonText = "Spring Boot backend application repository"

    return (
        <div class="container">
            <TextSection text="Lorem Ipsum is simply dummy text of the printing and typesetting industr"
                tittle="TITTLE" />
            <FooterLink link={backendEndGithubLink} buttonText={buttonText}></FooterLink>
        </div>
    )
}


export default API