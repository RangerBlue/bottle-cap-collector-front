import React from 'react'

const FooterLink = (props) => {
    return (
        <div class="mobile-footer">
            <div class="card-footer">
                <a href={props.link} role="button" class="btn btn-primary"
                    id="repository-button" target="_blank">GitHub</a>
                <p class="d-inline-block" id="button-desc">{props.desc}</p>
            </div>
        </div>
    )
};

export default FooterLink