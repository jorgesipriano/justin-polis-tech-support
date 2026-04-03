import { ArrowLeft, MessageCircle, MapPin, Clock, Shield, Star, Gift, Sparkles, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo-servibel.jpeg';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceConfig {
  slug: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  ctaLabel: string;
  whatsappMessage: string;
  location?: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  seoContent: string;
  faqs: FAQ[];
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
    metaTitle: 'Conserto de Máquina de Lavar em BH | Visita Grátis - SERVIBEL',
    metaDescription: 'Reparo de máquina de lavar em Belo Horizonte com visita grátis. Técnicos especializados, peças originais e garantia. Atendimento em até 24h. Ligue agora!',
    seoContent: 'A SERVIBEL é referência em conserto de máquinas de lavar em Belo Horizonte há mais de 35 anos. Nossos técnicos são treinados para atender todas as marcas — Brastemp, Electrolux, LG, Samsung, Consul e mais. Realizamos diagnósticos precisos e utilizamos peças originais para garantir a durabilidade do reparo. Atendemos toda a região metropolitana de BH com agilidade e comprometimento.',
    faqs: [
      { question: 'Quanto custa o conserto de máquina de lavar em BH?', answer: 'O valor varia conforme o defeito. Na SERVIBEL, a visita técnica é grátis para moradores de BH. Após o diagnóstico, você recebe o orçamento sem compromisso.' },
      { question: 'Vocês consertam todas as marcas de máquina de lavar?', answer: 'Sim! Trabalhamos com Brastemp, Electrolux, LG, Samsung, Consul, Panasonic e todas as demais marcas do mercado.' },
      { question: 'Qual o prazo de atendimento?', answer: 'Realizamos atendimento em até 24 horas após o contato. Em muitos casos, conseguimos agendar para o mesmo dia.' },
      { question: 'O conserto tem garantia?', answer: 'Sim, todos os nossos serviços possuem garantia. Utilizamos peças originais e de qualidade para assegurar a durabilidade do reparo.' },
    ],
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
    metaTitle: 'Conserto de Geladeira em Justinópolis | 15% Desconto - SERVIBEL',
    metaDescription: 'Reparo de geladeira em Justinópolis e Ribeirão das Neves. Desconto exclusivo de bairro! Técnicos especializados em todas as marcas. Atendimento rápido.',
    seoContent: 'Moradores de Justinópolis e Ribeirão das Neves contam com a SERVIBEL para conserto de geladeiras de todas as marcas e modelos. Com mais de 35 anos de experiência, somos a escolha certa para resolver problemas como geladeira que não gela, barulhos estranhos, vazamento de água, compressor com defeito e muito mais. Nossa equipe técnica está preparada para atender na sua casa com rapidez e eficiência.',
    faqs: [
      { question: 'Minha geladeira parou de gelar, o que pode ser?', answer: 'Pode ser problema no compressor, falta de gás, termostato com defeito ou obstrução no sistema. Nossos técnicos fazem o diagnóstico completo na sua casa.' },
      { question: 'Vocês atendem em Justinópolis mesmo?', answer: 'Sim! Justinópolis é uma das nossas principais regiões de atendimento. Estamos perto de você e oferecemos desconto exclusivo para moradores do bairro.' },
      { question: 'Quanto tempo demora o conserto de uma geladeira?', answer: 'A maioria dos reparos é concluída no mesmo dia. Em casos que exigem peças especiais, informamos o prazo no ato do orçamento.' },
    ],
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
    metaTitle: 'Conserto de Lava e Seca em BH | Especialistas - SERVIBEL',
    metaDescription: 'Assistência técnica especializada em lava e seca em BH e região. Visita grátis, peças originais e garantia. Todas as marcas. +35 anos de experiência.',
    seoContent: 'A lava e seca é um dos eletrodomésticos mais complexos da sua casa, e exige técnicos realmente especializados. A SERVIBEL possui mais de 35 anos de experiência em reparo de lava e seca de todas as marcas — LG, Samsung, Electrolux, Brastemp e mais. Problemas comuns como não centrifugar, não secar, fazer barulho ou apresentar erro no painel são resolvidos com rapidez e precisão pela nossa equipe.',
    faqs: [
      { question: 'Minha lava e seca não está secando, o que fazer?', answer: 'Pode ser problema na resistência, sensor de temperatura, filtro entupido ou falha na placa. Agende uma visita grátis e nossos técnicos identificam o problema.' },
      { question: 'Vocês trabalham com peças originais?', answer: 'Sim! Utilizamos peças originais e de alta qualidade para garantir que o reparo seja duradouro e seguro.' },
      { question: 'Qual a diferença entre manutenção preventiva e reparo?', answer: 'A manutenção preventiva é uma limpeza e revisão para evitar problemas futuros. O reparo é quando o aparelho já apresenta defeito e precisa de conserto.' },
      { question: 'Atendem em toda BH?', answer: 'Sim, atendemos Belo Horizonte, Contagem, Betim, Ribeirão das Neves, Santa Luzia e toda a região metropolitana.' },
    ],
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
    metaTitle: 'Limpeza de Lava e Seca em BH | 10% Desconto - SERVIBEL',
    metaDescription: 'Limpeza profissional de lava e seca em BH. Elimine mau cheiro, mofo e resíduos. 10% de desconto exclusivo. Prolongue a vida útil do seu aparelho!',
    seoContent: 'A limpeza regular da sua lava e seca é essencial para manter o desempenho do aparelho e evitar problemas como mau cheiro, mofo, roupas manchadas e até danos mecânicos. A SERVIBEL oferece o serviço completo de higienização e manutenção preventiva: limpamos o tambor, filtros, borrachas, dutos de secagem e dispensers. Com mais de 35 anos de experiência, garantimos um serviço profissional que prolonga a vida útil do seu eletrodoméstico.',
    faqs: [
      { question: 'Com que frequência devo limpar minha lava e seca?', answer: 'Recomendamos uma limpeza profissional a cada 6 meses. Se você usa o aparelho diariamente, o ideal é a cada 3-4 meses para evitar acúmulo de resíduos.' },
      { question: 'A limpeza resolve o mau cheiro da lava e seca?', answer: 'Sim! O mau cheiro geralmente é causado por mofo e resíduos de sabão acumulados no tambor e borrachas. Nossa limpeza profissional elimina completamente o problema.' },
      { question: 'Quanto tempo leva a limpeza?', answer: 'O serviço completo leva em média 1 a 2 horas, dependendo do estado do aparelho. Fazemos tudo na sua casa, sem necessidade de desmontar.' },
      { question: 'A limpeza pode evitar consertos futuros?', answer: 'Com certeza! A manutenção preventiva evita o acúmulo de sujeira que pode danificar peças internas, entupir dutos e causar falhas no funcionamento.' },
    ],
  },
  'conserto-microondas-bh': {
    slug: 'conserto-microondas-bh',
    title: 'Conserto de Microondas',
    subtitle: 'em BH e Região',
    heroDescription: 'Seu microondas parou de funcionar, não aquece ou faz barulho? A SERVIBEL conserta todas as marcas com rapidez e garantia!',
    couponLabel: '🎁 VISITA GRÁTIS',
    couponCode: 'MICRO10',
    whatsappMessage: 'Olá! Vi a promoção de VISITA GRÁTIS para conserto de microondas em BH. Código: MICRO10',
    location: 'Belo Horizonte',
    keywords: ['conserto microondas', 'reparo microondas', 'arrumar microondas', 'microondas não aquece', 'microondas BH'],
    metaTitle: 'Conserto de Microondas em BH | Visita Grátis - SERVIBEL',
    metaDescription: 'Conserto de microondas em Belo Horizonte. Todas as marcas: Electrolux, Brastemp, LG, Panasonic. Visita grátis, peças originais e garantia.',
    seoContent: 'A SERVIBEL é especialista em conserto de microondas em Belo Horizonte e região metropolitana. Resolvemos todos os tipos de problemas: microondas que não aquece, prato que não gira, painel com defeito, faíscas internas, barulhos estranhos e porta com problema. Trabalhamos com todas as marcas — Electrolux, Brastemp, LG, Panasonic, Consul, Samsung e mais.',
    faqs: [
      { question: 'Meu microondas não aquece, o que pode ser?', answer: 'Geralmente é problema no magnetron, diodo ou capacitor. Nossos técnicos fazem o diagnóstico na sua casa e informam o orçamento antes de iniciar o reparo.' },
      { question: 'Vale a pena consertar um microondas?', answer: 'Na maioria dos casos, sim! O conserto custa uma fração do valor de um aparelho novo.' },
      { question: 'Consertam microondas de embutir?', answer: 'Sim! Atendemos microondas de bancada, de embutir e micro-ondas com grill de todas as marcas.' },
      { question: 'Quanto tempo demora o conserto?', answer: 'A maioria dos reparos é feita no mesmo dia. Casos que exigem peças específicas podem levar de 2 a 5 dias úteis.' },
    ],
  },
  'conserto-freezer-bh': {
    slug: 'conserto-freezer-bh',
    title: 'Conserto de Freezer',
    subtitle: 'em BH e Região',
    heroDescription: 'Seu freezer não está gelando ou faz barulho? Não perca seus alimentos! A SERVIBEL conserta freezers de todas as marcas com urgência.',
    couponLabel: '🎁 VISITA GRÁTIS',
    couponCode: 'FREEZER10',
    whatsappMessage: 'Olá! Vi a promoção de VISITA GRÁTIS para conserto de freezer em BH. Código: FREEZER10',
    location: 'Belo Horizonte',
    keywords: ['conserto freezer', 'reparo freezer', 'arrumar freezer', 'freezer não gela', 'freezer BH'],
    metaTitle: 'Conserto de Freezer em BH | Visita Grátis - SERVIBEL',
    metaDescription: 'Conserto de freezer em Belo Horizonte e região. Atendimento urgente, todas as marcas. Visita grátis e garantia no serviço.',
    seoContent: 'Freezer com problema é urgência — seus alimentos não podem esperar. A SERVIBEL oferece atendimento prioritário para conserto de freezers em BH e região metropolitana. Resolvemos: freezer que não gela, gelo excessivo, barulho no compressor, vazamento de água, porta que não veda e painel com erro. Atendemos freezers verticais, horizontais e comerciais de todas as marcas.',
    faqs: [
      { question: 'Meu freezer parou de gelar, é urgente?', answer: 'Sim! Oferecemos atendimento prioritário para freezers. Entre em contato agora e tentamos agendar para o mesmo dia.' },
      { question: 'O freezer está fazendo muito barulho, o que pode ser?', answer: 'Pode ser problema no compressor, ventilador interno ou acúmulo de gelo. Nossos técnicos fazem o diagnóstico na hora.' },
      { question: 'Vocês consertam freezer comercial?', answer: 'Sim! Atendemos freezers residenciais e comerciais de todas as marcas e tamanhos.' },
      { question: 'O conserto tem garantia?', answer: 'Sim, todos os nossos serviços possuem garantia com peças de qualidade.' },
    ],
  },
  'conserto-maquina-lavar': {
    slug: 'conserto-maquina-lavar',
    title: 'Conserto de Máquina de Lavar',
    subtitle: 'BH e Região Metropolitana',
    heroDescription: 'Máquina de lavar com defeito? Não centrifuga, não enche ou faz barulho? A SERVIBEL resolve! Técnicos especializados em todas as marcas.',
    couponLabel: '🎁 VISITA GRÁTIS',
    couponCode: 'LAVAR10',
    whatsappMessage: 'Olá! Vi a promoção de VISITA GRÁTIS para conserto de máquina de lavar. Código: LAVAR10',
    location: 'Belo Horizonte',
    keywords: ['conserto máquina de lavar', 'reparo máquina de lavar', 'arrumar máquina de lavar', 'lavadora com defeito', 'máquina de lavar BH'],
    metaTitle: 'Conserto de Máquina de Lavar em BH | Todas as Marcas - SERVIBEL',
    metaDescription: 'Conserto de máquina de lavar em BH e região. Brastemp, Electrolux, LG, Samsung. Visita grátis, peças originais e garantia. +35 anos.',
    seoContent: 'A SERVIBEL é referência em conserto de máquinas de lavar em BH. Com mais de 35 anos de experiência, resolvemos: máquina que não liga, não centrifuga, não enche, vaza água, faz barulho ou trava no ciclo. Todas as marcas — Brastemp, Electrolux, LG, Samsung, Consul, Panasonic, Mueller e mais.',
    faqs: [
      { question: 'Minha máquina de lavar não centrifuga, o que pode ser?', answer: 'Pode ser problema na placa, motor, correia, amortecedores ou excesso de roupa. Diagnóstico preciso na sua casa.' },
      { question: 'Quanto custa arrumar uma máquina de lavar?', answer: 'Depende do defeito. Oferecemos visita grátis e orçamento sem compromisso.' },
      { question: 'Vocês consertam tanquinho?', answer: 'Sim! Consertamos lavadoras automáticas, semi-automáticas e tanquinhos de todas as marcas.' },
      { question: 'Atendem em quais regiões?', answer: 'BH, Contagem, Betim, Ribeirão das Neves, Santa Luzia, Vespasiano e toda a região metropolitana.' },
    ],
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

  // Dynamic SEO meta tags & JSON-LD
  useEffect(() => {
    if (!config) return;

    document.title = config.metaTitle;

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

    setMeta('description', config.metaDescription);
    setMeta('keywords', config.keywords.join(', '));
    setMeta('og:title', config.metaTitle, true);
    setMeta('og:description', config.metaDescription, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', `https://servibel.com.br/${config.slug}`, true);

    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://servibel.com.br/${config.slug}`;

    // JSON-LD structured data
    const jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.id = 'service-jsonld';
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'SERVIBEL - Assistência Técnica e Peças',
      description: config.metaDescription,
      url: `https://servibel.com.br/${config.slug}`,
      telephone: '+5531984101104',
      address: {
        '@type': 'PostalAddress',
        addressLocality: config.location || 'Belo Horizonte',
        addressRegion: 'MG',
        addressCountry: 'BR',
      },
      areaServed: config.location || 'Belo Horizonte e Região Metropolitana',
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '247',
      },
    });
    document.head.appendChild(jsonLd);

    // FAQ structured data
    const faqLd = document.createElement('script');
    faqLd.type = 'application/ld+json';
    faqLd.id = 'faq-jsonld';
    faqLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: config.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(faqLd);

    return () => {
      document.getElementById('service-jsonld')?.remove();
      document.getElementById('faq-jsonld')?.remove();
    };
  }, [config]);

  // GTM específico para limpa-lava-e-seca (GTM-W7X24QV7)
  useEffect(() => {
    if (slug !== 'limpa-lava-e-seca') return;

    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W7X24QV7');`;
    document.head.appendChild(script);

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

      {/* SEO Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Por que escolher a SERVIBEL para {config.title.toLowerCase()}?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {config.seoContent}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.keywords.map((kw) => (
                <div key={kw} className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary shrink-0" />
                  <span className="capitalize">{kw}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {config.faqs.map((faq, i) => (
                <details key={i} className="group bg-card rounded-xl shadow-sm">
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-foreground hover:text-primary transition-colors list-none">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
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
