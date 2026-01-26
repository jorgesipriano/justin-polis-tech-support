import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Eye, EyeOff, Edit2, Save, X, Copy, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Credential {
  id: string;
  service_name: string;
  login_username: string;
  password: string;
  url: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

const CredentialsTab = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    service_name: '',
    login_username: '',
    password: '',
    url: '',
    notes: '',
  });

  const [editFormData, setEditFormData] = useState({
    service_name: '',
    login_username: '',
    password: '',
    url: '',
    notes: '',
  });

  useEffect(() => {
    fetchCredentials();
  }, []);

  const fetchCredentials = async () => {
    try {
      const { data, error } = await supabase
        .from('client_credentials')
        .select('*')
        .order('service_name', { ascending: true });

      if (error) throw error;
      setCredentials(data || []);
    } catch (error) {
      console.error('Error fetching credentials:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar as credenciais.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddCredential = async () => {
    if (!formData.service_name || !formData.login_username || !formData.password) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha o serviço, login e senha.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const { error } = await supabase.from('client_credentials').insert({
        service_name: formData.service_name.trim(),
        login_username: formData.login_username.trim(),
        password: formData.password,
        url: formData.url.trim() || null,
        notes: formData.notes.trim() || null,
        created_by: user?.id,
      });

      if (error) throw error;

      toast({
        title: 'Sucesso',
        description: 'Credencial adicionada com sucesso.',
      });

      setFormData({ service_name: '', login_username: '', password: '', url: '', notes: '' });
      setIsDialogOpen(false);
      fetchCredentials();
    } catch (error) {
      console.error('Error adding credential:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível adicionar a credencial.',
        variant: 'destructive',
      });
    }
  };

  const handleUpdateCredential = async (id: string) => {
    try {
      const { error } = await supabase
        .from('client_credentials')
        .update({
          service_name: editFormData.service_name.trim(),
          login_username: editFormData.login_username.trim(),
          password: editFormData.password,
          url: editFormData.url.trim() || null,
          notes: editFormData.notes.trim() || null,
        })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Sucesso',
        description: 'Credencial atualizada com sucesso.',
      });

      setEditingId(null);
      fetchCredentials();
    } catch (error) {
      console.error('Error updating credential:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível atualizar a credencial.',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteCredential = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta credencial?')) return;

    try {
      const { error } = await supabase.from('client_credentials').delete().eq('id', id);

      if (error) throw error;

      toast({
        title: 'Sucesso',
        description: 'Credencial excluída com sucesso.',
      });

      fetchCredentials();
    } catch (error) {
      console.error('Error deleting credential:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível excluir a credencial.',
        variant: 'destructive',
      });
    }
  };

  const togglePasswordVisibility = (id: string) => {
    setShowPasswords((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const startEditing = (credential: Credential) => {
    setEditingId(credential.id);
    setEditFormData({
      service_name: credential.service_name,
      login_username: credential.login_username,
      password: credential.password,
      url: credential.url || '',
      notes: credential.notes || '',
    });
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: 'Copiado!',
        description: `${label} copiado para a área de transferência.`,
      });
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível copiar.',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Credenciais do Cliente</CardTitle>
            <CardDescription>
              Armazene logins e senhas de forma segura (emails, Instagram, YouTube, etc.)
            </CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Adicionar
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Nova Credencial</DialogTitle>
                <DialogDescription>
                  Adicione uma nova credencial para o cliente.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="service_name">Serviço *</Label>
                  <Input
                    id="service_name"
                    placeholder="Ex: Instagram, Gmail, YouTube"
                    value={formData.service_name}
                    onChange={(e) => setFormData({ ...formData, service_name: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="login_username">Login/Email *</Label>
                  <Input
                    id="login_username"
                    placeholder="Email ou nome de usuário"
                    value={formData.login_username}
                    onChange={(e) => setFormData({ ...formData, login_username: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Senha *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Senha da conta"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="url">URL (opcional)</Label>
                  <Input
                    id="url"
                    placeholder="https://instagram.com"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Observações (opcional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Informações adicionais..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleAddCredential}>Salvar</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {credentials.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            Nenhuma credencial cadastrada. Clique em "Adicionar" para começar.
          </div>
        ) : (
          <div className="grid gap-4">
            {credentials.map((credential) => (
              <Card key={credential.id} className="bg-muted/50">
                <CardContent className="pt-4">
                  {editingId === credential.id ? (
                    // Edit mode
                    <div className="grid gap-3">
                      <div className="grid gap-2">
                        <Label>Serviço</Label>
                        <Input
                          value={editFormData.service_name}
                          onChange={(e) =>
                            setEditFormData({ ...editFormData, service_name: e.target.value })
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Login/Email</Label>
                        <Input
                          value={editFormData.login_username}
                          onChange={(e) =>
                            setEditFormData({ ...editFormData, login_username: e.target.value })
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Senha</Label>
                        <Input
                          type="text"
                          value={editFormData.password}
                          onChange={(e) =>
                            setEditFormData({ ...editFormData, password: e.target.value })
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>URL</Label>
                        <Input
                          value={editFormData.url}
                          onChange={(e) =>
                            setEditFormData({ ...editFormData, url: e.target.value })
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Observações</Label>
                        <Textarea
                          value={editFormData.notes}
                          onChange={(e) =>
                            setEditFormData({ ...editFormData, notes: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button variant="outline" size="sm" onClick={() => setEditingId(null)}>
                          <X className="w-4 h-4 mr-1" />
                          Cancelar
                        </Button>
                        <Button size="sm" onClick={() => handleUpdateCredential(credential.id)}>
                          <Save className="w-4 h-4 mr-1" />
                          Salvar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // View mode
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{credential.service_name}</h3>
                        <div className="flex gap-1">
                          {credential.url && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => window.open(credential.url!, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => startEditing(credential)}
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteCredential(credential.id)}
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid gap-2 text-sm">
                        <div className="flex items-center justify-between bg-background rounded-md p-2">
                          <div>
                            <span className="text-muted-foreground">Login: </span>
                            <span className="font-medium">{credential.login_username}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(credential.login_username, 'Login')}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between bg-background rounded-md p-2">
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">Senha: </span>
                            <span className="font-medium font-mono">
                              {showPasswords[credential.id]
                                ? credential.password
                                : '••••••••'}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => togglePasswordVisibility(credential.id)}
                            >
                              {showPasswords[credential.id] ? (
                                <EyeOff className="w-4 h-4" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => copyToClipboard(credential.password, 'Senha')}
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {credential.notes && (
                          <div className="bg-background rounded-md p-2">
                            <span className="text-muted-foreground">Notas: </span>
                            <span>{credential.notes}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CredentialsTab;
