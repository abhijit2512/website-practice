import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import CoursesSection from '../components/CoursesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import VideoPreviewSection from '../components/VideoPreviewSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main id="main">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <CoursesSection />
        <WhyChooseUs />
        <HowItWorks />
        <VideoPreviewSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
