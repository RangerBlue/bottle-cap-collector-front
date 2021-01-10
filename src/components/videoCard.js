import React from 'react'

const VideoCard = (props) => {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <iframe class="embed-responsive-item" class="float-left" src={props.link} width="304" height="512"></iframe>
                    <p class="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard