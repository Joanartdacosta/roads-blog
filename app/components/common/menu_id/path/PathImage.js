import Image from "next/image";

export default function PathImage(props) {
  return (
    <Image
      className="w-max mb-3 mr-3 sm:mb-0 py-8"
      src={props.image}
      alt={props.title}
      width={100}
      height={100}
      unoptimized
    />
  );
}
