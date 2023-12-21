import Video from "next-video";
import floresta from "/videos/floresta.mp4";

export default function HomeVideo() {
  // const videoCar = "https://estradas-website.s3.amazonaws.com/Estradas/car.mp4";

  // const videoRoad =
  //   "https://estradas-website.s3.amazonaws.com/Estradas/road.mp4";

  // const videoTrees =
  // "https://estradas-website.s3.amazonaws.com/Estradas/floresta.mp4";

  // const videoLandscape =
  //   "https://estradas-website.s3.amazonaws.com/Estradas/road-landscape.mp4";

  return (
    <div className="">
      {" "}
      <Video
        autoPlay="autoplay"
        muted
        loop="loop"
        playsInline
        controls={false}
        // loop="loop"
        className=" object-cover w-screen h-screen fixed"
      >
        <source src={floresta} type="video/mp4" />
      </Video>
    </div>
  );
}
