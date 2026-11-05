import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileActionBar from '@/components/MobileActionBar';
import arImg from '@/assets/ar-condicionado.jpg';
import { MessageCircle, Snowflake, Wrench, Droplets, ShieldCheck } from 'lucide-react';

const WA = 'https://wa.me/5531984101104?text=Olá';

const servicos = [
  { icon: Wrench, t: 'Instalação de Ar Condicionado', d: 'Instalação de split com tubulação, suporte e teste completo de funcionamento.' },
  { icon: Droplets, t: 'Limpeza e Higienização', d: 'Remove fungos, ácaros e mau cheiro. Ar mais saudável e menor conta de luz.' },
  { icon: Snowflake, t: 'Conserto e Carga de Gás', d: 'Ar não gela, pingando água, fazendo barulho ou desligando sozinho? A gente resolve.' },
  { icon: ShieldCheck, t: 'Manutenção Preventiva', d: 'Evite quebra no calor. Revisão periódica que prolonga a vida do aparelho.' },
];

const regioes = ['Belo Horizonte', 'Justinópolis', 'Ribeirão das Neves', 'Contagem', 'Betim', 'Santa Luzia', 'Vespasiano', 'Venda Nova', 'Pampulha', 'Lagoa Santa', 'Sabará', 'Nova Lima'];

const ArCondicionado = () => {
  useEffect(() => {
    document.title = 'Ar Condicionado em BH: Instalação, Limpeza e Conserto | SERVIBEL';
    const set = (sel: string, attr: string, val: string, create: () => HTMLElement) => {
      let el = document.head.querySelector(sel) as HTMLElement | null;
      if (!el) { el = create(); document.head.appendChild(el); }
      el.setAttribute(attr, val);
    };
    set('meta[name="description"]', 'content', 'Instalação, manutenção, limpeza e conserto de ar condicionado em toda a região de Belo Horizonte. SERVIBEL, 35 anos de confiança. Chame no WhatsApp.', () => { const m = document.createElement('meta'); m.setAttribute('name', 'description'); return m; });
    set('link[rel="canonical"]', 'href', 'https://www.servibel.com.br/ar-condicionado', () => { const l = document.createElement('link'); l.setAttribute('rel', 'canonical'); return l; });
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Instalação, manutenção e conserto de ar condicionado',
    provider: { '@type': 'LocalBusiness', name: 'SERVIBEL Assistência Técnica', telephone: '+55 31 98410-1104', url: 'https://www.servibel.com.br' },
    areaServed: regioes.map((r) => ({ '@type': 'City', name: r })),
  };

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <Header />
      <main className="pt-24">
        <section className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-bold px-3 py-1 rounded-full mb-4">
              <Snowflake className="w-4 h-4" /> NOVIDADE SERVIBEL
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
              Ar Condicionado em Belo Horizonte e Região
            </h1>
            <p className="text-lg text-foreground/80 mb-6">
              Instalação, limpeza, manutenção e conserto de ar condicionado com quem tem <strong>35 anos de experiência</strong>. Atendimento em domicílio em toda a Grande BH.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-bold text-lg">
              <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp agora
            </a>
          </div>
          <img src={arImg} alt="Instalação e manutenção de ar condicionado em BH - SERVIBEL" width={1200} height={688} className="rounded-2xl shadow-card w-full object-cover" />
        </section>

        <section className="bg-secondary/40 py-14">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-primary text-center mb-10">Serviços de Ar Condicionado</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicos.map(({ icon: Icon, t, d }) => (
                <div key={t} className="bg-card rounded-xl p-6 shadow-card">
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-lg mb-2">{t}</h3>
                  <p className="text-muted-foreground text-sm">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-14">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">Atendemos toda a região de Belo Horizonte</h2>
          <p className="text-foreground/80 mb-6">Precisa de conserto, reparo ou instalação de ar condicionado? A SERVIBEL vai até você:</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {regioes.map((r) => (
              <span key={r} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">{r}</span>
            ))}
          </div>
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">O calor não espera. Agende hoje.</h2>
            <p className="mb-6 opacity-90">Agenda da semana enchendo rápido — garanta seu horário.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card text-primary px-6 py-3 rounded-lg font-bold">
              <MessageCircle className="w-5 h-5" /> Falar com a SERVIBEL
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  );
};

export default ArCondicionado;
