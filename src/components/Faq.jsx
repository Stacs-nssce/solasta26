import React from "react";

const faqs = [
  {
    id: "collapsible1",
    question: "What are the prerequisites for attending Solasta '26?",
    answer:
      "All students with a valid college ID can enter the fest for free. Individual event registrations may have separate fees — check each event's details for specifics.",
  },
  {
    id: "collapsible2",
    question: "Who can participate in the events?",
    answer:
      "The fest is open to all engineering and polytechnic students across Kerala. Some events like CTF and 1 vs 1 Coding may be specifically targeted at CS/IT branches, but most competitions and workshops are open to everyone!",
  },
  {
    id: "collapsible3",
    question: "What are the flagship events this year?",
    answer:
      "Solasta '26 features three flagship events: the intense 10-hour CTF (Capture The Flag) cybersecurity challenge, the 1 vs 1 Coding battle, and the Innovation Auction — a unique tech-business hybrid event. Don't miss them!",
  },
  {
    id: "collapsible4",
    question: "When and where is Solasta '26 happening?",
    answer:
      "Solasta '26 takes place from March 6–8, 2026 at NSS College of Engineering, Palakkad. Events are spread across the Auditorium, Seminar Hall, Programming Lab, and Classrooms. Pre-events start from late February.",
  },
  {
    id: "collapsible5",
    question: "Is there accommodation available?",
    answer:
      "Unfortunately, there are no hostel facilities available during the fest. We recommend participants from other colleges make their own accommodation arrangements. We apologize for any inconvenience.",
  },
  {
    id: "collapsible6",
    question: "How can I become a sponsor?",
    answer:
      "We welcome sponsorships from companies and organizations! Our department is NBA accredited until 2028 and has a proven 100% pass rate. Reach out to us at contact@nssce.ac.in or through the sponsorship coordinator listed on our contact page.",
  },
];

export default function Faq() {
  return (
    <div className="px-2 py-4 xl:px-20">
      <div className="flex justify-start w-full font-clash font-bold">
        <span className="text-white/50 text-[5.5rem] xl:text-[7rem]">FAQs</span>
      </div>

      <div className="flex flex-col gap-4 xl:p-2">
        {faqs.map((faq) => (
          <div key={faq.id} className="font-chakra">
            <div className="mb-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
              <input
                id={faq.id}
                className="toggle hidden"
                type="checkbox"
              />
              <label
                htmlFor={faq.id}
                className="lbl-toggle block cursor-pointer font-semibold text-white/80 text-xl md:text-2xl p-7 hover:text-white transition-colors"
              >
                {faq.question}
              </label>
              <div className="collapsible-content">
                <div className="content-inner text-white/70 p-8 pt-0 leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
