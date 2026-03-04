import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const flagshipEvents = [
  {
    id: "ctf",
    title: "CTF",
    subtitle: "Capture The Flag",
    time: "9 AM – 7 PM",
    date: "Mar 7",
    venue: "CSE Seminar hall (DLH)",
    description:
      "An intense 10-hour hacking and cybersecurity challenge. Crack ciphers, exploit vulnerabilities, and race against the clock in this signature Solasta event.",
    icon: "🛡️",
    gradient: "from-cyan-500/20 to-blue-600/20",
    borderColor: "hover:border-cyan-400/50",
    glowColor: "hover:shadow-[0_0_60px_rgba(6,182,212,0.15)]",
  },
  {
    id: "1v1-coding",
    title: "1 vs 1",
    subtitle: "Coding Battle",
    time: "9 AM – 12 PM",
    date: "Mar 7",
    venue: "Programming Lab",
    description:
      "Head-to-head competitive programming. Prove your speed, logic, and algorithmic prowess in live coding duels.",
    icon: "⚔️",
    gradient: "from-purple-500/20 to-pink-600/20",
    borderColor: "hover:border-purple-400/50",
    glowColor: "hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]",
  },
  {
    id: "innovation-auction",
    title: "Innovation",
    subtitle: "Auction",
    time: "1 PM – 4 PM",
    date: "Mar 7",
    venue: "Turing Hall",
    description:
      "A unique tech-business hybrid event where you pitch innovative ideas and compete through strategic bidding — where creativity meets commerce.",
    icon: "💡",
    gradient: "from-amber-500/20 to-orange-600/20",
    borderColor: "hover:border-amber-400/50",
    glowColor: "hover:shadow-[0_0_60px_rgba(245,158,11,0.15)]",
  },
];

export default function FlagshipEvents() {
  const cardsRef = useRef([]);
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

    cardsRef.current.filter(Boolean).forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="flagship" className="relative py-20 px-4 md:px-8 xl:px-20 overflow-hidden">
      {/* Ambient light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-main_primary/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block font-ibm text-main_primary/80 text-sm tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-main_primary/20 bg-main_primary/5">
            Don't Miss Out
          </span>
          <h2 className="font-clash font-bold text-white text-[2.5rem] md:text-[4rem] leading-tight tracking-wide">
            Flagship{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main_primary to-cyan-300">
              Events
            </span>
          </h2>
          <p className="mt-4 font-chakra text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            The crown jewels of Solasta '26 — events that define the spirit of
            competitive tech culture.
          </p>
        </div>

        {/* Flagship cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {flagshipEvents.map((event, i) => (
            <div
              key={event.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`group relative rounded-3xl p-1 overflow-hidden transition-all duration-700 ${event.glowColor}`}
            >
              {/* Outer gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />

              <div className={`relative rounded-[1.35rem] p-8 h-full border border-white/10 bg-soothing_black/90 backdrop-blur-xl ${event.borderColor} transition-all duration-500`}>
                {/* Icon */}
                <div className="text-5xl mb-6">{event.icon}</div>

                {/* Title */}
                <h3 className="font-clash font-bold text-3xl md:text-4xl text-white leading-tight">
                  {event.title}
                </h3>
                <p className="font-clash font-semibold text-lg text-white/40 -mt-1">
                  {event.subtitle}
                </p>

                {/* Description */}
                <p className="font-chakra text-sm text-white/50 mt-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Meta info */}
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-main_primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-ibm text-xs text-white/40">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-main_primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-ibm text-xs text-white/40">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-main_primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-ibm text-xs text-white/40">{event.venue}</span>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${event.gradient} opacity-30 rotate-45`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
