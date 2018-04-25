import React from 'react';
import VideoListItem from './VideoListItem';
import { Row, Col, ListGroup } from 'reactstrap';

const VideoList = (props) => {
   const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (    
        <Row>
            <Col md="4">
                <ul>
                    <ListGroup>
                        {videoItems}
                    </ListGroup>
                </ul>
            </Col>
        </Row>
    );
};

export default VideoList;