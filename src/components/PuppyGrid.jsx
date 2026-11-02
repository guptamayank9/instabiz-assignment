import { puppies, waLink } from "../data/puppies";
import PuppyCard from "./PuppyCard";

export default function PuppyGrid() {
  return (
    <section id="puppies" className="bg-sand pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-6xl sm:text-8xl">Meet the pups</h2>
            <p className="mt-3 text-xl">Real puppies, real photos, looking for their families right now.</p>
          </div>

          <div className="relative">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-primary">
              See all available puppies
            </a>
            <img src="/mascot/mascot.svg" alt="" className="pointer-events-none absolute -top-16 right-2 hidden w-24 sm:block" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-3 lg:grid-cols-6">
          {puppies.map((p, i) => (
            <PuppyCard key={p.id} puppy={p} index={i} />
          ))}

          {/* last dashed "Meet them all" card */}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[250px] items-center justify-center self-end rounded-t-full border-[3px] border-dashed border-ink px-4 text-center transition hover:bg-white/40"
          >
            <span className="font-display text-3xl font-black leading-8">
              <span className="border-b-4 border-rust">Meet</span>
              <br />
              <span className="border-b-4 border-rust">them all</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}