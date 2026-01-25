import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Save, Loader2 } from 'lucide-react';

interface BusinessInfo {
  id: string;
  name: string;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  address: string | null;
  about_text: string | null;
  working_hours: string | null;
}

const BusinessInfoTab = () => {
  const [info, setInfo] = useState<BusinessInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchBusinessInfo();
  }, []);

  const fetchBusinessInfo = async () => {
    try {
      const { data, error } = await supabase
        .from('business_info')
        .select('*')
        .maybeSingle();

      if (error) throw error;
      setInfo(data);
    } catch (error) {
      console.error('Error fetching business info:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar as informações.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!info) return;
    setSaving(true);

    try {
      const { error } = await supabase
        .from('business_info')
        .update({
          name: info.name,
          phone: info.phone,
          whatsapp: info.whatsapp,
          email: info.email,
          address: info.address,
          about_text: info.about_text,
          working_hours: info.working_hours,
        })
        .eq('id', info.id);

      if (error) throw error;

      toast({
        title: 'Salvo!',
        description: 'Informações atualizadas com sucesso.',
      });
    } catch (error) {
      console.error('Error saving business info:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar as informações.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
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

  if (!info) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          Nenhuma informação encontrada.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações do Negócio</CardTitle>
        <CardDescription>
          Atualize as informações de contato e sobre a empresa
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Empresa</Label>
            <Input
              id="name"
              value={info.name || ''}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={info.phone || ''}
              onChange={(e) => setInfo({ ...info, phone: e.target.value })}
              placeholder="(31) 98410-1104"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp (apenas números)</Label>
            <Input
              id="whatsapp"
              value={info.whatsapp || ''}
              onChange={(e) => setInfo({ ...info, whatsapp: e.target.value })}
              placeholder="5531984101104"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={info.email || ''}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input
            id="address"
            value={info.address || ''}
            onChange={(e) => setInfo({ ...info, address: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="working_hours">Horário de Funcionamento</Label>
          <Input
            id="working_hours"
            value={info.working_hours || ''}
            onChange={(e) => setInfo({ ...info, working_hours: e.target.value })}
            placeholder="Seg-Sex: 8h às 18h"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="about">Sobre a Empresa</Label>
          <Textarea
            id="about"
            value={info.about_text || ''}
            onChange={(e) => setInfo({ ...info, about_text: e.target.value })}
            rows={4}
          />
        </div>

        <Button onClick={handleSave} disabled={saving} className="w-full md:w-auto">
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Salvando...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BusinessInfoTab;
