"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { label: "Assignments where you were slightly ahead", value: "None" },
  { label: "Number of times I pointed out your mistakes", value: "Lost count" },
  { label: "Times you were unnecessarily confident", value: "Always!" },
  { label: "Actual respect level", value: "Unasi percent (google it)" },
  { label: "Dual personality check?", value: "A big YES." },
  { label: "Honest review", value: "Sometimes you suck!" },
  { label: "Your handwriting", value: "Maybe a secret code only you understand?" },
  { label: "Maturity level", value: "Works too hard but blushes when complimented" },
];

const cardStyle = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 60%, rgba(180,120,60,0.05) 100%)",
  backdropFilter: "blur(24px)",
  boxShadow:
    "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
};

export default function RivalStats() {
  const [showKajal, setShowKajal] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [reviewSent, setReviewSent] = useState(false);
  const [showNarrator, setShowNarrator] = useState(false);
  const [bollywoodVerdict, setBollywoodVerdict] = useState<string | null>(null);
  const [energyLevel, setEnergyLevel] = useState<number | null>(null);

  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
    const speed = 0.06;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX - 160;
      mouseY = e.clientY - 160;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      glow.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    animate();
    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <section
      className="relative min-h-screen text-slate-200 overflow-hidden px-6 py-24"
      style={{ background: "#0f0e0c" }}
    >
      {/* Warm gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-transparent to-stone-950/20 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-800/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-orange-900/8 rounded-full blur-[110px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Cursor glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed top-0 left-0 w-80 h-80 rounded-full blur-3xl z-0"
        style={{ background: "rgba(180,130,80,0.08)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          style={{
            background: "linear-gradient(135deg, #f0dfc0 0%, #d4a574 45%, #c4956a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 2px 12px rgba(180,130,80,0.2))",
          }}
        >
          Pros or cons?
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="relative rounded-2xl p-6 border border-white/8 transition-all duration-300 group overflow-hidden"
              style={cardStyle}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/0 to-orange-400/0 group-hover:from-amber-400/6 group-hover:to-orange-400/5 transition-all duration-300" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-xl font-semibold" style={{ color: "#c4b09a" }}>{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* REAL TALK */}
      <section className="relative z-10 mt-32">
        <div className="mx-auto max-w-2xl relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-500/12 via-transparent to-orange-500/10 blur-sm" />
          <div className="relative rounded-2xl border border-white/8 p-10 shadow-2xl" style={cardStyle}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />

            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Real talk.
            </h2>

            <div className="mt-8 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-400/15 blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
                <Image
                  src="/picture.jpeg"
                  alt="rival"
                  width={350}
                  height={350}
                  className="relative rounded-2xl mb-7 object-cover border border-white/10 shadow-xl transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-xs text-slate-400 italic">what a nerd!</span>
                </div>
              </div>
            </div>

            {[
              "I genuinely feel BLESSED that I got to know the version of you which idk why you're scared to show? Lol!",
              "You inspire a lot, may you enjoy great success in life.",
              "You're not exactly at my God-level kindness tier, so I wouldn't even think of comparing you… but I'll admit, you're good at times.",
              "I kinda envy your accent. Guess I should just start taking classes from you.",
              "And I love gossiping with you because you LISTEN and REMEMBER. That's rare.",
            ].map((text, i) => (
              <p key={i} className="mt-5 leading-relaxed" style={{ color: "#b8a99a" }}>{text}</p>
            ))}

            <p className="mt-4 leading-relaxed" style={{ color: "#6b5e54" }}>
              So yeah… happy birthday. Don't let it get to your head.
            </p>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-amber-600/25 to-transparent" />
          </div>
        </div>
      </section>

      {/* OBSERVATION TIMELINE */}
      <section className="relative z-10 mt-16">
        <div className="mx-auto max-w-2xl relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 blur-sm" />
          <div className="relative rounded-2xl border border-white/8 p-10 shadow-2xl" style={cardStyle}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10">
              Observation Timeline
            </h3>

            <div className="relative">
              <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/30 via-amber-600/20 to-transparent" />

              <div className="space-y-8 pl-10">
                {[
                  { era: "First year", note: "Who the fuck cares?", highlight: false },
                  { era: "Second year", note: "What a rebel lol.", highlight: false },
                  { era: "Kanha house session", note: "Hmm. He might be nice.", highlight: false },
                  { era: "Past that", note: "Whoa. He needs to be my friend.", highlight: true },
                  { era: "Now that i know u", note: "You are good at DSP and consoling.", highlight: true },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div
                      className={`absolute -left-10 top-1.5 w-2 h-2 rounded-full border ${
                        item.highlight
                          ? "border-amber-400"
                          : "bg-white/15 border-white/15"
                      }`}
                      style={item.highlight ? { background: "#d4a574", borderColor: "#c4956a" } : {}}
                    />
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{item.era}</p>
                    <p
                      className={`text-lg leading-snug ${item.highlight ? "font-medium text-white" : ""}`}
                      style={!item.highlight ? { color: "#9a8a7a" } : {}}
                    >
                      {item.note}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW SECTION */}
      <section className="relative z-10 mt-16">
        <div className="mx-auto max-w-2xl relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 blur-sm" />
          <div
            onMouseEnter={() => setShowNarrator(true)}
            onMouseLeave={() => setShowNarrator(false)}
            onClick={() => setShowNarrator((prev) => !prev)}
            className="relative rounded-2xl border border-white/8 p-8 shadow-2xl text-center cursor-pointer"
            style={cardStyle}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Honest Review
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: showNarrator && !reviewSent ? 1 : 0,
                y: showNarrator && !reviewSent ? 0 : 10,
              }}
              transition={{ duration: 0.5 }}
              className="mb-6 italic text-sm"
              style={{ color: "#7a6a5a" }}
            >
              Ive been reviewing you for quite some time now...
            </motion.p>

            {!reviewSent ? (
              <>
                <div className="flex justify-center gap-3 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={(e) => {
                        e.stopPropagation();
                        setRating(star);
                      }}
                      className="text-3xl transition-all duration-300"
                      style={{
                        color: rating && rating >= star ? "#d4a574" : "#3a3028",
                        filter:
                          rating && rating >= star
                            ? "drop-shadow(0 0 6px rgba(196,149,106,0.5))"
                            : "none",
                        transform: rating && rating >= star ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      ★
                    </button>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!rating) return;
                    setReviewSent(true);
                  }}
                  className="px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, rgba(196,149,106,0.7), rgba(212,165,116,0.6))",
                    border: "1px solid rgba(196,149,106,0.35)",
                    boxShadow: "0 0 18px rgba(196,149,106,0.12)",
                  }}
                >
                  Submit Review
                </button>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2 }}
                  className="mt-6 text-lg italic"
                  style={{ color: "#c4956a" }}
                >
                  {rating && rating < 3
                    ? "Oh so we're enemies now? Noted."
                    : rating === 3
                    ? "Mid rating? I expected better taste."
                    : rating === 4
                    ? "Almost perfect. As expected."
                    : "5 stars? Finally some intelligence."}
                </motion.div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setReviewSent(false);
                    setRating(null);
                  }}
                  className="mt-6 text-xs transition tracking-wide uppercase"
                  style={{ color: "#5a4f47" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#c4956a")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#5a4f47")}
                >
                  Redo rating?
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* BOLLYWOOD SHOWDOWN */}
      <section className="relative z-10 mt-16">
        <div className="mx-auto max-w-2xl relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 blur-sm" />
          <div className="relative rounded-2xl border border-white/8 p-10 shadow-2xl text-center" style={cardStyle}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-white mb-4"
            >
              The Great Identity Crisis
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="italic mb-4 text-sm"
              style={{ color: "#7a6a5a" }}
            >
              Bro thinks he's Spider-Man but doesn't know basic Bollywood lore.
            </motion.p>

            <p className="mb-5 text-xs uppercase tracking-widest" style={{ color: "#5a5048" }}>
              Question for the self-proclaimed multiverse traveler:
            </p>

            <p className="text-xl text-white mb-8 font-medium tracking-tight">
              "Rahul! Naam to suna hi hoga?"
            </p>

            <div className="flex flex-col gap-3 items-center mb-6">
              {["Shah Rukh Khan", "Salman Khan", "Ranbir Kapoor"].map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    if (option === "Shah Rukh Khan") {
                      setBollywoodVerdict("Anyway luck hi tha. Bollywood citizenship restored.");
                      setEnergyLevel(80);
                    } else {
                      setBollywoodVerdict("Exactly. Spider-Man energy. Zero Bollywood knowledge.");
                      setEnergyLevel(20);
                    }
                  }}
                  className="w-52 px-6 py-2.5 rounded-full text-sm transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#c4b09a",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(196,149,106,0.12)";
                    e.currentTarget.style.borderColor = "rgba(196,149,106,0.25)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            {energyLevel !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6"
              >
                <p className="text-xs mb-3 uppercase tracking-widest" style={{ color: "#5a5048" }}>
                  Bollywood Knowledge Meter
                </p>

                <div className="w-full rounded-full h-2.5 overflow-hidden border border-white/5" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${energyLevel}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #c4956a, #d4a574)",
                      boxShadow: "0 0 10px rgba(196,149,106,0.3)",
                    }}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-5 italic text-sm"
                  style={{ color: "#c4956a" }}
                >
                  {bollywoodVerdict}
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER + KAJAL REVEAL */}
      <footer className="relative z-10 mt-32 pb-10 text-center">
        <div className="mx-auto max-w-xl relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/8 blur-sm" />
          <div className="relative rounded-2xl border border-white/8 px-6 py-6 shadow-lg" style={cardStyle}>
            <p className="text-xs tracking-widest uppercase" style={{ color: "#5a5048" }}>
              built with unreasonable dedication
            </p>

            <div className="relative group inline-block mt-3">
              <motion.p
                onClick={() => setShowKajal(!showKajal)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="text-lg font-semibold cursor-pointer transition duration-300"
                style={{
                  background: "linear-gradient(135deg, #f0dfc0, #d4a574)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                KAJAL
              </motion.p>

              <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-xs whitespace-nowrap" style={{ color: "#c4956a" }}>
                  not yet done? click me then.
                </p>
              </div>
            </div>

            {showKajal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-col items-center"
              >
                <div
                  onClick={() =>
                    window.open(
                      "https://tenor.com/en-IN/view/i-was-just-kidding-ralphie-a-christmas-story-just-joking-jk-gif-19562592",
                      "_blank"
                    )
                  }
                  className="relative group cursor-pointer"
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-400/15 blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
                  <Image
                    src="/mypic.png"
                    alt="Kajal"
                    width={150}
                    height={150}
                    className="relative rounded-2xl object-cover border border-white/10 shadow-xl transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center px-4">
                    <p className="text-sm italic" style={{ color: "#e8c99a" }}>
                      at this point, have a look at my portfolio.
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-lg italic mb-2" style={{ color: "#c4956a" }}>
                  A whimsical baddie.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </footer>
    </section>
  );
}