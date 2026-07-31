import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import IntroSplit from "@/components/IntroSplit";
import Timeline from "@/components/Timeline";
import ProjectsSection from "@/components/ProjectsSection";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import SkillsGrid from "@/components/SkillsGrid";
import CampusLife from "@/components/CampusLife";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-body">
      <section>
        <Nav />
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <Hero />
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <IntroSplit />
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <Timeline />
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <ProjectsSection />
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <CurrentlyLearning />
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <SkillsGrid />
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <CampusLife />
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <Footer />
      </section>
    </main>
  );
}
