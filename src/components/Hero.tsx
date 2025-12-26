import { Phone } from 'lucide-react';
import logo from '@/assets/logo-servibel.jpeg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-hero flex items-center justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-primary-foreground max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="SERVIBEL" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-2xl object-cover border-4 border-primary-foreground/20 animate-float"
            />
          </div>

          {/* Main Message - Bold & Direct */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-6 tracking-tight">
            SEU CONSERTO
            <span className="block text-accent">ESTÁ AQUI.</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 font-medium">
            Lavagem de Máquina · Conserto de Geladeira
          </p>

          {/* CTA Button - Big & Bold */}
          <a
            href="https://wa.me/5531984101104?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-2xl font-bold text-xl md:text-2xl hover:brightness-110 transition-all duration-200 shadow-2xl animate-pulse-slow"
          >
            <Phone className="w-7 h-7" />
            CHAMAR AGORA
          </a>

          {/* Location - Simple */}
          <p className="mt-10 text-primary-foreground/70 text-lg">
            Ribeirão das Neves · Justinópolis · Região
          </p>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80V40C1200 70 960 20 720 40C480 60 240 30 0 50V80Z" fill="hsl(210 20% 98%)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
