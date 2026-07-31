"use client";

import { useEffect, useRef } from "react";

// Simplified continent outline coordinates [lon, lat] in degrees
// Each sub-array is a closed polygon for a landmass
const CONTINENTS: [number, number][][] = [
    // North America
    [
        [-168, 72], [-140, 72], [-120, 78], [-85, 78], [-65, 75], [-55, 68],
        [-60, 58], [-70, 50], [-56, 47], [-52, 46], [-66, 44], [-70, 42],
        [-75, 35], [-80, 25], [-87, 16], [-83, 10], [-77, 8], [-75, 12],
        [-85, 20], [-90, 18], [-92, 22], [-97, 20], [-105, 22], [-110, 24],
        [-117, 32], [-120, 34], [-124, 40], [-124, 48], [-130, 54],
        [-140, 60], [-145, 62], [-155, 60], [-160, 60], [-165, 65], [-168, 72],
    ],
    // South America
    [
        [-80, 10], [-75, 12], [-62, 12], [-60, 8], [-50, 4], [-48, -2],
        [-35, -6], [-35, -12], [-38, -18], [-40, -22], [-44, -28],
        [-50, -32], [-52, -34], [-58, -38], [-62, -42], [-65, -46],
        [-68, -52], [-72, -52], [-74, -46], [-72, -42], [-70, -36],
        [-72, -30], [-70, -22], [-75, -14], [-78, -8], [-80, 0], [-80, 10],
    ],
    // Europe
    [
        [-10, 36], [0, 36], [10, 38], [18, 38], [28, 36], [36, 38],
        [36, 42], [28, 46], [24, 48], [30, 50], [28, 54], [20, 56],
        [18, 60], [24, 64], [28, 70], [20, 72], [14, 70], [8, 64],
        [4, 58], [0, 52], [-4, 54], [-8, 52], [-10, 48], [-4, 44],
        [-8, 40], [-10, 36],
    ],
    // Africa
    [
        [-18, 16], [-16, 20], [-14, 24], [-8, 28], [-4, 30], [2, 32],
        [10, 36], [18, 38], [28, 36], [36, 22], [42, 12], [44, 8],
        [42, 2], [40, -4], [40, -10], [36, -18], [34, -24], [32, -30],
        [28, -34], [18, -36], [12, -34], [14, -26], [10, -18], [8, -6],
        [2, 4], [-4, 4], [-8, 4], [-14, 8], [-16, 12], [-18, 16],
    ],
    // Asia
    [
        [28, 36], [36, 38], [36, 42], [42, 44], [48, 42], [54, 40],
        [60, 36], [62, 28], [68, 24], [72, 22], [80, 10], [80, 18],
        [76, 22], [80, 28], [86, 28], [90, 26], [96, 24], [100, 18],
        [104, 12], [106, 10], [110, 14], [118, 22], [122, 28], [122, 34],
        [126, 38], [130, 40], [134, 46], [140, 50], [142, 56], [140, 62],
        [134, 68], [130, 72], [120, 74], [100, 78], [80, 78], [60, 74],
        [50, 70], [40, 68], [36, 64], [28, 60], [24, 56], [24, 50],
        [28, 46], [36, 42], [42, 44], [48, 38], [42, 36], [36, 38], [28, 36],
    ],
    // Australia
    [
        [114, -22], [118, -18], [124, -14], [130, -12], [136, -12],
        [138, -16], [140, -18], [144, -18], [148, -20], [152, -24],
        [154, -28], [152, -34], [148, -38], [144, -38], [140, -36],
        [136, -34], [130, -32], [124, -34], [118, -32], [114, -28], [114, -22],
    ],
    // Greenland
    [
        [-55, 76], [-40, 78], [-25, 80], [-18, 78], [-20, 72], [-24, 68],
        [-30, 66], [-42, 64], [-50, 66], [-54, 70], [-55, 76],
    ],
];

function toRad(deg: number) {
    return (deg * Math.PI) / 180;
}

function project(
    lon: number,
    lat: number,
    rotY: number,
    cx: number,
    cy: number,
    r: number
): { x: number; y: number; visible: boolean } {
    const phi = toRad(lat);
    const lam = toRad(lon) + rotY;

    const x3 = Math.cos(phi) * Math.cos(lam);
    const y3 = Math.sin(phi);
    const z3 = Math.cos(phi) * Math.sin(lam);

    return {
        x: cx + r * x3,
        y: cy - r * y3,
        visible: z3 > 0,
    };
}

export default function WireframeGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rotRef = useRef(0);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const SIZE = 520;
        canvas.width = SIZE;
        canvas.height = SIZE;
        const cx = SIZE / 2;
        const cy = SIZE / 2;
        const r = SIZE * 0.44;

        function draw() {
            if (!ctx) return;
            ctx.clearRect(0, 0, SIZE, SIZE);

            const rot = rotRef.current;

            // Latitude lines
            for (let lat = -80; lat <= 80; lat += 20) {
                ctx.beginPath();
                let first = true;
                for (let lon = -180; lon <= 180; lon += 3) {
                    const p = project(lon, lat, rot, cx, cy, r);
                    if (!p.visible) { first = true; continue; }
                    if (first) { ctx.moveTo(p.x, p.y); first = false; }
                    else ctx.lineTo(p.x, p.y);
                }
                ctx.strokeStyle = "rgba(167,139,250,0.12)";
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            // Longitude lines
            for (let lon = -180; lon < 180; lon += 20) {
                ctx.beginPath();
                let first = true;
                for (let lat = -90; lat <= 90; lat += 3) {
                    const p = project(lon, lat, rot, cx, cy, r);
                    if (!p.visible) { first = true; continue; }
                    if (first) { ctx.moveTo(p.x, p.y); first = false; }
                    else ctx.lineTo(p.x, p.y);
                }
                ctx.strokeStyle = "rgba(167,139,250,0.12)";
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            // Continent outlines
            for (const continent of CONTINENTS) {
                ctx.beginPath();
                let first = true;
                let prevVisible = false;

                for (const [lon, lat] of continent) {
                    const p = project(lon, lat, rot, cx, cy, r);
                    if (!p.visible) {
                        first = true;
                        prevVisible = false;
                        continue;
                    }
                    if (first || !prevVisible) {
                        ctx.moveTo(p.x, p.y);
                        first = false;
                    } else {
                        ctx.lineTo(p.x, p.y);
                    }
                    prevVisible = true;
                }

                ctx.strokeStyle = "rgba(167,139,250,0.9)";
                ctx.lineWidth = 1.8;
                ctx.lineJoin = "round";
                ctx.stroke();
            }

            // Outer circle edge
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(167,139,250,0.9)";
            ctx.lineWidth = 1.5;
            ctx.stroke();

            rotRef.current += 0.003;
            rafRef.current = requestAnimationFrame(draw);
        }

        rafRef.current = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none select-none opacity-100"
            style={{ width: 520, height: 520 }}
        />
    );
}
