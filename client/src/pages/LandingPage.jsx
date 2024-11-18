import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";
import CtaSection from "@/components/ui/cta-section";
import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navbar";
import WhySection from "@/components/ui/why-section";

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
