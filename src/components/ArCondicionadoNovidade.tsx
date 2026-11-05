import { Link } from 'react-router-dom';
import { Snowflake, MessageCircle, ArrowRight } from 'lucide-react';
import arImg from '@/assets/ar-condicionado.jpg';

const ArCondicionadoNovidade = () => (
  <section id="ar-condicionado" className="py-16 bg-secondary/40">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <img src={arImg} alt="Técnico SERVIBEL fazendo manutenção de ar condicionado em Belo Horizonte" loading="lazy" width={1200} height={688} className="rounded-2xl shadow-card w-full object-cover" />
      <div>
        <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-bold px-3 py-1 rounded-full mb-4">
          <Snowflake className="w-4 h-4" /> NOVIDADE SERVIBEL
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
          Agora também cuidamos do seu Ar Condicionado
        </h2>
        <p className="text-foreground/80 mb-4">
          Instalação, manutenção, limpeza e conserto de ar condicionado split em <strong>toda a região de Belo Horizonte</strong> — com a mesma confiança de 35 anos da SERVIBEL.
        </p>
        <ul className="text-foreground/80 mb-6 space-y-1">
          <li>✔ Instalação de ar condicionado split</li>
          <li>✔ Limpeza e higienização completa</li>
          <li>✔ Conserto: não gela, pingando água, barulho</li>
          <li>✔ Carga de gás e manutenção preventiva</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <a href="https://wa.me/5531984101104?text=Olá" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold">
            <MessageCircle className="w-5 h-5" /> Agendar pelo WhatsApp
          </a>
          <Link to="/ar-condicionado" className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 rounded-lg font-semibold">
            Saiba mais <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ArCondicionadoNovidade;
