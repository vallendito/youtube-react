import React from 'react';
import { Col } from 'reactstrap';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading....</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(

                <Col md="8">
                    <div className="video-detail">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={url} />
                        </div>
                        <div className="details">
                            <div>{video.snippet.title}</div>
                            <div>{video.snippet.description}</div>
                        </div>
                    </div>
                </Col>
        
    );
}

export default VideoDetail;