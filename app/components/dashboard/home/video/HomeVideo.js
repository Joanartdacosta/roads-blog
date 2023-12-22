import { CldVideoPlayer } from "next-cloudinary";
// import { Video } from "cloudinary-react";

export default function HomeVideo() {
  const videoCar = "https://estradas-website.s3.amazonaws.com/Estradas/car.mp4";

  // const videoRoad =
  //   "https://estradas-website.s3.amazonaws.com/Estradas/road.mp4";

  const videoTrees =
    "https://estradas-website.s3.amazonaws.com/Estradas/floresta.mp4";

  // const videoLandscape =
  //   "https://estradas-website.s3.amazonaws.com/Estradas/road-landscape.mp4";

  return (
    // <div className="video">
    //   {" "}
    //   <video
    //     autoplay="autoplay"
    //     muted
    //     loop="loop"
    //     className="video object-cover w-screen h-screen fixed"
    //   >
    //     <source src={videoTrees} type="video/mp4" />
    //   </video>
    // </div>

    <div>
      <CldVideoPlayer width="1920" height="1080" src="floresta_gkomom" />
      {/* 
      <video
        autoPlay
        cloudName="dij4z66rp"
        publicId="floresta_gkomom"
        width="640"
        height="360"
        controls
      /> */}
    </div>
  );
}
