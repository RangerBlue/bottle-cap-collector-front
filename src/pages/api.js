import React from "react"
import FooterLink from "../components/footerLink";
import TextSection from "../components/textSection"

function API() {
    const backendEndGithubLink = "https://github.com/RangerBlue/BottleCapCollector"
    const desc = "Spring Boot backend application repository"

    return (
        <div class="container">
            <TextSection text="Lorem Ipsum is simply dummy text of the printing and typesetting industr"
                tittle="TITTLE" />
            <FooterLink link={backendEndGithubLink} desc={desc}></FooterLink>
        </div>
    )
}


export default API