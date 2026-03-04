// pages/events/non-technical.jsx
import { useEffect, useRef } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const typeMap = {
  efootball: "gaming",
  "lan-gaming": "gaming",
  "ctf-intro": "technical",
  ctf: "technical",
  workshop: "technical",
  "innovation-auction": "technical",
  "tech-quiz": "technical",
  "1-vs-1-coding": "technical",
  exhibition: "technical",
  "blind-coding": "technical",
  "murder-mystery": "fun",
  wikichase: "fun",
  debate: "fun",
  "reel-making": "creative",
  "zine-workshop": "creative",
  inauguration: "ceremony",
  culturals: "cultural",
};

const typeColors = {
  technical: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  gaming: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
  },
  fun: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  creative: {
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    border: "border-pink-500/20",
  },
  cultural: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  ceremony: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
    border: "border-yellow-500/20",
  },
};

export default function NonTechnicalEvents({ posts }) {
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
      if (headerRef.current) {
        gsap.killTweensOf(headerRef.current);
      }
    };
  }, []);

  const nonTechnicalIds = [
    "innovation-auction",
    "zine-workshop",
    "wikichase",
    "debate",
    "reel-making",
    // add others if needed (e.g. inauguration?)
  ];

  const filteredPosts = posts.flat().filter((p) => nonTechnicalIds.includes(p.id));

  return (
    <div className="min-h-screen w-screen bg-soothing_black">
      <Head>
        <title>Non-Technical Events | {siteConfig.eventName} '26</title>
        <meta
          name="description"
          content="Non-technical events at Solasta '26 – debates, creative workshops, culturals, reel making and more"
        />
      </Head>

      <Header id="navbar" />

      <main className="pt-24 pb-16 px-4 md:px-8 xl:px-20">
        <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-16">
          <Link
            href="/events"
            className="inline-block mb-6 font-chakra text-main_primary/70 hover:text-main_primary transition-colors duration-300"
          >
            ← Back to All Events
          </Link>

          <h1 className="font-clash font-bold text-white text-5xl md:text-6xl tracking-wide">
            Non-Technical{" "}
            <span className="text-pink-400">Events</span>
          </h1>

          <p className="mt-4 font-chakra text-white/60 max-w-3xl mx-auto text-lg">
            Creativity, fun, culture — where imagination takes center stage.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, i) => {
              const eventType = typeMap[post.id] || "fun";
              const colors = typeColors[eventType] || typeColors.fun;

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <Link href={`/events/${post.id}`} className="block h-full w-full group overflow-hidden rounded-[2rem] bg-soothing_black border border-white/10 hover:border-white/30 transition-colors duration-500 relative">
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={post.img || '/general_tech_events/cyber.jpeg'}
                        width={600}
                        height={800}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.15]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-soothing_black/20 via-soothing_black/60 to-soothing_black group-hover:to-soothing_black/90 transition-all duration-500" />
                    </div>
                    
                    <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full min-h-[25rem]">
                      <div className="flex justify-between items-start">
                        <span className={`font-ibm text-[10px] tracking-[0.2em] font-medium uppercase px-4 py-2 rounded-full ${colors.bg} ${colors.text} border ${colors.border} backdrop-blur-md transition-transform duration-500`}>
                          {eventType}
                        </span>
                        
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>

                      <div className="mt-auto transform transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className="font-clash font-semibold text-3xl md:text-3.5xl text-white mb-2 leading-tight">
                          {post.title}
                        </h3>
                        
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                          <div className="overflow-hidden">
                            <p className="font-chakra text-sm md:text-base text-white/70 mb-5 line-clamp-3">
                              {post.description || post.content || "Event details coming soon"}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2.5">
                          {post.time && (
                            <div className="flex items-center gap-3 font-ibm text-xs md:text-sm text-white/80">
                              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              {post.time}
                            </div>
                          )}
                          {post.venue && (
                            <div className="flex items-center gap-3 font-ibm text-xs md:text-sm text-white/80">
                              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                              {post.venue}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="font-clash font-bold text-3xl text-white/30">Coming Soon...</p>
              <p className="font-chakra text-white/50 mt-3">Non-technical events will be announced shortly.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromises.readFile(filePath, "utf-8");
    const objectData = JSON.parse(jsonData);

    return {
      props: {
        posts: objectData.posts || [],
      },
    };
  } catch (error) {
    console.error("Error loading events data:", error);
    return {
      props: { posts: [] },
    };
  }
}