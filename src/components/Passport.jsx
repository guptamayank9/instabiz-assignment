import { motion } from "framer-motion";
import { Heart, Plane, MessageCircle, Globe } from "lucide-react";

const stamps = [
  {
    icon: Heart, label: "Vet-checked & healthy",
    text: "Every puppy comes vaccinated, dewormed, and with a verified health certificate.",
    cls: "rounded-full border-rust text-rust rotate-[-12deg]",
  },
  {
    icon: Plane, label: "Korea to Dubai, safely",
    text: "Trusted breeders, safe travel, and premium care from start to finish.",
    cls: "rounded-xl border-wa text-wa rotate-[6deg]",
  },
  {
    icon: MessageCircle, label: "Support 24/7",
    text: "Always here to help, from choosing your puppy to post-delivery support.",
    cls: "rounded-[50%] border-[#6b4a3a] text-[#6b4a3a] rotate-[-6deg]",
  },
  {
    icon: Globe, label: "Trusted by families worldwide",
    text: "Puppies delivered to loving homes all around the world.",
    cls: "rounded-full border-dotted border-caramel text-[#c9743a] rotate-[4deg]",
  },
];

export default function Passport() {
  return (
    <section className="bg-gradient-to-b from-[#ecb561] to-[#b8683a] px-4 pb-24 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border-[3px] border-ink bg-rust p-3 shadow-2xl md:grid-cols-2"
      >
        {/* left page */}
        <div className="scale-bg relative min-h-[360px] rounded-l-2xl p-8 md:p-12">
          <p className="font-hand text-2xl text-rust">puppy passport</p>
          <h2 className="mt-3 text-5xl leading-[0.95] sm:text-6xl">Why families trust TeddyPups</h2>
          <img src="/mascot/mascot.svg" alt="" className="absolute bottom-2 right-2 w-28" />
        </div>

        {/* right page */}
        <div className="scale-bg grid gap-8 rounded-r-2xl border-l border-ink/20 p-8 shadow-[inset_16px_0_20px_-14px_rgba(0,0,0,.3)] sm:grid-cols-2 md:p-10">
          {stamps.map(({ icon: Icon, label, text, cls }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, type: "spring" }}
              className="text-center"
            >
              <div className={`mx-auto flex h-36 w-36 flex-col items-center justify-center border-2 p-4 ${cls}`}>
                <Icon size={26} />
                <span className="mt-2 font-display text-sm font-black leading-4">{label}</span>
              </div>
              <p className="mt-4 text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}