import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PortfolioShell } from "@/components/PortfolioShell";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <PortfolioShell>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </PortfolioShell>
  );
}
