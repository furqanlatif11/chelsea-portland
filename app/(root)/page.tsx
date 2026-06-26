import AboutSection from "./_components/about";
import HeroSection from "./_components/hero-section";
import HowWeHelp from "./_components/how-we-help";
import Navbar from "./_components/navbar";
import WhyUs from "./_components/why-us";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyUs />
      <HowWeHelp />
    </main>
  );
}
