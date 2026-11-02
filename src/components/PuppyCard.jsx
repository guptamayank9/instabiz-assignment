import { motion } from "framer-motion";
import { waLink } from "../data/puppies";

const doors = ["#a8481c", "#d08a3e", "#5a3a28", "#bd6a4a"];

export default function PuppyCard({ puppy, index }) {
  const door = doors[index % doors.length];

  return (
    <motion.a
      href={waLink(`Hi, I'm interested in the ${puppy.name} (${puppy.info})`)}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 6) * 0.07 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col items-center text-center"
    >
      {/* text block (fixed min height so arches line up) */}
      <div className="flex min-h-[7.5rem] flex-col justify-end px-2">
        <h3 className="text-2xl leading-6 group-hover:text-rust">{puppy.name}</h3>
        <p className="mt-2 text-sm opacity-80">{puppy.info}</p>
      </div>

      {/* arch window */}
      <div className="relative mt-4 w-full max-w-[250px]">
        <div className="arch aspect-[3/4] w-full">
          <img src={puppy.img} alt={puppy.name} loading="lazy" className="h-full w-full object-cover" />
        </div>

        {/* door on the left */}
        <span
          className="absolute -left-1 top-[12%] bottom-0 w-[16%] border-2 border-ink"
          style={{
            background: door,
            clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Available tag */}
        <span className="absolute right-[-6%] top-[20%] rotate-[6deg] rounded-full border-2 border-ink bg-white px-3 py-1 font-hand text-lg shadow-md">
          Available
        </span>

        {/* shelf */}
        <div className="absolute -bottom-2 left-[-4%] right-[-4%] h-3 rounded-full border-2 border-ink bg-caramel" />
      </div>
    </motion.a>
  );
}