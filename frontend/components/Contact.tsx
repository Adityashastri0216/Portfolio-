"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Connection Established!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Packet Loss. Try again.");
      }
    } catch {
      toast.error("Network Error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-slate-100/70 dark:bg-slate-900 text-slate-800 dark:text-slate-200 overflow-hidden transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-violet-400/20 dark:bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-2 text-slate-900 dark:text-white">
            <span className="text-violet-600 dark:text-violet-500 text-3xl">{'{}'}</span> Initialize Contact
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            {"// Awaiting secure payload from client..."}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-slate-950 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden transition-colors duration-300"
        >
          {/* Top border highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 opacity-50" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-mono text-cyan-700 dark:text-cyan-400">string name_</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-4 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-mono text-cyan-700 dark:text-cyan-400">string email_</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-4 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-mono text-cyan-700 dark:text-cyan-400">string payload_</label>
            <textarea
              id="message"
              placeholder="System diagnostics..."
              required
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-4 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all min-h-[160px] resize-y font-mono"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full py-4 bg-cyan-500/10 border border-cyan-500/50 text-cyan-700 dark:text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 font-mono"
          >
            {isSubmitting ? "TRANSMITTING..." : "> EXECUTE_SEND()"}
          </button>
        </motion.form>

      </div>
    </section>
  );
}
