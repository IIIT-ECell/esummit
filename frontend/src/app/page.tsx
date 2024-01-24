import "./page.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import iconHomepage from "./assets/icon_homepage.svg";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="left">
          <h1 className={poppins.className}>E-Summit</h1>
          <div className={inter.className + " subtext"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic dolore
            distinctio nulla quae amet? Facere ab dolor pariatur nobis ullam
            nulla laboriosam, minima quae! Neque tempora accusantium ab illum
            nisi.
          </div>
        </div>
        <div className="right">
          <Image src={iconHomepage} alt="podium" className="podium" />
        </div>
      </div>
    </>
  );
}
