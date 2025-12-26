import { MapPin, Phone } from 'lucide-react';

const Coverage = () => {
  return (
    <section id="cobertura" className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <MapPin className="w-6 h-6" />
            <span className="font-display text-xl font-bold">Atendimento na Região</span>
          </div>
          
          <p className="text-lg text-foreground mb-6">
            <strong>Ribeirão das Neves</strong> · <strong>Justinópolis</strong> e região
          </p>

          <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 mb-6">
            <p className="text-muted-foreground text-sm mb-2">Endereço:</p>
            <p className="text-foreground font-medium">
              Rua Pedro Moreira do Nasc. 120, Bairro Kátia
            </p>
          </div>

          <a
            href="https://wa.me/5531984101104?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
          >
            <Phone className="w-5 h-5" />
            Agendar Visita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
