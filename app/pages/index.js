import HomeVideo from "@/components/dashboard/home/video/HomeVideo";
import Title from "@/components/dashboard/home/Title";

export default function Home() {
  return (
    <div className="m-auto">
      <HomeVideo />

      <div className="flex flex-column justify-center align-items-center w-screen pt-28">
        <header className="text-center relative">
          <Title />
        </header>
      </div>
    </div>
  );
}
