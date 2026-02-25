"use client";

import { motion } from "framer-motion";
import ParticlesBG from "./particlesbg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-slate-200 px-6 overflow-hidden">

      <ParticlesBG />

      {/* glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
          Happiest Birthday!
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300">
          Wish you get everything you wish for!
        </p>

        <p className="mt-3 text-sm text-slate-500">
          (with reasonable restrictions)
        </p>
      </motion.div>
    </section>
  );
}