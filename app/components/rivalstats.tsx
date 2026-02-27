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

      {/* cursor glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed top-0 left-0 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent"
        >
          Pros or cons?
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-[1.03] hover:bg-pink-400/10 transition-all duration-300"
            >
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-semibold mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* REAL TALK */}
      <section className="relative z-10 mt-32">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Real talk.
          </h2>

          <div className="mt-6 flex justify-center">
            <div className="relative group">
              <Image
                src="/picture.jpeg"
                alt="rival"
                width={350}
                height={350}
                className="rounded-2xl mb-7 object-cover border border-white/10 shadow-xl transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-pink-400/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
              <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-xs text-slate-400 italic">what a nerd!</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-slate-300 leading-relaxed">
            I genuinely feel BLESSED that I got to know the version of you which idk why you're scared to show? Lol!
          </p>

          <p className="mt-6 text-slate-300 leading-relaxed">
            You inspire a lot, may you enjoy great success in life.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            You’re not exactly at my God-level kindness tier, so I wouldn’t even think of comparing you… but I’ll admit, you're good at times.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            I kinda envy your accent. Guess I should just start taking classes from you.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            And I love gossiping with you because you LISTEN and REMEMBER. That’s rare.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            So yeah… happy birthday. Don’t let it get to your head.
          </p>
        </div>
      </section>

      {/* OBSERVATION TIMELINE */}
      <section className="relative z-10 mt-24">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-8">
            Observation Timeline
          </h3>

          <div className="space-y-6 text-slate-300">
            <div>
              <p className="text-sm text-slate-400">First year</p>
              <p className="text-lg">Who the fuck cares?</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Second year</p>
              <p className="text-lg">What a rebel lol.</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Kanha house session</p>
              <p className="text-lg">Hmm. He might be nice.</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Past that</p>
              <p className="text-lg font-medium text-white">
                Whoa. He needs to be my friend.
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Now that i know u</p>
              <p className="text-lg font-medium text-white">
                You're good at DSP and consoling.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* REVIEW SECTION */}
      <section className="relative z-10 mt-16">
       <div
        onMouseEnter={() => setShowNarrator(true)}
        onMouseLeave={() => setShowNarrator(false)}
        onClick={() => setShowNarrator((prev) => !prev)}
        className="mx-auto max-w-2xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl text-center cursor-pointer"
       >
       <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
         Honest Review
       </h3>

    {/* 👀 Narrator line */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: showNarrator && !reviewSent ? 1 : 0,
        y: showNarrator && !reviewSent ? 0 : 10,
      }}
      transition={{ duration: 0.5 }}
      className="text-slate-400 mb-6 italic"
    >
      I've been reviewing you for quite some time now...
    </motion.p>

    {!reviewSent ? (
      <>
        {/* ⭐ Rating */}
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
                  ? "text-pink-400 scale-110 drop-shadow-lg"
                  : "text-slate-500 hover:text-pink-300"
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
          className="px-6 py-2 rounded-full bg-pink-500/80 hover:bg-pink-500 text-white transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Submit Review
        </button>
      </>
    ) : (
      <>
        {/* Verdict reveal */}
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

        {/* 🔁 Redo button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setReviewSent(false);
            setRating(null);
          }}
          className="mt-6 text-sm text-slate-400 hover:text-pink-300 transition"
        >
          Redo rating?
        </button>
      </>
    )}
  </div>
</section>
      
      {/* 🎬 ELITE Bollywood vs Spider-Man Showdown */}
     <section className="relative z-10 mt-24">
      <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-white/5 to-pink-900/10 backdrop-blur-xl border border-white/10 p-10 shadow-2xl text-center">

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
      className="text-slate-300 italic mb-6"
     >
      Bro thinks he's Spider-Man but doesn’t know basic Bollywood lore.
     </motion.p>

     <p className="text-slate-400 mb-6 text-sm">
      Question for the self-proclaimed multiverse traveler:
     </p>

     <p className="text-lg text-white mb-8 font-medium">
      “Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain.”
     </p>

     <div className="flex flex-col gap-3 items-center mb-6">
      {[
        "Shah Rukh Khan",
        "Salman Khan",
        "Ranbir Kapoor",
       ].map((option) => (
        <button
          key={option}
          onClick={() => {
            if (option === "Shah Rukh Khan") {
              setBollywoodVerdict("Anyway luck hi tha. Bollywood citizenship restored.");
              setEnergyLevel(80);
            } else {
              setBollywoodVerdict("Exactly. Spider-Man energy. Zero Bollywood knowledge.");
              setEnergyLevel(20);
            }
          }}
          className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-pink-400/20 transition-all duration-300 hover:scale-105 active:scale-95"
         >
          {option}
        </button>
      ))}
     </div>

    {/* Energy Meter */}
    {energyLevel !== null && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6"
      >
        <p className="text-sm text-slate-400 mb-2">
          Bollywood Knowledge Meter
        </p>

        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${energyLevel}%` }}
            transition={{ duration: 0.8 }}
            className="h-full bg-gradient-to-r from-pink-400 to-fuchsia-400"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-pink-300 italic"
        >
          {bollywoodVerdict}
        </motion.p>
      </motion.div>
     )}
     </div>
    </section>

      {/* FOOTER + KAJAL REVEAL */}
      <footer className="relative z-10 mt-32 pb-10 text-center">
        <div className="mx-auto max-w-xl rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-6 shadow-lg">
          <p className="text-sm text-slate-400 tracking-wide">
            built with unreasonable dedication
          </p>

          <div className="relative group inline-block mt-2">
  <motion.p
    onClick={() => setShowKajal(!showKajal)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="text-lg font-semibold text-white cursor-pointer transition duration-300"
  >
    KAJAL 💅
  </motion.p>

  {/* Hover text */}
  <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
    <p className="text-xs text-pink-300 whitespace-nowrap">
      not yet done? click me then.
    </p>
  </div>
</div>

          {showKajal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6 flex flex-col items-center"
            >

              <div
                onClick={() => window.open("https://tenor.com/en-IN/view/i-was-just-kidding-ralphie-a-christmas-story-just-joking-jk-gif-19562592", "_blank")}
                className="relative group cursor-pointer"
              >
                <Image
                  src="/mypic.png"
                  alt="Kajal"
                  width={150}
                  height={150}
                  className="rounded-2xl object-cover border border-white/10 shadow-xl transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 rounded-2xl bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center px-4">
                  <p className="text-sm text-pink-200 italic">
                    at this point, have a look at my portfolio.
                  </p>
                </div>
              </div>
              <p className="text-pink-300 mt-4 text-lg italic mb-4">
                  A whimsical baddie.
                 </p>
            </motion.div>
          )}
        </div>
      </footer>
    </section>
  );
}