import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <div className="portfolio-section">
        <Hero />
      </div>
      <div className="portfolio-section">
        <About />
      </div>
      <div className="portfolio-section">
        <Skills />
      </div>
      <div className="portfolio-section">
        <Projects />
      </div>
      <div className="portfolio-section">
        <Timeline />
      </div>
      <div className="portfolio-section">
        <Contact />
      </div>
      <div className="portfolio-section">
        <Footer />
      </div>
    </>
  );
}
