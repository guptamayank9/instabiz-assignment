const faqs = [
  { q: "Are your puppies vaccinated and health-checked?", a: "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family." },
  { q: "Can I meet a puppy before I decide?", a: "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision." },
  { q: "Can I take my puppy home the same day?", a: "Local puppies are available immediately, so you can take your puppy home the same day." },
];

const stars = [
  "left-[8%] top-[10%]", "left-[45%] top-[6%]", "left-[70%] top-[4%]",
  "right-[6%] top-[40%]", "left-[5%] bottom-[30%]", "left-[60%] bottom-[12%]",
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-[#4a2a19] to-[#2a1710] py-24 text-cream">
      {stars.map((p, i) => (
        <span key={i} className={`star text-lg ${p}`} style={{ animationDelay: `${i * 0.5}s` }}>✦</span>
      ))}

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-6xl leading-[0.95] sm:text-7xl">Questions, answered</h2>
          <a href="#contact" className="btn mt-8 border-2 border-cream text-cream hover:bg-cream hover:text-ink">
            Read all questions
          </a>
          <img src="/mascot/mascot-question.svg" alt="" className="mt-8 w-40" />
        </div>

        <div className="space-y-10">
          {faqs.map((f) => (
            <div key={f.q} className="flex gap-4">
              <span className="mt-1 text-xl text-[#f5c066]">✦</span>
              <div>
                <h3 className="text-2xl">{f.q}</h3>
                <p className="mt-3 text-lg opacity-90">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}