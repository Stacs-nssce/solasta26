import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const schedule = {
  "Pre-Events": [
    {
      id: "efootball",
      title: "Efootball Tournament",
      time: "Feb 26 (Onwards)",
      venue: "Online",
      type: "gaming",
      description: "Online Efootball Tournament — Compete with the best and show your skills.",
    },
    {
      id: "ctf-intro",
      title: "CTF Intro Session",
      time: "4 PM – 6 PM, Mar 2",
      venue: "CSE Seminar hall (DLH)",
      type: "technical",
      description: "Learn the basics of Capture The Flag and cybersecurity fundamentals.",
    },
    {
      id: "murder-mystery",
      title: "Murder Mystery",
      time: "4 PM – 6 PM, Mar 5",
      venue: "College Campus",
      type: "fun",
      description: "Put on your detective hats and solve the crime scene.",
    },
  ],
  "Day 1 — Mar 6": [
    {
      id: "inauguration",
      title: "Inauguration Ceremony",
      time: "11:00 AM",
      venue: "Auditorium",
      type: "ceremony",
      description: "The official kickoff of Solasta'26 — lighting the lamp of innovation.",
    },
    {
      id: "workshop",
      title: "Workshop",
      time: "1 PM – 5.30 PM",
      venue: "Programming Lab",
      type: "technical",
      description: "Enhance your skills with our expert-led hands-on workshop.",
    },
    {
      id: "reel-making",
      title: "Reel Making",
      time: "Mar 6 (Onwards)",
      venue: "Campus Wide",
      type: "creative",
      description: "Create the most engaging reels capturing the spirit of Solasta'26.",
    },
  ],
  "Day 2 — Mar 7": [
    {
      id: "ctf",
      title: "CTF — Capture The Flag",
      time: "9 AM – 7 PM",
      venue: "CSE Seminar hall (DLH)",
      type: "technical",
      featured: true,
      description: "Overnight hacking challenge. Test your cybersecurity skills in this flagship event.",
    },
    {
      id: "innovation-auction",
      title: "Innovation Auction",
      time: "1 PM – 4 PM",
      venue: "Turing Hall",
      type: "technical",
      featured: true,
      description: "Pitch your innovative ideas and bid on the best. A unique tech-business hybrid event.",
    },
    {
      id: "tech-quiz",
      title: "Tech Quiz",
      time: "10 AM – 12 PM",
      venue: "Eone Hall",
      type: "technical",
      description: "A quiz for the tech-savvy — test your knowledge across domains.",
    },
    {
      id: "1-vs-1-coding",
      title: "1 vs 1 Coding",
      time: "9 AM – 12 PM",
      venue: "Programming Lab",
      type: "technical",
      featured: true,
      description: "Head-to-head coding battle. Prove your speed, logic, and coding prowess.",
    },
    {
      id: "community-connect",
      title: "Community Connect",
      time: "4 PM – 7 PM",
      venue: "Mexicana",
      type: "fun",
      description: "Join our community meet and connect with peers.",
    },
  ],
  "Day 3 — Mar 8": [
    {
      id: "zine-workshop",
      title: "Zine Workshop",
      time: "9 AM – 12 PM",
      venue: "Auditorium",
      type: "creative",
      description: "Learn the art of zine-making — self-published, small-circulation works.",
    },
    {
      id: "debate",
      title: "Debate",
      time: "9 AM – 12 PM",
      venue: "CSE Seminar hall (DLH)",
      type: "fun",
      description: "Speak your mind in this competitive debate competition.",
    },
    {
      id: "wikichase",
      title: "Wikichase",
      time: "1 PM – 3.30 PM",
      venue: "Programming Lab",
      type: "fun",
      description: "Race through Wikipedia pages — who can navigate the fastest?",
    },
    {
      id: "blind-coding",
      title: "Blind Coding",
      time: "1 PM – 3.30 PM",
      venue: "Programming Lab",
      type: "technical",
      description: "Can you code with your monitor off? The ultimate test of muscle memory.",
    },
    {
      id: "culturals",
      title: "Cultural Night",
      time: "4:30 PM – 7 PM",
      venue: "Auditorium",
      type: "cultural",
      featured: true,
      description: "Dance, music, and fun — the grand finale celebration of Solasta'26.",
    },
  ],
};

const typeColors = {
  technical: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30" },
  gaming: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  fun: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
  creative: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30" },
  cultural: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
  ceremony: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
};

export default function EventTimeline() {
  const tabs = Object.keys(schedule);
  const [activeTab, setActiveTab] = useState(tabs[1]); // Default to Day 1
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="relative py-20 px-4 md:px-8 xl:px-20 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-12">
          <span className="inline-block font-ibm text-main_primary/80 text-sm tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-main_primary/20 bg-main_primary/5">
            Schedule · Mar 6–8, 2026
          </span>
          <h2 className="font-clash font-bold text-white text-[2.5rem] md:text-[4rem] leading-tight tracking-wide">
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main_primary to-cyan-300">
              Timeline
            </span>
          </h2>
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-clash font-semibold text-sm md:text-base px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-main_primary text-black border-main_primary shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  : "text-white/60 border-white/10 bg-white/[0.03] hover:border-white/30 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {schedule[activeTab].map((event, i) => {
              const colors = typeColors[event.type] || typeColors.technical;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group relative rounded-2xl p-6 border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] ${
                    event.featured ? "md:col-span-2 ring-1 ring-main_primary/20" : ""
                  }`}
                >
                  {/* Featured badge */}
                  {event.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="font-ibm text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-main_primary/10 text-main_primary border border-main_primary/30">
                        ★ Flagship
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`font-ibm text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                      >
                        {event.type}
                      </span>
                    </div>

                    <h3 className="font-clash font-bold text-xl md:text-2xl text-white group-hover:text-main_primary transition-colors duration-300 mb-2">
                      {event.title}
                    </h3>

                    <p className="font-chakra text-sm text-white/50 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 font-ibm text-xs text-white/40">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-main_primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-main_primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.venue}
                      </span>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-main_primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
