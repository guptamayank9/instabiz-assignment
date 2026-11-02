import { motion } from "framer-motion";
import { waLink } from "../data/puppies";

export default function CTA() {
  return (
    <section id="contact" className="scallop-bottom-dark relative overflow-hidden bg-[#2d1a10] pb-0 pt-24 text-center text-cream">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-5xl leading-[0.95] sm:text-7xl">Ready to meet your new best friend?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
          Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way.
          We help you find the right match and ensure a smooth, safe delivery across the UAE.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-wa">WhatsApp us</a>
          <a href="#puppies" className="btn border-2 border-cream text-cream hover:bg-cream hover:text-ink">View puppies</a>
        </div>
      </div>

      {/* house scene */}
      <div className="relative mx-auto mt-14 h-72 w-full max-w-3xl rounded-t-3xl bg-[#5a3522] [background-image:repeating-linear-gradient(0deg,rgba(0,0,0,.15)_0_2px,transparent_2px_40px)]">
        <motion.div
          initial={{ rotateY: 0 }}
          whileInView={{ rotateY: -55 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{ transformOrigin: "left center" }}
          className="absolute bottom-0 left-[28%] h-64 w-24 rounded-t-full border-2 border-ink bg-rust"
        >
          <span className="absolute left-1/2 top-12 h-14 w-7 -translate-x-1/2 rounded-full bg-[#ffd98a]" />
        </motion.div>

        <div className="absolute bottom-0 left-1/2 h-64 w-52 -translate-x-1/2 overflow-hidden rounded-t-full border-4 border-caramel">
          <img src="/images/cta-pup.jpg" alt="Puppy at the door" className="h-full w-full object-cover" />
        </div>

        <div className="absolute bottom-[45%] right-[22%] h-10 w-8 rounded-b-xl bg-[#ffd98a] shadow-[0_0_40px_14px_rgba(255,217,138,.4)]" />
        <div className="absolute -bottom-2 left-[22%] h-8 w-14 rounded-t-full bg-[#6aa84f]" />
        <div className="absolute -bottom-2 right-[16%] h-8 w-16 rounded-t-full bg-[#6aa84f]" />
      </div>
    </section>
  );
}