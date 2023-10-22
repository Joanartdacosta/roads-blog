import Link from "next/link";

export default function Footer() {
  return (
    <div className="height-10vh width-100 position-fixed bottom-0 text-center margin-auto background text-white">
      <Link
        href="/sobre"
        className="link margin-auto  display-flex justify-center padding-10"
      >
        <img
          className="icon"
          src="https://chalet-webapp.s3.amazonaws.com/icons/insta-icon.png"
          alt="icon"
        />
      </Link>
      <p className="font-text font-italic padding-10">
        Copyright. Direitos reservados - Rui Costa. Website developed by Joana
        Costa.
      </p>
    </div>
  );
}
