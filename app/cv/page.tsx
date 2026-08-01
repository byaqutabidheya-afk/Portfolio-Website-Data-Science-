import CV from "@/components/CV";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PrintButton from "@/components/PrintButton";

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
                {/* Print button row — hidden when printing */}
                <div className="mx-auto mb-6 flex w-full max-w-4xl justify-end print:hidden">
                    <PrintButton />
                </div>
                <CV />
            </section>

            <section className="py-24 sm:py-28 lg:py-32">
                <Footer variant="connect" />
            </section>
        </main>
    );
}
