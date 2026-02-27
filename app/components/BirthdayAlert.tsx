"use client";

import { useEffect, useState } from "react";

export default function BirthdayAlert() {
  const [open, setOpen] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [escaped, setEscaped] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  const moveButton = () => {
    const randomX = Math.random() * (window.innerWidth - 120);
    const randomY = Math.random() * (window.innerHeight - 60);

    setPosition({ x: randomX, y: randomY });
    setEscaped(true);
    setHoverCount((prev) => prev + 1);
  };

  const message =
    hoverCount >= 5
      ? "See? Even the button knows you're wrong."
      : `Unfortunately she remembers dates!
"Isn’t she amazing?"`;

  const nahScale = Math.max(1 - hoverCount * 0.1, 0.6);
  const yesScale = 1 + hoverCount * 0.1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="mx-4 w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-center shadow-2xl">
        
        <p className="text-lg font-medium text-white whitespace-pre-line">
          {message}
        </p>

        {hoverCount < 5 ? (
          <div className="mt-8 flex justify-center gap-4">
            
            {/* Of Course */}
            <button
              onClick={() => setOpen(false)}
              style={{
                transform: `scale(${yesScale})`,
                transition: "transform 0.2s ease",
              }}
              className="px-6 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-medium hover:scale-105"
            >
              Of course
            </button>

            {/* Nah (normal at first, evil after hover) */}
            <button
              onMouseEnter={moveButton}
              style={
                escaped
                  ? {
                      position: "fixed",
                      left: position.x,
                      top: position.y,
                      transform: `scale(${nahScale})`,
                      transition: "all 0.2s ease",
                    }
                  : {
                      transform: `scale(${nahScale})`,
                      transition: "transform 0.2s ease",
                    }
              }
              className="px-6 py-2.5 rounded-xl bg-pink-500 text-white text-sm font-medium"
            >
              Nah
            </button>

          </div>
        ) : (
          <button
            onClick={() => setOpen(false)}
            className="mt-8 px-6 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-medium hover:scale-105 transition"
          >
            She knows she's AAAmazing!
          </button>
        )}
      </div>
    </div>
  );
}