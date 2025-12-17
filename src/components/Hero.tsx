import { Phone, MapPin, Clock } from 'lucide-react';
import logo from '@/assets/logo-servibel.jpeg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-hero flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Atendimento Rápido e Profissional</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Assistência Técnica
              <span className="block mt-2">
                de <span className="text-accent">Confiança</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Atendemos toda a região de <strong>Justinópolis</strong> e <strong>Ribeirão das Neves</strong>. 
              Conserto de eletrodomésticos com qualidade e garantia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/5531984101104"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all duration-200 shadow-lg animate-pulse-slow"
              >
                <Phone className="w-5 h-5" />
                Chamar no WhatsApp
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-foreground/20 transition-all duration-200"
              >
                Ver Serviços
              </a>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Localização</p>
                  <p className="font-semibold">Ribeirão das Neves, MG</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/10 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Telefone</p>
                  <p className="font-semibold">(31) 98410-1104</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="hidden lg:flex justify-center animate-float" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-foreground/20 blur-3xl rounded-full scale-150"></div>
              <img 
                src={logo} 
                alt="SERVIBEL - Assistência Técnica e Peças" 
                className="relative w-80 h-80 rounded-3xl shadow-2xl object-cover border-4 border-primary-foreground/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 20% 98%)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
