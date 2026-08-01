"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
    function handlePrint() {
        // Framer Motion injects opacity/transform as inline styles.
        // @media print can't reliably override inline styles in all browsers,
        // so we strip them manually before opening the print dialog,
        // then restore them after.
        const motionEls = document.querySelectorAll<HTMLElement>("[style]");
        const saved: { el: HTMLElement; style: string }[] = [];

        motionEls.forEach((el) => {
            const s = el.getAttribute("style") ?? "";
            if (s.includes("opacity") || s.includes("transform")) {
                saved.push({ el, style: s });
                // Remove opacity and transform from the inline style string
                const cleaned = s
                    .split(";")
                    .map((d) => d.trim())
                    .filter((d) => d && !d.startsWith("opacity") && !d.startsWith("transform"))
                    .join("; ");
                el.setAttribute("style", cleaned);
            }
        });

        const restore = () => {
            saved.forEach(({ el, style }) => el.setAttribute("style", style));
        };

        window.addEventListener("afterprint", restore, { once: true });
        window.print();
    }

    return (
        <button
            onClick={handlePrint}
            aria-label="Print CV"
            className="inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-5 py-2.5 font-ui text-sm font-medium text-purple transition hover:bg-purple/20 hover:border-purple/60 hover:scale-[1.02] active:scale-95 print:hidden"
        >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print CV
        </button>
    );
}
