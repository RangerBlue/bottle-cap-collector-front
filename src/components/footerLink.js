import React from 'react'

const FooterLink = (props) => {
    return (
        <div class="mobile-footer">
            <div class="card-footer">
                <a href={props.link} role="button" class="btn btn-primary"
                    id="repository-button" target="_blank">GitHub</a>
                <div class="d-inline-block" id="button-desc">{props.desc}</div>
            </div>
        </div>
    )
};

export default FooterLink