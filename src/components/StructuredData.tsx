import { useEffect } from 'react';

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.servibel.com.br/#localbusiness",
  "name": "SERVIBEL - Assistência Técnica",
  "image": "https://www.servibel.com.br/icon-512.png",
  "url": "https://www.servibel.com.br",
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
    "Geladeira não gela em Justinópolis",
    "Geladeira parou de funcionar em Justinópolis",
    "Técnico de geladeira em Justinópolis",
    "Troca de gás de geladeira em Justinópolis",
    "Reparo de refrigerador em Justinópolis",
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

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.servibel.com.br/#rating",
  "name": "SERVIBEL - Assistência Técnica",
  "image": "https://www.servibel.com.br/icon-512.png",
  "url": "https://www.servibel.com.br",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "287",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Maria Aparecida" },
      "datePublished": "2025-09-12",
      "reviewBody": "Minha geladeira parou de gelar em Justinópolis e o técnico da SERVIBEL veio no mesmo dia. Resolveu rapidinho e com garantia. Recomendo!",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "João Carlos" },
      "datePublished": "2025-10-03",
      "reviewBody": "Máquina de lavar não centrifugava. Técnico explicou tudo, trocou a peça e ficou perfeita. Ótimo atendimento em Ribeirão das Neves.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Fernanda Souza" },
      "datePublished": "2025-11-18",
      "reviewBody": "Já é a terceira vez que chamo a SERVIBEL. Confiança total. 35 anos de tradição em Justinópolis não é à toa.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }
  ]
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.servibel.com.br/#service",
  "serviceType": "Assistência Técnica de Eletrodomésticos",
  "provider": { "@id": "https://www.servibel.com.br/#localbusiness" },
  "areaServed": [
    { "@type": "City", "name": "Justinópolis" },
    { "@type": "City", "name": "Ribeirão das Neves" },
    { "@type": "City", "name": "Belo Horizonte" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços SERVIBEL",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de Geladeira" }, "priceCurrency": "BRL", "price": "150" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de Máquina de Lavar" }, "priceCurrency": "BRL", "price": "150" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de Lava e Seca" }, "priceCurrency": "BRL", "price": "180" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de Freezer" }, "priceCurrency": "BRL", "price": "150" }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.servibel.com.br/" },
    { "@type": "ListItem", "position": 2, "name": "Assistência Técnica em Justinópolis", "item": "https://www.servibel.com.br/" }
  ]
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
    },
    {
      "@type": "Question",
      "name": "Minha geladeira não está gelando em Justinópolis. O que pode ser?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Geladeira que não gela em Justinópolis geralmente está com falta de gás, compressor com defeito, termostato queimado ou sensor de degelo travado. A SERVIBEL faz diagnóstico no local em Justinópolis e Ribeirão das Neves com orçamento gratuito."
      }
    },
    {
      "@type": "Question",
      "name": "Quem é o melhor técnico de geladeira em Justinópolis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SERVIBEL é referência em conserto de geladeira em Justinópolis há 35 anos. Atendemos todas as marcas (Brastemp, Consul, Electrolux, LG, Samsung) com peças originais e garantia."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês fazem troca de gás de geladeira em Justinópolis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Fazemos recarga e troca de gás de geladeira e freezer em Justinópolis e Ribeirão das Neves, com teste de vazamento e garantia."
      }
    },
    {
      "@type": "Question",
      "name": "Geladeira fazendo barulho em Justinópolis: tem conserto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Barulho na geladeira normalmente vem do compressor, ventoinha do freezer ou bandeja de degelo. A SERVIBEL identifica a causa no local em Justinópolis e resolve no mesmo dia na maioria dos casos."
      }
    }
  ]
};

const StructuredData = () => {
  useEffect(() => {
    const ids = ['ld-localbusiness', 'ld-rating', 'ld-service', 'ld-breadcrumb', 'ld-faq'];
    const data = [localBusiness, aggregateRatingSchema, servicesSchema, breadcrumbSchema, faqSchema];
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