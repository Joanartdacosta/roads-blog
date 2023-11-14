import Title from "@/components/dashboard/home/Title";
import HomeVideo from "@/components/dashboard/video/HomeVideo";

export default function Home() {
  return (
    <div className="m-auto">
      <HomeVideo />

      <div className="flex flex-column justify-center align-items-center w-screen pt-28">
        <header className="text-center">
          <Title />
          <div className="my-8">
            {/* <LightButton label={"RECEBA UM ROTEIRO GRATUITO"} /> */}
          </div>
        </header>
      </div>
    </div>
  );
}
