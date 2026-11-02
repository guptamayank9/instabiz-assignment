import { motion } from "framer-motion";
import { waLink } from "../data/puppies";

export default function TwoWays() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#fae0b0] to-[#f6cf8a] py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-5xl leading-[0.95] sm:text-7xl">
          Two ways to meet your puppy
        </h2>

        {/* signpost */}
        <div className="relative mx-auto mt-12 grid max-w-5xl md:grid-cols-2">
          {/* pole (desktop only) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-4 -translate-x-1/2 rounded-full border-2 border-ink bg-caramel md:block" />

          {/* LEFT: Dubai */}
          <div className="md:pr-10">
            <motion.div
              initial={{ rotate: -2, opacity: 0, x: -40 }}
              whileInView={{ rotate: -2, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block rounded-l-[2rem] border-2 border-ink bg-caramel px-8 py-4 [clip-path:polygon(8%_0,100%_0,100%_100%,8%_100%,0_50%)]"
            >
              <h3 className="text-3xl">Puppies in Dubai</h3>
            </motion.div>

            <div className="relative mx-auto mt-12 h-72 w-full max-w-sm">
              {/* skyline */}
              <svg viewBox="0 0 400 160" className="absolute bottom-0 w-full text-ink/30" fill="none" stroke="currentColor" strokeWidth="6">
                <path d="M5 150H395M30 150V70h25v80M120 150V50l10-25 10 25v100M160 150V70l30 12v68M220 150V100h25v50M265 150V80h25v70M310 150V110h30v40" />
              </svg>
              {/* shop awning card */}
              <div className="absolute bottom-6 left-2 w-36">
                <div className="h-5 rounded-t-md border-2 border-ink bg-[repeating-linear-gradient(90deg,#c0602a_0_14px,#fff_14px_28px)]" />
                <img src="/images/showroom.jpg" alt="Our showroom" className="h-44 w-full border-2 border-t-0 border-ink object-cover" />
                <p className="mt-1 font-hand text-sm">In our showroom</p>
              </div>
            </div>

            <p className="mt-6 text-right text-lg md:max-w-sm md:ml-auto">
              See them, love them, take them home. Come meet our locally
              available puppies before you decide.
            </p>
            <a href="#puppies" className="btn btn-primary mt-6">Meet the pups</a>
          </div>

          {/* RIGHT: Imported */}
          <div className="mt-16 md:mt-0 md:pl-10 md:text-left">
            <motion.div
              initial={{ rotate: 1, opacity: 0, x: 40 }}
              whileInView={{ rotate: 1, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block border-2 border-ink bg-caramel px-8 py-4 [clip-path:polygon(0_0,92%_0,100%_50%,92%_100%,0_100%)]"
            >
              <h3 className="text-3xl">Imported for you</h3>
            </motion.div>

            {/* flight path */}
            <div className="relative mx-auto mt-12 h-72 w-full max-w-sm">
              <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full">
                <path id="route" d="M60 200 Q 170 40 340 110" fill="none" stroke="#a8481c" strokeWidth="3" strokeDasharray="3 9" strokeLinecap="round" />
                <circle cx="60" cy="200" r="7" fill="#a8481c" />
                <circle cx="340" cy="110" r="7" fill="#a8481c" />
                <text x="40" y="235" className="font-hand" fontSize="18" fill="#2a1710">Korea</text>
                <text x="305" y="140" className="font-hand" fontSize="18" fill="#2a1710">Dubai</text>
              </svg>
              {/* plane with puppy porthole */}
              <motion.div
                className="absolute left-[38%] top-[8%] flex h-14 w-32 items-center justify-center rounded-full border-2 border-ink bg-cream"
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <img src="/images/plane-pup.jpg" alt="" className="h-9 w-9 rounded-full border-2 border-ink object-cover" />
                <span className="absolute -top-3 left-3 h-4 w-6 -skew-x-12 bg-rust" />
                <span className="absolute -bottom-3 left-3 h-4 w-6 skew-x-12 bg-rust" />
              </motion.div>
            </div>

            <p className="mt-6 text-lg md:max-w-sm">
              Exclusive Korean teacup puppies, delivered. Order from the
              world's most reputable breeders and let us handle the import.
            </p>
            <a href={waLink("Hi, I'd like to order an imported puppy")} target="_blank" rel="noreferrer" className="btn btn-outline mt-6">
              Order an import
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}