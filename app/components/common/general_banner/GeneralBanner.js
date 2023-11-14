export default function GeneralBanner(props) {
  return (
    <div className="bg-gradient-to-tr from-neutral-700 to-neutral-700 h-96 w-full relative">
      <img
        src={props.imgUrl}
        alt={props.title}
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <div className="w-full text-center m-auto p-24">
        <h1 className="tracking-widest text-5xl text-white relative font-extrabold overline decoration-1">
          {props.section}
        </h1>
        <p className="text-sm text-white text-slate-200 relative ">
          {props.description}
        </p>
      </div>
    </div>
  );
}
