import React from 'react';
import {VideoListItems} from './videoListItems'

export class VideoList extends React.Component {
 
    render() {
        console.log(this.props.onVideoSelect);
        const videoItems = this.props.videos.map((video) => {
            return (<VideoListItems
                onVideoSelect={this.props.onVideoSelect}
                key={video.etag} 
                video={video} />
            );
        })
        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
    }

}