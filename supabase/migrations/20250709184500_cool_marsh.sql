/*
  # Create storage bucket for property images

  1. Storage
    - Create `property-images` bucket
    - Set up RLS policies for public read access
    - Allow authenticated users to upload images
*/

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('property-images', 'property-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to property images
CREATE POLICY "Public can read property images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'property-images');

-- Allow authenticated users to upload property images
CREATE POLICY "Authenticated users can upload property images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'property-images');

-- Allow authenticated users to update property images
CREATE POLICY "Authenticated users can update property images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'property-images');

-- Allow authenticated users to delete property images
CREATE POLICY "Authenticated users can delete property images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'property-images');