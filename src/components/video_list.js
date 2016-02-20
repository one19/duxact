import React from 'react';

import VideoCard from 'root/src/components/video_card'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoCard
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;