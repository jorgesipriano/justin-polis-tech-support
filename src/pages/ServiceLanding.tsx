import { ArrowLeft, MessageCircle, MapPin, Clock, Shield, Star, Sparkles, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
    title: 'Conserto de Máquina de Lavar',
    subtitle: 'em Belo Horizonte e Região',
    heroDescription: 'Precisa arrumar sua máquina de lavar? A SERVIBEL faz reparo, conserto e manutenção de máquinas de lavar em Belo Horizonte, Ribeirão das Neves e Justinópolis com atendimento rápido!',
    ctaLabel: '⚡ Atendimento Hoje Mesmo',
    whatsappMessage: 'Olá! Preciso de conserto/reparo na minha máquina de lavar em BH. Vi pelo site da SERVIBEL.',
    location: 'Belo Horizonte',
    keywords: ['conserto máquina de lavar BH', 'reparo máquina de lavar Belo Horizonte', 'arrumar máquina de lavar', 'máquina de lavar Justinópolis', 'máquina de lavar Ribeirão das Neves', 'assistência técnica lavadora BH'],
    metaTitle: 'Conserto de Máquina de Lavar em BH | Reparo e Arrumar | SERVIBEL',
    metaDescription: 'Conserto, reparo e arrumar máquina de lavar em Belo Horizonte, Ribeirão das Neves e Justinópolis. Técnicos especializados, peças originais. +35 anos.',
    seoContent: 'A SERVIBEL é referência em conserto e reparo de máquinas de lavar em Belo Horizonte há mais de 35 anos. Se você precisa arrumar sua máquina de lavar em BH, Ribeirão das Neves ou Justinópolis, nossos técnicos atendem na sua casa. Trabalhamos com todas as marcas — Brastemp, Electrolux, LG, Samsung, Consul — oferecendo diagnóstico preciso e peças originais. Atendemos toda a região metropolitana de Belo Horizonte, incluindo Justinópolis, Ribeirão das Neves, Contagem e Betim.',
    faqs: [
      { question: 'Quanto custa o conserto de máquina de lavar em BH?', answer: 'O valor varia conforme o defeito. Após o diagnóstico, você recebe o orçamento sem compromisso. Atendemos em Belo Horizonte, Ribeirão das Neves e Justinópolis.' },
      { question: 'Vocês consertam e arrumam todas as marcas de máquina de lavar?', answer: 'Sim! Fazemos conserto e reparo de Brastemp, Electrolux, LG, Samsung, Consul, Panasonic e todas as marcas do mercado.' },
      { question: 'Qual o prazo de atendimento para reparo em Justinópolis?', answer: 'Realizamos atendimento em até 24 horas em Justinópolis, Ribeirão das Neves e BH. Em muitos casos, conseguimos agendar para o mesmo dia.' },
      { question: 'O conserto tem garantia?', answer: 'Sim, todos os nossos serviços de reparo e conserto possuem garantia com peças originais.' },
    ],
  },
  'reparo-geladeira-justinopolis': {
    slug: 'reparo-geladeira-justinopolis',
    title: 'Conserto de Geladeira',
    subtitle: 'em Justinópolis e Ribeirão das Neves',
    heroDescription: 'Geladeira com defeito em Justinópolis? Precisa arrumar ou consertar sua geladeira em Ribeirão das Neves? A SERVIBEL faz reparo de geladeiras na sua porta!',
    ctaLabel: '🔧 Técnico na Sua Porta',
    whatsappMessage: 'Olá! Preciso de conserto/reparo na minha geladeira em Justinópolis. Vi pelo site da SERVIBEL.',
    location: 'Justinópolis - Ribeirão das Neves',
    keywords: ['conserto geladeira Justinópolis', 'reparo geladeira Ribeirão das Neves', 'arrumar geladeira Justinópolis', 'geladeira Ribeirão das Neves', 'conserto refrigerador Justinópolis', 'técnico geladeira Ribeirão das Neves'],
    metaTitle: 'Conserto de Geladeira em Justinópolis e Ribeirão das Neves | SERVIBEL',
    metaDescription: 'Conserto, reparo e arrumar geladeira em Justinópolis e Ribeirão das Neves. Técnicos especializados em todas as marcas. Atendimento rápido na sua região.',
    seoContent: 'Moradores de Justinópolis e Ribeirão das Neves contam com a SERVIBEL para conserto, reparo e manutenção de geladeiras de todas as marcas. Se você precisa arrumar sua geladeira em Justinópolis ou Ribeirão das Neves, somos a escolha certa. Com mais de 35 anos de experiência atendendo em Justinópolis e toda Ribeirão das Neves, resolvemos problemas como geladeira que não gela, barulhos, vazamento de água e compressor com defeito. A SERVIBEL está localizada em Ribeirão das Neves, pertinho de Justinópolis, garantindo atendimento rápido na região.',
    faqs: [
      { question: 'Minha geladeira parou de gelar em Justinópolis, o que pode ser?', answer: 'Pode ser problema no compressor, falta de gás, termostato com defeito ou obstrução. Nossos técnicos fazem o diagnóstico completo na sua casa em Justinópolis e Ribeirão das Neves.' },
      { question: 'Vocês fazem reparo de geladeira em Justinópolis mesmo?', answer: 'Sim! Justinópolis e Ribeirão das Neves são nossas principais regiões de atendimento. Estamos bem pertinho de você!' },
      { question: 'Quanto tempo demora para arrumar uma geladeira em Ribeirão das Neves?', answer: 'A maioria dos consertos e reparos é concluída no mesmo dia em Justinópolis e Ribeirão das Neves.' },
      { question: 'Vocês consertam geladeira de todas as marcas em Justinópolis?', answer: 'Sim! Fazemos reparo e conserto de Brastemp, Electrolux, LG, Samsung, Consul e todas as marcas em Justinópolis e Ribeirão das Neves.' },
    ],
  },
  'reparo-lava-e-seca': {
    slug: 'reparo-lava-e-seca',
    title: 'Conserto de Lava e Seca',
    subtitle: 'em BH, Justinópolis e Ribeirão das Neves',
    heroDescription: 'Precisa consertar, arrumar ou fazer reparo na sua lava e seca? A SERVIBEL é especialista em lava e seca em BH, Justinópolis e Ribeirão das Neves!',
    ctaLabel: '⚡ Orçamento em Minutos',
    whatsappMessage: 'Olá! Preciso de conserto/reparo na minha lava e seca. Vi pelo site da SERVIBEL.',
    location: 'BH, Justinópolis e Ribeirão das Neves',
    keywords: ['conserto lava e seca', 'reparo lava e seca', 'arrumar lava e seca', 'lava e seca Justinópolis', 'lava e seca Ribeirão das Neves', 'assistência lava e seca BH'],
    metaTitle: 'Conserto de Lava e Seca em BH e Justinópolis | Reparo | SERVIBEL',
    metaDescription: 'Conserto, reparo e arrumar lava e seca em BH, Justinópolis e Ribeirão das Neves. Todas as marcas. +35 anos de experiência.',
    seoContent: 'A lava e seca é um dos eletrodomésticos mais complexos, exigindo técnicos especializados para conserto e reparo. A SERVIBEL atende em Belo Horizonte, Justinópolis e Ribeirão das Neves com mais de 35 anos de experiência. Se você precisa arrumar sua lava e seca em Justinópolis ou consertar em Ribeirão das Neves, somos a referência da região. Trabalhamos com LG, Samsung, Electrolux, Brastemp e todas as marcas. Problemas como não centrifugar, não secar, barulho ou erro no painel são resolvidos na sua casa em Justinópolis, Ribeirão das Neves e BH.',
    faqs: [
      { question: 'Minha lava e seca não seca, como arrumar?', answer: 'Pode ser resistência, sensor de temperatura, filtro entupido ou falha na placa. Nossos técnicos fazem o conserto na sua casa em BH, Justinópolis e Ribeirão das Neves.' },
      { question: 'Vocês fazem reparo de lava e seca em Justinópolis?', answer: 'Sim! Atendemos Justinópolis, Ribeirão das Neves e toda BH para conserto e reparo de lava e seca.' },
      { question: 'Qual a diferença entre manutenção e conserto?', answer: 'A manutenção preventiva é uma limpeza e revisão. O conserto (reparo) é quando a lava e seca já apresenta defeito e precisa arrumar.' },
      { question: 'Atendem em Ribeirão das Neves?', answer: 'Sim, atendemos Ribeirão das Neves, Justinópolis, Belo Horizonte, Contagem, Betim e região.' },
    ],
  },
  'limpa-lava-e-seca': {
    slug: 'limpa-lava-e-seca',
    title: 'Limpeza de Lava e Seca',
    subtitle: 'em BH, Justinópolis e Ribeirão das Neves',
    heroDescription: 'Sua lava e seca precisa de limpeza profissional? Evite consertos futuros! Atendemos em Belo Horizonte, Justinópolis e Ribeirão das Neves.',
    ctaLabel: '✨ Agende Sua Limpeza',
    whatsappMessage: 'Olá! Quero agendar uma limpeza na minha lava e seca. Vi pelo site da SERVIBEL.',
    location: 'BH, Justinópolis e Ribeirão das Neves',
    keywords: ['limpeza lava e seca', 'manutenção lava e seca', 'higienização lava e seca', 'lava e seca Justinópolis', 'lava e seca Ribeirão das Neves'],
    metaTitle: 'Limpeza de Lava e Seca em BH, Justinópolis e Ribeirão das Neves | SERVIBEL',
    metaDescription: 'Limpeza profissional de lava e seca em BH, Justinópolis e Ribeirão das Neves. Elimine mau cheiro e mofo. +35 anos.',
    seoContent: 'A limpeza regular da lava e seca evita consertos caros. A SERVIBEL oferece higienização completa em Belo Horizonte, Justinópolis e Ribeirão das Neves: limpamos tambor, filtros, borrachas e dutos. Se você mora em Justinópolis ou Ribeirão das Neves e precisa arrumar ou limpar sua lava e seca, conte com nossos 35 anos de experiência. Atendemos toda a região metropolitana de BH.',
    faqs: [
      { question: 'Com que frequência devo limpar minha lava e seca?', answer: 'Recomendamos a cada 6 meses, ou 3-4 meses se usa diariamente. Atendemos em Justinópolis e Ribeirão das Neves.' },
      { question: 'A limpeza resolve o mau cheiro?', answer: 'Sim! O mau cheiro é causado por mofo e resíduos. Nossa limpeza profissional elimina o problema em Justinópolis, Ribeirão das Neves e BH.' },
      { question: 'Vocês atendem em Ribeirão das Neves?', answer: 'Sim! Atendemos Ribeirão das Neves, Justinópolis e toda BH para limpeza e manutenção de lava e seca.' },
      { question: 'A limpeza evita consertos futuros?', answer: 'Com certeza! A manutenção preventiva evita danos internos. Muito mais barato do que consertar ou arrumar depois.' },
    ],
  },
  'conserto-microondas-bh': {
    slug: 'conserto-microondas-bh',
    title: 'Conserto de Microondas',
    subtitle: 'em BH, Justinópolis e Ribeirão das Neves',
    heroDescription: 'Microondas parou? Não aquece ou faz barulho? A SERVIBEL faz conserto, reparo e arruma microondas em BH, Justinópolis e Ribeirão das Neves!',
    ctaLabel: '⚡ Conserto Rápido',
    whatsappMessage: 'Olá! Preciso de conserto/reparo no meu microondas. Vi pelo site da SERVIBEL.',
    location: 'BH, Justinópolis e Ribeirão das Neves',
    keywords: ['conserto microondas BH', 'reparo microondas', 'arrumar microondas', 'microondas Justinópolis', 'microondas Ribeirão das Neves', 'consertar microondas BH'],
    metaTitle: 'Conserto de Microondas em BH e Justinópolis | Reparo e Arrumar | SERVIBEL',
    metaDescription: 'Conserto, reparo e arrumar microondas em BH, Justinópolis e Ribeirão das Neves. Todas as marcas. Peças originais e garantia.',
    seoContent: 'A SERVIBEL é especialista em conserto e reparo de microondas em Belo Horizonte, Justinópolis e Ribeirão das Neves. Precisa arrumar seu microondas? Resolvemos todos os problemas: não aquece, prato não gira, painel com defeito e faíscas. Atendemos em Justinópolis, Ribeirão das Neves e toda BH. Trabalhamos com Electrolux, Brastemp, LG, Panasonic, Consul e Samsung.',
    faqs: [
      { question: 'Meu microondas não aquece, como arrumar?', answer: 'Geralmente é problema no magnetron, diodo ou capacitor. Nossos técnicos fazem o conserto na sua casa em BH, Justinópolis e Ribeirão das Neves.' },
      { question: 'Vale a pena consertar um microondas?', answer: 'Na maioria dos casos, sim! O reparo custa uma fração de um aparelho novo.' },
      { question: 'Vocês fazem conserto de microondas em Justinópolis?', answer: 'Sim! Atendemos Justinópolis, Ribeirão das Neves e toda BH para conserto e reparo de microondas.' },
      { question: 'Quanto tempo demora para arrumar?', answer: 'A maioria dos reparos é feita no mesmo dia em Justinópolis, Ribeirão das Neves e BH.' },
    ],
  },
  'conserto-freezer-bh': {
    slug: 'conserto-freezer-bh',
    title: 'Conserto de Freezer',
    subtitle: 'em BH, Justinópolis e Ribeirão das Neves',
    heroDescription: 'Freezer não gela? Não perca seus alimentos! A SERVIBEL faz conserto, reparo e arruma freezers em BH, Justinópolis e Ribeirão das Neves com urgência!',
    ctaLabel: '🚨 Atendimento Urgente',
    whatsappMessage: 'Olá! Preciso de conserto urgente no meu freezer. Vi pelo site da SERVIBEL.',
    location: 'BH, Justinópolis e Ribeirão das Neves',
    keywords: ['conserto freezer BH', 'reparo freezer', 'arrumar freezer', 'freezer Justinópolis', 'freezer Ribeirão das Neves', 'consertar freezer BH'],
    metaTitle: 'Conserto de Freezer em BH e Ribeirão das Neves | Reparo Urgente | SERVIBEL',
    metaDescription: 'Conserto, reparo e arrumar freezer em BH, Justinópolis e Ribeirão das Neves. Atendimento urgente. Todas as marcas. Garantia.',
    seoContent: 'Freezer com problema é urgência! A SERVIBEL oferece conserto e reparo prioritário de freezers em Belo Horizonte, Justinópolis e Ribeirão das Neves. Se precisa arrumar seu freezer em Justinópolis ou consertar em Ribeirão das Neves, atendemos no mesmo dia. Resolvemos: freezer que não gela, gelo excessivo, barulho no compressor e porta que não veda. Atendemos freezers residenciais e comerciais em Justinópolis, Ribeirão das Neves e toda BH.',
    faqs: [
      { question: 'Meu freezer parou de gelar em Ribeirão das Neves, é urgente?', answer: 'Sim! Oferecemos reparo prioritário em Ribeirão das Neves, Justinópolis e BH. Entre em contato agora!' },
      { question: 'Vocês consertam freezer em Justinópolis?', answer: 'Sim! Justinópolis e Ribeirão das Neves são nossas principais regiões para conserto e reparo de freezer.' },
      { question: 'Vocês arrumam freezer comercial?', answer: 'Sim! Fazemos conserto e reparo de freezers residenciais e comerciais em Justinópolis, Ribeirão das Neves e BH.' },
      { question: 'O conserto tem garantia?', answer: 'Sim, todos os nossos serviços de reparo e conserto possuem garantia com peças de qualidade.' },
    ],
  },
  'conserto-maquina-lavar': {
    slug: 'conserto-maquina-lavar',
    title: 'Conserto de Máquina de Lavar',
    subtitle: 'em BH, Justinópolis e Ribeirão das Neves',
    heroDescription: 'Máquina de lavar com defeito? Não centrifuga ou faz barulho? A SERVIBEL faz conserto, reparo e arruma máquinas de lavar em BH, Justinópolis e Ribeirão das Neves!',
    ctaLabel: '⚡ Resolver Agora',
    whatsappMessage: 'Olá! Preciso de conserto/reparo na minha máquina de lavar. Vi pelo site da SERVIBEL.',
    location: 'BH, Justinópolis e Ribeirão das Neves',
    keywords: ['conserto máquina de lavar', 'reparo máquina de lavar', 'arrumar máquina de lavar', 'máquina de lavar Justinópolis', 'máquina de lavar Ribeirão das Neves', 'consertar lavadora BH'],
    metaTitle: 'Conserto de Máquina de Lavar em BH e Justinópolis | Arrumar | SERVIBEL',
    metaDescription: 'Conserto, reparo e arrumar máquina de lavar em BH, Justinópolis e Ribeirão das Neves. Todas as marcas. Peças originais. +35 anos.',
    seoContent: 'A SERVIBEL é referência em conserto e reparo de máquinas de lavar em BH, Justinópolis e Ribeirão das Neves. Com mais de 35 anos, arrumar sua máquina de lavar é nossa especialidade. Resolvemos: não liga, não centrifuga, não enche, vaza água, faz barulho. Todas as marcas — Brastemp, Electrolux, LG, Samsung, Consul. Se você está em Justinópolis ou Ribeirão das Neves, estamos pertinho de você!',
    faqs: [
      { question: 'Minha máquina de lavar não centrifuga em Justinópolis, como arrumar?', answer: 'Pode ser placa, motor, correia ou amortecedores. Fazemos o conserto na sua casa em Justinópolis e Ribeirão das Neves.' },
      { question: 'Quanto custa o reparo de máquina de lavar em Ribeirão das Neves?', answer: 'Depende do defeito. Oferecemos orçamento sem compromisso em Ribeirão das Neves, Justinópolis e BH.' },
      { question: 'Vocês consertam tanquinho em Justinópolis?', answer: 'Sim! Fazemos conserto e reparo de lavadoras automáticas, semi-automáticas e tanquinhos em Justinópolis e Ribeirão das Neves.' },
      { question: 'Quais regiões vocês atendem?', answer: 'Justinópolis, Ribeirão das Neves, Belo Horizonte, Contagem, Betim, Santa Luzia, Vespasiano e toda a região metropolitana.' },
    ],
  },
  'conserto-geladeira-justinopolis': {
    slug: 'conserto-geladeira-justinopolis',
    title: 'Conserto de Geladeira em Justinópolis',
    subtitle: 'Técnico chega rápido na sua casa hoje',
    heroDescription: 'Sua geladeira parou de gelar em Justinópolis e os alimentos estão estragando? Não espere mais! A SERVIBEL é a assistência técnica nº 1 em Justinópolis há 35 anos. Conserto, reparo e diagnóstico no mesmo dia, na sua porta.',
    ctaLabel: '🚨 Falar com Técnico em Justinópolis Agora',
    whatsappMessage: 'Olá SERVIBEL! Minha geladeira está com defeito em Justinópolis. Preciso de atendimento urgente.',
    location: 'Justinópolis - Ribeirão das Neves',
    keywords: ['conserto geladeira Justinópolis', 'reparo geladeira Justinópolis', 'arrumar geladeira Justinópolis', 'técnico geladeira Justinópolis', 'assistência técnica Justinópolis', 'geladeira não gela Justinópolis', 'conserto refrigerador Justinópolis'],
    metaTitle: 'Conserto de Geladeira em Justinópolis HOJE | Técnico na Porta | SERVIBEL',
    metaDescription: 'Conserto de geladeira em Justinópolis com atendimento no mesmo dia. Reparo, diagnóstico e arrumar geladeira em Justinópolis. 35 anos de experiência. Garantia.',
    seoContent: 'Procurando conserto de geladeira em Justinópolis com urgência? A SERVIBEL é a empresa mais bem avaliada de Justinópolis em assistência técnica de geladeiras. Atendemos todos os bairros de Justinópolis: Centro de Justinópolis, Rosaneves, Veneza, Sevilha, Liberdade, Pampulinha e demais regiões. Nossos técnicos especializados em Justinópolis chegam até você no mesmo dia, fazem diagnóstico gratuito e consertam na hora. Mais de 35 anos arrumando geladeiras em Justinópolis. Escolha quem realmente entende: SERVIBEL Justinópolis. Reparo de geladeira Brastemp em Justinópolis, conserto de geladeira Electrolux em Justinópolis, assistência LG em Justinópolis, técnico Consul em Justinópolis e Samsung em Justinópolis. Não confie sua geladeira a qualquer um — em Justinópolis, a referência é SERVIBEL.',
    faqs: [
      { question: 'Vocês atendem hoje em Justinópolis?', answer: 'Sim! Atendimento no mesmo dia em Justinópolis. Nossa base fica em Ribeirão das Neves, pertinho de Justinópolis. Chame agora pelo WhatsApp.' },
      { question: 'Quanto custa o conserto de geladeira em Justinópolis?', answer: 'O orçamento em Justinópolis é gratuito e sem compromisso. Você só paga se autorizar o reparo. Trabalhamos com os melhores preços da região.' },
      { question: 'Quais bairros de Justinópolis vocês atendem?', answer: 'Atendemos TODOS os bairros de Justinópolis: Centro, Rosaneves, Veneza, Sevilha, Liberdade, Pampulinha, Maria Helena e toda Justinópolis.' },
      { question: 'O conserto de geladeira em Justinópolis tem garantia?', answer: 'Sim! Todos os reparos feitos em Justinópolis têm garantia escrita, peças originais e nota fiscal.' },
      { question: 'Por que escolher a SERVIBEL em Justinópolis?', answer: 'Somos a única assistência técnica em Justinópolis com 35 anos de mercado, equipe própria, peças originais e garantia em todos os serviços.' },
    ],
  },
  'conserto-maquina-lavar-justinopolis': {
    slug: 'conserto-maquina-lavar-justinopolis',
    title: 'Conserto de Máquina de Lavar em Justinópolis',
    subtitle: 'Resolvemos hoje, na sua casa em Justinópolis',
    heroDescription: 'Máquina de lavar travada, vazando ou sem centrifugar em Justinópolis? Pare de acumular roupa suja! A SERVIBEL é especialista em conserto de máquina de lavar em Justinópolis há 35 anos. Diagnóstico no mesmo dia.',
    ctaLabel: '⚡ Quero Atendimento em Justinópolis Hoje',
    whatsappMessage: 'Olá SERVIBEL! Minha máquina de lavar está com defeito em Justinópolis. Preciso de um técnico hoje.',
    location: 'Justinópolis - Ribeirão das Neves',
    keywords: ['conserto máquina de lavar Justinópolis', 'reparo máquina de lavar Justinópolis', 'arrumar máquina de lavar Justinópolis', 'técnico máquina de lavar Justinópolis', 'lavadora Justinópolis', 'assistência técnica Justinópolis'],
    metaTitle: 'Conserto de Máquina de Lavar em Justinópolis | Técnico Hoje | SERVIBEL',
    metaDescription: 'Conserto de máquina de lavar em Justinópolis no mesmo dia. Reparo e arrumar lavadora em Justinópolis. Todas as marcas. 35 anos. Garantia escrita.',
    seoContent: 'Sua máquina de lavar parou em Justinópolis? A SERVIBEL é a assistência técnica mais procurada de Justinópolis para conserto de máquina de lavar. Atendemos toda Justinópolis com técnicos próprios, peças originais e atendimento no mesmo dia. Mais de 35 anos consertando máquinas de lavar em Justinópolis e Ribeirão das Neves. Resolvemos: máquina de lavar não enche em Justinópolis, não centrifuga em Justinópolis, vaza água em Justinópolis, faz barulho em Justinópolis e não liga em Justinópolis. Conserto de Brastemp em Justinópolis, Electrolux em Justinópolis, LG em Justinópolis, Samsung em Justinópolis, Consul em Justinópolis. Não jogue dinheiro fora comprando uma nova — em Justinópolis, conserte com a SERVIBEL e economize até 80%.',
    faqs: [
      { question: 'Atendem em qualquer bairro de Justinópolis?', answer: 'Sim! Cobrimos toda Justinópolis: Centro, Rosaneves, Veneza, Sevilha, Liberdade, Pampulinha e demais bairros. Estamos pertinho!' },
      { question: 'Vale mais a pena consertar ou comprar nova em Justinópolis?', answer: 'Em 90% dos casos, consertar em Justinópolis sai até 80% mais barato que comprar uma máquina nova. Faça orçamento grátis com a SERVIBEL.' },
      { question: 'Quanto tempo leva o reparo em Justinópolis?', answer: 'A maioria dos consertos em Justinópolis é feita no mesmo dia, na sua casa. Sem precisar levar a máquina para oficina.' },
      { question: 'O conserto em Justinópolis tem garantia?', answer: 'Sim! 90 dias de garantia escrita em todos os reparos de máquina de lavar em Justinópolis.' },
      { question: 'Qual marca vocês consertam em Justinópolis?', answer: 'TODAS as marcas em Justinópolis: Brastemp, Electrolux, LG, Samsung, Consul, Panasonic, Mueller e outras.' },
    ],
  },
  'conserto-lava-e-seca-justinopolis': {
    slug: 'conserto-lava-e-seca-justinopolis',
    title: 'Conserto de Lava e Seca em Justinópolis',
    subtitle: 'Especialistas em lava e seca em Justinópolis',
    heroDescription: 'Lava e seca com defeito em Justinópolis? Não arrisque com curiosos! A lava e seca é o eletrodoméstico mais complexo e exige técnico especializado. Em Justinópolis, a SERVIBEL é a única com equipe certificada em todas as marcas.',
    ctaLabel: '🔧 Falar com Especialista em Justinópolis',
    whatsappMessage: 'Olá SERVIBEL! Minha lava e seca está com defeito em Justinópolis. Quero atendimento especializado.',
    location: 'Justinópolis - Ribeirão das Neves',
    keywords: ['conserto lava e seca Justinópolis', 'reparo lava e seca Justinópolis', 'arrumar lava e seca Justinópolis', 'técnico lava e seca Justinópolis', 'lava e seca LG Justinópolis', 'lava e seca Samsung Justinópolis'],
    metaTitle: 'Conserto de Lava e Seca em Justinópolis | Especialistas | SERVIBEL',
    metaDescription: 'Conserto de lava e seca em Justinópolis com técnicos especializados. Reparo de lava e seca LG, Samsung, Electrolux em Justinópolis. Garantia.',
    seoContent: 'Lava e seca exige conhecimento técnico avançado, principalmente em Justinópolis onde poucos sabem realmente consertar. A SERVIBEL é referência em conserto de lava e seca em Justinópolis há mais de uma década. Nossa equipe em Justinópolis é treinada nas marcas LG, Samsung, Electrolux, Brastemp e Midea. Resolvemos em Justinópolis: lava e seca não seca, não centrifuga, erro no painel, barulho excessivo, não esquenta a água, não drena. Atendimento em todos os bairros de Justinópolis: Rosaneves, Veneza, Sevilha, Centro de Justinópolis, Liberdade e Pampulinha. Não confie sua lava e seca a qualquer técnico em Justinópolis — escolha a SERVIBEL, a empresa com mais avaliações 5 estrelas em Justinópolis.',
    faqs: [
      { question: 'Qualquer técnico em Justinópolis consegue consertar lava e seca?', answer: 'Não! Lava e seca é complexa. Em Justinópolis, apenas técnicos certificados como os da SERVIBEL conseguem fazer o conserto correto sem causar mais danos.' },
      { question: 'Atendem lava e seca LG em Justinópolis?', answer: 'Sim! Somos especialistas em lava e seca LG em Justinópolis, além de Samsung, Electrolux, Brastemp e Midea.' },
      { question: 'Quanto custa o reparo em Justinópolis?', answer: 'Orçamento gratuito em Justinópolis. O valor depende do defeito, mas sempre com transparência e sem cobrar visita se autorizar o serviço.' },
      { question: 'Quanto tempo demora em Justinópolis?', answer: 'A maioria dos reparos em Justinópolis é feita no mesmo dia, na sua casa.' },
      { question: 'Precisa levar a lava e seca para oficina?', answer: 'Não! Em Justinópolis, fazemos o conserto na sua casa, sem transtornos.' },
    ],
  },
  'conserto-microondas-justinopolis': {
    slug: 'conserto-microondas-justinopolis',
    title: 'Conserto de Microondas em Justinópolis',
    subtitle: 'Reparo rápido e seguro em Justinópolis',
    heroDescription: 'Microondas não aquece, faz barulho ou faísca em Justinópolis? CUIDADO: microondas tem alta voltagem e pode causar acidentes! Em Justinópolis, conte com técnicos certificados da SERVIBEL.',
    ctaLabel: '⚡ Conserto Seguro em Justinópolis',
    whatsappMessage: 'Olá SERVIBEL! Meu microondas está com defeito em Justinópolis. Quero técnico especializado.',
    location: 'Justinópolis - Ribeirão das Neves',
    keywords: ['conserto microondas Justinópolis', 'reparo microondas Justinópolis', 'arrumar microondas Justinópolis', 'técnico microondas Justinópolis', 'microondas não aquece Justinópolis'],
    metaTitle: 'Conserto de Microondas em Justinópolis | Técnico Certificado | SERVIBEL',
    metaDescription: 'Conserto de microondas em Justinópolis com segurança. Reparo de microondas Electrolux, LG, Brastemp, Panasonic em Justinópolis. Garantia.',
    seoContent: 'Microondas em Justinópolis exige cuidado: trabalha com alta voltagem perigosa. A SERVIBEL é a assistência técnica certificada em Justinópolis para conserto de microondas com TOTAL segurança. Atendemos em Justinópolis há 35 anos as marcas Electrolux, Brastemp, LG, Panasonic, Consul, Samsung e Midea. Em Justinópolis resolvemos: microondas não aquece, prato não gira, painel queimado, faíscas internas, porta não fecha. Atendemos todos os bairros de Justinópolis com diagnóstico no mesmo dia. Não tente consertar sozinho em Justinópolis — chame a SERVIBEL, a única com técnicos certificados em Justinópolis.',
    faqs: [
      { question: 'Vale a pena consertar microondas em Justinópolis?', answer: 'Sim! Em Justinópolis, o reparo custa em média 1/4 do valor de um microondas novo. Faça orçamento grátis com a SERVIBEL.' },
      { question: 'É seguro consertar microondas em casa em Justinópolis?', answer: 'Apenas técnicos certificados como os da SERVIBEL em Justinópolis devem mexer em microondas. Eles têm capacitor de alta voltagem.' },
      { question: 'Quais marcas vocês atendem em Justinópolis?', answer: 'TODAS em Justinópolis: Electrolux, LG, Brastemp, Panasonic, Consul, Samsung, Midea, Philco e outras.' },
      { question: 'Quanto tempo leva o conserto em Justinópolis?', answer: 'A maioria dos reparos em Justinópolis é feita no mesmo dia, na sua casa.' },
      { question: 'Tem garantia em Justinópolis?', answer: 'Sim! 90 dias de garantia escrita em todos os consertos em Justinópolis.' },
    ],
  },
  'conserto-freezer-justinopolis': {
    slug: 'conserto-freezer-justinopolis',
    title: 'Conserto de Freezer em Justinópolis',
    subtitle: 'URGENTE: salve seus alimentos hoje',
    heroDescription: 'Freezer parou em Justinópolis e seus alimentos vão estragar em horas? Não perca tempo nem dinheiro! A SERVIBEL atende EMERGÊNCIAS de freezer em Justinópolis no mesmo dia. Salve seus produtos congelados agora.',
    ctaLabel: '🚨 Emergência Freezer em Justinópolis',
    whatsappMessage: 'Olá SERVIBEL! URGENTE - meu freezer parou em Justinópolis. Preciso de atendimento agora!',
    location: 'Justinópolis - Ribeirão das Neves',
    keywords: ['conserto freezer Justinópolis', 'reparo freezer Justinópolis', 'arrumar freezer Justinópolis', 'técnico freezer Justinópolis', 'freezer comercial Justinópolis', 'freezer não gela Justinópolis'],
    metaTitle: 'Conserto de Freezer em Justinópolis URGENTE | SERVIBEL',
    metaDescription: 'Conserto de freezer em Justinópolis com atendimento de emergência no mesmo dia. Freezer residencial e comercial em Justinópolis. 35 anos. Garantia.',
    seoContent: 'Freezer parado em Justinópolis é prejuízo na certa: alimentos estragam, comércio para. A SERVIBEL é a única assistência técnica em Justinópolis com atendimento de EMERGÊNCIA para freezer. Atendemos freezer residencial e freezer comercial em Justinópolis há 35 anos. Resolvemos em Justinópolis: freezer não gela, gelo excessivo, compressor com defeito, vazamento de gás, porta não veda, barulho anormal. Atendemos restaurantes, açougues, padarias e residências em toda Justinópolis: Centro, Rosaneves, Veneza, Sevilha, Liberdade e Pampulinha. Em Justinópolis, freezer parado é caso para SERVIBEL — chamamos no mesmo dia para evitar prejuízo.',
    faqs: [
      { question: 'Atendem emergência de freezer em Justinópolis?', answer: 'Sim! Atendimento PRIORITÁRIO no mesmo dia em Justinópolis. Estamos a poucos minutos de você.' },
      { question: 'Consertam freezer comercial em Justinópolis?', answer: 'Sim! Atendemos restaurantes, açougues, padarias, mercados e bares em toda Justinópolis com freezer comercial.' },
      { question: 'Quanto custa em Justinópolis?', answer: 'Orçamento gratuito em Justinópolis. Geralmente o reparo custa muito menos que um freezer novo.' },
      { question: 'Quais bairros de Justinópolis atendem?', answer: 'TODOS os bairros de Justinópolis: Centro, Rosaneves, Veneza, Sevilha, Liberdade, Pampulinha e demais regiões.' },
      { question: 'Tem garantia o conserto de freezer em Justinópolis?', answer: 'Sim! 90 dias de garantia escrita para todo conserto de freezer em Justinópolis.' },
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
  const config = slug ? serviceConfigs[slug] : null;

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

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://servibel.com.br/${config.slug}`;

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
      address: { '@type': 'PostalAddress', addressLocality: config.location || 'Belo Horizonte', addressRegion: 'MG', addressCountry: 'BR' },
      areaServed: config.location || 'Belo Horizonte e Região Metropolitana',
      priceRange: '$$',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '247' },
    });
    document.head.appendChild(jsonLd);

    const faqLd = document.createElement('script');
    faqLd.type = 'application/ld+json';
    faqLd.id = 'faq-jsonld';
    faqLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: config.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
    document.head.appendChild(faqLd);

    return () => {
      document.getElementById('service-jsonld')?.remove();
      document.getElementById('faq-jsonld')?.remove();
    };
  }, [config]);

  // GTM específico para limpa-lava-e-seca
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
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com Técnico
          </a>
        </div>
      </header>

      {/* Trust Banner */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-center">
          <Shield className="w-5 h-5 shrink-0" />
          <p className="font-bold text-sm md:text-base">
            +35 Anos de Experiência • Garantia em Todos os Serviços • Peças Originais
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold">{config.ctaLabel}</span>
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
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            Chamar Técnico Agora
          </a>
          <p className="text-sm mt-4 opacity-70">Atendimento imediato • Orçamento sem compromisso</p>
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

      {/* Social Proof */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            <div className="bg-primary text-primary-foreground p-6 text-center">
              <Star className="w-10 h-10 mx-auto mb-2" />
              <h2 className="font-display text-2xl font-bold">Confiança de Quem Conhece</h2>
              <p className="text-sm opacity-90 mt-1">+35 anos cuidando dos seus eletrodomésticos</p>
            </div>
            <div className="p-8 text-center">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-2 text-lg font-semibold">4.8 / 5.0</p>
              <p className="text-muted-foreground mb-6 text-sm">Baseado em avaliações de clientes reais</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg w-full justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com Especialista
              </a>
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

      {/* Local SEO Section */}
      <section className="py-10 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 text-center">
              <MapPin className="w-5 h-5 inline-block mr-2 text-primary" />
              Atendimento em Justinópolis, Ribeirão das Neves e BH
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-6">
              A SERVIBEL atende moradores de <strong className="text-foreground">Justinópolis</strong>, <strong className="text-foreground">Ribeirão das Neves</strong> e toda <strong className="text-foreground">Belo Horizonte</strong> para 
              conserto, reparo e manutenção de eletrodomésticos. Se você precisa arrumar, consertar ou fazer reparo de geladeira, máquina de lavar, 
              lava e seca, microondas ou freezer em <strong className="text-foreground">Justinópolis</strong> e <strong className="text-foreground">Ribeirão das Neves</strong>, estamos pertinho de você!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
              {[
                'Conserto em Justinópolis',
                'Reparo em Ribeirão das Neves',
                'Arrumar eletrodomésticos BH',
                'Técnico em Justinópolis',
                'Assistência Ribeirão das Neves',
                'Conserto geladeira Justinópolis',
                'Reparo máquina de lavar Ribeirão das Neves',
                'Arrumar lava e seca Justinópolis',
                'Conserto freezer Ribeirão das Neves',
              ].map((tag) => (
                <span key={tag} className="bg-secondary px-3 py-2 rounded-lg text-center">
                  {tag}
                </span>
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
            Resolvemos Seu Problema Hoje!
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            {config.location
              ? `Atendemos em ${config.location} e região. Fale agora com um técnico especializado!`
              : 'Fale agora com um técnico especializado! Atendemos BH e toda a região metropolitana.'}
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
