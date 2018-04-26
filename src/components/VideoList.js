import React from 'react';
import VideoListItem from './VideoListItem';
import { Container,Row, Col, ListGroup } from 'reactstrap';
import "../assets/style.css";

const VideoList = (props) => {
   const videoItems = props.videos.map((video) => {
        return <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    });

    return (    
        <Container>
            <Row>
                <Col md="6">
                    <ListGroup>
                        {videoItems}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default VideoList;