"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ParticlesBG from "./particlesbg";
import confetti from "canvas-confetti";

const BAR_COUNT = 5;

function MusicVisualizer({ playing }: { playing: boolean }) {
  return (
    <span className="flex items-end gap-[3px] h-4">
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full inline-block"
          style={{
            background: "linear-gradient(to top, #f472b6, #e879f9)",
            boxShadow: playing ? "0 0 6px rgba(232,121,249,0.7)" : "none",
          }}
          animate={
            playing
              ? {
                  height: ["4px", `${8 + i * 3}px`, "4px", `${12 - i * 1.5}px`, "4px"],
                  opacity: 1,
                }
              : { height: "4px", opacity: 0.35 }
          }
          transition={
            playing
              ? {
                  duration: 0.5 + i * 0.07,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.09,
                }
              : { duration: 0.3 }
          }
        />
      ))}
    </span>
  );
}

export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/namai-message.mp3");
    audioRef.current.onended = () => setPlaying(false);
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const startConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#f43f5e", "#fb7185", "#f472b6", "#f9a8d4", "#e879f9", "#a78bfa"],
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-slate-200 px-6 overflow-hidden">

      <ParticlesBG />

      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 via-transparent to-rose-950/30 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-96 h-96 bg-pink-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-24 right-24 w-96 h-96 bg-rose-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/8 rounded-full blur-[140px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        </div>
        <motion.div
          animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-8 h-8 bg-pink-300/25 rounded-full blur-md"
        />
        <motion.div
          animate={{ x: [0, -15, 15, 0], y: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-rose-300/20 rounded-full blur-md"
        />
        <motion.div
          animate={{ x: [0, 10, -8, 0], y: [0, -12, 8, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          className="absolute top-2/3 left-1/3 w-4 h-4 bg-fuchsia-300/20 rounded-full blur-sm"
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-2xl"
        onMouseEnter={startConfetti}
      >
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-pink-400/30 via-fuchsia-400/20 to-rose-400/30 blur-sm" />

        <div
          className="relative rounded-3xl p-10 border border-white/10 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 50%, rgba(244,63,94,0.06) 100%)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 25px 80px rgba(244, 63, 94, 0.12), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

          <motion.span
            animate={{ y: [0, -6, 0], rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -top-4 left-8 text-2xl select-none"
          >🎂</motion.span>
          <motion.span
            animate={{ y: [0, -8, 0], rotate: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-4 right-8 text-2xl select-none"
          >🎉</motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-4xl font-bold"
            style={{
              background: "linear-gradient(135deg, #f9a8d4 0%, #f472b6 30%, #e879f9 60%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(232, 121, 249, 0.3))",
            }}
          >
            HAPPIEST BIRTHDAY NAMAI!
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            Wish you get everything you wish for.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-3 text-sm text-slate-500"
          >
            (with reasonable restrictions)
          </motion.p>

          {/* ── MUSIC BUTTON WITH VISUALIZER ── */}
          <motion.div className="mt-8 flex justify-center">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={togglePlay}
              className="px-5 py-2.5 rounded-full text-slate-200 flex items-center gap-3 transition-all duration-300"
              style={{
                background: playing
                  ? "linear-gradient(135deg, rgba(232,121,249,0.22), rgba(244,63,94,0.22))"
                  : "rgba(232,121,249,0.10)",
                border: playing
                  ? "1px solid rgba(232,121,249,0.45)"
                  : "1px solid rgba(232,121,249,0.25)",
                boxShadow: playing
                  ? "0 0 28px rgba(232,121,249,0.3), inset 0 0 12px rgba(232,121,249,0.08)"
                  : "none",
              }}
            >
              {/* visualizer when playing, note icon when not */}
              {playing ? (
                <MusicVisualizer playing={playing} />
              ) : (
                <span className="text-base leading-none">🎵</span>
              )}

              <span className="text-sm font-medium">
                {playing ? "Pause Message" : "to be honest"}
              </span>

              {/* trailing visualizer on the right side too when playing */}
              {playing && <MusicVisualizer playing={playing} />}
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-5 text-sm text-slate-500 italic"
          >
            Here's to more cold coffees, deadlines, and random bitching-sessions!
          </motion.p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />
        </div>
      </motion.div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-20 group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="w-6 h-6 relative opacity-50 group-hover:opacity-100 transition-opacity"
        >
          <span className="absolute w-3 h-0.5 bg-slate-200 rotate-45 top-2 left-1.5 origin-center"></span>
          <span className="absolute w-3 h-0.5 bg-slate-200 -rotate-45 top-2 left-1.5 origin-center"></span>
        </motion.div>
        <span className="mt-1 text-xs text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-wider">
          scroll
        </span>
      </div>
    </section>
  );
}