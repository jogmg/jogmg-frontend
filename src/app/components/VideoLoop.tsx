export default function VideoLoop() {
  return (
    <video autoPlay loop muted playsInline className="video-loop">
      <source src="/background-loop.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
