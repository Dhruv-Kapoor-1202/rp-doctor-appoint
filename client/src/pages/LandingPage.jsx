import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import CtaSection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import WhySection from "@/components/why-section";

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
