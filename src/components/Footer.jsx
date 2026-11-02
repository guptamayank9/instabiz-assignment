import { waLink } from "../data/puppies";

const explore = [
  ["Available puppies", "#puppies"],
  ["Gone home", "#families"],
  ["Happy families", "#families"],
  ["How it works", "#how"],
  ["Delivery & collection", "#how"],
  ["FAQ", "#faq"],
  ["Visit & contact", "#contact"],
];

const socials = [
  ["Instagram", "https://instagram.com/teddypups.official"],
  ["TikTok", "https://tiktok.com/@teddypups.official"],
  ["Facebook", "https://facebook.com"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#22130b] text-cream">
      {/* stars + moon */}
      {["left-[8%] top-8", "left-[30%] top-4", "left-[60%] top-6", "right-[8%] top-14"].map((p, i) => (
        <span key={i} className={`star text-sm ${p}`} style={{ animationDelay: `${i * 0.7}s` }}>✦</span>
      ))}
      <div className="absolute right-16 top-3 h-14 w-14 rounded-full bg-[#fde3a7] shadow-[-12px_6px_0_0_#22130b_inset] shadow-[0_0_40px_rgba(253,227,167,.4)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h2 className="text-6xl text-[#fde3a7]">Home, at last.</h2>
          <p className="mt-5 max-w-md text-lg opacity-90">
            TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies,
            offering premium services and worldwide shipping.
          </p>
          <img src="/mascot/basket.svg" alt="" className="mt-10 w-60" />
        </div>

        <div>
          <p className="font-hand text-2xl text-caramel">Explore</p>
          <ul className="mt-5 space-y-4 text-lg">
            {explore.map(([label, href]) => (
              <li key={label}><a href={href} className="hover:text-[#fde3a7]">{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-hand text-2xl text-caramel">Say hello</p>
          <ul className="mt-5 space-y-4 text-lg">
            <li><a href={waLink()} target="_blank" rel="noreferrer">WhatsApp +971 54 167 6733</a></li>
            <li><a href="mailto:teddypupsadmin@gmail.com">teddypupsadmin@gmail.com</a></li>
            <li>Downtown Dubai, United Arab Emirates</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer"
                 className="rounded-full border border-cream/70 px-5 py-2 text-sm transition hover:bg-cream hover:text-ink">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm">
          <div className="flex items-center gap-3 opacity-80">
            <img src="/images/logo.png" alt="" className="h-10 w-10 rounded-full" />
            <span>© {new Date().getFullYear()} TeddyPups U.A.E.</span>
          </div>
          <span className="font-hand text-xl text-caramel">every puppy is family</span>
        </div>
      </div>
    </footer>
  );
}