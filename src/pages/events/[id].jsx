import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import fsPromises from "fs/promises";
import path from "path";
import { gsap } from "gsap";

function EventsDetails(props) {
  //create a pop up for the event Registration showing the embeded form
  const [popUp, setPopUp] = React.useState(false);

  const card = React.useRef(null);
  const title = React.useRef(null);
  const subtitle = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      subtitle.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );
    gsap.fromTo(
      title.current,
      { opacity: 0, y: 5 },
      { opacity: 1, y: 0, duration: 1, delay: 0.7 }
    );
    gsap.fromTo(
      card.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.7, ease: "back.out(1.7)" }
    );
  }, []);

  React.useEffect(() => {
    if (popUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popUp]);

  return (
    <>
      <Head>
        <title>Event Details</title>
      </Head>
      <section>
        <Header />
        <div className="h-fit pt-24 p-6 bg-black text-white">
          <div className="flex flex-col items-center ">
            <p
              className="text-xl font-medium font-clash text-center"
              ref={subtitle}
            >
              Solasta presents
            </p>
            <h1
              className="text-[3rem] xl:text-[4rem] font-clash font-semibold text-center"
              ref={title}
            >
              {props.title}
            </h1>

            <div
              className="flex flex-col mt-[2rem] md:flex-row rounded-xl justify-between w-full md:w-[90%] font-clash bg-gray/25"
              ref={card}
            >
              <Image
                src={props.image}
                alt={props.title}
                width={500}
                height={500}
              />
              <div className="relative flex flex-col justify-between w-full px-2 md:p-8 gap-16">
                <div className="flex flex-col gap-1">
                  <div className="flex relative mt-6 md:mt-0 pb-2">
                    <div className="w-8 h-7 bg-white rounded-full border-[2px] border-white/70"></div>
                    <div className="absolute left-4 w-8 h-7 rounded-full border-[2px] border-white/70"></div>
                  </div>

                  <h3 className="font-medium text-[1.5rem] md:text-8 pb-2">
                    {props.content}
                  </h3>
                  <p>{props.description}</p>

                  {props.hasRegistration && (
                    <div className="grid grid-cols-2 pt-6 text-[1.1rem] tracking-wide w-fit font-medium">
                      <div className="flex flex-col pr-4">
                        {props.pricepool != false && <span>Prize Pool :</span>}
                        <span>Reg Fee :</span>
                        <span>End Date :</span>
                      </div>

                      <div className="flex flex-col text-white font-bold">
                        {props.pricepool != false && (
                          <span className="font-normal">
                            ₹{props.pricepool}
                          </span>
                        )}

                        <span className="font-normal">
                          {props.regfee === "0" ? "Free" : `₹${props.regfee}`}
                        </span>

                        <span className="font-normal">
                          {props.enddate}
                        </span>
                      </div>
                    </div>
                  )}

                  {props.c1name !== "" && props.c1name !== "Coordinator" && (
                    <>
                      <h3 className="text-white text-[1.5rem] font-sans font-bold mb-2 mt-4">
                        Coordinator Details
                      </h3>

                      <div className="flex gap-2 text-[1.1rem] tracking-wide w-fit font-medium">
                        <div className="flex flex-col pr-4">
                          <span>{props.c1name} :</span>
                          {props.c2name != false && props.c2name !== "" && <span>{props.c2name} :</span>}
                          {props.c3name != false && props.c3name !== "" && <span>{props.c3name} :</span>}
                        </div>
                        <div className="flex flex-col text-white font-bold">
                          <Link href={`tel:${props.c1number}`}>
                            <span className="font-normal hover:text-main_primary transition duration-300 ease-in-out">
                              {props.c1number}
                            </span>
                          </Link>
                          {props.c2name != false && props.c2name !== "" && (
                            <Link href={`tel:${props.c2number}`}>
                              <span className="font-normal hover:text-main_primary transition duration-300 ease-in-out">
                                {props.c2number}
                              </span>
                            </Link>
                          )}
                          {props.c3name != false && props.c3name !== "" && (
                            <Link href={`tel:${props.c3number}`}>
                              <span className="font-normal hover:text-main_primary transition duration-300 ease-in-out">
                                {props.c3number}
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {props.hasRegistration ? (
                  <button
                    className={`relative bottom-5 w-full rounded-full p-2 font-medium transition duration-300 ease-in-out ${
                      props.isRegOpen === false || props.reg === "Register Closed"
                        ? "bg-white/20 text-white/50 cursor-not-allowed hover:bg-white/20 hover:text-white/50"
                        : "bg-white text-black hover:bg-gray hover:text-white"
                    }`}
                    disabled={props.isRegOpen === false || props.reg === "Register Closed"}
                    onClick={() => {
                      if (props.isRegOpen !== false && props.reg !== "Register Closed") {
                        if (props.reglink && props.reglink !== "") {
                          window.open(props.reglink, "_blank", "noopener,noreferrer");
                        } else {
                          setPopUp(true);
                        }
                      }
                    }}
                  >
                    {props.isRegOpen === false || props.reg === "Register Closed" ? "Registration Closed" : props.reg}
                  </button>
                ) : (
                  <div className="relative bottom-5 w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-white/10 p-3.5 font-medium text-center text-white/90 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No registration required. Just come and enjoy!</span>
                  </div>
                )}
              </div>
            </div>

            {props.rulehead === "" ? null : (
  <div className="font-clash flex flex-col mt-[2rem] p-3 md:p-6 rounded-xl justify-between w-full md:w-[90%] bg-gray/25">
    <h1 className="font-semibold text-3xl">{props.rulehead}</h1>

    {/* If rules is sectioned format */}
    {Array.isArray(props.rules) && props.rules.length > 0 && typeof props.rules[0] === "object" ? (
      props.rules.map((section, index) => (
        <div key={index} className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl">
            {section.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      /* Fallback for simple rules array */
      <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl mt-4">
        {Array.isArray(props.rules) &&
          props.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
      </ul>
    )}
  </div>
)}
          </div>
        </div>

        <Footer />
      </section>

      {popUp && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center animate-fadeIn ">
          <div className="relative w-full h-full max-w-[90%] lg:max-w-[80%]  xl:max-w-[70%]   max-h-[90%] flex flex-col justify-center items-center">
            <div className="absolute top-0 right-0 p-4">
              <button
                className="bg-transparent text-black rounded-full w-12 h-12 flex text-xl justify-center items-center font-semibold hover:bg-main_primary/90 hover:text-white transition duration-300 ease-in-out "
                onClick={() => setPopUp(false)}
              >
                X
              </button>
            </div>
            <iframe
              width="100%"
              height="100%"
              className="rounded-md"
              src={props.reglink}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const paths = [];
  objectData.posts.forEach((post) => {
    post.forEach((post) => {
      paths.push({ params: { id: post.id.toString() } });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const id = context.params.id;

  const post = objectData.posts.flat().find((post) => post.id == id);

  return {
    props: {
      title: post.title || "",
      image: post.img || "",
      content: post.content || "",
      description: post.description || "",
      c1name: post.c1name || "",
      c1number: post.c1no || "",
      c2name: post.c2name || false,
      c2number: post.c2no || false,
      c3name: post.c3name || false,
      c3number: post.c3no || false,
      regfee: post.regfee || "",
      pricepool: post.pricepool || false,
      enddate: post.enddate || "",
      register: post.reg || "",
      reglink: post.reglink || "",
      reg: post.reg || "",
      isRegOpen: post.isRegOpen !== undefined ? post.isRegOpen : true,
      hasRegistration: post.hasRegistration !== undefined ? post.hasRegistration : true,
      rulehead: post.ruleheader || "",
      rules: post.rules || [],
    },
  };
}

export default EventsDetails;
