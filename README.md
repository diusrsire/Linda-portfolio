# Linda Osunga - Virtual Healthcare Assistant Portfolio

A professional portfolio website showcasing Linda Osunga's expertise in virtual healthcare assistance, telemedicine support, medical transcription, and HIPAA-compliant patient coordination services.

## 🌟 Features

- **Modern Design**: Clean, professional interface built with React and Tailwind CSS
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading times with code splitting and asset optimization
- **SEO Friendly**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant design with keyboard navigation support
- **Security Headers**: HIPAA-compliant security configurations

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Deployment**: Cloudflare Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/diusrsire/Linda-portfolio.git
cd Linda-portfolio/linda-osunga-virtual-care
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build for production with optimizations
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── MainNavigation.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:

1. Editing `tailwind.config.ts` for theme customization
2. Modifying component styles in the respective component files
3. Adding custom CSS in `src/index.css`

### Content
Update the portfolio content by editing:
- `src/pages/Index.tsx` - Main portfolio content
- `src/components/MainNavigation.tsx` - Navigation menu
- `public/` - Static assets and images

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. Push your code to a Git repository
2. Connect your repository to Cloudflare Pages
3. Use these build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting provider

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with build optimizations
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `_headers` - HTTP security headers for deployment
- `_redirects` - SPA routing configuration
- `wrangler.toml` - Cloudflare Pages configuration

## 📊 Performance Features

- **Code Splitting**: Automatic vendor and component chunking
- **Asset Optimization**: Image and asset compression
- **Modern Build Target**: ES modules for better performance
- **Bundle Analysis**: Optimized dependency bundling
- **Caching Strategy**: Long-term caching for static assets

## 🔒 Security Features

- **HIPAA Compliance**: Security headers and configurations
- **Content Security Policy**: XSS protection
- **HTTPS Enforcement**: Secure connections only
- **Data Protection**: Privacy-focused design

## 🎯 SEO Optimization

- **Meta Tags**: Comprehensive SEO metadata
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema.org markup
- **Sitemap**: XML sitemap generation
- **Performance**: Core Web Vitals optimization

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Linda Osunga**  
Virtual Healthcare Assistant

- **Email**: linda@example.com
- **Phone**: +1234567890
- **Website**: [https://linda-osunga-virtual-care.pages.dev](https://linda-osunga-virtual-care.pages.dev)

## 🙏 Acknowledgments

- Built with modern web technologies
- UI components from Radix UI and shadcn/ui
- Icons from Lucide React
- Deployed on Cloudflare Pages

---

*This portfolio showcases professional virtual healthcare assistance services including telemedicine support, medical transcription, HIPAA-compliant patient coordination, and pharmacy tech support.*
