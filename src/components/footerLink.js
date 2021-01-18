import React from 'react'

const FooterLink = (props) => {
    return (
        <div class="mobile-footer">
            <div class="container"></div>
            <div class="card-footer">
            
                <a href={props.link} role="button" class="btn btn-primary"
                    id="repository-button" target="_blank" rel="noopener noreferrer">GitHub</a>
                <div class="d-inline-block" id="button-desc"><h6>{props.desc}</h6></div>
                {props.download ? <a href={props.download} role="button" class="btn btn-primary float-right"
                    id="download-button" target="_blank" rel="noopener noreferrer" >🠗</a> : null}            
            </div>
        </div>
    )
};

export default FooterLink