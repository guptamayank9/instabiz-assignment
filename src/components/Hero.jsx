import { motion } from "framer-motion";
import { waLink } from "../data/puppies";

const arches = [
  { img: "/images/hero-1.jpg", h: "h-44 sm:h-56" },
  { img: "/images/hero-2.jpg", h: "h-56 sm:h-72" },
  { img: "/images/hero-3.jpg", h: "h-44 sm:h-56" },
  { mascot: true },
  { img: "/images/hero-4.jpg", h: "h-48 sm:h-60" },
  { img: "/images/hero-5.jpg", h: "h-60 sm:h-80" },
  { img: "/images/hero-6.jpg", h: "h-36 sm:h-44" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-cream to-[#fdecd0] pt-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block border-b-2 border-rust font-hand text-3xl text-rust"
        >
          every puppy is family
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-5xl leading-[0.95] sm:text-7xl lg:text-8xl"
        >
          Premium teacup puppies in Dubai
        </motion.h1>

        <p className="mx-auto mt-6 max-w-xl text-lg">
          Meet your new best friend in our Dubai showroom, or order a rare
          miniature breed from trusted breeders worldwide.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#puppies" className="btn btn-primary">View available puppies</a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-outline">
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* arch row */}
      <div className="mt-12 flex items-end justify-center gap-3 px-4 sm:gap-6">
        {arches.map((a, i) =>
          a.mascot ? (
            <motion.img
              key={i}
              src="/mascot/mascot.svg"
              alt=""
              className="hidden w-28 sm:block sm:w-36"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          ) : (
            <motion.div
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 80 }}
              className={`arch w-20 sm:w-36 ${a.h} ${i > 4 ? "hidden md:block" : ""}`}
            >
              <img src={a.img} alt="Teacup puppy" className="h-full w-full object-cover" />
            </motion.div>
          )
        )}
      </div>

      <div className="scallop-top h-[26px] -mt-px" />
      <div className="h-16 bg-sand" />
    </section>
  );
}