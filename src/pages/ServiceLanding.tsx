import { ArrowLeft, MessageCircle, MapPin, Clock, Shield, Star, Gift, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo-servibel.jpeg';

interface ServiceConfig {
  slug: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  couponLabel: string;
  couponCode: string;
  whatsappMessage: string;
  location?: string;
  keywords: string[];
}

const serviceConfigs: Record<string, ServiceConfig> = {
  'reparo-maquina-lavar-belo-horizonte': {
    slug: 'reparo-maquina-lavar-belo-horizonte',
    title: 'Reparo de Máquina de Lavar',
    subtitle: 'em Belo Horizonte',
    heroDescription: 'Sua máquina de lavar parou de funcionar? A SERVIBEL é especialista em conserto de máquinas de lavar em BH. Atendimento rápido e garantia de serviço!',
    couponLabel: '🎁 VISITA GRÁTIS',
    couponCode: 'VISITABH',
    whatsappMessage: 'Olá! Vi a promoção de VISITA GRÁTIS para reparo de máquina de lavar em BH. Código: VISITABH',
    location: 'Belo Horizonte',
    keywords: ['máquina de lavar', 'conserto', 'reparo', 'Belo Horizonte', 'BH'],
  },
  'reparo-geladeira-justinopolis': {
    slug: 'reparo-geladeira-justinopolis',
    title: 'Reparo de Geladeira',
    subtitle: 'em Justinópolis',
    heroDescription: 'Geladeira com defeito em Justinópolis? A SERVIBEL atende sua região com técnicos especializados. Não deixe seus alimentos estragarem!',
    couponLabel: '🏷️ DESCONTO DE BAIRRO',
    couponCode: 'JUSTINO15',
    whatsappMessage: 'Olá! Vi a promoção de DESCONTO DE BAIRRO para reparo de geladeira em Justinópolis. Código: JUSTINO15',
    location: 'Justinópolis',
    keywords: ['geladeira', 'conserto', 'reparo', 'Justinópolis', 'Ribeirão das Neves'],
  },
  'reparo-lava-e-seca': {
    slug: 'reparo-lava-e-seca',
    title: 'Reparo de Lava e Seca',
    subtitle: 'BH e Região',
    heroDescription: 'Sua lava e seca não está funcionando corretamente? Somos especialistas em todas as marcas. Diagnóstico preciso e peças originais!',
    couponLabel: '🎁 VISITA GRÁTIS',
    couponCode: 'LAVASECA',
    whatsappMessage: 'Olá! Vi a promoção de VISITA GRÁTIS para reparo de lava e seca. Código: LAVASECA',
    keywords: ['lava e seca', 'conserto', 'reparo', 'assistência técnica'],
  },
  'limpa-lava-e-seca': {
    slug: 'limpa-lava-e-seca',
    title: 'Limpeza de Lava e Seca',
    subtitle: 'Manutenção Preventiva',
    heroDescription: 'Sua lava e seca precisa de uma limpeza profissional? Evite problemas futuros e mantenha seu aparelho funcionando como novo!',
    couponLabel: '🏷️ 10% DE DESCONTO',
    couponCode: 'LIMPA10',
    whatsappMessage: 'Olá! Vi a promoção de 10% DE DESCONTO na limpeza de lava e seca. Código: LIMPA10',
    keywords: ['limpeza', 'lava e seca', 'manutenção preventiva', 'higienização'],
  },
};

const benefits = [
  { icon: Clock, text: 'Atendimento em até 24h' },
  { icon: Shield, text: 'Garantia em todos os serviços' },
  { icon: Star, text: '+35 anos de experiência' },
  { icon: MapPin, text: 'Atendemos na sua região' },
];

const ServiceLanding = () => {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const [showCoupon, setShowCoupon] = useState(false);
  const config = slug ? serviceConfigs[slug] : null;

  useEffect(() => {
    const timer = setTimeout(() => setShowCoupon(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // GTM específico para limpa-lava-e-seca (GTM-W7X24QV7)
  useEffect(() => {
    if (slug !== 'limpa-lava-e-seca') return;

    // Inject GTM script
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W7X24QV7');`;
    document.head.appendChild(script);

    // Inject noscript iframe
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-W7X24QV7';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, [slug]);

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Página não encontrada</h1>
          <Link to="/" className="text-primary hover:underline">Voltar ao início</Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/5531984101104?text=${encodeURIComponent(config.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-foreground" />
            <img src={logo} alt="SERVIBEL" className="h-10 w-10 rounded-lg object-cover" />
            <span className="font-display font-bold text-lg text-primary hidden sm:block">SERVIBEL</span>
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Garantir Desconto
          </a>
        </div>
      </header>

      {/* Coupon Banner */}
      {showCoupon && (
        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-3 animate-fade-in">
          <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-center">
            <Gift className="w-5 h-5 shrink-0 animate-bounce" />
            <p className="font-bold text-sm md:text-base">
              {config.couponLabel} — Use o código <span className="bg-white/20 px-2 py-0.5 rounded font-mono">{config.couponCode}</span> no WhatsApp!
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="bg-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold">{config.couponLabel} — Oferta Exclusiva!</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight">
            {config.title}
          </h1>
          <p className="font-display text-xl md:text-2xl font-semibold text-accent mb-6">
            {config.subtitle}
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed mb-10">
            {config.heroDescription}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            Quero Meu Desconto no WhatsApp!
          </a>
          <p className="text-sm mt-4 opacity-70">Atendimento imediato • Sem compromisso</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((item) => (
              <div key={item.text} className="bg-card rounded-2xl p-6 shadow-card text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coupon Card */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-card rounded-3xl shadow-xl overflow-hidden border-2 border-dashed border-green-400">
            <div className="bg-green-600 text-white p-6 text-center">
              <Gift className="w-10 h-10 mx-auto mb-2" />
              <h2 className="font-display text-2xl font-bold">{config.couponLabel}</h2>
              <p className="text-sm opacity-90 mt-1">Exclusivo para quem chegou por esta página</p>
            </div>
            <div className="p-8 text-center">
              <p className="text-muted-foreground mb-4">Apresente o código abaixo no WhatsApp:</p>
              <div className="bg-secondary rounded-xl py-4 px-6 mb-6">
                <span className="font-mono text-3xl font-extrabold text-primary tracking-widest">{config.couponCode}</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg w-full justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                Usar Cupom no WhatsApp
              </a>
              <p className="text-xs text-muted-foreground mt-4">*Oferta por tempo limitado. Sujeita a disponibilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Não Perca Esta Oportunidade!
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            {config.location
              ? `Atendemos em ${config.location} e região. Fale agora e garanta sua oferta exclusiva!`
              : 'Fale agora e garanta sua oferta exclusiva! Atendemos BH e toda a região metropolitana.'}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            Chamar Agora no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} SERVIBEL - Assistência Técnica e Peças. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServiceLanding;
