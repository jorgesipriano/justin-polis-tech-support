-- Criar enum para roles de admin
CREATE TYPE public.admin_role AS ENUM ('owner', 'consultant');

-- Tabela de roles de usuários admin (usando auth.users do Supabase)
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role admin_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Tabela de informações do negócio
CREATE TABLE public.business_info (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL DEFAULT 'SERVIBEL',
    phone TEXT,
    whatsapp TEXT,
    email TEXT,
    address TEXT,
    about_text TEXT,
    working_hours TEXT,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_by UUID REFERENCES auth.users(id)
);

-- Tabela de resultados/métricas para assessoria
CREATE TABLE public.advisory_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    value TEXT,
    metric_type TEXT, -- 'currency', 'percentage', 'number', 'text'
    period TEXT, -- 'monthly', 'yearly', 'total'
    display_order INTEGER DEFAULT 0,
    is_visible BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_by UUID REFERENCES auth.users(id)
);

-- Tabela de imagens da galeria
CREATE TABLE public.gallery_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    file_path TEXT NOT NULL,
    file_url TEXT NOT NULL,
    caption TEXT,
    display_order INTEGER DEFAULT 0,
    is_visible BOOLEAN DEFAULT true,
    uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    uploaded_by UUID REFERENCES auth.users(id)
);

-- Habilitar RLS em todas as tabelas
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.advisory_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Função helper para verificar se usuário é admin (owner ou consultant)
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('owner', 'consultant')
  )
$$;

-- Função helper para verificar se usuário é owner
CREATE OR REPLACE FUNCTION public.is_owner(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = 'owner'
  )
$$;

-- Políticas RLS para user_roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Owners can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.is_owner(auth.uid()))
WITH CHECK (public.is_owner(auth.uid()));

-- Políticas RLS para business_info
CREATE POLICY "Admins can view business info"
ON public.business_info
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage business info"
ON public.business_info
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Políticas RLS para advisory_results
CREATE POLICY "Admins can view advisory results"
ON public.advisory_results
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage advisory results"
ON public.advisory_results
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Políticas RLS para gallery_images
CREATE POLICY "Admins can view gallery images"
ON public.gallery_images
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage gallery images"
ON public.gallery_images
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Criar bucket de storage para galeria
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery', 'gallery', true);

-- Políticas de storage para galeria
CREATE POLICY "Admins can upload gallery images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'gallery' 
  AND public.is_admin(auth.uid())
);

CREATE POLICY "Admins can update gallery images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'gallery' 
  AND public.is_admin(auth.uid())
);

CREATE POLICY "Admins can delete gallery images"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'gallery' 
  AND public.is_admin(auth.uid())
);

CREATE POLICY "Anyone can view gallery images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'gallery');

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_business_info_updated_at
BEFORE UPDATE ON public.business_info
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_advisory_results_updated_at
BEFORE UPDATE ON public.advisory_results
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Inserir registro inicial de business_info
INSERT INTO public.business_info (name, phone, whatsapp, about_text)
VALUES (
  'SERVIBEL',
  '(31) 98410-1104',
  '5531984101104',
  'Presente em todos os lares, oferecendo serviços de qualidade.'
);