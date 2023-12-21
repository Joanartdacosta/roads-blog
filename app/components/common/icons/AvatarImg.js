import Image from "next/image";

export default function AvatarImg(props) {
  return (
    <div>
      <Image
        className="w-24 h-24 mb-3 mr-3 rounded-full sm:mb-0"
        src={props.imgURL}
        alt={props.title}
        width={96}
        height={96}
        unoptimized
      />
    </div>
  );
}
