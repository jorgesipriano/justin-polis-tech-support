import { 
  WashingMachine, 
  Refrigerator, 
  Wind, 
  Microwave, 
  Tv, 
  Wrench,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    icon: WashingMachine,
    title: 'Máquinas de Lavar',
    description: 'Conserto e manutenção de lavadoras e secadoras de todas as marcas.',
    features: ['Troca de peças', 'Limpeza interna', 'Manutenção preventiva']
  },
  {
    icon: Refrigerator,
    title: 'Refrigeradores',
    description: 'Reparo em geladeiras, freezers e refrigeradores side by side.',
    features: ['Recarga de gás', 'Troca de compressor', 'Vedação']
  },
  {
    icon: Wind,
    title: 'Ar Condicionado',
    description: 'Instalação, manutenção e conserto de aparelhos de ar condicionado.',
    features: ['Instalação', 'Limpeza', 'Recarga de gás']
  },
  {
    icon: Microwave,
    title: 'Micro-ondas',
    description: 'Reparo em micro-ondas convencionais e de embutir.',
    features: ['Troca de magnetron', 'Painel', 'Porta']
  },
  {
    icon: Tv,
    title: 'TVs e Monitores',
    description: 'Conserto de televisores LED, LCD, OLED e monitores.',
    features: ['Tela', 'Placa', 'Fonte']
  },
  {
    icon: Wrench,
    title: 'Outros Serviços',
    description: 'Diversos eletrodomésticos e pequenos reparos.',
    features: ['Fogões', 'Fornos', 'Cafeteiras']
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que fazemos <span className="text-primary">para você</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de serviços de assistência técnica com qualidade e garantia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o serviço que precisa?
          </p>
          <a
            href="https://wa.me/5531984101104?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Entre em contato para mais informações
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
