
CREATE POLICY "Public can view visible gallery images"
ON public.gallery_images
FOR SELECT
USING (is_visible = true);
