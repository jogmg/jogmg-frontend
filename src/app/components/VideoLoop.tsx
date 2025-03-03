export default function VideoLoop() {
  return (
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      className="video-loop"
    >
      <source src="/background-loop.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
