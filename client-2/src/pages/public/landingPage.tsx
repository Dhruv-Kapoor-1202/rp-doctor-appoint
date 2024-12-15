import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import CtaSection from "@/components/sections/cta-section";
import HeroSection from "@/components/sections/hero-section";
import Navbar from "@/components/sections/navbar";
import WhySection from "@/components/sections/why-section";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ContactSection />
      <CtaSection />
    </>
  );
};

export default LandingPage;
