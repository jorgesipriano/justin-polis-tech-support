-- Create notes table for project annotations
CREATE TABLE public.project_notes (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT,
    content TEXT NOT NULL,
    color TEXT DEFAULT 'default',
    is_pinned BOOLEAN DEFAULT false,
    created_by UUID,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.project_notes ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admins can view notes" 
ON public.project_notes 
FOR SELECT 
USING (is_admin(auth.uid()));

CREATE POLICY "Admins can manage notes" 
ON public.project_notes 
FOR ALL 
USING (is_admin(auth.uid()))
WITH CHECK (is_admin(auth.uid()));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_project_notes_updated_at
BEFORE UPDATE ON public.project_notes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();