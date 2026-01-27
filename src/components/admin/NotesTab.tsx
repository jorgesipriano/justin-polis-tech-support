import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Plus, Pin, PinOff, Trash2, Edit2, X, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface Note {
  id: string;
  title: string | null;
  content: string;
  color: string | null;
  is_pinned: boolean | null;
  created_at: string;
  updated_at: string;
}

const noteColors = [
  { name: 'default', class: 'bg-card border-border' },
  { name: 'yellow', class: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800' },
  { name: 'green', class: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' },
  { name: 'blue', class: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' },
  { name: 'pink', class: 'bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:border-pink-800' },
  { name: 'purple', class: 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800' },
];

const NotesTab = () => {
  const { user } = useAuth();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  
  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('default');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const { data, error } = await supabase
        .from('project_notes')
        .select('*')
        .order('is_pinned', { ascending: false })
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setNotes(data || []);
    } catch (error: any) {
      toast.error('Erro ao carregar anotações: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setColor('default');
    setEditingNote(null);
  };

  const openEditDialog = (note: Note) => {
    setEditingNote(note);
    setTitle(note.title || '');
    setContent(note.content);
    setColor(note.color || 'default');
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast.error('O conteúdo da nota é obrigatório');
      return;
    }

    try {
      if (editingNote) {
        const { error } = await supabase
          .from('project_notes')
          .update({
            title: title.trim() || null,
            content: content.trim(),
            color,
          })
          .eq('id', editingNote.id);

        if (error) throw error;
        toast.success('Nota atualizada!');
      } else {
        const { error } = await supabase
          .from('project_notes')
          .insert({
            title: title.trim() || null,
            content: content.trim(),
            color,
            created_by: user?.id,
          });

        if (error) throw error;
        toast.success('Nota criada!');
      }

      resetForm();
      setIsDialogOpen(false);
      fetchNotes();
    } catch (error: any) {
      toast.error('Erro ao salvar nota: ' + error.message);
    }
  };

  const togglePin = async (note: Note) => {
    try {
      const { error } = await supabase
        .from('project_notes')
        .update({ is_pinned: !note.is_pinned })
        .eq('id', note.id);

      if (error) throw error;
      toast.success(note.is_pinned ? 'Nota desafixada' : 'Nota fixada');
      fetchNotes();
    } catch (error: any) {
      toast.error('Erro ao atualizar nota: ' + error.message);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      const { error } = await supabase
        .from('project_notes')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Nota excluída!');
      fetchNotes();
    } catch (error: any) {
      toast.error('Erro ao excluir nota: ' + error.message);
    }
  };

  const getColorClass = (colorName: string | null) => {
    const colorObj = noteColors.find(c => c.name === colorName);
    return colorObj ? colorObj.class : noteColors[0].class;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
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
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Anotações do Projeto</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nova Nota
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingNote ? 'Editar Nota' : 'Nova Nota'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Título (opcional)"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Escreva sua nota aqui..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={5}
                  required
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Cor da nota:</p>
                <div className="flex gap-2">
                  {noteColors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setColor(c.name)}
                      className={`w-8 h-8 rounded-full border-2 ${c.class} ${
                        color === c.name ? 'ring-2 ring-primary ring-offset-2' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsDialogOpen(false);
                    resetForm();
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit">
                  {editingNote ? 'Salvar' : 'Criar'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {notes.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>Nenhuma anotação ainda.</p>
            <p className="text-sm">Clique em "Nova Nota" para começar!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className={`rounded-lg border-2 p-4 ${getColorClass(note.color)} relative group transition-shadow hover:shadow-md`}
              >
                {note.is_pinned && (
                  <Pin className="absolute top-2 right-2 w-4 h-4 text-muted-foreground" />
                )}
                
                {note.title && (
                  <h3 className="font-semibold mb-2 pr-6">{note.title}</h3>
                )}
                
                <p className="text-sm whitespace-pre-wrap break-words">
                  {note.content}
                </p>
                
                <div className="mt-4 pt-2 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {formatDate(note.updated_at)}
                  </span>
                  
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => togglePin(note)}
                      title={note.is_pinned ? 'Desafixar' : 'Fixar'}
                    >
                      {note.is_pinned ? (
                        <PinOff className="w-3.5 h-3.5" />
                      ) : (
                        <Pin className="w-3.5 h-3.5" />
                      )}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => openEditDialog(note)}
                      title="Editar"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive hover:text-destructive"
                          title="Excluir"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Excluir nota?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta ação não pode ser desfeita.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteNote(note.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Excluir
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NotesTab;
