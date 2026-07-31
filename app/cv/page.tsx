import CV from "@/components/CV";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
    title: "CV — Byaquta Bidheya Behera",
};

export default function CVPage() {
    return (
        <main className="min-h-screen text-text-body">
            <section>
                <Nav />
            </section>

            <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
                <FadeIn>
                    <CV />
                </FadeIn>
            </section>

            <section className="py-24 sm:py-28 lg:py-32">
                <Footer variant="connect" />
            </section>
        </main>
    );
}
