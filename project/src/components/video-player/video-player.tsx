type VideoPlayerProp = {
  videoLink: string,
  previewImage: string,
}

const VideoPlayer = ({videoLink, previewImage}:VideoPlayerProp):JSX.Element => (
  <div className="video-player">
    <video src={videoLink} poster={previewImage} autoPlay muted width="280" height="175"></video>
  </div>
);

export default VideoPlayer;
