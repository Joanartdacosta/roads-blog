import BUTTONS_LABELS from "@/components/enums/buttons_labels";
import ButtonBlack from "@/components/common/UI/button/ButtonBlack";
import HomeVideo from "@/components/dashboard/home/video/HomeVideo";
import Title from "@/components/dashboard/home/Title";

export default function Home() {
  return (
    <div className="m-auto">
      <HomeVideo />

      <div className="flex flex-column justify-center align-items-center w-screen pt-28">
        <header className="text-center relative">
          <Title />
          <div className="my-8 text-xl">
            <ButtonBlack
              label={BUTTONS_LABELS.winFreeTour}
              href={"/tours/freetour"}
            />
          </div>
        </header>
      </div>
    </div>
  );
}
