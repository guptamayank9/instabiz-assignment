import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PuppyGrid from "./components/PuppyGrid";
import TwoWays from "./components/TwoWays";
import HappyFamilies from "./components/HappyFamilies";
import HowItWorks from "./components/HowItWorks";
import Passport from "./components/Passport";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PuppyGrid />
        <TwoWays />
        <HappyFamilies />
        <HowItWorks />
        <Passport />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}