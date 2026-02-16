import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Video } from 'lucide-react';

interface GalleryItem {
  id: string;
  file_url: string;
  caption: string | null;
}

const isVideo = (url: string) => /\.(mp4|webm|mov)$/i.test(url);

const Gallery = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await supabase
        .from('gallery_images')
        .select('id, file_url, caption')
        .eq('is_visible', true)
        .order('display_order', { ascending: true });
      if (data) setItems(data);
    };
    fetchItems();
  }, []);

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

          {items.map((item) => (
            <div key={item.id} className="relative aspect-[4/3] bg-card rounded-xl overflow-hidden shadow-card border border-border/50">
              {isVideo(item.file_url) ? (
                <>
                  <video
                    src={item.file_url}
                    className="w-full h-full object-cover"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 rounded-full p-1">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                </>
              ) : (
                <img
                  src={item.file_url}
                  alt={item.caption || 'Trabalho Servibel'}
                  className="w-full h-full object-cover"
                />
              )}
              {item.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-sm px-3 py-1.5">
                  {item.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
