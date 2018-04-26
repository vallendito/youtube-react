import React from 'react';
import { Container,Col,Row } from 'reactstrap';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading....</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <Container>
            <Row>
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
            </Row>
        </Container>
        
    );
}

export default VideoDetail;