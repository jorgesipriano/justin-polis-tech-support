import { WashingMachine, Refrigerator, Phone, Sparkles, Microwave } from 'lucide-react';

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Com <span className="text-primary font-bold">35 anos de experiência</span>, somos especialistas em manutenção e conserto de eletrodomésticos
          </p>
        </div>

        {/* Featured Service - Cleaning */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="group bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-3xl p-8 shadow-card border-2 border-primary hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
              ⭐ Destaque
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Higienização e Limpeza Preventiva
                </h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Serviço especializado de <span className="text-primary font-semibold">limpeza profunda</span> em máquinas de lavar e lava e seca. 
                  Eliminamos sujeira acumulada, bactérias, fungos e mau cheiro, prolongando a vida útil do seu aparelho.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">✓ Elimina bactérias</span>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">✓ Remove mau cheiro</span>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">✓ Aumenta durabilidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repair Services Grid */}
        <h3 className="text-center font-display text-xl font-bold text-foreground mb-6">
          Reparos Especializados
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Lava e Seca */}
          <div className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <WashingMachine className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-display text-lg font-bold text-foreground mb-2">
              Lava e Seca
            </h4>
            <p className="text-muted-foreground text-sm mb-3">
              Manutenção corretiva e preventiva completa.
            </p>
            <p className="text-xs text-primary font-semibold">✓ Todas as marcas</p>
          </div>

          {/* Máquina de Lavar */}
          <div className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <WashingMachine className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-display text-lg font-bold text-foreground mb-2">
              Máquina de Lavar
            </h4>
            <p className="text-muted-foreground text-sm mb-3">
              Reparo em todos os modelos e marcas.
            </p>
            <p className="text-xs text-primary font-semibold">✓ Todas as marcas</p>
          </div>

          {/* Geladeira e Freezer */}
          <div className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Refrigerator className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-display text-lg font-bold text-foreground mb-2">
              Geladeira e Freezer
            </h4>
            <p className="text-muted-foreground text-sm mb-3">
              Diagnóstico preciso e reparo especializado.
            </p>
            <p className="text-xs text-accent font-semibold">✓ Todas as marcas</p>
          </div>

          {/* Microondas */}
          <div className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Microwave className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-display text-lg font-bold text-foreground mb-2">
              Microondas
            </h4>
            <p className="text-muted-foreground text-sm mb-3">
              Conserto rápido e eficiente.
            </p>
            <p className="text-xs text-accent font-semibold">✓ Todas as marcas</p>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5531984101104?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors"
          >
            <Phone className="w-5 h-5" />
            Pedir Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
