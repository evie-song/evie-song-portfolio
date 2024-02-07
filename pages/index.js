import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Side from "@/components/side";
import Intro from "@/components/intro";
import About from "@/components/about";
import Project from "@/components/project";
import Work from "@/components/work";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`d-flex flex-column min-h-screen main-container`}
    >
      <Header/>
      <Side />
      <Intro/>
      <About/>
      <Project />
      <Work/>
      <Contact />
    </main>
  );
}
