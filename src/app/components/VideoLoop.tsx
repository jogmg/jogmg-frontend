export default function VideoLoop() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="video-loop"
      poster="images/bg-loop-fallback.webp"
    >
      <source src="/background-loop.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
