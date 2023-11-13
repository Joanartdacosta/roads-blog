export default function GeneralBanner(props) {
  return (
    <div
      className="bg-auto bg-center bg-cover bg-norepeat w-full h-96 bg-gradient-to-r from-black to-transparent"
      style={{
        backgroundImage: props.imgUrl,
      }}
    >
      <div className="w-full text-center m-auto text-white pt-40">
        <h1 className="tracking-widest text-5xl">{props.section}</h1>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
}
