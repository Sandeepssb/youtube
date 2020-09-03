import React from 'react';
import VideoItems from './VideoItems';

const VideoList=({videos,onVideoSelect})=>{
const RenderList=videos.map((video)=>{
    return <VideoItems key={video.id.VideoId} onVideoSelect={onVideoSelect} video={video} />
})
return <div className="ui relaxed divided list">{RenderList}</div>;
}

export default VideoList;