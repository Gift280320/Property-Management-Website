export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  category: 'For Sale' | 'For Rent';
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}