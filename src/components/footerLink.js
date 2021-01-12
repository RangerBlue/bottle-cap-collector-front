import React from 'react'

const FooterLink = (props) => {
    return (
        <div class="mobile-footer">
                <div class="card-footer">
                    <a href={props.link} role="button" class="btn btn-primary btn-lg btn-block" 
                    id="repository-button" target="_blank">{props.buttonText}</a>
                </div>
            </div>
    )
};

export default FooterLink