"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBG from "./particlesbg";

export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const audio = typeof Audio !== "undefined" && new Audio("/namai-message.mp3");

  const togglePlay = () => {
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-slate-200 px-6 overflow-hidden">

      <ParticlesBG />

      {/* soft dreamy wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 via-transparent to-rose-950/30 pointer-events-none" />

      {/* glow orbs + memory shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* big glow orbs */}
        <div className="absolute top-24 left-24 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-24 w-80 h-80 bg-rose-400/20 rounded-full blur-3xl" />

        {/* subtle pulsing spotlight behind card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* subtle drifting “memory” particles */}
        <motion.div
          animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-6 h-6 bg-pink-300/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ x: [0, -15, 15, 0], y: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-rose-300/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{ x: [0, 10, -10, 0], y: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-4 h-4 bg-fuchsia-300/25 rounded-full blur-sm"
        />
      </div>

      {/* main birthday card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl hover:scale-[1.03] transition-transform duration-300"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
          HAPPIEST BIRTHDAY!
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300">
          Wish you get everything you wish for.
        </p>

        <p className="mt-3 text-sm text-slate-400">
          (with reasonable restrictions)
        </p>

        {/* personal interactive button */}
        <button
          onClick={togglePlay}
          className="mt-6 px-4 py-2 bg-fuchsia-400/20 rounded-full text-slate-200 flex items-center gap-2 hover:bg-pink-400/30 transition"
        >
          🎵 {playing ? "Pause Message" : "to be honest"}
        </button>

        <p className="mt-4 text-sm text-slate-400 italic">
          Here’s to more cold coffees, deadlines, and random bitching-sessions!
        </p>
      </motion.div>
    </section>
  );
}