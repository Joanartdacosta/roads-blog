import Image from "next/image";
import SOCIALS from "@/components/common/socials/socials";

export default function Social() {
  return (
    <div className="m-auto">
      {SOCIALS.map((social) => (
        <a href={social.href} key={social.id}>
          <Image
            alt={social.text}
            className="icon padding-10"
            height={240}
            width={240}
            src={social.imgURL}
            unoptimized
          />
        </a>
      ))}
    </div>
  );
}
