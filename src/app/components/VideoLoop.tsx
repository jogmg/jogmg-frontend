export default function VideoLoop() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="video_loop"
      poster="images/bg-loop-fallback.webp"
    >
      <source src="/videos/background-loop.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
