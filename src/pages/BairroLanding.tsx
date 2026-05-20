import { ArrowLeft, MessageCircle, MapPin, Clock, Shield, Star, Wrench, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '@/assets/logo-servibel.jpeg';

interface BairroConfig {
  slug: string;
  bairro: string;
  regiao: string;
  ruas: string[];
  intro: string;
  destaque: string;
}

const bairros: Record<string, BairroConfig> = {
  'assistencia-tecnica-maria-helena-justinopolis': {
    slug: 'assistencia-tecnica-maria-helena-justinopolis',
    bairro: 'Maria Helena',
    regiao: 'Justinópolis - Ribeirão das Neves',
    ruas: ['Rua Maria Helena', 'Rua das Acácias', 'Rua Belo Vale', 'Avenida Maria Helena', 'Rua Santo Antônio'],
    intro: 'Moradores do Maria Helena em Justinópolis contam com a SERVIBEL para conserto de geladeira, máquina de lavar, lava e seca, microondas e freezer. Estamos pertinho — base própria em Ribeirão das Neves há mais de 35 anos.',
    destaque: 'Atendimento no mesmo dia no Maria Helena. Técnico chega rápido na sua porta com peças originais.',
  },
  'assistencia-tecnica-areias-justinopolis': {
    slug: 'assistencia-tecnica-areias-justinopolis',
    bairro: 'Areias',
    regiao: 'Justinópolis - Ribeirão das Neves',
    ruas: ['Rua Principal Areias', 'Rua das Areias', 'Rua Projetada', 'Avenida Central Areias', 'Rua dos Pinheiros'],
    intro: 'O bairro Areias em Justinópolis tem na SERVIBEL sua assistência técnica de confiança. Conserto de geladeira, máquina de lavar e lava e seca em todo o Areias com garantia.',
    destaque: 'Técnico SERVIBEL no Areias com diagnóstico na hora e orçamento sem compromisso.',
  },
  'assistencia-tecnica-botafogo-justinopolis': {
    slug: 'assistencia-tecnica-botafogo-justinopolis',
    bairro: 'Botafogo',
    regiao: 'Justinópolis - Ribeirão das Neves',
    ruas: ['Rua Botafogo', 'Rua das Palmeiras', 'Rua Esperança', 'Avenida Botafogo', 'Rua São José'],
    intro: 'No bairro Botafogo em Justinópolis, a SERVIBEL é referência em conserto de eletrodomésticos. 35 anos atendendo Botafogo e região com técnicos especializados.',
    destaque: 'Reparo de geladeira e máquina de lavar no Botafogo no mesmo dia.',
  },
  'assistencia-tecnica-rosaneves-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-rosaneves-ribeirao-das-neves',
    bairro: 'Rosaneves',
    regiao: 'Ribeirão das Neves',
    ruas: ['Avenida Rosaneves', 'Rua das Rosas', 'Rua Ipê Amarelo', 'Rua dos Lírios', 'Rua Jasmim'],
    intro: 'Rosaneves é uma das principais regiões atendidas pela SERVIBEL em Ribeirão das Neves. Conserto e reparo de geladeira, lavadora, lava e seca, microondas e freezer com 35 anos de experiência.',
    destaque: 'Técnico no Rosaneves com atendimento rápido e peças originais.',
  },
  'assistencia-tecnica-viena-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-viena-ribeirao-das-neves',
    bairro: 'Viena',
    regiao: 'Ribeirão das Neves',
    ruas: ['Rua Viena', 'Avenida Áustria', 'Rua Salzburgo', 'Rua Danúbio', 'Rua Mozart'],
    intro: 'Conserto de eletrodomésticos no bairro Viena em Ribeirão das Neves com a SERVIBEL. Estamos a poucos minutos do Viena, garantindo atendimento ágil.',
    destaque: 'Reparo de máquina de lavar e geladeira no Viena hoje mesmo.',
  },
  'assistencia-tecnica-felixlandia-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-felixlandia-ribeirao-das-neves',
    bairro: 'Felixlândia',
    regiao: 'Ribeirão das Neves',
    ruas: ['Rua Felixlândia', 'Avenida Principal Felixlândia', 'Rua das Flores', 'Rua Bela Vista', 'Rua dos Andradas'],
    intro: 'A SERVIBEL atende Felixlândia em Ribeirão das Neves com conserto e reparo de todos os eletrodomésticos. Mais de 35 anos atendendo a região.',
    destaque: 'Técnico na sua casa em Felixlândia com diagnóstico gratuito.',
  },
  'assistencia-tecnica-fortaleza-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-fortaleza-ribeirao-das-neves',
    bairro: 'Fortaleza',
    regiao: 'Ribeirão das Neves',
    ruas: ['Rua Fortaleza', 'Avenida Ceará', 'Rua Iracema', 'Rua Beira Mar', 'Rua dos Pescadores'],
    intro: 'Conserto de geladeira, máquina de lavar e lava e seca no bairro Fortaleza em Ribeirão das Neves. SERVIBEL é a assistência técnica que o Fortaleza confia.',
    destaque: 'Atendimento prioritário no Fortaleza para freezer e geladeira que pararam.',
  },
  'assistencia-tecnica-atalaia-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-atalaia-ribeirao-das-neves',
    bairro: 'Atalaia',
    regiao: 'Luar da Pampulha - Ribeirão das Neves',
    ruas: ['Rua Atalaia', 'Rua das Hortênsias', 'Rua dos Coqueiros', 'Avenida Atalaia', 'Rua Bom Jesus'],
    intro: 'O bairro Atalaia, no Luar da Pampulha em Ribeirão das Neves, conta com a SERVIBEL para conserto de geladeira, máquina de lavar, lava e seca, microondas e freezer. Mais de 35 anos atendendo a região.',
    destaque: 'Técnico no Atalaia hoje mesmo, com peças originais e garantia.',
  },
  'assistencia-tecnica-eliane-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-eliane-ribeirao-das-neves',
    bairro: 'Eliane',
    regiao: 'Luar da Pampulha - Ribeirão das Neves',
    ruas: ['Rua Eliane', 'Rua das Margaridas', 'Rua São Pedro', 'Avenida Eliane', 'Rua Boa Esperança'],
    intro: 'No bairro Eliane (Luar da Pampulha), em Ribeirão das Neves, a SERVIBEL é a assistência técnica de confiança em eletrodomésticos. Estamos perto e chegamos rápido.',
    destaque: 'Reparo de máquina de lavar e geladeira no Eliane com diagnóstico na hora.',
  },
  'assistencia-tecnica-granjas-primavera-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-granjas-primavera-ribeirao-das-neves',
    bairro: 'Granjas Primavera',
    regiao: 'Kátia - Ribeirão das Neves',
    ruas: ['Rua Primavera', 'Rua das Granjas', 'Avenida Granjas Primavera', 'Rua dos Ipês', 'Rua Bem-te-vi'],
    intro: 'Granjas Primavera, na região do Kátia em Ribeirão das Neves, é atendida pela SERVIBEL com conserto de geladeira, lavadora, lava e seca, microondas e freezer. 35 anos de experiência.',
    destaque: 'Atendimento no mesmo dia em Granjas Primavera, sem custo de visita.',
  },
  'assistencia-tecnica-hawai-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-hawai-ribeirao-das-neves',
    bairro: 'Hawaí',
    regiao: 'Luar da Pampulha - Ribeirão das Neves',
    ruas: ['Rua Hawaí', 'Rua Honolulu', 'Avenida Pacífico', 'Rua das Palmeiras', 'Rua Aloha'],
    intro: 'O bairro Hawaí (Luar da Pampulha) em Ribeirão das Neves tem a SERVIBEL como assistência técnica oficial dos moradores. Conserto rápido de eletrodomésticos com peças originais.',
    destaque: 'Reparo de lava e seca, geladeira e microondas no Hawaí com garantia.',
  },
  'assistencia-tecnica-labanca-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-labanca-ribeirao-das-neves',
    bairro: 'Labanca',
    regiao: 'Kátia - Ribeirão das Neves',
    ruas: ['Rua Labanca', 'Rua Padre Eustáquio', 'Avenida Labanca', 'Rua São Francisco', 'Rua das Flores'],
    intro: 'No Labanca, região do Kátia em Ribeirão das Neves, a SERVIBEL atende com conserto de geladeira, máquina de lavar e demais eletrodomésticos. Técnicos especializados há mais de 35 anos.',
    destaque: 'Técnico SERVIBEL no Labanca com orçamento sem compromisso.',
  },
  'assistencia-tecnica-lidici-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-lidici-ribeirao-das-neves',
    bairro: 'Lidici',
    regiao: 'Luar da Pampulha - Ribeirão das Neves',
    ruas: ['Rua Lidici', 'Avenida Lidici', 'Rua das Acácias', 'Rua Boa Vista', 'Rua dos Pinheiros'],
    intro: 'O Lidici, no Luar da Pampulha em Ribeirão das Neves, conta com a SERVIBEL para reparo de geladeira, lavadora, lava e seca, microondas e freezer. Atendimento ágil e com garantia.',
    destaque: 'Conserto de eletrodomésticos no Lidici no mesmo dia.',
  },
  'assistencia-tecnica-sao-januario-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-sao-januario-ribeirao-das-neves',
    bairro: 'São Januário',
    regiao: 'Kátia - Ribeirão das Neves',
    ruas: ['Rua São Januário', 'Avenida São Januário', 'Rua Santo Antônio', 'Rua das Pedras', 'Rua Bela Vista'],
    intro: 'O bairro São Januário, na região do Kátia em Ribeirão das Neves, tem a SERVIBEL como referência em assistência técnica de eletrodomésticos.',
    destaque: 'Atendimento prioritário no São Januário para geladeira e freezer.',
  },
  'assistencia-tecnica-tancredo-neves-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-tancredo-neves-ribeirao-das-neves',
    bairro: 'Tancredo Neves',
    regiao: 'Luar da Pampulha - Ribeirão das Neves',
    ruas: ['Rua Tancredo Neves', 'Avenida Tancredo Neves', 'Rua Presidente Vargas', 'Rua Juscelino Kubitschek', 'Rua Castelo Branco'],
    intro: 'No bairro Tancredo Neves (Luar da Pampulha), em Ribeirão das Neves, a SERVIBEL é a assistência técnica que mais resolve. 35 anos de tradição na região.',
    destaque: 'Técnico no Tancredo Neves com diagnóstico gratuito e peças originais.',
  },
  'assistencia-tecnica-tony-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-tony-ribeirao-das-neves',
    bairro: 'Tony',
    regiao: 'Kátia - Ribeirão das Neves',
    ruas: ['Rua Tony', 'Avenida Tony', 'Rua das Orquídeas', 'Rua São Sebastião', 'Rua Vitória'],
    intro: 'O bairro Tony, na região do Kátia em Ribeirão das Neves, tem a SERVIBEL como sua assistência técnica de confiança em eletrodomésticos.',
    destaque: 'Reparo de máquina de lavar, geladeira e lava e seca no Tony hoje mesmo.',
  },
  'assistencia-tecnica-vila-delma-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-vila-delma-ribeirao-das-neves',
    bairro: 'Vila Delma',
    regiao: 'Luar da Pampulha - Ribeirão das Neves',
    ruas: ['Rua Vila Delma', 'Avenida Vila Delma', 'Rua Nova Esperança', 'Rua das Camélias', 'Rua São Judas'],
    intro: 'A Vila Delma, no Luar da Pampulha em Ribeirão das Neves, conta com a SERVIBEL para conserto de geladeira, lavadora, lava e seca, microondas e freezer.',
    destaque: 'Atendimento rápido na Vila Delma com técnico especializado.',
  },
  'assistencia-tecnica-vila-real-ribeirao-das-neves': {
    slug: 'assistencia-tecnica-vila-real-ribeirao-das-neves',
    bairro: 'Vila Real',
    regiao: 'Luar da Pampulha - Ribeirão das Neves',
    ruas: ['Rua Vila Real', 'Avenida Vila Real', 'Rua Real Grandeza', 'Rua das Magnólias', 'Rua Brasil'],
    intro: 'Na Vila Real (Luar da Pampulha), em Ribeirão das Neves, a SERVIBEL atende moradores há mais de 35 anos com conserto de eletrodomésticos com garantia.',
    destaque: 'Conserto na Vila Real no mesmo dia, com peças originais.',
  },
};

