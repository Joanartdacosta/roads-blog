import Link from "next/link";
import CurrentTime from "./CurrentTIme";

export default function Footer() {
  return (
    <div className="text-center font-text ">
      <p>logotipo</p>
      <Link href="/sobre">
        <p>instagram</p>{" "}
      </Link>
      <CurrentTime />
    </div>
  );
}
