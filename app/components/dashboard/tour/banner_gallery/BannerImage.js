import Image from "next/image";

export default function BannerImage(props) {
  return (
    <div>
      <div className="h-64 w-48 overflow-hidden rounded-lg">
        <Image
          alt="Lugares de Portugal"
          className=" object-cover object-center"
          height={256}
          width={192}
          src={props.imgUrl}
          unoptimized
        />
      </div>
    </div>
  );
}
