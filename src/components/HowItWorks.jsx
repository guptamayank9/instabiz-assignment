import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { waLink } from "../data/puppies";

const steps = [
  { title: "Choose your breed", text: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle." },
  { title: "Get photos & details", text: "Our team will share real photos, health details, and all necessary information directly on WhatsApp." },
  { title: "Secure & safe delivery", text: "Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free." },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how" className="bg-gradient-to-b from-[#f8d493] to-[#ecb561] py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* LEFT: steps */}
        <div>
          <h2 className="text-6xl leading-[0.95] sm:text-7xl">Your puppy journey</h2>
          <p className="mt-5 max-w-md text-lg">
            A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
          </p>

          <div className="mt-12 space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                onViewportEnter={() => setActive(i)}
                viewport={{ amount: 0.8 }}
                className="flex gap-5"
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-ink font-display text-2xl font-black transition-colors duration-300 ${
                    active === i ? "bg-rust text-white" : "bg-cream"
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-sm text-lg">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a href="#faq" className="btn btn-outline mt-16">How it works</a>
        </div>

        {/* RIGHT: sticky phone */}
        <div className="relative">
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ rotate: 3, opacity: 0, y: 40 }}
              whileInView={{ rotate: 3, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto w-full max-w-sm rounded-[2.5rem] border-[6px] border-ink bg-ink p-2 shadow-[14px_14px_0_rgba(42,23,16,.2)]"
            >
              {/* header */}
              <div className="flex items-center gap-3 rounded-t-[2rem] bg-cream px-4 py-3">
                <img src="/images/logo.png" alt="" className="h-11 w-11 rounded-full" />
                <div>
                  <p className="font-bold leading-4">TeddyPups U.A.E.</p>
                  <p className="text-xs">online</p>
                </div>
              </div>

              {/* chat */}
              <div className="paw-bg space-y-3 px-3 py-4">
                <div className="w-3/5 overflow-hidden rounded-xl border-2 border-ink bg-cream">
                  <img src="/images/chat-video.jpg" alt="" className="h-24 w-full object-cover" />
                </div>
                <motion.p
                  animate={{ opacity: active >= 1 ? 1 : 0.35 }}
                  className="rounded-2xl border-2 border-ink bg-cream p-3 text-sm"
                >
                  Our team will share real photos, health details, and all necessary information directly on WhatsApp.
                </motion.p>
                <motion.div
                  animate={{ opacity: active >= 2 ? 1 : 0.35 }}
                  className="rounded-2xl border-2 border-ink bg-cream p-3 text-sm"
                >
                  <p>Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.</p>
                  <svg viewBox="0 0 260 60" className="mt-3 w-full">
                    <circle cx="14" cy="46" r="6" fill="#a8481c" />
                    <path d="M14 46 Q 90 5 150 38 T 235 24" fill="none" stroke="#a8481c" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round" />
                    <path d="M225 26 l15 -14 l15 14 v18 h-30z" fill="#f5c066" stroke="#2a1710" strokeWidth="2.5" />
                  </svg>
                </motion.div>
              </div>

              {/* input */}
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-b-[2rem] bg-cream px-5 py-3"
              >
                <span className="text-sm">Say hello on WhatsApp</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wa text-white">
                  <Send size={18} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}