export const bairroSlugs = Object.keys(bairros);

const BairroLanding = () => {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const config = bairros[slug];

  useEffect(() => {
    if (!config) return;
    const title = `Assistência Técnica no ${config.bairro} | ${config.regiao} | SERVIBEL`;
    const description = `Conserto de geladeira, máquina de lavar, lava e seca, microondas e freezer no bairro ${config.bairro}, ${config.regiao}. Técnico SERVIBEL na sua porta. +35 anos.`;
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta('description', description);
    setMeta('keywords', `assistência técnica ${config.bairro}, conserto geladeira ${config.bairro}, conserto máquina de lavar ${config.bairro}, técnico ${config.bairro}, ${config.regiao}`);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', `https://www.servibel.com.br/${config.slug}`, true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://www.servibel.com.br/${config.slug}`;

    const jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.id = 'bairro-jsonld';
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `SERVIBEL - Assistência Técnica no ${config.bairro}`,
      description,
      url: `https://www.servibel.com.br/${config.slug}`,
      telephone: '+5531984101104',
      address: { '@type': 'PostalAddress', addressLocality: config.bairro, addressRegion: 'MG', addressCountry: 'BR' },
      areaServed: `${config.bairro}, ${config.regiao}`,
      priceRange: '$$',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '247' },
    });
    document.head.appendChild(jsonLd);

    return () => {
      document.getElementById('bairro-jsonld')?.remove();
    };
  }, [config]);

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

  const whatsappMessage = `Olá SERVIBEL! Sou do bairro ${config.bairro} (${config.regiao}) e preciso de atendimento técnico.`;
  const whatsappUrl = `https://wa.me/5531984101104?text=${encodeURIComponent(whatsappMessage)}`;

  const servicos = [
    'Conserto de geladeira',
    'Reparo de máquina de lavar',
    'Conserto de lava e seca',
    'Limpeza de lava e seca',
    'Conserto de microondas',
    'Conserto de freezer',
  ];

  return (
    <div className="min-h-screen bg-background">
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
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com Técnico
          </a>
        </div>
      </header>

      <div className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-center">
          <Shield className="w-5 h-5 shrink-0" />
          <p className="font-bold text-sm md:text-base">
            Atendendo o bairro {config.bairro} há mais de 35 anos
          </p>
        </div>
      </div>

      <section className="bg-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold">{config.regiao}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight">
            Assistência Técnica no {config.bairro}
          </h1>
          <p className="font-display text-xl md:text-2xl font-semibold text-accent mb-6">
            Conserto de eletrodomésticos com técnico na sua porta
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed mb-10">
            {config.destaque}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            Chamar Técnico no {config.bairro}
          </a>
          <p className="text-sm mt-4 opacity-70">Atendimento imediato • Orçamento sem compromisso</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            SERVIBEL no bairro {config.bairro}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">{config.intro}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {servicos.map((s) => (
              <div key={s} className="flex items-start gap-2 bg-secondary p-4 rounded-xl">
                <Wrench className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground">{s}</span>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
            <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Ruas e regiões atendidas no {config.bairro}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              {config.ruas.map((rua) => (
                <li key={rua} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {rua}
                </li>
              ))}
              <li className="flex items-center gap-2 sm:col-span-2 text-sm italic mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                E todas as demais ruas e travessas do bairro {config.bairro}.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            <div className="bg-primary text-primary-foreground p-6 text-center">
              <Star className="w-10 h-10 mx-auto mb-2" />
              <h2 className="font-display text-2xl font-bold">Quem é do {config.bairro} confia na SERVIBEL</h2>
            </div>
            <div className="p-8 text-center">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 text-sm">Mais de 35 anos atendendo {config.regiao}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg w-full justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar Visita no {config.bairro}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Mora no {config.bairro}? Resolvemos hoje!
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Conserto de eletrodomésticos no {config.bairro} ({config.regiao}) com técnico especializado, peças originais e garantia.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            Chamar Técnico no WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} SERVIBEL - Assistência Técnica. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BairroLanding;