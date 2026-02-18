
-- Create financial transactions table
CREATE TABLE public.financial_transactions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type text NOT NULL CHECK (type IN ('income', 'expense')),
  amount numeric(10, 2) NOT NULL CHECK (amount > 0),
  description text NOT NULL,
  category text NOT NULL DEFAULT 'Geral',
  date date NOT NULL DEFAULT CURRENT_DATE,
  notes text,
  created_by uuid,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.financial_transactions ENABLE ROW LEVEL SECURITY;

-- Only admins can manage financial data
CREATE POLICY "Admins can manage financial transactions"
ON public.financial_transactions
FOR ALL
USING (is_admin(auth.uid()))
WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Admins can view financial transactions"
ON public.financial_transactions
FOR SELECT
USING (is_admin(auth.uid()));

-- Auto-update updated_at
CREATE TRIGGER update_financial_transactions_updated_at
BEFORE UPDATE ON public.financial_transactions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
