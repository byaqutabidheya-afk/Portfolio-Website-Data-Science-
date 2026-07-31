import AboutCards from "@/components/AboutCards";
import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import StoryTimeline from "@/components/StoryTimeline";

export default function AboutPage() {
    return (
        <main className="min-h-screen text-text-body">
            <section className="py-24 sm:py-28 lg:py-32">
                <AboutHero />
            </section>

            <section className="py-24 sm:py-28 lg:py-32">
                <AboutCards />
            </section>

            <section className="py-24 sm:py-28 lg:py-32">
                <StoryTimeline />
            </section>

            <section className="py-24 sm:py-28 lg:py-32">
                <Footer variant="connect" />
            </section>
        </main>
    );
}
