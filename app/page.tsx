import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import IntroSplit from "@/components/IntroSplit";
import Timeline from "@/components/Timeline";
import ProjectsSection from "@/components/ProjectsSection";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import SkillsGrid from "@/components/SkillsGrid";
import CampusLife from "@/components/CampusLife";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen text-text-body">
      <section>
        <FadeIn>
          <Nav />
        </FadeIn>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <FadeIn>
          <Hero />
        </FadeIn>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <FadeIn>
          <IntroSplit />
        </FadeIn>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <FadeIn>
          <Timeline />
        </FadeIn>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <FadeIn>
          <ProjectsSection />
        </FadeIn>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <FadeIn>
          <CurrentlyLearning />
        </FadeIn>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <FadeIn>
          <SkillsGrid />
        </FadeIn>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <FadeIn>
          <CampusLife />
        </FadeIn>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <FadeIn>
          <Footer />
        </FadeIn>
      </section>
    </main>
  );
}
