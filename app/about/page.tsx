import AboutCards from "@/components/AboutCards";
import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StoryTimeline from "@/components/StoryTimeline";

export default function AboutPage() {
    return (
        <main className="min-h-screen text-text-body">
            <section className="py-24 sm:py-28 lg:py-32">
                <FadeIn>
                    <AboutHero />
                </FadeIn>
            </section>

            <section className="py-24 sm:py-28 lg:py-32">
                <FadeIn>
                    <AboutCards />
                </FadeIn>
            </section>

            <section className="py-24 sm:py-28 lg:py-32">
                <FadeIn>
                    <StoryTimeline />
                </FadeIn>
            </section>

            <section className="py-24 sm:py-28 lg:py-32">
                <FadeIn>
                    <Footer variant="connect" />
                </FadeIn>
            </section>
        </main>
    );
}
