// import BlackButton from "@/components/common/UI/button/BlackButton";
// import LightButton from "@/components/common/UI/button/LightButton";
// import YellowButton from "@/components/common/UI/button/YellowButton";
import Title from "@/components/dashboard/home/Title";
import HomeVideo from "@/components/dashboard/video/HomeVideo";

export default function Home() {
  return (
    <div className="m-auto">
      <HomeVideo />

      <div className="flex flex-column justify-center align-items-center w-screen pt-28">
        <header className="relative text-center">
          <Title />
          <div className="my-8">
            {/* <LightButton label={"GANHA UM ROTEIRO GRATUITO"} /> */}
          </div>
        </header>
      </div>
    </div>
  );
}
