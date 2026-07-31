"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  relX: number;
  relY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export default function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse tracking for repulsion
    const mouse = { x: -1000, y: -1000, active: false };

    // Node & Mesh settings for high contrast & high visibility
    const NODE_COUNT = 110;
    const MAX_NEIGHBOR_DIST = 160;
    const MAX_CONNECTIONS_PER_NODE = 4;
    const REPEL_RADIUS = 140;
    const REPEL_STRENGTH = 4.0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nodes: Node[] = [];

    const initNodes = (w: number, h: number) => {
      nodes.length = 0;

      for (let i = 0; i < NODE_COUNT; i++) {
        const relX = Math.random();
        const relY = Math.random();
        // Slow floating velocity
        const vx = (Math.random() - 0.5) * 0.4;
        const vy = (Math.random() - 0.5) * 0.4;

        nodes.push({
          relX,
          relY,
          x: relX * w,
          y: relY * h,
          vx,
          vy,
          radius: 2.0 + Math.random() * 1.8, // 2px - 3.8px crisp dots
          baseAlpha: 0.6 + Math.random() * 0.35, // Bright high visibility
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      if (nodes.length === 0) {
        initNodes(width, height);
      } else {
        for (const node of nodes) {
          node.x = node.relX * width;
          node.y = node.relY * height;
        }
      }

      if (prefersReducedMotion) {
        renderFrame();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const updateNodes = () => {
      if (prefersReducedMotion) return;

      for (const node of nodes) {
        // 1. Mouse Repulsion Effect
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < REPEL_RADIUS && dist > 0) {
            const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }

        // 2. Slow floating drift
        node.x += node.vx;
        node.y += node.vy;

        // Bounce at boundaries
        if (node.x < 5) {
          node.x = 5;
          node.vx *= -1;
        } else if (node.x > width - 5) {
          node.x = width - 5;
          node.vx *= -1;
        }

        if (node.y < 5) {
          node.y = 5;
          node.vy *= -1;
        } else if (node.y > height - 5) {
          node.y = height - 5;
          node.vy *= -1;
        }

        node.relX = node.x / (width || 1);
        node.relY = node.y / (height || 1);
      }
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        const neighbors: { index: number; dist: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_NEIGHBOR_DIST * MAX_NEIGHBOR_DIST) {
            neighbors.push({ index: j, dist: Math.sqrt(distSq) });
          }
        }

        neighbors.sort((a, b) => a.dist - b.dist);
        const connectionsCount = Math.min(neighbors.length, MAX_CONNECTIONS_PER_NODE);

        for (let k = 0; k < connectionsCount; k++) {
          const neighbor = neighbors[k];
          if (i < neighbor.index) {
            const nodeB = nodes[neighbor.index];
            const alphaRatio = 1 - neighbor.dist / MAX_NEIGHBOR_DIST;
            const lineOpacity = alphaRatio * 0.42; // High contrast line opacity

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(200, 200, 200, ${lineOpacity.toFixed(3)})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // 2. Draw particle dots
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 240, 240, ${node.baseAlpha.toFixed(2)})`;
        ctx.fill();
      }
    };

    const loop = () => {
      updateNodes();
      renderFrame();
      animFrameId = requestAnimationFrame(loop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    if (!prefersReducedMotion) {
      animFrameId = requestAnimationFrame(loop);
    }

    return () => {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#090909]"
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
