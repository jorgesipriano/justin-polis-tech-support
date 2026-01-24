import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Coverage from '@/components/Coverage';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import WhatsAppPopup from '@/components/WhatsAppPopup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <WhatsAppPopup />
    </div>
  );
};

export default Index;
