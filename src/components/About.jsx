import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navlink from "./Navlink";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      trigger.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: trigger.current,
          start: window.innerWidth > 768 ? "top 80%" : "top 20%",
          end: "bottom 80%",
          ease: "power4.easeInOut",
        },
      }
    );

    gsap.fromTo(
      visionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      missionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="h-fit relative pt-4 px-2 xl:px-20">
      {/* Big reveal text */}
      <div className="about flex flex-wrap text-white tracking-wide xl:tracking-[.5rem] text-[1.8rem] sm:text-[4.3rem] md:text-[6rem] lg:text-[5.5rem] xl:text-[6.7rem] leading-[2rem] sm:leading-[5rem] md:leading-[6.5rem] xl:leading-[7.5rem] font-clash font-bold mt-16 max-w-full">
        <span>You might be</span>
        <span>Thinking what is</span>
        <span
          ref={trigger}
          className="text-[3rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] mt-2 md:mt-4 lg:mt-12 w-full sm:w-auto break-words"
        >
          <span className="text-main_primary">{siteConfig.eventName}</span>
        </span>
        <span className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] md:mt-4 lg:mt-8 hidden sm:inline-block">
          ?
        </span>
      </div>

      {/* About Solasta */}
      <div className="flex flex-col xl:flex-row items-center justify-between gap-8 mt-8">
        <div className="font-chakra text-base leading-[5px] xl:mt-4 w-full xl:w-2/3">
          <span className="text-base font-medium text-white xl:text-xl">
            <b>
              {siteConfig.eventName}'{siteConfig.eventYear.slice(2)}
            </b>{" "}
            is the annual techno-cultural fest organized by the{" "}
            {siteConfig.departmentFull} of {siteConfig.fullCollegeName},
            under the banner of <b>{siteConfig.associationName}</b> (
            {siteConfig.associationFull}). This <b>three-day</b> mega event
            celebrates the technical expertise and artistic talents of aspiring
            engineers, featuring competitive coding battles, cybersecurity
            challenges, innovation showcases, creative workshops, and a vibrant
            cultural night. From the intense 10-hour CTF to the Innovation Auction,{" "}
            <b>
              {siteConfig.eventName}'{siteConfig.eventYear.slice(2)}
            </b>{" "}
            offers a diverse range of activities that cater to every interest.
          </span>
        </div>
        <video
          src="/About.mp4"
          autoPlay
          loop
          muted
          className="abvideo w-full md:w-[24rem] xl:w-[28rem] h-[15rem] md:h-[18rem] object-cover rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] xl:mr-10"
        ></video>
      </div>

      {/* About NSSCE */}
      <div className="relative mt-20 font-clash font-bold text-white max-w-full overflow-hidden">
        <span className="flex flex-wrap gap-2 text-[1.8rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] leading-none break-words">
          About <Navlink name={"NSSCE"} link={"/#about"} />{" "}
        </span>
      </div>
      <div className="flex flex-col mt-8 lg:flex-row items-center gap-8 py-8">
        <p className="text-white text-base xl:text-xl font-chakra font-medium">
          {siteConfig.fullCollegeName}, Palakkad is one of the premier
          engineering institutions in Kerala. With a legacy of academic
          excellence and a commitment to producing industry-ready graduates, the
          CSE Department stands as a beacon of innovation. Notably,{" "}
          <span className="text-main_primary font-semibold">
            {siteConfig.nbaAccreditation}
          </span>
          , and the department recently achieved a{" "}
          <span className="text-main_primary font-semibold">
            {siteConfig.passResult}
          </span>
          .
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 mb-8">
        {/* Vision */}
        <div
          ref={visionRef}
          className="group rounded-2xl p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-main_primary/30 hover:bg-white/[0.05]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-main_primary/10 border border-main_primary/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-main_primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="font-clash font-bold text-2xl text-white">
              Our Vision
            </h3>
          </div>
          <p className="font-chakra text-white/60 leading-relaxed">
            {siteConfig.vision}
          </p>
        </div>

        {/* Mission */}
        <div
          ref={missionRef}
          className="group rounded-2xl p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-main_primary/30 hover:bg-white/[0.05]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-main_primary/10 border border-main_primary/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-main_primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-clash font-bold text-2xl text-white">
              Our Mission
            </h3>
          </div>
          <ul className="space-y-3">
            {siteConfig.mission.map((item, i) => (
              <li key={i} className="flex gap-3 font-chakra text-white/60 leading-relaxed">
                <span className="text-main_primary mt-1 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
