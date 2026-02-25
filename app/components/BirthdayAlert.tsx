"use client";

import { useEffect, useState } from "react";

export default function BirthdayAlert() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="mx-4 max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-center shadow-2xl">
        
        <p className="text-lg font-medium text-white">
          Unfortunately she remembers dates!  
          <br />
          "Isn't she amazing?"
        </p>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 px-6 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-medium hover:scale-105 transition"
        >
          Of course!
        </button>
      </div>
    </div>
  );
}