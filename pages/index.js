import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Side from "@/components/side";
import Intro from "@/components/intro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` min-h-screen main-container`}
    >
      <Header/>
      <Side />
      <Intro/>
    </main>
  );
}
