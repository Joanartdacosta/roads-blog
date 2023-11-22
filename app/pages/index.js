import ButtonBlack from "@/components/common/UI/button/ButtonBlack";
import Title from "@/components/dashboard/home/Title";
import HomeVideo from "@/components/dashboard/home/video/HomeVideo";

export default function Home() {
  return (
    <div className="m-auto">
      <HomeVideo />

      <div className="flex flex-column justify-center align-items-center w-screen pt-28">
        <header className="text-center relative">
          <Title />
          <div className="my-8 text-xl">
            <ButtonBlack label={"Ganhe um Roteiro GRATUITO"} />
          </div>
        </header>
      </div>
    </div>
  );
}
