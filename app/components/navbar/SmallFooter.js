import Link from "next/link";
import CurrentTime from "./CurrentTIme";

export default function SmallFooter() {
  return (
    <div className="text-center font-text">
      <CurrentTime />
    </div>
  );
}
