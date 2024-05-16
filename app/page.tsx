import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Cta/>
    </main>
  );
}
