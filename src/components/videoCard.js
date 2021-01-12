import React from 'react'

const VideoCard = (props) => {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" class="float-left" src={props.link} ></iframe>
                    </div>
                    <p class="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard