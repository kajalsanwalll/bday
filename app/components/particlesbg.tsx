"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

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

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: {
          enable: true, // ✅ v3 correct
        },
      },
      color: {
        value: [
          "#f9a8d4",
          "#f472b6",
          "#e879f9",
          "#a78bfa",
          "#fb7185",
          "#fda4af",
        ],
      },
      shape: {
        type: ["circle", "star"],
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 0.5,
        },
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 1,
        },
      },
      move: {
        enable: true,
        direction: "top",
        speed: { min: 0.4, max: 1.2 },
        outModes: {
          default: "out",
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}