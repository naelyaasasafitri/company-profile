# Company Profile Website

Modern, responsive company profile website built with Nuxt 3, featuring:
- Multi-language support (English & Indonesian)
- Smooth animations using GSAP
- Modern UI with Tailwind CSS
- Responsive design for all devices
- Contact form with validation

## 🚀 Tech Stack

- **Framework**: Nuxt 3 (Vue 3 Composition API)
- **Styling**: Tailwind CSS
- **Animation**: GSAP with ScrollTrigger
- **i18n**: @nuxtjs/i18n
- **Icons**: Lucide Vue Next
- **TypeScript**: Strict mode enabled

## 📦 Installation

### Prerequisites
- Node.js 18+ or Bun
- pnpm, npm, or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd company-profile
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Build for Production

```bash
pnpm build
# or
npm run build
# or
yarn build
```

Preview production build:
```bash
pnpm preview
# or
npm run preview
# or
yarn preview
```

## 📱 Deployment to Netlify

### Option 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub
2. Go to Netlify and click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `pnpm build` or `npm run build`
   - **Publish directory**: `.output/public`
5. Click "Deploy site"

### Option 2: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Deploy:
```bash
pnpm build && netlify deploy --prod --dir=.output/public
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your colors
      },
      accent: {
        // Your colors
      },
    },
  },
}
```

### Content

Edit language files in `locales/` directory:
- `en-US.ts` - English content
- `id-ID.ts` - Indonesian content

### Sections

Each section is a separate component in `components/`:
- `Hero.vue` - Hero section
- `About.vue` - About section with stats
- `Services.vue` - Services grid
- `Portfolio.vue` - Portfolio showcase
- `Testimonials.vue` - Client testimonials
- `Contact.vue` - Contact form

### Images

Replace placeholder images with your actual images in the respective components.

## 🌐 Multi-language

The site supports English (en) and Indonesian (id). To add a new language:

1. Create a new locale file in `locales/` (e.g., `fr-FR.ts`)
2. Add the locale to `nuxt.config.ts`:

```typescript
i18n: {
  locales: [
    // ... existing locales
    {
      code: 'fr',
      name: 'Français',
      file: 'fr-FR.ts',
    },
  ],
  // ...
}
```

## 📊 Features

- ✅ Fully responsive design
- ✅ Multi-language support
- ✅ Smooth scroll animations
- ✅ Modern UI/UX
- ✅ SEO-friendly with SSR
- ✅ TypeScript support
- ✅ Contact form with validation
- ✅ Dark mode ready (can be added)
- ✅ Performance optimized

## 🧪 Linting & Formatting

```bash
# Lint code
pnpm lint
# or
npm run lint

# Format code
pnpm format
# or
npm run format
```

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Nuxt 3
