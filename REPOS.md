# 📚 Repository Structure

## 🎯 Overview

Workspace ini sekarang terorganisir dengan 1 project = 1 repository.

## 🔗 Repositories

### 1. company-profile
- **URL**: https://github.com/naelyaasasafitri/company-profile
- **Local**: `/home/clawdbot/.openclaw/workspace-engineer`
- **Tech Stack**: Nuxt 3, Tailwind CSS, i18n
- **Purpose**: Modern company profile website dengan multi-language support

### 2. invoice-mvp
- **URL**: https://github.com/naelyaasasafitri/invoice-mvp
- **Local**: `/home/clawdbot/.openclaw/invoice-mvp`
- **Tech Stack**: Nuxt 3, Cloudflare Workers, D1 Database, Drizzle ORM
- **Purpose**: Invoice management MVP application
- **Features**:
  - Invoice CRUD operations
  - Template management
  - Cloudflare D1 database
  - GitHub Actions for deployment

### 3. nuxt-pwa-example
- **URL**: https://github.com/naelyaasafitri/nuxt-pwa-example
- **Local**: `/home/clawdbot/.openclaw/nuxt-pwa-example`
- **Tech Stack**: Nuxt 3, PWA (@vite-pwa/nuxt), Tailwind CSS
- **Purpose**: Demo Progressive Web App dengan offline support
- **Features**:
  - Service Worker
  - Offline fallback page
  - Installable as app
  - Cloudflare Pages deployment

## 🛠️ Workflow

### Working on a project

```bash
# company-profile
cd /home/clawdbot/.openclaw/workspace-engineer
git add .
git commit -m "feat: add new feature"
git push

# invoice-mvp
cd /home/clawdbot/.openclaw/invoice-mvp
git add .
git commit -m "feat: add new feature"
git push

# nuxt-pwa-example
cd /home/clawdbot/.openclaw/nuxt-pwa-example
git add .
git commit -m "feat: add new feature"
git push
```

## 🚀 Deployment

### Cloudflare Pages

All projects ready for Cloudflare Pages deployment:

1. **company-profile**:
   - Build command: `npm run generate`
   - Output: `.output/public`

2. **invoice-mvp**:
   - Build command: `npm run build` (Cloudflare Workers)
   - Output: `.output/server`

3. **nuxt-pwa-example**:
   - Build command: `npm run generate`
   - Output: `.output/public`
   - Has GitHub Actions workflow ready

## 📝 Notes

- Each repo is independent with its own git history
- No submodules or monorepo complexity
- Easy to deploy and scale individually
- Clear separation of concerns

---

Last updated: 2025-02-15
