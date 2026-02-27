"use client";

import { useEffect, useRef, useState } from "react";

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
    "You’re making a mistake.",
    "This is getting awkward."
  ];

  let message;

  if (hoverCount === 0) {
    message = `Unfortunately she remembers dates!
"Isn’t she amazing?"`;
  } else if (hoverCount < 5) {
    message = escalationMessages[hoverCount - 1];
  } else {
    message = "See? Even the button knows you're wrong.";
  }

  const nahScale = Math.max(1 - hoverCount * 0.1, 0.6);
  const yesScale = 1 + hoverCount * 0.1;

  const moveButton = () => {
    const moveDistance = 120; // how far it glides per hover

    const newX =
      coords.x +
      (Math.random() > 0.5 ? moveDistance : -moveDistance);

    const newY =
      coords.y +
      (Math.random() > 0.5 ? moveDistance : -moveDistance);

    // clamp to viewport
    const safeX = Math.max(
      20,
      Math.min(window.innerWidth - 140, newX)
    );

    const safeY = Math.max(
      20,
      Math.min(window.innerHeight - 70, newY)
    );

    setCoords({ x: safeX, y: safeY });
    setEscaped(true);
    setHoverCount((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-center shadow-2xl">
        
        <p className="text-lg font-medium text-white whitespace-pre-line transition-all duration-300">
          {message}
        </p>

        {hoverCount < 5 ? (
          <div className="mt-8 flex justify-center gap-4">
            
            <button
              onClick={() => setOpen(false)}
              style={{
                transform: `scale(${yesScale})`,
                transition: "transform 0.2s ease"
              }}
              className="px-6 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-medium hover:scale-105"
            >
              Of course
            </button>

            <button
              ref={nahRef}
              onMouseEnter={moveButton}
              style={
                escaped
                  ? {
                      position: "fixed",
                      transform: `translate3d(${coords.x}px, ${coords.y}px, 0) scale(${nahScale})`,
                      transition: "transform 0.35s ease"
                    }
                  : {
                      transform: `scale(${nahScale})`,
                      transition: "transform 0.2s ease"
                    }
              }
              className="px-6 py-2.5 rounded-xl bg-pink-500 text-white text-sm font-medium"
            >
              Nah
            </button>

          </div>
        ) : (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-medium hover:scale-105 transition"
            >
              She knows she's AAAmazing!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}