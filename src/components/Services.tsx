import { WashingMachine, Refrigerator, Phone } from 'lucide-react';

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Two Main Services - Big Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Lavagem */}
          <div className="group bg-card rounded-3xl p-8 shadow-card border-2 border-primary/30 hover:border-primary hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <WashingMachine className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Lavagem de Máquina
            </h3>
            <p className="text-muted-foreground text-lg">
              Higienização completa. Elimina sujeira, bactérias e mau cheiro.
            </p>
          </div>

          {/* Geladeira */}
          <div className="group bg-card rounded-3xl p-8 shadow-card border-2 border-accent/30 hover:border-accent hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
              <Refrigerator className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Conserto de Geladeira
            </h3>
            <p className="text-muted-foreground text-lg">
              Reparo especializado. Todas as marcas e modelos.
            </p>
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
