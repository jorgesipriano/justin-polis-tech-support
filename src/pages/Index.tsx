import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SeoServices from '@/components/SeoServices';
import Gallery from '@/components/Gallery';
import Coverage from '@/components/Coverage';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import WhatsAppPopup from '@/components/WhatsAppPopup';
import FAQ from '@/components/FAQ';
import MobileActionBar from '@/components/MobileActionBar';
import StructuredData from '@/components/StructuredData';

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <SeoServices />
        <Gallery />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <WhatsAppPopup />
      <MobileActionBar />
    </div>
  );
};

export default Index;
