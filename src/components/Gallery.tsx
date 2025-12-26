import { Camera } from 'lucide-react';

const Gallery = () => {
  return (
    <section id="galeria" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Nossos <span className="text-primary">Trabalhos</span>
          </h2>
        </div>

        {/* Simple Image Grid - 3 spots */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-square bg-card rounded-xl overflow-hidden shadow-card border border-border/50 flex items-center justify-center"
            >
              <div className="text-center p-4">
                <Camera className="w-8 h-8 text-primary/40 mx-auto mb-2" />
                <span className="text-xs text-muted-foreground">Foto</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
