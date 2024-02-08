import LandingPage from "@/components/LandingPage/LandingPage";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col  ">
      <section className="text-[8rem]">
        <LandingPage />
      </section>
    </main>
  );
}
