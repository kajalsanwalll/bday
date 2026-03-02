"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdayAlert() {
  const [visible, setVisible] = useState(true);
  const [hoverCount, setHoverCount] = useState(0);
  const [escaped, setEscaped] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const nahRef = useRef<HTMLButtonElement | null>(null);

  if (!visible) return null;

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

    const newX =
      coords.x + (Math.random() > 0.5 ? moveDistance : -moveDistance);
    const newY =
      coords.y + (Math.random() > 0.5 ? moveDistance : -moveDistance);

    const safeX = Math.max(20, Math.min(window.innerWidth - 140, newX));
    const safeY = Math.max(20, Math.min(window.innerHeight - 70, newY));

    setCoords({ x: safeX, y: safeY });
    setEscaped(true);
    setHoverCount((prev) => prev + 1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Ambient glow */}
        <div className="absolute w-96 h-96 bg-amber-700/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-4 w-full max-w-md text-center"
        >
          {/* Glow ring */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-500/15 via-transparent to-orange-500/10 blur-sm" />

          <div
            className="relative rounded-2xl border border-white/8 p-10 shadow-2xl"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 60%, rgba(180,120,60,0.06) 100%)",
              backdropFilter: "blur(28px)",
              boxShadow:
                "0 30px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Top shimmer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />

            {/* Emoji */}
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
              className="text-base font-medium whitespace-pre-line leading-relaxed"
              style={{ color: "#c4b09a" }}
            >
              {message}
            </motion.p>

            {/* Divider */}
            <div className="mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            {/* Buttons */}
            {hoverCount < 5 ? (
              <div className="mt-7 flex justify-center gap-4 items-center">
                {/* YES */}
                <motion.button
                  onClick={() => setVisible(false)}
                  animate={{ scale: yesScale }}
                  whileTap={{ scale: yesScale * 0.95 }}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, #c4956a, #d4a574)",
                    boxShadow:
                      "0 0 18px rgba(196,149,106,0.3)",
                    border:
                      "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  Of course
                </motion.button>

                {/* NAH (escaping) */}
                <button
                  ref={nahRef}
                  onMouseEnter={moveButton}
                  className="px-6 py-2.5 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "#7a6a5e",
                    ...(escaped
                      ? {
                          position: "fixed",
                          left: 0,
                          top: 0,
                          transform: `translate3d(${coords.x}px, ${coords.y}px, 0) scale(${nahScale})`,
                          transition:
                            "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
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
                  onClick={() => setVisible(false)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background:
                      "linear-gradient(135deg, #c4956a, #d4a574)",
                    boxShadow:
                      "0 0 22px rgba(196,149,106,0.3)",
                    border:
                      "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  She knows she is AAAmazing!
                </button>
              </motion.div>
            )}

            {/* Bottom shimmer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-amber-600/25 to-transparent" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}