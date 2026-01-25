import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Plus, Save, Trash2, Loader2, BarChart3 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface AdvisoryResult {
  id: string;
  title: string;
  description: string | null;
  value: string | null;
  metric_type: string | null;
  period: string | null;
  display_order: number | null;
  is_visible: boolean | null;
}

const AdvisoryResultsTab = () => {
  const [results, setResults] = useState<AdvisoryResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const { data, error } = await supabase
        .from('advisory_results')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setResults(data || []);
    } catch (error) {
      console.error('Error fetching results:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar os resultados.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const addResult = () => {
    const newResult: AdvisoryResult = {
      id: `temp-${Date.now()}`,
      title: '',
      description: null,
      value: null,
      metric_type: 'text',
      period: null,
      display_order: results.length,
      is_visible: true,
    };
    setResults([...results, newResult]);
  };

  const updateResult = (id: string, field: keyof AdvisoryResult, value: any) => {
    setResults(results.map(r => 
      r.id === id ? { ...r, [field]: value } : r
    ));
  };

  const deleteResult = async (id: string) => {
    if (id.startsWith('temp-')) {
      setResults(results.filter(r => r.id !== id));
      return;
    }

    try {
      const { error } = await supabase
        .from('advisory_results')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setResults(results.filter(r => r.id !== id));
      toast({ title: 'Resultado removido!' });
    } catch (error) {
      console.error('Error deleting result:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível remover o resultado.',
        variant: 'destructive',
      });
    }
  };

  const saveAll = async () => {
    setSaving(true);

    try {
      for (const result of results) {
        if (!result.title.trim()) continue;

        const data = {
          title: result.title,
          description: result.description,
          value: result.value,
          metric_type: result.metric_type,
          period: result.period,
          display_order: result.display_order,
          is_visible: result.is_visible,
          created_by: user?.id,
        };

        if (result.id.startsWith('temp-')) {
          const { error } = await supabase
            .from('advisory_results')
            .insert(data);
          if (error) throw error;
        } else {
          const { error } = await supabase
            .from('advisory_results')
            .update(data)
            .eq('id', result.id);
          if (error) throw error;
        }
      }

      toast({ title: 'Salvo!', description: 'Resultados atualizados com sucesso.' });
      fetchResults();
    } catch (error) {
      console.error('Error saving results:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar os resultados.',
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Resultados da Assessoria
        </CardTitle>
        <CardDescription>
          Adicione métricas e resultados para mostrar ao cliente
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {results.map((result, index) => (
          <div key={result.id} className="border rounded-lg p-4 space-y-4 bg-muted/30">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Resultado #{index + 1}
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={result.is_visible ?? true}
                    onCheckedChange={(checked) => updateResult(result.id, 'is_visible', checked)}
                  />
                  <Label className="text-sm">Visível</Label>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteResult(result.id)}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Título</Label>
                <Input
                  value={result.title}
                  onChange={(e) => updateResult(result.id, 'title', e.target.value)}
                  placeholder="Ex: Leads Gerados"
                />
              </div>

              <div className="space-y-2">
                <Label>Valor</Label>
                <Input
                  value={result.value || ''}
                  onChange={(e) => updateResult(result.id, 'value', e.target.value)}
                  placeholder="Ex: 1.500 ou R$ 25.000"
                />
              </div>

              <div className="space-y-2">
                <Label>Tipo</Label>
                <Select
                  value={result.metric_type || 'text'}
                  onValueChange={(value) => updateResult(result.id, 'metric_type', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="currency">Moeda (R$)</SelectItem>
                    <SelectItem value="percentage">Porcentagem (%)</SelectItem>
                    <SelectItem value="number">Número</SelectItem>
                    <SelectItem value="text">Texto</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Período</Label>
                <Select
                  value={result.period || ''}
                  onValueChange={(value) => updateResult(result.id, 'period', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Mensal</SelectItem>
                    <SelectItem value="yearly">Anual</SelectItem>
                    <SelectItem value="total">Total</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Descrição</Label>
              <Textarea
                value={result.description || ''}
                onChange={(e) => updateResult(result.id, 'description', e.target.value)}
                placeholder="Descrição detalhada do resultado..."
                rows={2}
              />
            </div>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" onClick={addResult} className="flex-1">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Resultado
          </Button>
          <Button onClick={saveAll} disabled={saving} className="flex-1">
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Salvar Tudo
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvisoryResultsTab;
