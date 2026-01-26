-- Create table for storing client credentials securely
CREATE TABLE public.client_credentials (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    service_name TEXT NOT NULL,
    login_username TEXT NOT NULL,
    password TEXT NOT NULL,
    url TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_by UUID
);

-- Enable Row Level Security
ALTER TABLE public.client_credentials ENABLE ROW LEVEL SECURITY;

-- Create RLS policies - only admins can access
CREATE POLICY "Admins can view credentials"
ON public.client_credentials
FOR SELECT
USING (is_admin(auth.uid()));

CREATE POLICY "Admins can manage credentials"
ON public.client_credentials
FOR ALL
USING (is_admin(auth.uid()))
WITH CHECK (is_admin(auth.uid()));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_client_credentials_updated_at
BEFORE UPDATE ON public.client_credentials
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();