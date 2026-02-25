"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

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
];

export default function RivalStats() {

  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e: MouseEvent) => {
      if (!glow) return;
      glow.style.left = e.clientX - 150 + "px";
      glow.style.top = e.clientY - 150 + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    
    <section className="relative min-h-screen bg-cover bg-center text-slate-200"
      
    >
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          id="cursor-glow"
          className="absolute w-72 h-72 bg-violet-500/20 rounded-full blur-3xl transition-all duration-75"
        />
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Rivalry Analytics 📊
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:scale-[1.02] transition"
            >
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-semibold mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mt-32 px-6">
  <div className="mx-auto max-w-2xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-2xl">
    
    <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
      Real talk.
    </h2>

    <p className="mt-6 text-slate-300 leading-relaxed">
      I genuinely feel BLESSED that i got to know the version of you which idk whyx you're scared to show? Lol!
      You inspire a lot, may u enjoy great success in life.
    </p>

    <p className="mt-4 text-slate-300 leading-relaxed">
      You're not great to that extent that i compare your kindness with my top- tier God level energy but ya you're gud at times!
    </p>

    <p className="mt-4 text-slate-300 leading-relaxed">
      AND I love gossiping with you cuz u LISTEN AND REMEMBER!
    </p>

    <p className="mt-4 text-slate-400 leading-relaxed">
      So yeah… happy birthday.  
      Don’t let it get to your head.
    </p>

  </div>
</section>
  
      <footer className="mt-32 pb-10 text-center">
  <div className="mx-auto max-w-xl rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-6 shadow-lg">
    
    <p className="text-sm text-slate-400 tracking-wide">
      built with unreasonable dedication
    </p>

    <p className="mt-2 text-lg font-semibold text-white">
       KAJAL
    </p>

  </div>
</footer>
    </section>
  );
}