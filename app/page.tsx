import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Achievements /></Reveal>
      <Reveal><Education /></Reveal>
      <Reveal><Contact /></Reveal>
    </main>
  );
}
