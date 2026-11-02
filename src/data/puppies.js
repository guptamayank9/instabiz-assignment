export const puppies = [
  { id: 1,  name: "Max", breed: "Maltipoo", info: "boy, 3 months, with video", img: "/images/max.jpg" },
  { id: 2,  name: "Korean Teacup Maltipoo", info: "girl, 2 months, with video", img: "/images/korean-maltipoo.jpg" },
  { id: 3,  name: "Korean Teacup Poodle", info: "girl, 2 months", img: "/images/korean-poodle.jpg" },
  { id: 4,  name: "Maltipoo & Cavapoo", info: "boy, 3 months Maltipoo & 2 months Cavapoo, with video", img: "/images/maltipoo-cavapoo.jpg" },
  { id: 5,  name: "Toy Poodle", info: "boy & girl, 2 months", img: "/images/toy-poodle.jpg" },
  { id: 6,  name: "Maltipoo", info: "girl, 3 months, with video", img: "/images/maltipoo-1.jpg" },
  { id: 7,  name: "Pomeranian", info: "girl, 3 months", img: "/images/pomeranian.jpg" },
  { id: 8,  name: "Copper", info: "Cavapoo, boy, 2 months", img: "/images/copper.jpg" },
  { id: 9,  name: "Shih Tzu", info: "girl, 2 months", img: "/images/shihtzu-girl.jpg" },
  { id: 10, name: "Shih Tzu", info: "boy, 2 months", img: "/images/shihtzu-boy.jpg" },
  { id: 11, name: "Maltipoo", info: "girl, 2.5 months", img: "/images/maltipoo-2.jpg" },
  { id: 12, name: "Maltipoo", info: "girl, 2 months", img: "/images/maltipoo-3.jpg" },
  { id: 13, name: "Korean Teacup Pomeranian", info: "girl, 2 months", img: "/images/kt-pom-1.jpg" },
  { id: 14, name: "Korean Teacup Pomeranian", info: "girl, 2 months", img: "/images/kt-pom-2.jpg" },
  { id: 15, name: "Korean Teacup Pomeranian", info: "boy, 2 months", img: "/images/kt-pom-3.jpg" },
];

export const WHATSAPP = "971541676733";
export const waLink = (text = "Hi TeddyPups, I'd like to enquire about a puppy") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;