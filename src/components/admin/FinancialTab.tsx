import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Plus, TrendingUp, TrendingDown, DollarSign, Trash2,
  ChevronLeft, ChevronRight, Pencil, X, Check
} from 'lucide-react';

type TransactionType = 'income' | 'expense';

interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  category: string;
  date: string;
  notes: string | null;
}

const INCOME_CATEGORIES = ['Conserto', 'Peça', 'Manutenção', 'Consultoria', 'Outro'];
const EXPENSE_CATEGORIES = ['Peças/Estoque', 'Aluguel', 'Água/Luz/Internet', 'Transporte', 'Ferramentas', 'Marketing', 'Imposto', 'Salário', 'Outro'];

const formatCurrency = (val: number) =>
  val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const monthName = (month: number) =>
  new Date(2000, month - 1).toLocaleString('pt-BR', { month: 'long' });

export default function FinancialTab() {
  const { user } = useAuth();
  const { toast } = useToast();

  const now = new Date();
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth() + 1);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const emptyForm = {
    type: 'income' as TransactionType,
    amount: '',
    description: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    notes: '',
  };
  const [form, setForm] = useState(emptyForm);

  const fetchTransactions = async () => {
    setLoading(true);
    const start = `${currentYear}-${String(currentMonth).padStart(2, '0')}-01`;
    const endDate = new Date(currentYear, currentMonth, 0);
    const end = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${endDate.getDate()}`;

    const { data, error } = await supabase
      .from('financial_transactions')
      .select('*')
      .gte('date', start)
      .lte('date', end)
      .order('date', { ascending: false });

    if (error) {
      toast({ title: 'Erro ao carregar transações', variant: 'destructive' });
    } else {
      setTransactions((data || []) as Transaction[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchTransactions(); }, [currentYear, currentMonth]);

  const prevMonth = () => {
    if (currentMonth === 1) { setCurrentMonth(12); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (currentMonth === 12) { setCurrentMonth(1); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = totalIncome - totalExpense;

  const openNew = () => {
    setEditId(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEdit = (t: Transaction) => {
    setEditId(t.id);
    setForm({ type: t.type, amount: String(t.amount), description: t.description, category: t.category, date: t.date, notes: t.notes || '' });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.description.trim() || !form.amount || !form.category || !form.date) {
      toast({ title: 'Preencha todos os campos obrigatórios', variant: 'destructive' });
      return;
    }
    const amount = parseFloat(form.amount.replace(',', '.'));
    if (isNaN(amount) || amount <= 0) {
      toast({ title: 'Valor inválido', variant: 'destructive' });
      return;
    }

    const payload = {
      type: form.type,
      amount,
      description: form.description.trim(),
      category: form.category,
      date: form.date,
      notes: form.notes.trim() || null,
      created_by: user?.id,
    };

    let error;
    if (editId) {
      ({ error } = await supabase.from('financial_transactions').update(payload).eq('id', editId));
    } else {
      ({ error } = await supabase.from('financial_transactions').insert(payload));
    }

    if (error) {
      toast({ title: 'Erro ao salvar', variant: 'destructive' });
    } else {
      toast({ title: editId ? 'Atualizado!' : 'Lançamento salvo!' });
      setDialogOpen(false);
      fetchTransactions();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('financial_transactions').delete().eq('id', id);
    if (error) {
      toast({ title: 'Erro ao excluir', variant: 'destructive' });
    } else {
      toast({ title: 'Excluído' });
      fetchTransactions();
    }
  };

  const categories = form.type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  return (
    <div className="space-y-6">
      {/* Month Navigator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={prevMonth}><ChevronLeft className="w-4 h-4" /></Button>
          <h2 className="text-lg font-semibold capitalize min-w-[160px] text-center">
            {monthName(currentMonth)} {currentYear}
          </h2>
          <Button variant="outline" size="icon" onClick={nextMonth}><ChevronRight className="w-4 h-4" /></Button>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNew} className="gap-2">
              <Plus className="w-4 h-4" /> Novo Lançamento
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{editId ? 'Editar Lançamento' : 'Novo Lançamento'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              {/* Type toggle */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setForm(f => ({ ...f, type: 'income', category: '' }))}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold transition-all ${
                    form.type === 'income'
                      ? 'border-green-500 bg-green-500/10 text-green-700'
                      : 'border-border text-muted-foreground hover:border-green-300'
                  }`}
                >
                  <TrendingUp className="w-4 h-4" /> Entrada
                </button>
                <button
                  type="button"
                  onClick={() => setForm(f => ({ ...f, type: 'expense', category: '' }))}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold transition-all ${
                    form.type === 'expense'
                      ? 'border-red-500 bg-red-500/10 text-red-700'
                      : 'border-border text-muted-foreground hover:border-red-300'
                  }`}
                >
                  <TrendingDown className="w-4 h-4" /> Saída
                </button>
              </div>

              <div className="space-y-1">
                <Label>Descrição *</Label>
                <Input placeholder="Ex: Conserto Samsung, Peças compradas..." value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Valor (R$) *</Label>
                  <Input type="number" min="0.01" step="0.01" placeholder="0,00" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} />
                </div>
                <div className="space-y-1">
                  <Label>Data *</Label>
                  <Input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
                </div>
              </div>

              <div className="space-y-1">
                <Label>Categoria *</Label>
                <Select value={form.category} onValueChange={v => setForm(f => ({ ...f, category: v }))}>
                  <SelectTrigger><SelectValue placeholder="Selecione..." /></SelectTrigger>
                  <SelectContent>
                    {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label>Observações</Label>
                <Textarea placeholder="Detalhes adicionais..." value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} rows={2} />
              </div>

              <div className="flex gap-2 pt-1">
                <Button variant="outline" className="flex-1" onClick={() => setDialogOpen(false)}>
                  <X className="w-4 h-4 mr-1" /> Cancelar
                </Button>
                <Button className="flex-1" onClick={handleSave}>
                  <Check className="w-4 h-4 mr-1" /> Salvar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-500/10">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Entradas</p>
            <p className="text-xl font-bold text-green-600">{formatCurrency(totalIncome)}</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-red-500/10">
            <TrendingDown className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Saídas</p>
            <p className="text-xl font-bold text-red-600">{formatCurrency(totalExpense)}</p>
          </div>
        </div>
        <div className={`bg-card border rounded-2xl p-5 flex items-center gap-4 ${balance >= 0 ? 'border-green-200' : 'border-red-200'}`}>
          <div className={`p-3 rounded-xl ${balance >= 0 ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
            <DollarSign className={`w-6 h-6 ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Saldo</p>
            <p className={`text-xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>{formatCurrency(balance)}</p>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Lançamentos do mês</h3>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : transactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-2">
            <DollarSign className="w-10 h-10 opacity-30" />
            <p>Nenhum lançamento neste mês</p>
            <Button variant="outline" size="sm" onClick={openNew} className="mt-2 gap-1">
              <Plus className="w-3 h-3" /> Adicionar primeiro
            </Button>
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {transactions.map(t => (
              <li key={t.id} className="flex items-center gap-4 px-5 py-4 hover:bg-muted/30 transition-colors">
                {/* Icon */}
                <div className={`p-2 rounded-xl shrink-0 ${t.type === 'income' ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                  {t.type === 'income'
                    ? <TrendingUp className="w-4 h-4 text-green-600" />
                    : <TrendingDown className="w-4 h-4 text-red-600" />}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{t.description}</p>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <Badge variant="secondary" className="text-xs">{t.category}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(t.date + 'T12:00:00').toLocaleDateString('pt-BR')}
                    </span>
                    {t.notes && <span className="text-xs text-muted-foreground truncate max-w-[160px]">{t.notes}</span>}
                  </div>
                </div>

                {/* Amount */}
                <p className={`font-bold text-base shrink-0 ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
                </p>

                {/* Actions */}
                <div className="flex gap-1 shrink-0">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(t)}>
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => handleDelete(t.id)}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Category breakdown */}
      {transactions.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(['income', 'expense'] as TransactionType[]).map(type => {
            const items = transactions.filter(t => t.type === type);
            if (items.length === 0) return null;
            const byCategory = items.reduce((acc, t) => {
              acc[t.category] = (acc[t.category] || 0) + t.amount;
              return acc;
            }, {} as Record<string, number>);
            const total = Object.values(byCategory).reduce((s, v) => s + v, 0);
            return (
              <div key={type} className="bg-card border border-border rounded-2xl p-5 space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  {type === 'income' ? '📈 Entradas por categoria' : '📉 Saídas por categoria'}
                </h4>
                {Object.entries(byCategory).sort((a, b) => b[1] - a[1]).map(([cat, val]) => (
                  <div key={cat}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{cat}</span>
                      <span className={`font-medium ${type === 'income' ? 'text-green-600' : 'text-red-600'}`}>{formatCurrency(val)}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${type === 'income' ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${(val / total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
