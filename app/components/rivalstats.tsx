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
  background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(244,63,94,0.05) 100%)",
  backdropFilter: "blur(24px)",
  boxShadow: "0 20px 60px rgba(244, 63, 94, 0.08), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.10)",
};

export default function RivalStats() {
  const [feedbackText, setFeedbackText] = useState("Click here to leave a review");
  const [showKajal, setShowKajal] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [reviewSent, setReviewSent] = useState(false);
  const [showNarrator, setShowNarrator] = useState(false);
  const [bollywoodVerdict, setBollywoodVerdict] = useState<string | null>(null);
  const [energyLevel, setEnergyLevel] = useState<number | null>(null);

  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
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

  const handleFeedbackClick = () => {
    setFeedbackText("Brave of you to think I need your feedback LOL.");
  };

  return (
    <section className="relative min-h-screen text-slate-200 overflow-hidden px-6 py-24">

      {/* dreamy background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-transparent to-rose-950/20 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* cursor glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed top-0 left-0 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          style={{
            background: "linear-gradient(135deg, #f9a8d4 0%, #f472b6 30%, #e879f9 60%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 20px rgba(232, 121, 249, 0.25))",
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
              className="relative rounded-2xl p-6 border border-white/10 transition-all duration-300 group overflow-hidden"
              style={cardStyle}
            >
              {/* hover shimmer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400/0 to-fuchsia-400/0 group-hover:from-pink-400/8 group-hover:to-fuchsia-400/8 transition-all duration-300" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-xl font-semibold text-slate-100">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* REAL TALK */}
      <section className="relative z-10 mt-32">
        <div className="mx-auto max-w-2xl relative">
          {/* Outer glow ring */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-pink-400/20 via-fuchsia-400/10 to-rose-400/20 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 p-10 shadow-2xl" style={cardStyle}>
            {/* shimmer top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />

            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Real talk.
            </h2>

            <div className="mt-8 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pink-400/30 to-fuchsia-400/20 blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
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
              <p key={i} className="mt-5 text-slate-300 leading-relaxed">{text}</p>
            ))}

            <p className="mt-4 text-slate-500 leading-relaxed">
              So yeah… happy birthday. Don't let it get to your head.
            </p>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* OBSERVATION TIMELINE */}
      <section className="relative z-10 mt-16">
        <div className="mx-auto max-w-2xl relative">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-fuchsia-400/15 via-transparent to-pink-400/15 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 p-10 shadow-2xl" style={cardStyle}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent" />

            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10">
              Observation Timeline
            </h3>

            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-pink-400/40 via-fuchsia-400/30 to-transparent" />

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
                    {/* dot */}
                    <div className={`absolute -left-10 top-1.5 w-2 h-2 rounded-full border ${item.highlight ? "bg-pink-400 border-pink-300" : "bg-white/20 border-white/20"}`} />
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{item.era}</p>
                    <p className={`text-lg leading-snug ${item.highlight ? "font-medium text-white" : "text-slate-300"}`}>
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
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-pink-400/15 via-transparent to-fuchsia-400/15 blur-sm" />
          <div
            onMouseEnter={() => setShowNarrator(true)}
            onMouseLeave={() => setShowNarrator(false)}
            onClick={() => setShowNarrator((prev) => !prev)}
            className="relative rounded-3xl border border-white/10 p-8 shadow-2xl text-center cursor-pointer"
            style={cardStyle}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />

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
              className="text-slate-400 mb-6 italic text-sm"
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
                      className={`text-3xl transition-all duration-300 ${
                        rating && rating >= star
                          ? "text-pink-400 scale-110 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]"
                          : "text-slate-600 hover:text-pink-300"
                      }`}
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
                    background: "linear-gradient(135deg, rgba(244,63,94,0.7), rgba(232,121,249,0.6))",
                    border: "1px solid rgba(244,63,94,0.4)",
                    boxShadow: "0 0 20px rgba(244,63,94,0.15)",
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
                  className="mt-6 text-lg text-pink-300 italic"
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
                  className="mt-6 text-xs text-slate-500 hover:text-pink-300 transition tracking-wide uppercase"
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
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-rose-400/15 via-pink-400/5 to-fuchsia-400/15 blur-sm" />
          <div className="relative rounded-3xl border border-white/10 p-10 shadow-2xl text-center" style={cardStyle}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />

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
              className="text-slate-400 italic mb-4 text-sm"
            >
              Bro thinks he's Spider-Man but doesn't know basic Bollywood lore.
            </motion.p>

            <p className="text-slate-500 mb-5 text-xs uppercase tracking-widest">
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
                  className="w-52 px-6 py-2.5 rounded-full text-sm text-slate-200 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(244,63,94,0.15)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
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
                <p className="text-xs text-slate-500 mb-3 uppercase tracking-widest">
                  Bollywood Knowledge Meter
                </p>

                <div className="w-full bg-white/8 rounded-full h-2.5 overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${energyLevel}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #f43f5e, #e879f9)",
                      boxShadow: "0 0 12px rgba(232,121,249,0.4)",
                    }}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-5 text-pink-300 italic text-sm"
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
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-pink-400/15 via-transparent to-fuchsia-400/10 blur-sm" />
          <div className="relative rounded-2xl border border-white/10 px-6 py-6 shadow-lg" style={cardStyle}>
            <p className="text-xs text-slate-500 tracking-widest uppercase">
              built with unreasonable dedication
            </p>

            <div className="relative group inline-block mt-3">
              <motion.p
                onClick={() => setShowKajal(!showKajal)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="text-lg font-semibold cursor-pointer transition duration-300"
                style={{
                  background: "linear-gradient(135deg, #f9a8d4, #e879f9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                KAJAL 
              </motion.p>

              <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-xs text-pink-400 whitespace-nowrap">
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
                  onClick={() => window.open("https://tenor.com/en-IN/view/i-was-just-kidding-ralphie-a-christmas-story-just-joking-jk-gif-19562592", "_blank")}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pink-400/30 to-fuchsia-400/20 blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
                  <Image
                    src="/mypic.png"
                    alt="Kajal"
                    width={150}
                    height={150}
                    className="relative rounded-2xl object-cover border border-white/10 shadow-xl transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center px-4">
                    <p className="text-sm text-pink-200 italic">
                      at this point, have a look at my portfolio.
                    </p>
                  </div>
                </div>
                <p className="text-pink-300 mt-5 text-lg italic mb-2">
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