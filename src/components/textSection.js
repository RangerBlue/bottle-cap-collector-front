import React from 'react'

const TextSection = (props) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.tittle}</h5>
                <p class="card-text">{props.text}</p>
            </div>
        </div>
    )
};

export default TextSection