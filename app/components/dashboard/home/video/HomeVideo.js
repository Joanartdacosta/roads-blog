export default function HomeVideo() {
  const videoCar = "https://estradas-website.s3.amazonaws.com/Estradas/car.mp4";

  // const videoRoad =
  //   "https://estradas-website.s3.amazonaws.com/Estradas/road.mp4";

  const videoTrees =
    "https://estradas-website.s3.amazonaws.com/Estradas/floresta.mp4";

  // const videoLandscape =
  //   "https://estradas-website.s3.amazonaws.com/Estradas/road-landscape.mp4";

  return (
    <div className="video">
      {" "}
      <video
        autoPlay="autoplay"
        muted
        loop="loop"
        className="video object-cover w-screen h-screen fixed"
      >
        <source src={videoTrees} type="video/mp4" />
      </video>
    </div>
  );
}
