"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBG() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#f9a8d4", "#f472b6", "#e879f9", "#a78bfa", "#fb7185", "#fda4af"],
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            direction: "top",
            speed: { min: 0.4, max: 1.2 },
            straight: false,
            random: true,
            outModes: {
              default: "out",
              top: "out",
              bottom: "none",
            },
            warp: false,
          },
          number: {
            value: 60,
            density: {
              enable: true,
              area: 900,
            },
          },
          opacity: {
            value: { min: 0.1, max: 0.55 },
            animation: {
              enable: true,
              speed: 0.6,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 1.5,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "star"],
            options: {
              star: {
                sides: 4,
              },
            },
          },
          rotate: {
            value: { min: 0, max: 360 },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },
          wobble: {
            enable: true,
            distance: 8,
            speed: { min: -3, max: 3 },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
              color: {
                value: ["#ffffff", "#fda4af", "#f9a8d4"],
              },
            },
          },
        },
        detectRetina: true,
        emitters: {
          direction: "top",
          rate: {
            quantity: 1,
            delay: 0.3,
          },
          size: {
            width: 100,
            height: 10,
          },
          position: {
            x: 50,
            y: 100,
          },
        },
      }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}