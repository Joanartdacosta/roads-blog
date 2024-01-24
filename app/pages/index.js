import HomeVideo from "@/components/dashboard/home/video/HomeVideo";
import MainTitle from "@/components/dashboard/home/MainTitle";

export default function Home() {
  return (
    <div className="m-auto">
      <HomeVideo />

      <div className="flex flex-column w-screen pt-40 ml-28">
        <header className="relative">
          <MainTitle />
        </header>
      </div>
    </div>
  );
}
