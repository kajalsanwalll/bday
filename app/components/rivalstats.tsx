"use client";

import { motion } from "framer-motion";

const stats = [
  {
    label: "Assignments where you were slightly ahead",
    value: "none",
  },
  {
    label: "Debates you almost won",
    value: "2",
  },
  {
    label: "Times you were unnecessarily confident",
    value: "always!",
  },
  {
    label: "Actual respect level",
    value: "tier 1",
  },
];

export default function RivalStats() {
  return (
    <section className="bg-slate-950 text-slate-200 px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Rivalry Analytics 📊
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:scale-[1.02] transition"
            >
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-semibold mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}