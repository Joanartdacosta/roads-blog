import Link from "next/link";
import footerStyles from "./footer.module.css";
import CurrentTime from "./CurrentTIme";

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <p>logotipo</p>
      <Link href="/sobre">
        <p>instagram</p>{" "}
      </Link>
      <CurrentTime />
    </div>
  );
}
