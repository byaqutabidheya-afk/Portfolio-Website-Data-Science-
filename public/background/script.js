/**
 * Fullscreen Animated Background using tsParticles
 * Features:
 * - Pure black (#090909) background
 * - 120 small grey particles with thin connecting lines
 * - Very slow floating animation
 * - Gentle mouse repulsion effect
 */

document.addEventListener("DOMContentLoaded", async () => {
  if (typeof tsParticles === "undefined") {
    console.error("tsParticles library failed to load.");
    return;
  }

  await tsParticles.load({
    id: "tsparticles",
    options: {
      background: {
        color: {
          value: "#090909"
        }
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            width: 1920,
            height: 1080
          }
        },
        color: {
          value: "#888888" // Small grey particles
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: { min: 0.3, max: 0.6 }
        },
        size: {
          value: { min: 1, max: 2.5 }
        },
        links: {
          enable: true,
          distance: 140,
          color: "#888888", // Thin grey connecting lines
          opacity: 0.22,
          width: 0.9
        },
        move: {
          enable: true,
          speed: 0.5, // Very slow floating animation
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce"
          }
        }
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "repulse" // Mouse repels particles
          },
          resize: {
            enable: true
          }
        },
        modes: {
          repulse: {
            distance: 110,
            duration: 0.4,
            factor: 3,
            speed: 0.5,
            maxSpeed: 1.5,
            easing: "ease-out-quad"
          }
        }
      },
      detectRetina: true
    }
  });
});
