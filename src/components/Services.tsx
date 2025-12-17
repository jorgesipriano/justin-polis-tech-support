import { 
  WashingMachine, 
  Refrigerator, 
  Wrench,
  CheckCircle2,
  Star
} from 'lucide-react';

const services = [
  {
    icon: WashingMachine,
    title: 'Lavagem de Máquina de Lavar',
    description: 'Higienização completa e profunda da sua máquina de lavar. Eliminamos sujeiras, bactérias e mau cheiro.',
    features: ['Limpeza do tambor', 'Higienização completa', 'Eliminação de odores', 'Limpeza do filtro'],
    highlight: true
  },
  {
    icon: Refrigerator,
    title: 'Conserto de Geladeira',
    description: 'Reparo especializado em geladeiras, freezers e refrigeradores de todas as marcas e modelos.',
    features: ['Recarga de gás', 'Troca de compressor', 'Troca de borracha', 'Reparo no motor'],
    highlight: true
  },
  {
    icon: WashingMachine,
    title: 'Conserto de Máquina de Lavar',
    description: 'Manutenção e reparo em lavadoras e secadoras. Resolvemos qualquer problema!',
    features: ['Troca de peças', 'Reparo na placa', 'Troca de rolamentos', 'Manutenção preventiva'],
    highlight: false
  },
  {
    icon: Wrench,
    title: 'Outros Serviços',
    description: 'Também realizamos reparos em outros eletrodomésticos.',
    features: ['Micro-ondas', 'Fogões', 'Fornos'],
    highlight: false
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border-2 ${
                service.highlight 
                  ? 'border-primary/50 hover:border-primary ring-2 ring-primary/20' 
                  : 'border-border/50 hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="flex items-center gap-1 text-accent text-sm font-semibold mb-3">
                  <Star className="w-4 h-4 fill-accent" />
                  Serviço em Destaque
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 ${
                service.highlight 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-primary/10 group-hover:bg-primary'
              }`}>
                <service.icon className={`w-7 h-7 transition-colors duration-300 ${
                  service.highlight 
                    ? 'text-primary-foreground' 
                    : 'text-primary group-hover:text-primary-foreground'
                }`} />
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
