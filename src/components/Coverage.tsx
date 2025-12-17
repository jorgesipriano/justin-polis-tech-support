import { MapPin, CheckCircle2, Truck } from 'lucide-react';

const regions = [
  'Justinópolis',
  'Ribeirão das Neves',
  'Bairro Kátia',
  'São Pedro',
  'Veneza',
  'Alterosa',
  'Areias',
  'Botafogo',
  'Metropolitano',
  'Santa Margarida',
  'Pedra Branca',
  'Jardim Colonial'
];

const Coverage = () => {
  return (
    <section id="cobertura" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Área de Cobertura
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Atendemos em toda <span className="text-primary">sua região</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nossa equipe atende em domicílio ou você pode trazer seu aparelho até nossa sede. 
              Cobrimos toda a região de Ribeirão das Neves e adjacências.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Atendimento em Domicílio</h4>
                  <p className="text-muted-foreground text-sm">
                    Vamos até você para diagnóstico e reparo do seu aparelho.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sede Própria</h4>
                  <p className="text-muted-foreground text-sm">
                    Rua Pedro Moreira do Nasc. 120, Bairro Kátia - Ribeirão das Neves
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5531984101104?text=Olá"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Confirmar Atendimento na Minha Região
            </a>
          </div>

          {/* Regions Grid */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              Regiões Atendidas
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {regions.map((region) => (
                <div 
                  key={region}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{region}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm text-center">
                E mais regiões! Entre em contato para confirmar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
