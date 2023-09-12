import { Inter } from "next/font/google";
// import homeStyles from "../components/home/home.module.css";
import Title from "../components/home/Title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Title />
    </div>
  );
}
