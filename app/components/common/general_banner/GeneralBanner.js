import Image from "next/image";

export default function GeneralBanner(props) {
  return (
    <div className="bg-gradient-to-tr from-neutral-700 to-neutral-700 h-96 w-full relative">
      <Image
        alt="Turismo em Portugal"
        className="w-full h-full object-cover absolute mix-blend-overlay"
        fill
        src={props.imgUrl}
        unoptimized
        priority={false}
      />
      <div className="w-full text-center m-auto p-24 responsive-banner">
        <h1 className="tracking-widest text-5xl text-white relative font-extrabold overline decoration-1 oswald responsive-title responsive-banner">
          {props.section}
        </h1>
        <p className="pt-4 text-sm text-white text-slate-200 relative play">
          {props.description}
        </p>
      </div>
    </div>
  );
}
