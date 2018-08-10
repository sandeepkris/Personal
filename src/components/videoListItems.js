import React from 'react';

export const VideoListItems = ({video, onVideoSelect}) => {
    // {video} implies const video = props.video;
    // const onVideoSelect=props.onVideoSelect;
    console.log(video);
  
    return (
        <li onClick={()=>{onVideoSelect(video)}} className='list-group-item'>
            <div className='video-list-media'>
                <div className='media-left'>
                    <img className='media-object' src={video.snippet.thumbnails.default.url}/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                        {/* props.video.snippet.title */}
                    </div>
                </div>
            </div> 
        </li>
    );
}

// export default VideoListItems;


