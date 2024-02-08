"use client";
import About from "@/components/About/About";
import Eyes from "@/components/Eyes/Eyes";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Invite from "@/components/InviteCard/Invite";
import LandingPage from "@/components/LandingPage/LandingPage";
import Navbar from "@/components/Navbar/Navbar";
import Marquee from "@/components/marquee/Marquee";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
   
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      })();
    
  }, []);
  return (
    <main className="flex min-h-screen text-black bg-[#F1F1F1]  flex-col  ">
      <section className="text-[8rem]">
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Features />
        <Invite />
        <Footer />
      </section>
    </main>
  );
}
