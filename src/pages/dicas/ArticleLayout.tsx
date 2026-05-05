import { useEffect, ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

const WHATSAPP_URL =
  'https://wa.me/5531984101104?text=Ol%C3%A1%2C%20quero%20falar%20com%20o%20especialista%20SERVIBEL';

export const CTAWhats = ({ label = 'Falar com o especialista no WhatsApp' }: { label?: string }) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa54] text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02] text-base md:text-lg w-full sm:w-auto"
  >
    <MessageCircle className="w-5 h-5" />
    {label}
  </a>
);

const FloatingWhats = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp SERVIBEL"
    className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-[#25D366] hover:bg-[#1faa54] text-white font-semibold px-5 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
  >
    <MessageCircle className="w-6 h-6" />
    <span className="hidden lg:inline">WhatsApp</span>
  </a>
);

interface Props {
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}

const ArticleLayout = ({ title, metaTitle, description, category, image, imageAlt, children }: Props) => {
  useEffect(() => {
    document.title = metaTitle;
    const metas: { name?: string; property?: string; content: string }[] = [
      { name: 'robots', content: 'max-image-preview:large' },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image.startsWith('http') ? image : window.location.origin + image },
      { property: 'og:type', content: 'article' },
    ];
    const created: HTMLMetaElement[] = [];
    metas.forEach(({ name, property, content }) => {
      const sel = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let tag = document.head.querySelector<HTMLMetaElement>(sel);
      if (!tag) {
        tag = document.createElement('meta');
        if (name) tag.setAttribute('name', name);
        if (property) tag.setAttribute('property', property);
        document.head.appendChild(tag);
        created.push(tag);
      }
      tag.setAttribute('content', content);
    });

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      image: [image.startsWith('http') ? image : window.location.origin + image],
      author: { '@type': 'Organization', name: 'SERVIBEL Assistência Técnica' },
      publisher: {
        '@type': 'Organization',
        name: 'SERVIBEL Assistência Técnica',
        logo: { '@type': 'ImageObject', url: window.location.origin + '/icon-512.png' },
      },
      datePublished: '2026-05-05',
      dateModified: '2026-05-05',
    });
    document.head.appendChild(ld);

    return () => {
      created.forEach((t) => t.remove());
      ld.remove();
    };
  }, [title, metaTitle, description, image]);

  return (
    <div className="min-h-screen pb-16 md:pb-0 bg-background">
      <Header />
      <main className="pt-8 pb-16">
        <article className="max-w-3xl mx-auto px-4">
          <header className="mb-8">
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
              Dicas SERVIBEL · {category}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground">{description}</p>
          </header>

          <figure className="mb-10">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-md bg-muted">
              <img
                src={image}
                alt={imageAlt}
                width={1200}
                height={675}
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              Imagem ilustrativa — substituir por foto real do atendimento.
            </figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-foreground space-y-6 text-lg leading-relaxed">
            {children}
          </div>

          <aside className="mt-12 p-6 rounded-xl border-2 border-primary/20 bg-primary/5 text-center">
            <p className="font-bold text-lg text-foreground mb-2">Consultoria de quem entende</p>
            <p className="text-muted-foreground mb-5">
              Servibel Assistência Técnica – 35 anos de tradição em Justinópolis, Ribeirão das Neves e BH.
              Fale com o dono:
            </p>
            <div className="flex justify-center">
              <CTAWhats />
            </div>
          </aside>
        </article>
      </main>
      <Footer />
      <MobileActionBar />
      <FloatingWhats />
    </div>
  );
};

export default ArticleLayout;