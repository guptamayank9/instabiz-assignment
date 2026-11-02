import { motion } from "framer-motion";
import { families } from "../data/families";
import { waLink } from "../data/puppies";

export default function HappyFamilies() {
  return (
    <section id="families" className="wood-wall relative overflow-hidden py-24 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl sm:text-7xl">Happy families</h2>
        <p className="mt-3 text-center text-lg opacity-90">Homes our pups have found.</p>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
          {families.map((f, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: f.tilt }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.1, type: "spring", stiffness: 70 }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              className="relative rounded-sm bg-cream p-3 pb-4 text-ink shadow-xl"
            >
              <span className="tape" />
              <img src={f.img} alt={f.caption} loading="lazy" className="aspect-[3/4] w-full object-cover" />
              <figcaption className="mt-3 text-center font-hand text-xl">{f.caption}</figcaption>
            </motion.figure>
          ))}
        </div>

        {/* bottom decor: lamp + door + mascot + CTA */}
        <div className="relative mt-20 flex items-end justify-center gap-10">
          <div className="hidden flex-col items-center sm:flex">
            <div className="h-10 w-10 rounded-b-xl border-2 border-ink bg-[#ffd98a] shadow-[0_0_40px_10px_rgba(255,217,138,.5)]" />
            <div className="h-28 w-3 bg-[#5a3a28]" />
          </div>

          <div className="h-44 w-28 rounded-t-full border-4 border-[#e0a55a] bg-rust" />

          <div className="flex items-end gap-4">
            <img src="/mascot/mascot.svg" alt="" className="hidden w-20 sm:block" />
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-primary">
              See every happy family
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}