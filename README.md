# Mwaura Property Managers Website

A modern, responsive real estate website built with React, TypeScript, Tailwind CSS, and Supabase. Features a comprehensive property management system with admin dashboard and customer contact functionality.

## 🌟 Features

### Public Features
- **Homepage**: Hero section with featured properties and company overview
- **Properties Page**: Grid view of all properties with search and filtering
- **About Us**: Company mission, values, and story
- **Contact Page**: Contact form with business information
- **WhatsApp Integration**: Floating WhatsApp button for instant communication

### Admin Features
- **Secure Login**: Protected admin dashboard
- **Property Management**: Add, edit, and delete property listings
- **Image Upload**: Support for property images via Supabase storage
- **Contact Messages**: View and manage customer inquiries
- **Dashboard Analytics**: Overview of properties and messages

## 🚀 Demo Credentials

### Admin Access
- **Email**: `admin@mwauraproperty.com`
- **Password**: `admin123`

> **Note**: These are demo credentials for testing purposes. In production, use strong, unique passwords.

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mwaura-property-managers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Click "Connect to Supabase" in the application or manually create `.env` file:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run database migrations**
   The application includes SQL migration files in `/supabase/migrations/`:
   - `create_properties_table.sql`
   - `create_contact_messages_table.sql`
   - `create_storage_bucket.sql`

5. **Create admin user**
   In your Supabase dashboard, go to Authentication > Users and create a user with:
   - Email: `admin@mwauraproperty.com`
   - Password: `admin123`

6. **Start development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

### Properties Table
```sql
- id (uuid, primary key)
- title (text)
- description (text)
- price (numeric)
- location (text)
- category (text) - 'For Sale' or 'For Rent'
- image_url (text)
- created_at (timestamp)
- updated_at (timestamp)
```

### Contact Messages Table
```sql
- id (uuid, primary key)
- name (text)
- email (text)
- message (text)
- read (boolean, default: false)
- created_at (timestamp)
```

## 🔐 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Public read access** for properties
- **Authenticated access** for property management
- **Public insert** for contact messages
- **Secure image storage** with proper access policies

## 📱 Contact Information

- **Phone**: 079471233
- **Email**: ochiengkevin280320@gmail.com
- **WhatsApp**: 0794712133
- **Location**: Nairobi, Kenya

## 🎨 Design Features

- **Green Theme**: Professional green color scheme (green-500, green-600, green-700)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **SEO Optimized**: Semantic HTML structure and meta tags

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

The application is ready for deployment on platforms like:
- **Netlify** (recommended)
- **Vercel**
- **Firebase Hosting**

Make sure to set environment variables in your deployment platform.

## 📝 Usage

### Adding Properties
1. Login to admin dashboard at `/admin`
2. Navigate to "Add Property" 
3. Fill in property details and upload image
4. Property will appear on the public properties page

### Managing Contact Messages
1. Access admin dashboard
2. Switch to "Messages" tab
3. View and mark messages as read
4. Contact customers directly using provided information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, contact:
- Email: ochiengkevin280320@gmail.com
- Phone: 079471233

---

Built with ❤️ for Mwaura Property Managers