import { useEffect } from 'react';

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://servibel.com.br/#localbusiness",
  "name": "SERVIBEL - Assistência Técnica",
  "image": "https://servibel.com.br/icon-512.png",
  "url": "https://servibel.com.br",
  "telephone": "+5531984101104",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Pedro Moreira do Nascimento, 120",
    "addressLocality": "Justinópolis",
    "addressRegion": "MG",
    "addressCountry": "BR",
    "postalCode": "33820-000"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -19.7689,
    "longitude": -44.0869
  },
  "areaServed": [
    { "@type": "City", "name": "Ribeirão das Neves" },
    { "@type": "Place", "name": "Justinópolis" },
    { "@type": "Place", "name": "Bairro Kátia - Justinópolis" },
    { "@type": "Place", "name": "Rosaneves - Justinópolis" },
    { "@type": "Place", "name": "Veneza - Justinópolis" },
    { "@type": "Place", "name": "Sevilha - Justinópolis" },
    { "@type": "Place", "name": "Liberdade - Justinópolis" },
    { "@type": "Place", "name": "Pampulinha - Justinópolis" },
    { "@type": "City", "name": "Belo Horizonte" },
    { "@type": "City", "name": "Vespasiano" },
    { "@type": "City", "name": "Santa Luzia" }
  ],
  "knowsAbout": [
    "Conserto de máquina de lavar em Justinópolis",
    "Reparo de máquina de lavar estragada",
    "Assistência técnica em Justinópolis",
    "Conserto de lava e seca em Justinópolis",
    "Conserto de geladeira em Justinópolis",
    "Conserto de freezer em Justinópolis",
    "Conserto de microondas em Justinópolis",
    "Manutenção preventiva de eletrodomésticos"
  ],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de máquina de lavar em Justinópolis" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reparo de lava e seca em Justinópolis" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de geladeira em Justinópolis" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de freezer em Justinópolis" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de microondas em Justinópolis" } }
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "08:00",
    "closes": "18:00"
  }],
  "sameAs": []
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Com que frequência devo fazer a limpeza da minha máquina de lavar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A limpeza preventiva da máquina de lavar deve ser feita a cada 6 meses para evitar mau cheiro, acúmulo de resíduos e prolongar a vida útil do equipamento."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto custa o conserto de uma geladeira em Justinópolis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O orçamento do conserto de geladeira é gratuito. O valor final depende do defeito (gás, compressor, termostato). A SERVIBEL atende em Justinópolis e Ribeirão das Neves com garantia total."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês oferecem garantia no conserto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Todos os serviços de conserto e limpeza realizados pela SERVIBEL têm garantia por escrito, cobrindo peças e mão de obra."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês atendem em domicílio em Ribeirão das Neves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, atendemos em domicílio em todos os bairros de Ribeirão das Neves e Justinópolis, incluindo Bairro Kátia, Rosaneves, Veneza, Sevilha, Liberdade e Pampulinha."
      }
    },
    {
      "@type": "Question",
      "name": "Minha máquina de lavar está estragada em Justinópolis. Vocês atendem hoje?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A SERVIBEL atende em domicílio em Justinópolis no mesmo dia para máquina de lavar estragada, travada, vazando ou que não centrifuga. Orçamento gratuito pelo WhatsApp (31) 98410-1104."
      }
    },
    {
      "@type": "Question",
      "name": "Quem faz reparo de máquina de lavar em Justinópolis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SERVIBEL é referência em reparo de máquina de lavar em Justinópolis há 35 anos. Atendemos todas as marcas (Brastemp, Electrolux, LG, Samsung, Consul) com garantia por escrito."
      }
    },
    {
      "@type": "Question",
      "name": "Onde consertar lava e seca em Justinópolis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SERVIBEL conserta lava e seca de todas as marcas em Justinópolis e Ribeirão das Neves. Diagnóstico técnico no local, peças originais e garantia."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo demora o conserto de máquina de lavar em Justinópolis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na maioria dos casos o reparo é feito no mesmo dia da visita técnica em Justinópolis. Para peças específicas, prazo médio de 24 a 48 horas."
      }
    }
  ]
};

const StructuredData = () => {
  useEffect(() => {
    const ids = ['ld-localbusiness', 'ld-faq'];
    const data = [localBusiness, faqSchema];
    const scripts: HTMLScriptElement[] = [];
    ids.forEach((id, i) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = id;
      s.text = JSON.stringify(data[i]);
      document.head.appendChild(s);
      scripts.push(s);
    });
    return () => scripts.forEach(s => s.remove());
  }, []);
  return null;
};

export default StructuredData;