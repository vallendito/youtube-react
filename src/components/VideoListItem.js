import React from 'react';
import { ListGroupItem } from 'reactstrap';
import "../assets/style.css";

const VideoListItem = ({video}) => {
    // const video = props.video;
    const imgUrl = video.snippet.thumbnails.default.url;

    return (
        <ListGroupItem>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' alt='youtube' src={imgUrl}/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </ListGroupItem>
    )
};

export default VideoListItem;