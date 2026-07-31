import Image from "next/image";

type CampusPhoto = {
    src: string;
    caption: string;
};

const photos: CampusPhoto[] = [
    { src: "/images/campus1.jpg", caption: "My University (DRIEMS UNI)" },
    { src: "/images/campus2.jpg", caption: "Coding club meetup" },
    { src: "/images/campus3.jpg", caption: "Late-night study session" },
    { src: "/images/campus4.jpg", caption: "Campus event or workshop" },
    { src: "/images/campus5.jpg", caption: "Team project presentation" },
];

export default function CampusLife() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-3xl">
                    <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-mint sm:text-5xl lg:text-6xl">
                        Campus Life &amp; Activities
                    </h2>
                    <p className="mt-4 font-body text-lg leading-8 text-text-body/80 sm:text-xl">
                        Beyond the classroom — clubs, events, and people.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {photos.map((photo, index) => (
                        <figure
                            key={photo.src}
                            className={`group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] shadow-[0_18px_60px_rgba(0,0,0,0.18)] ${index === 0 ? "lg:col-span-2 xl:col-span-2" : ""
                                }`}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={photo.src}
                                    alt={photo.caption}
                                    fill
                                    unoptimized
                                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                />
                            </div>
                            <figcaption className="px-4 py-4 font-ui text-sm font-medium text-text-body/80">
                                {photo.caption}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
