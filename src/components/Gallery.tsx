const Gallery = () => {
  return (
    <section id="galeria" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Conheça a <span className="text-primary">Servibel</span>
          </h2>
          <p className="text-muted-foreground mt-2">Nossa estrutura e equipe prontas para atender você</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="aspect-[4/3] bg-card rounded-xl overflow-hidden shadow-card border border-border/50">
            <img
              src="/images/servibel-fachada.jpg"
              alt="Fachada da Servibel Assistência Técnica"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] bg-card rounded-xl overflow-hidden shadow-card border border-border/50">
            <img
              src="/images/servibel-oficina.jpg"
              alt="Oficina da Servibel com equipamentos e peças"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
