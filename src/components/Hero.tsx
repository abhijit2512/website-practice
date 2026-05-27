import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, GraduationCap, Users, BookOpen } from 'lucide-react';
import { trustBadges } from '../data/site';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-brand-gradient text-white">
      {/* Decorative shapes */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full bg-cta-gradient opacity-30 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[460px] w-[460px] rounded-full bg-accent-500 opacity-25 blur-3xl animate-float-slower"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl container-px pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 chip"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Premium online learning for Indian students
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Learn with clarity.
            <br />
            Grow with{' '}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#22d3ee_0%,#a78bfa_60%,#facc15_100%)]">
              guidance that cares.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-2xl text-base sm:text-lg text-white/80"
          >
            Educators United brings experienced mentors, structured online learning and personalised
            academic support together — so every student gets the confidence and clarity they
            deserve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#courses" className="btn-primary">
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Us
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-2.5"
            aria-label="Why students trust us"
          >
            {trustBadges.map((b) => (
              <li key={b} className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" /> {b}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual side */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 30, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto max-w-md"
          >
            <div className="glass-card p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-cta-gradient grid place-items-center text-white shadow-glow">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-950">Live Mentor Session</p>
                  <p className="text-xs text-slate-500">Today · 6:00 PM IST</p>
                </div>
                <span className="ml-auto chip-light">Online</span>
              </div>
              <div className="mt-5 rounded-xl bg-gradient-to-br from-brand-50 to-white p-5 ring-1 ring-brand-100">
                <p className="text-sm text-slate-600">Topic</p>
                <p className="font-display text-lg font-bold text-brand-950">
                  Concept Clarity: Algebra Essentials
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <Stat icon={<Users className="h-4 w-4" />} label="Mentors" value="40+" />
                  <Stat icon={<BookOpen className="h-4 w-4" />} label="Programs" value="20+" />
                  <Stat icon={<GraduationCap className="h-4 w-4" />} label="Students" value="500+" />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Avatar gradient="from-pink-400 to-fuchsia-500" />
                  <Avatar gradient="from-cyan-400 to-blue-500" />
                  <Avatar gradient="from-amber-400 to-orange-500" />
                </div>
                <p className="text-xs text-slate-500">Joined by learners across India</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-card px-4 py-3 hidden sm:flex items-center gap-3"
            >
              <div className="h-8 w-8 rounded-lg bg-emerald-500/15 text-emerald-600 grid place-items-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Personalised plan</p>
                <p className="text-sm font-semibold text-brand-950">Built for your goal</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white px-2 py-3 ring-1 ring-slate-100">
      <div className="mx-auto h-7 w-7 rounded-md bg-brand-50 text-brand-700 grid place-items-center">
        {icon}
      </div>
      <p className="mt-1.5 text-sm font-bold text-brand-950">{value}</p>
      <p className="text-[10px] uppercase tracking-wide text-slate-500">{label}</p>
    </div>
  );
}

function Avatar({ gradient }: { gradient: string }) {
  return (
    <span
      className={`inline-block h-7 w-7 rounded-full ring-2 ring-white bg-gradient-to-br ${gradient}`}
      aria-hidden="true"
    />
  );
}
