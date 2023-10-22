import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-background width-100 text-center margin-auto background">
      <Link href="/sobre" className="link background">
        <img
          className="icon"
          src="https://chalet-webapp.s3.amazonaws.com/icons/insta-icon.png"
          alt="icon"
        />
      </Link>
      <p className="font-footer font-text font-italic padding-10">
        Copyright. Direitos reservados - Rui Costa. Website developed by Joana
        Costa.
      </p>
    </div>
  );
}
