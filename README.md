# GlobeSoftwares - Professional Business Website

A modern, fully responsive business website built with React, Vite, and Tailwind CSS. This website showcases GlobeSoftwares' services, portfolio, and provides a contact form for potential clients.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Interactive Components**: Smooth scrolling navigation, animated sections, and interactive forms
- **Professional Portfolio**: Showcase of projects with detailed descriptions
- **Contact Form**: Easy-to-use contact form for client inquiries

## 🎨 Sections

1. **Hero Section**: Eye-catching landing with company tagline and call-to-action
2. **Services**: Comprehensive list of services offered
3. **Portfolio**: Showcase of completed projects with images and descriptions
4. **About**: Company information, values, and team details
5. **Contact**: Contact form and company contact information
6. **Footer**: Social links, quick navigation, and newsletter signup

## 🛠️ Tech Stack

- **React 19.2.0** - Modern UI library
- **Vite 7.2.4** - Next-generation frontend tooling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **ESLint** - Code quality and consistency

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development Server

The development server runs at: `http://localhost:5173/`

## 📁 Project Structure

```
GlobeSoftwares/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Services.jsx    # Services section
│   │   ├── Portfolio.jsx   # Portfolio/Projects section
│   │   ├── About.jsx       # About section
│   │   ├── Contact.jsx     # Contact form section
│   │   └── Footer.jsx      # Footer component
│   ├── App.jsx             # Main app component
│   ├── App.css             # Custom styles
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Customization

### Update Company Information
- Edit contact details in `src/components/Contact.jsx`
- Update company stats in `src/components/Hero.jsx`
- Modify team information in `src/components/About.jsx`

### Add/Edit Services
- Update the services array in `src/components/Services.jsx`

### Update Portfolio Projects
- Edit the projects array in `src/components/Portfolio.jsx`
- Replace project images with your own

### Customize Colors
- The website uses Tailwind CSS utility classes
- Primary colors: Blue (blue-600) and Purple (purple-600)
- Modify colors throughout components as needed

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder, ready for deployment to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📝 License

This project is created for GlobeSoftwares.

## 👨‍💻 Support

For questions or support, contact us at info@globesoftwares.com

---

Built with ❤️ by GlobeSoftwares
