import React from 'react'

const TextSection = (props) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.tittle}</h5>
                <div class="card-text">{props.text}</div>
            </div>
        </div>
    )
};

export default TextSection