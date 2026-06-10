import { MessageCircle, ShieldCheck, Wrench, Award, MapPin, Star, Phone } from 'lucide-react';
import tecnico from '@/assets/tecnico-servibel.jpg';

const WHATSAPP_URL = 'https://wa.me/5531984101104?text=Olá';

const Hero = () => {
  const handleWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.gtag_report_conversion) {
      e.preventDefault();
      window.gtag_report_conversion(WHATSAPP_URL);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-hero overflow-hidden">
      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-primary-foreground">
            {/* Local highlight badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm md:text-base">
                Atendimento em domicílio · Justinópolis
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Assistência Técnica de
              <span className="block text-accent">Confiança em Justinópolis</span>
              <span className="block">e Região</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Conserto especializado de <strong className="text-accent">Máquina de Lavar, Lava e Seca, Geladeiras e Freezers</strong>. Mais de 35 anos de tradição e garantia total no serviço.
            </p>

            {/* Differentiators */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
              <div className="flex flex-col items-center text-center bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-3 md:p-4 backdrop-blur-sm">
                <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-accent mb-2" />
                <span className="text-xs md:text-sm font-semibold">Garantia Total</span>
              </div>
              <div className="flex flex-col items-center text-center bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-3 md:p-4 backdrop-blur-sm">
                <Wrench className="w-7 h-7 md:w-8 md:h-8 text-accent mb-2" />
                <span className="text-xs md:text-sm font-semibold">Peças Originais</span>
              </div>
              <div className="flex flex-col items-center text-center bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-3 md:p-4 backdrop-blur-sm">
                <Award className="w-7 h-7 md:w-8 md:h-8 text-accent mb-2" />
                <span className="text-xs md:text-sm font-semibold">35 Anos de Experiência</span>
              </div>
            </div>

            {/* CTA WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold text-lg md:text-xl hover:brightness-110 transition-all duration-200 shadow-2xl animate-pulse-slow w-full sm:w-auto"
            >
              <MessageCircle className="w-7 h-7" />
              Chamar no WhatsApp agora
            </a>

            {/* Social Proof */}
            <div className="mt-8 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-4 backdrop-blur-sm max-w-md">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm md:text-base italic text-primary-foreground/95">
                "Atendimento rápido e de qualidade!"
              </p>
              <p className="text-xs md:text-sm text-primary-foreground/70 mt-1 font-semibold">
                — Jorge Sipriano
              </p>
            </div>
          </div>

          {/* Right: Technician Image */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl"></div>
            <img
              src={tecnico}
              alt="Técnico SERVIBEL uniformizado pronto para atendimento em Justinópolis"
              width={1024}
              height={1024}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-auto border-4 border-primary-foreground/20 animate-float"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl">
              <p className="font-extrabold text-2xl leading-none">35+</p>
              <p className="text-xs font-semibold uppercase tracking-wide">anos no mercado</p>
            </div>
          </div>
        </div>

        {/* Contact footer strip */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-primary-foreground/20 grid sm:grid-cols-2 gap-4 text-primary-foreground/90 text-sm md:text-base">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span>Rua Pedro Moreira do Nascimento, 120 — Justinópolis, Ribeirão das Neves</span>
          </div>
          <div className="flex items-center gap-3 sm:justify-end">
            <Phone className="w-5 h-5 text-accent shrink-0" />
            <a href="tel:+5531984101104" className="font-semibold hover:text-accent transition-colors">
              (31) 98410-1104
            </a>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80V40C1200 70 960 20 720 40C480 60 240 30 0 50V80Z" fill="hsl(210 20% 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
