import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Loader2, Image, Upload, Video } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface GalleryItem {
  id: string;
  file_path: string;
  file_url: string;
  caption: string | null;
  display_order: number | null;
  is_visible: boolean | null;
}

const isVideo = (url: string) => /\.(mp4|webm|mov)$/i.test(url);

const GalleryTab = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching items:', error);
      toast({ title: 'Erro', description: 'Não foi possível carregar a galeria.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const allowedTypes = ['image/', 'video/mp4', 'video/webm', 'video/quicktime'];

    try {
      for (const file of Array.from(files)) {
        const isAllowed = allowedTypes.some(t => file.type.startsWith(t));
        if (!isAllowed) {
          toast({ title: 'Erro', description: `${file.name} não é um formato válido. Use imagens ou vídeos MP4/WebM.`, variant: 'destructive' });
          continue;
        }

        const isVideoFile = file.type.startsWith('video/');
        const maxSize = isVideoFile ? 50 * 1024 * 1024 : 5 * 1024 * 1024;
        const maxLabel = isVideoFile ? '50MB' : '5MB';

        if (file.size > maxSize) {
          toast({ title: 'Erro', description: `${file.name} é muito grande. Máximo ${maxLabel}.`, variant: 'destructive' });
          continue;
        }

        const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        const filePath = `works/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from('gallery')
          .getPublicUrl(filePath);

        const { error: dbError } = await supabase
          .from('gallery_images')
          .insert({
            file_path: filePath,
            file_url: urlData.publicUrl,
            display_order: items.length,
            uploaded_by: user?.id,
          });

        if (dbError) throw dbError;
      }

      toast({ title: 'Upload concluído!', description: 'Arquivos adicionados com sucesso.' });
      fetchItems();
    } catch (error) {
      console.error('Error uploading:', error);
      toast({ title: 'Erro', description: 'Não foi possível fazer upload.', variant: 'destructive' });
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const updateCaption = async (id: string, caption: string) => {
    try {
      const { error } = await supabase
        .from('gallery_images')
        .update({ caption })
        .eq('id', id);
      if (error) throw error;
      setItems(items.map(img => img.id === id ? { ...img, caption } : img));
    } catch (error) {
      console.error('Error updating caption:', error);
    }
  };

  const deleteItem = async (item: GalleryItem) => {
    try {
      await supabase.storage.from('gallery').remove([item.file_path]);
      const { error: dbError } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', item.id);
      if (dbError) throw dbError;

      setItems(items.filter(i => i.id !== item.id));
      toast({ title: 'Item removido!' });
    } catch (error) {
      console.error('Error deleting:', error);
      toast({ title: 'Erro', description: 'Não foi possível remover.', variant: 'destructive' });
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image className="w-5 h-5" />
          Galeria de Trabalhos
        </CardTitle>
        <CardDescription>
          Adicione fotos e vídeos dos seus trabalhos realizados (imagens até 5MB, vídeos MP4 até 50MB)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*,video/mp4,video/webm,video/quicktime"
            multiple
            className="hidden"
          />
          <Button
            variant="outline"
            size="lg"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="w-full max-w-md"
          >
            {uploading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5 mr-2" />
                Adicionar Fotos / Vídeos
              </>
            )}
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Image className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Nenhum item na galeria.</p>
            <p className="text-sm">Clique no botão acima para adicionar fotos ou vídeos.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) => (
              <div key={item.id} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  {isVideo(item.file_url) ? (
                    <video
                      src={item.file_url}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      controls
                    />
                  ) : (
                    <img
                      src={item.file_url}
                      alt={item.caption || 'Trabalho'}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {isVideo(item.file_url) && (
                  <div className="absolute top-2 left-2 bg-black/60 rounded-full p-1">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center pointer-events-none">
                  <Button
                    variant="destructive"
                    size="icon"
                    className="pointer-events-auto"
                    onClick={() => deleteItem(item)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <Input
                  placeholder="Legenda..."
                  value={item.caption || ''}
                  onChange={(e) => updateCaption(item.id, e.target.value)}
                  className="mt-2 text-sm"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GalleryTab;
