import LandingPage from "@/components/LandingPage/LandingPage";
import Navbar from "@/components/Navbar/Navbar";
import Marquee from "@/components/marquee/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen text-black bg-slate-100  flex-col  ">
      <section className="text-[8rem]">
        <LandingPage />
        <Marquee />
      </section>
    </main>
  );
}
