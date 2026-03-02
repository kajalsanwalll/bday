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
            background: "linear-gradient(to top, #d4a574, #e8c99a)",
            boxShadow: playing ? "0 0 5px rgba(212,165,116,0.5)" : "none",
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
    audioRef.current = new Audio("/birthday.mp3");
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
      audioRef.current.playbackRate = 2;
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const startConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 55,
      origin: { y: 0.6 },
      colors: ["#d4a574", "#e8c99a", "#c4956a", "#f0dfc0", "#a07850", "#e0c090"],
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-slate-200 px-6 overflow-hidden"
      style={{ background: "#0f0e0c" }}
    >
      <ParticlesBG />

      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-transparent to-stone-950/30 pointer-events-none" />

      {/* Ambient glow — warm, not neon */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-80 h-80 bg-amber-800/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-24 right-24 w-80 h-80 bg-orange-900/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-900/8 rounded-full blur-[160px]" />

        {/* Floating orbs — very subtle */}
        <motion.div
          animate={{ x: [0, 18, -18, 0], y: [0, -8, 8, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-6 h-6 bg-amber-400/10 rounded-full blur-md"
        />
        <motion.div
          animate={{ x: [0, -12, 12, 0], y: [0, 6, -6, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-orange-400/8 rounded-full blur-md"
        />
      </div>

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-xl"
        onMouseEnter={startConfetti}
      >
        {/* Card border glow */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-600/15 via-transparent to-orange-600/10 blur-sm" />

        <div
          className="relative rounded-2xl p-10 border border-white/8 shadow-2xl"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 60%, rgba(180,120,60,0.05) 100%)",
            backdropFilter: "blur(28px)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Top highlight line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

          {/* Floating emoji — toned down */}
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute -top-4 left-8 text-xl select-none opacity-80"
          >🎂</motion.span>
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }}
            className="absolute -top-4 right-8 text-xl select-none opacity-80"
          >🎉</motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #f0dfc0 0%, #d4a574 45%, #c4956a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 12px rgba(180,130,80,0.2))",
            }}
          >
            HAPPIEST BIRTHDAY NAMAI!
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-amber-500/35 to-transparent"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-base md:text-lg leading-relaxed"
            style={{ color: "#b8a99a" }}
          >
            Wish you get everything you wish for.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-2 text-sm italic"
            style={{ color: "#6b5e54" }}
          >
            (with reasonable restrictions)
          </motion.p>

          {/* Music button */}
          <motion.div className="mt-8 flex justify-center">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={togglePlay}
              className="px-5 py-2.5 rounded-full flex items-center gap-3 transition-all duration-300"
              style={{
                background: playing
                  ? "rgba(180,130,80,0.15)"
                  : "rgba(180,130,80,0.08)",
                border: playing
                  ? "1px solid rgba(180,130,80,0.35)"
                  : "1px solid rgba(180,130,80,0.18)",
                boxShadow: playing
                  ? "0 0 22px rgba(180,130,80,0.15)"
                  : "none",
                color: "#c4a882",
              }}
            >
              {playing ? (
                <MusicVisualizer playing={playing} />
              ) : (
                <span className="text-base leading-none">🎵</span>
              )}

              <span className="text-sm font-medium">
                {playing ? "Pause Message" : "to be honest"}
              </span>

              {playing && <MusicVisualizer playing={playing} />}
            </motion.button>
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-5 text-xs italic"
            style={{ color: "#5a4f47" }}
          >
            Here's to more cold coffees, deadlines, and random bitching-sessions!
          </motion.p>

          {/* Bottom highlight */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-amber-600/25 to-transparent" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-20 group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-6 h-6 relative opacity-30 group-hover:opacity-70 transition-opacity"
        >
          <span className="absolute w-3 h-0.5 bg-slate-400 rotate-45 top-2 left-1.5 origin-center"></span>
          <span className="absolute w-3 h-0.5 bg-slate-400 -rotate-45 top-2 left-1.5 origin-center"></span>
        </motion.div>
        <span className="mt-1 text-xs text-slate-600 group-hover:text-slate-400 transition-colors uppercase tracking-wider">
          scroll
        </span>
      </div>
    </section>
  );
}