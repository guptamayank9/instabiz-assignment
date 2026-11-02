# TeddyPups Clone - Insta Biz Web Technical Assignment

A front-end clone of the [TeddyPups](https://puppy.instabizweb.com/) home page (premium teacup puppies in Dubai), built as part of the Insta Biz Web technical round.

- **Live URL:** https://instabiz-assignment-nu.vercel.app/
- **Loom walkthrough:** _add Loom link here_

---

## Current Status (Please Read)

This submission is a **work in progress**. Here is exactly what is and is not done:

| Item | Status |
| --- | --- |
| Home page layout, structure and all sections | Done |
| Animations and responsive behaviour | Done |
| Other pages (Puppies, Happy families, How it works, FAQ, Visit & contact as separate pages) | **Not built yet.** Nav links currently scroll to sections on the home page. |
| Real images (puppy photos, logo, mascot illustrations) | **Not added yet.** The code references image paths under `public/images/` and `public/mascot/`, but the actual files have not been added, so images show as missing/broken for now. |
| Pixel-perfect match with the reference | Partial. Layout and styling are approximated from screenshots, and fine-tuning is pending. |

---

## Home Page Sections Implemented

1. Navbar (sticky, scalloped edge, mobile hamburger menu, WhatsApp button)
2. Hero (headline, CTAs, arch-shaped image row)
3. Meet the pups (grid of 15 puppy cards with arch windows and "Available" tags)
4. Two ways to meet your puppy (signpost layout: Dubai showroom / imported from Korea)
5. Happy families (polaroid wall)
6. Your puppy journey (3 steps with WhatsApp-style phone mockup)
7. Puppy passport (open-book layout with 4 trust stamps)
8. FAQ
9. "Ready to meet your new best friend?" call-to-action
10. Footer

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** (v4, design tokens defined with `@theme`)
- **Framer Motion** (scroll-triggered and hover animations)
- **lucide-react** (icons)
- **Vercel** (deployment)

No backend is used. Puppy data lives in a local JS array.

---

## Project Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    PuppyGrid.jsx
    PuppyCard.jsx
    TwoWays.jsx
    HappyFamilies.jsx
    HowItWorks.jsx
    Passport.jsx
    FAQ.jsx
    CTA.jsx
    Footer.jsx
  data/
    puppies.js      # puppy list + WhatsApp helper
    families.js     # polaroid captions
  App.jsx
  index.css         # theme tokens + reusable utilities
public/
  images/           # puppy photos, logo (to be added)
  mascot/           # mascot illustrations (to be added)
```

---

## Key Implementation Notes

- **Arch shape:** a reusable `.arch` class using `border-radius: 9999px 9999px 0 0` plus `overflow: hidden`, used in the hero and puppy cards.
- **Scalloped edges:** CSS `radial-gradient` repeated horizontally, no images needed.
- **Signpost arrows:** built with `clip-path: polygon()`.
- **Scroll animations:** Framer Motion `whileInView` with `once: true`, and staggered delays for rows.
- **Sticky phone mockup:** `position: sticky` with step highlighting via `onViewportEnter`.
- **WhatsApp CTAs:** a `waLink()` helper generates `wa.me` links with a prefilled message.

---

## Getting Started

```bash
git clone https://github.com/guptamayank9/instabiz-assignment.git
cd instabiz-assignment
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## AI Tools Used

Claude (Anthropic) was used for planning the section breakdown, generating component code, and iterating on styling. The full prompts and workflow are explained in the Loom video.

---

## Remaining Work

- Add real images and mascot assets
- Build the separate inner pages
- Fine-tune spacing, positions and animations to match the reference more closely
- Cross-browser and device testing

---

## Author

**Mayank**
