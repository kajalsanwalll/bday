"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdayAlert() {
  const [open, setOpen] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [escaped, setEscaped] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const nahRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  const escalationMessages = [
    "You sure?",
    "Think again.",
    "You're making a mistake.",
    "This is getting awkward.",
  ];

  let message;
  if (hoverCount === 0) {
    message = `Unfortunately she remembers dates!\n"Isn't she amazing?"`;
  } else if (hoverCount < 5) {
    message = escalationMessages[hoverCount - 1];
  } else {
    message = "See? Even the button knows you're wrong.";
  }

  const nahScale = Math.max(1 - hoverCount * 0.1, 0.6);
  const yesScale = 1 + hoverCount * 0.1;

  const moveButton = () => {
    const moveDistance = 120;
    const newX = coords.x + (Math.random() > 0.5 ? moveDistance : -moveDistance);
    const newY = coords.y + (Math.random() > 0.5 ? moveDistance : -moveDistance);
    const safeX = Math.max(20, Math.min(window.innerWidth - 140, newX));
    const safeY = Math.max(20, Math.min(window.innerHeight - 70, newY));
    setCoords({ x: safeX, y: safeY });
    setEscaped(true);
    setHoverCount((prev) => prev + 1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Ambient glow behind card */}
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-4 w-full max-w-md text-center"
        >
          {/* outer glow ring */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-pink-400/30 via-fuchsia-400/20 to-rose-400/30 blur-sm" />

          <div
            className="relative rounded-3xl border border-white/10 p-10 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(244,63,94,0.07) 100%)",
              backdropFilter: "blur(28px)",
              boxShadow: "0 30px 80px rgba(244,63,94,0.15), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            {/* shimmer top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

            {/* emoji */}
            <motion.div
              animate={{ rotate: [0, -10, 10, -6, 6, 0] }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-4xl mb-5 select-none"
            >
              🎂
            </motion.div>

            {/* Message */}
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="text-lg font-medium text-slate-100 whitespace-pre-line leading-relaxed"
            >
              {message}
            </motion.p>

            {/* Divider */}
            <div className="mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />

            {/* Buttons */}
            {hoverCount < 5 ? (
              <div className="mt-7 flex justify-center gap-4 items-center">
                {/* YES */}
                <motion.button
                  onClick={() => setOpen(false)}
                  style={{ scale: yesScale }}
                  transition={{ type: "spring", stiffness: 300 }}
                  whileTap={{ scale: yesScale * 0.95 }}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #f472b6, #e879f9)",
                    boxShadow: "0 0 20px rgba(232,121,249,0.35)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    scale: yesScale,
                  }}
                >
                  Of course
                </motion.button>

                {/* NAH — escaping button */}
                <button
                  ref={nahRef}
                  onMouseEnter={moveButton}
                  style={
                    escaped
                      ? {
                          position: "fixed",
                          transform: `translate3d(${coords.x}px, ${coords.y}px, 0) scale(${nahScale})`,
                          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                        }
                      : {
                          transform: `scale(${nahScale})`,
                          transition: "transform 0.2s ease",
                        }
                  }
                  className="px-6 py-2.5 rounded-full text-sm font-medium text-slate-300 border border-white/10 hover:border-white/20 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    ...(escaped
                      ? {
                          position: "fixed",
                          transform: `translate3d(${coords.x}px, ${coords.y}px, 0) scale(${nahScale})`,
                          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                        }
                      : {
                          transform: `scale(${nahScale})`,
                          transition: "transform 0.2s ease",
                        }),
                  }}
                >
                  Nah
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-7 flex justify-center"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #f472b6, #e879f9)",
                    boxShadow: "0 0 24px rgba(232,121,249,0.4)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  She knows she's AAAmazing!
                </button>
              </motion.div>
            )}

            {/* shimmer bottom line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}