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
          color: { value: "#a78bfa" },
          links: {
            enable: true,
            color: "#818cf8",
            distance: 150,
          },
          move: { enable: true, speed: 0.6 },
          number: { value: 80 },
          opacity: { value: 0.6 },
          size: { value: 3 },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}