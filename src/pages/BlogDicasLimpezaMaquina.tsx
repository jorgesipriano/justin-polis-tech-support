import { useEffect } from 'react';
import { MessageCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import heroImg from '@/assets/maquina-suja-tambor.jpg';
import autorImg from '@/assets/tecnico-servibel.jpg';

const WHATSAPP_URL =
  'https://wa.me/5531984101104?text=Ol%C3%A1%2C%20quero%20um%20diagn%C3%B3stico%20da%20minha%20m%C3%A1quina%20de%20lavar';

const CTAButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa54] text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02] text-base md:text-lg w-full sm:w-auto"
  >
    <MessageCircle className="w-5 h-5" />
    Quero um diagnóstico da minha máquina agora
  </a>
);

const BlogDicasLimpezaMaquina = () => {
  useEffect(() => {
    document.title =
      'Por que sua roupa sai com manchas cinzas? | SERVIBEL Justinópolis';

    const metas: { name?: string; property?: string; content: string }[] = [
      { name: 'robots', content: 'max-image-preview:large' },
      {
        name: 'description',
        content:
          'Manchas cinzas na roupa? Descubra a sujeira oculta atrás do tambor da máquina de lavar e os riscos para sua saúde. Dica de quem entende: 35 anos em Justinópolis.',
      },
      { property: 'og:title', content: 'Por que sua roupa sai com manchas cinzas?' },
      {
        property: 'og:description',
        content:
          'O perigo que ninguém te conta sobre a sujeira oculta na sua máquina de lavar.',
      },
      { property: 'og:image', content: '/og-image.jpg' },
      { property: 'og:type', content: 'article' },
    ];

    const created: HTMLMetaElement[] = [];
    metas.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let tag = document.head.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (name) tag.setAttribute('name', name);
        if (property) tag.setAttribute('property', property);
        document.head.appendChild(tag);
        created.push(tag);
      }
      tag.setAttribute('content', content);
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.servibel.com.br/blog/dicas-limpeza-maquina';

    // Article JSON-LD
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        'Por que sua roupa sai da máquina com manchas cinzas? O perigo que ninguém te conta sobre a sujeira oculta.',
      image: [window.location.origin + '/og-image.jpg'],
      author: {
        '@type': 'Person',
        name: 'Especialista SERVIBEL',
      },
      publisher: {
        '@type': 'Organization',
        name: 'SERVIBEL Assistência Técnica',
        logo: {
          '@type': 'ImageObject',
          url: window.location.origin + '/icon-512.png',
        },
      },
      datePublished: '2026-05-05',
      dateModified: '2026-05-05',
    });
    document.head.appendChild(ld);

    return () => {
      created.forEach((t) => t.remove());
      ld.remove();
    };
  }, []);

  return (
    <div className="min-h-screen pb-16 md:pb-0 bg-background">
      <Header />
      <main className="pt-8 pb-16">
        <article className="max-w-3xl mx-auto px-4">
          <header className="mb-8">
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
              Blog SERVIBEL · Justinópolis
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-4">
              Por que sua roupa sai da máquina com manchas cinzas? O perigo que ninguém te conta sobre a sujeira oculta.
            </h1>
            <p className="text-lg text-muted-foreground">
              Aquelas manchinhas escuras que aparecem do nada na roupa limpa têm uma origem perigosa — e está
              escondida dentro da sua máquina de lavar.
            </p>
          </header>

          <figure className="mb-10">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-md">
              <img
                src={heroImg}
                alt="Tambor sujo de máquina de lavar com mofo e resíduos cinzas"
                width={1200}
                height={675}
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              Sujeira acumulada atrás do tambor — invisível ao usuário comum.
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-foreground space-y-6 text-lg leading-relaxed">
            <p>
              Você lava a roupa achando que está tudo limpo, mas tira do tambor com <strong>manchas cinzas,
              pontinhos pretos ou um cheiro estranho de mofo</strong>. A culpa não é do sabão nem do amaciante:
              é da sujeira invisível que se acumula <strong>atrás do tambor</strong> da máquina.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
              O que está escondido dentro da sua máquina
            </h2>
            <p>
              Toda vez que você lava, restos de sabão, amaciante, fiapos e gordura da pele ficam
              presos em uma região que <strong>nenhum ciclo de lavagem alcança</strong>. Com o tempo,
              isso vira uma camada grossa de borra escura, que solta pedaços durante a lavagem e
              gruda nas roupas.
            </p>

            <ul className="space-y-3 my-6">
              {[
                'Manchas cinzas e pontos pretos nas roupas claras',
                'Cheiro de mofo mesmo após a lavagem',
                'Alergias de pele, coceira e irritação em crianças',
                'Proliferação de fungos e bactérias dentro da máquina',
                'Redução da vida útil do motor e do rolamento',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-10 flex justify-center">
              <CTAButton />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
              Por que a “limpeza caseira” não resolve
            </h2>
            <p>
              Vinagre, bicarbonato e produtos de supermercado <strong>limpam só o que você vê</strong>.
              A sujeira perigosa fica entre o tambor interno e o externo — uma área que só pode ser
              acessada com <strong>desmontagem técnica</strong> da máquina.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
              Como é a higienização técnica da SERVIBEL
            </h2>
            <ul className="space-y-3 my-6">
              {[
                'Desmontagem completa do tambor da máquina',
                'Remoção manual da borra acumulada',
                'Higienização com produtos profissionais antibactéria',
                'Verificação de rolamento, mangueiras e vedação',
                'Garantia no serviço prestado',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              É um serviço de <strong>manutenção preventiva</strong> recomendado a cada 12 meses —
              especialmente em famílias com crianças, animais ou uso intenso da máquina.
            </p>
          </div>

          {/* Author box */}
          <aside className="mt-12 p-6 rounded-xl border bg-card flex flex-col sm:flex-row items-center gap-5 shadow-sm">
            <img
              src={autorImg}
              alt="Especialista SERVIBEL em assistência técnica"
              width={96}
              height={96}
              loading="lazy"
              className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
            />
            <div className="text-center sm:text-left">
              <p className="font-bold text-lg text-foreground">Dica de quem entende</p>
              <p className="text-muted-foreground">
                35 anos de experiência em assistência técnica em Justinópolis e Ribeirão das Neves.
              </p>
            </div>
          </aside>

          <div className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
              Sua máquina precisa de higienização técnica?
            </h3>
            <p className="text-muted-foreground mb-5">
              Fale agora com um especialista SERVIBEL e receba um diagnóstico sem compromisso.
            </p>
            <div className="flex justify-center">
              <CTAButton />
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
};

export default BlogDicasLimpezaMaquina;