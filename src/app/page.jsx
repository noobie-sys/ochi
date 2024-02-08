import About from "@/components/About/About";
import Eyes from "@/components/Eyes/Eyes";
import Features from "@/components/Features/Features";
import Invite from "@/components/InviteCard/Invite";
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
        <About />
        <Eyes />
        <Features />
        <Invite />
      </section>
    </main>
  );
}
