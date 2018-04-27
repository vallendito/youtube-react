import React from 'react';
import VideoListItem from './VideoListItem';
import { Col } from 'reactstrap';

const VideoList = (props) => {
   const videoItems = props.videos.map((video) => {
        return <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    });

    return (    

        <Col md="8">
                {videoItems}
        </Col>

    );
};

export default VideoList;