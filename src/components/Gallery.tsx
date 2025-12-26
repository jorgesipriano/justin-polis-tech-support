import { Camera, Sparkles } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Lavagem de Máquina',
    description: 'Higienização completa realizada',
    category: 'Lavagem',
    placeholder: true
  },
  {
    id: 2,
    title: 'Conserto de Geladeira',
    description: 'Troca de compressor',
    category: 'Conserto',
    placeholder: true
  },
  {
    id: 3,
    title: 'Manutenção Preventiva',
    description: 'Limpeza e revisão geral',
    category: 'Manutenção',
    placeholder: true
  },
  {
    id: 4,
    title: 'Reparo em Lavadora',
    description: 'Troca de rolamentos',
    category: 'Conserto',
    placeholder: true
  },
  {
    id: 5,
    title: 'Instalação',
    description: 'Instalação de eletrodomésticos',
    category: 'Instalação',
    placeholder: true
  },
  {
    id: 6,
    title: 'Trabalho Concluído',
    description: 'Cliente satisfeito!',
    category: 'Resultado',
    placeholder: true
  }
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Nossos Trabalhos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeria de <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados e veja a qualidade do nosso serviço
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                  <Camera className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">
                  Adicione sua foto
                </span>
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="inline-block bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* News/Updates Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Novidades
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Fique por Dentro
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* News Card 1 */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Atendimento Rápido
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Agora com atendimento ainda mais rápido! Agende seu serviço e receba atendimento no mesmo dia.
                  </p>
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Garantia de Serviço
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Todos os nossos serviços possuem garantia. Trabalhamos com qualidade e compromisso!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ver seu aparelho funcionando como novo?
          </p>
          <a
            href="https://wa.me/5531984101104?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
