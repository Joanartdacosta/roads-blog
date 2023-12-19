import BUTTONS_LABELS from "@/components/enums/buttons_labels";
import ButtonBlack from "@/components/common/UI/button/ButtonBlack";
import HomeVideo from "@/components/dashboard/home/video/HomeVideo";
import Title from "@/components/dashboard/home/Title";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-auto">
      <HomeVideo />

      <div className="flex flex-column justify-center align-items-center w-screen pt-28">
        <header className="text-center relative">
          <Title />
          <div className="my-8 text-xl">
            <Link href="/tours/freetour">
              <ButtonBlack label={BUTTONS_LABELS.winFreeTour} />
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
