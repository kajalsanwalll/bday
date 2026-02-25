"use client";

import { motion } from "framer-motion";
import ParticlesBG from "./particlesbg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-slate-200 px-6 overflow-hidden">

      <ParticlesBG />

      {/* soft dreamy wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-transparent to-indigo-950/30 pointer-events-none" />

      {/* glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-24 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
          HAPPIEST BIRTHDAY!
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300">
          Wish you get everything you wish for.
        </p>

        <p className="mt-3 text-sm text-slate-400">
          (with reasonable restrictions)
        </p>
      </motion.div>
    </section>
  );
}