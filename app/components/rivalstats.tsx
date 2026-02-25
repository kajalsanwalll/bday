"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const stats = [
  {
    label: "Assignments where you were slightly ahead",
    value: "None",
  },
  {
    label: "Number of times i pointed out your mistakes",
    value: "Lost count",
  },
  {
    label: "Times you were unnecessarily confident",
    value: "Always!",
  },
  {
    label: "Actual respect level",
    value: "Tier 1",
  },
  {
    label: "Dual personality check?",
    value: "A big YES.",
  },
  {
    label: "Honest review",
    value: "sometimes you suck!",
  },
  {
    label: "Your handwriting",
    value: "Maybe a secret code only you understand?",
  },
  {
    label: "Immaturity level",
    value: "Works too hard but blushes out when ppl compliment",
  },
];

export default function RivalStats() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const speed = 0.06;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX - 160;
      mouseY = e.clientY - 160;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      glow.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    animate();

    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <section className="relative min-h-screen text-slate-200 overflow-hidden px-6 py-24">
      
      {/* dreamy background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-transparent to-rose-950/20 pointer-events-none" />

      {/* cursor glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed top-0 left-0 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent"
        >
         Pros or cons?
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-[1.03] hover:bg-pink-400/10 transition-all duration-300"
            >
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-semibold mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* REAL TALK */}
      <section className="relative z-10 mt-32">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Real talk.
          </h2>

          <div className="mt-6 flex justify-center">
            <div className="relative group">
              <Image
                src="/picture.jpeg"
                alt="rival"
                width={350}
                height={350}
                className="rounded-2xl mb-7  object-cover border border-white/10 shadow-xl transition duration-500 group-hover:scale-105"
              />

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-2xl bg-pink-400/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

              <div
                className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <span className="text-xs text-slate-400 italic">
                  what a nerd!
                </span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-slate-300 leading-relaxed">
            I genuinely feel BLESSED that I got to know the version of you
            which idk why you're scared to show? Lol!
          </p>

          <p className="mt-6 text-slate-300 leading-relaxed">
            You inspire a lot,
            may you enjoy great success in life.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            You're not great to that extent that I compare your kindness
            with my top-tier God level energy… but yeah you're good at times.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            AND I love gossiping with you because you LISTEN and REMEMBER.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            So yeah… happy birthday. Don’t let it get to your head.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 mt-32 pb-10 text-center">
        <div className="mx-auto max-w-xl rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-6 shadow-lg">
          <p className="text-sm text-slate-400 tracking-wide">
            built with unreasonable dedication
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            KAJAL 💅
          </p>
        </div>
      </footer>
    </section>
  );
}