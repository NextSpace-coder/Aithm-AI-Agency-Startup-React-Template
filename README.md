# Aithm - AI Agency & Startup React Template

A modern, responsive React template designed specifically for AI agencies, startups, and technology companies. Built with React 18, Vite, and Bootstrap 5, this template provides a comprehensive solution for showcasing AI services, portfolio projects, and building a professional online presence.

## 🚀 Key Features

- **Multiple Home Page Variants**: 4 different homepage designs to choose from
- **Comprehensive Page Collection**: 25+ pre-built pages covering all business needs
- **AI-Focused Sections**: Specialized components for AI services showcase and technology features
- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Mobile-first approach ensuring perfect display on all devices
- **E-commerce Ready**: Complete shopping cart, checkout, and product management system
- **Blog System**: Multiple blog layouts with sidebar and standard views
- **Portfolio Showcase**: Dedicated sections for displaying projects and case studies
- **Team Management**: Professional team member profiles and grid layouts
- **Contact & Forms**: Built-in contact forms and address components
- **Supabase Integration**: Ready for backend integration with Supabase

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **Styling**: Bootstrap 5.3.3 + Custom SASS
- **Routing**: React Router DOM 7.1.1
- **Animations**: Motion 12.5.0
- **Image Gallery**: React Photo View 1.2.7
- **Video Modal**: React Modal Video 2.0.2
- **Carousel/Slider**: Swiper 11.2.5
- **Backend Integration**: Supabase 2.39.0
- **Code Quality**: ESLint with React plugins
- **Language**: JavaScript with JSConfig for path aliases

## 📁 Project Structure

```
aithm/
├── public/
│   └── img/                    # Static images and assets
│       ├── all-img/           # General images
│       ├── banner/            # Background images
│       └── shop/              # E-commerce product images
├── src/
│   ├── assets/
│   │   ├── css/               # Stylesheets and fonts
│   │   └── fonts/             # Custom font files
│   ├── components/
│   │   ├── sections/          # Reusable page sections
│   │   │   ├── about/         # About page components
│   │   │   ├── blogs/         # Blog-related components
│   │   │   ├── brands/        # Brand showcase components
│   │   │   ├── features/      # Feature highlight sections
│   │   │   ├── header/        # Navigation and header
│   │   │   ├── heros/         # Hero section variants
│   │   │   ├── pricing/       # Pricing table components
│   │   │   ├── products/      # E-commerce components
│   │   │   ├── projects/      # Portfolio project components
│   │   │   ├── team/          # Team member components
│   │   │   └── testimonial/   # Customer testimonials
│   │   └── ui/                # UI utility components
│   ├── db/                    # Static data and mock content
│   ├── hooks/                 # Custom React hooks
│   ├── integrations/
│   │   └── supabase/          # Supabase client configuration
│   ├── layout/                # Layout components
│   ├── pages/                 # Page components
│   └── route/                 # Routing configuration
├── package.json
└── vite.config.js
```

## 📄 Page Overview

### Core Pages
- **Home Variants** (`home.jsx`, `home-two.jsx`, `home-three.jsx`, `home-four.jsx`): Four different homepage designs
- **About** (`about.jsx`): Company information and team showcase
- **Services** (`services.jsx`, `services-details.jsx`): AI services and detailed service descriptions
- **Portfolio** (`portfolio.jsx`, `portfolio-details.jsx`): Project showcase and case studies
- **Contact** (`contact.jsx`): Contact information and inquiry forms

### Blog System
- **Blog Layouts** (`blog.jsx`, `blog-standard.jsx`, `blog-with-sidebar.jsx`): Multiple blog page layouts
- **Blog Details** (`blog-details.jsx`): Individual blog post pages

### E-commerce Features
- **Product Pages** (`products-list.jsx`, `single-products.jsx`): Product catalog and detailed product views
- **Shopping Cart** (`cart.jsx`): Shopping cart management
- **Checkout** (`checkout.jsx`): Secure checkout process

### Additional Pages
- **Team** (`team.jsx`): Team member profiles and information
- **Pricing** (`pricing.jsx`): Service pricing and packages
- **Gallery** (`gallery.jsx`): Image gallery and portfolio showcase
- **FAQ** (`faq.jsx`): Frequently asked questions
- **Login** (`login.jsx`): User authentication page
- **Legal Pages**: Privacy Policy, Terms & Conditions, Cookie Policy

### Utility Pages
- **404 Page** (`not-found.jsx`): Custom error page for missing content

## 🎨 Key Components

### AI-Specific Components
- **AIServicesShowcase**: Dedicated section for highlighting AI services
- **ContinuousLearning**: Showcase continuous improvement and learning capabilities
- **Features**: Technology feature highlights with modern animations

### Interactive Elements
- **Hero Sections**: 4 different hero section designs with call-to-action buttons
- **Image Gallery**: Interactive image gallery with lightbox functionality
- **Video Sections**: Embedded video content with modal popups
- **Testimonials**: Customer testimonial sliders and grids
- **Work Process**: Step-by-step process visualization

### Business Components
- **Team Grid/Slider**: Professional team member showcase
- **Project Cards**: Portfolio project displays with filtering
- **Pricing Cards**: Flexible pricing table components
- **Blog Cards**: Modern blog post previews
- **Brand Showcase**: Client/partner logo displays

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or extract the template**
   ```bash
   cd aithm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Create optimized production build
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint for code quality checks

## 🔧 Customization

### Styling
- Custom styles are located in `/src/assets/css/`
- Bootstrap 5 is used as the base CSS framework
- SASS support is available for advanced styling customization

### Content Management
- Static data is stored in `/src/db/` directory
- Images and assets are located in `/public/img/`
- Update content by modifying the respective data files

### Routing
- Routes are configured in `/src/route/router.jsx`
- Add new pages by creating components in `/src/pages/` and updating the router

### Supabase Integration
- Supabase client is pre-configured in `/src/integrations/supabase/`
- Update the client configuration with your Supabase project details

## 📱 Responsive Design

The template is built with a mobile-first approach and is fully responsive across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags and Open Graph tags configured
- Clean URL structure with React Router
- Image optimization and lazy loading ready

## 🤝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support & Documentation

This template includes comprehensive documentation and examples for all components. Each section is modular and can be easily customized or extended based on your specific requirements.

For additional customization or development questions, refer to the component files and data structures provided in the template.

## 📄 License

This template is provided as-is for development and commercial use. Please refer to the included license documentation for specific usage terms.

---

**Built with React + Vite for optimal performance and developer experience.**