// pages/events/index.jsx
import { useEffect, useRef } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { siteConfig } from "@/config/site";

export default function Events() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );
    }

    return () => {
      gsap.killTweensOf(headerRef.current);
    };
  }, []);

  const categories = [
    {
      title: "Technical Events",
      href: "/events/technical",
      color: "from-cyan-500 to-cyan-300",
      description: "CTF, Coding battles, Tech Quiz, Workshops & more",
    },
    {
      title: "Non Technical Events",
      href: "/events/non-technical",
      color: "from-pink-500 to-amber-400",
      description: "Debates, Reel Making, Wikichase, Culturals & more",
    },
    {
      title: "Pre Events",
      href: "/events/pre",
      color: "from-purple-500 to-purple-300",
      description: "Efootball, CTF Intro, Murder Mystery & more",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-soothing_black">
      <Head>
        <title>Events | {siteConfig.eventName} '26</title>
        <meta
          name="description"
          content="Discover Technical, Non-Technical & Pre-Events at Solasta '26"
        />
      </Head>

      <Header id="navbar" />

      <main className="pt-24 pb-20 px-6 md:px-12 xl:px-24">
        <div
          ref={headerRef}
          className="max-w-7xl mx-auto text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-ibm text-main_primary/80 text-sm tracking-[0.3em] uppercase mb-5 px-5 py-2 rounded-full border border-main_primary/20 bg-main_primary/5">
            {siteConfig.eventName} '26
          </span>

          <h1 className="font-clash font-bold text-white text-5xl md:text-7xl leading-tight tracking-wide">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main_primary to-cyan-300">
              Events
            </span>
          </h1>

          <p className="mt-6 font-chakra text-white/60 max-w-3xl mx-auto text-lg md:text-xl">
            Choose your category and dive into the action-packed lineup of Solasta '26.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 perspective-[1200px]">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} passHref>
              <div
                className={`
                  group relative h-auto min-h-[320px] md:min-h-[420px] rounded-3xl overflow-hidden
                  border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent
                  backdrop-blur-2xl transition-all duration-700 ease-out
                  hover:scale-[1.04] hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]
                  hover:border-white/25 cursor-pointer flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12
                  transform-gpu
                `}
              >
                {/* Glow background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br ${cat.color} blur-3xl rounded-3xl`}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent group-hover:from-black/45 transition-all duration-700" />

                <div className="relative z-10 pb-6 md:pb-8">
                  <h2
                    className={`
                      font-clash font-extrabold text-3xl xs:text-3.5xl sm:text-4xl md:text-5xl
                      leading-[1.2] sm:leading-[1.15] tracking-tight
                      text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-100
                      group-hover:bg-gradient-to-br group-hover:from-white group-hover:via-${cat.color.split("from-")[1]?.split("-")[0] || "cyan"}-200 group-hover:to-${cat.color.split("to-")[1] || "cyan"}-300
                      transition-all duration-700 ease-out
                      whitespace-normal break-words
                    `}
                  >
                    {cat.title}
                  </h2>

                  <p className="mt-4 md:mt-6 font-chakra text-base sm:text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-500 tracking-wide">
                    {cat.description}
                  </p>
                </div>

                {/* Accent glow lines */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${cat.color} opacity-70 blur-md scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out`}
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000 delay-200`}
                />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}