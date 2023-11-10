export default function GeneralBanner(props) {
  return (
    <div
      className="bg-auto bg-center bg-norepeat backdrop-blur-md backdrop-blur-md w-full h-96"
      style={{
        backgroundImage: props.imgUrl,
      }}
    >
      <h1 className="tracking-widest text-5xl absolute">{props.section}</h1>
      <p className="text-sm absolute">{props.description}</p>
    </div>
  );
}
