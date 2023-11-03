import SOCIALS from "./socials";

export default function Social() {
  return (
    <div className="margin-auto">
      {SOCIALS.map((social) => (
        <a href={social.href} key={social.id}>
          <img
            className="icon padding-10"
            src={social.imgURL}
            alt={social.text}
          ></img>
        </a>
      ))}
    </div>
  );
}
