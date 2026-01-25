import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Loader2, Image, Upload } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface GalleryImage {
  id: string;
  file_path: string;
  file_url: string;
  caption: string | null;
  display_order: number | null;
  is_visible: boolean | null;
}

const GalleryTab = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar as imagens.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      for (const file of Array.from(files)) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
          toast({
            title: 'Erro',
            description: `${file.name} não é uma imagem válida.`,
            variant: 'destructive',
          });
          continue;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          toast({
            title: 'Erro',
            description: `${file.name} é muito grande. Máximo 5MB.`,
            variant: 'destructive',
          });
          continue;
        }

        const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        const filePath = `works/${fileName}`;

        // Upload to storage
        const { error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('gallery')
          .getPublicUrl(filePath);

        // Save to database
        const { error: dbError } = await supabase
          .from('gallery_images')
          .insert({
            file_path: filePath,
            file_url: urlData.publicUrl,
            display_order: images.length,
            uploaded_by: user?.id,
          });

        if (dbError) throw dbError;
      }

      toast({ title: 'Upload concluído!', description: 'Imagens adicionadas com sucesso.' });
      fetchImages();
    } catch (error) {
      console.error('Error uploading:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível fazer upload das imagens.',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const updateCaption = async (id: string, caption: string) => {
    try {
      const { error } = await supabase
        .from('gallery_images')
        .update({ caption })
        .eq('id', id);

      if (error) throw error;
      setImages(images.map(img => img.id === id ? { ...img, caption } : img));
    } catch (error) {
      console.error('Error updating caption:', error);
    }
  };

  const deleteImage = async (image: GalleryImage) => {
    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('gallery')
        .remove([image.file_path]);

      if (storageError) console.error('Storage delete error:', storageError);

      // Delete from database
      const { error: dbError } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', image.id);

      if (dbError) throw dbError;

      setImages(images.filter(img => img.id !== image.id));
      toast({ title: 'Imagem removida!' });
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível remover a imagem.',
        variant: 'destructive',
      });
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
          Adicione fotos dos seus trabalhos realizados
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Button */}
        <div className="flex justify-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
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
                Adicionar Imagens
              </>
            )}
          </Button>
        </div>

        {/* Images Grid */}
        {images.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Image className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Nenhuma imagem na galeria.</p>
            <p className="text-sm">Clique no botão acima para adicionar.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <img
                    src={image.file_url}
                    alt={image.caption || 'Trabalho'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteImage(image)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <Input
                  placeholder="Legenda..."
                  value={image.caption || ''}
                  onChange={(e) => updateCaption(image.id, e.target.value)}
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
