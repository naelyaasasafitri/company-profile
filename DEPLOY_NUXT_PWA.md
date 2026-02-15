# 🚀 Deploy Nuxt PWA Example ke Cloudflare Pages

## Cara 1: Via Cloudflare Pages Git Integration (Rekomendasi - Paling Mudah)

### Langkah 1: Setup di Cloudflare Dashboard

1. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Pilih account kamu
3. Masuk ke **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
4. Pilih repo: `naelyaasasafitri/company-profile`
5. Authorize Cloudflare untuk akses repo (jika belum)

### Langkah 2: Configure Build Settings

Pada **Build settings**, isi:

```
Project name: nuxt-pwa-example
Production branch: main
Framework preset: Nuxt
Build command: npm run generate
Build output directory: .output/public
Root directory: nuxt-pwa-example
```

### Langkah 3: Deploy

Klik **Save and Deploy**. Cloudflare akan:
- Clone repo
- Install dependencies
- Build project
- Deploy ke Cloudflare Pages

URL akan seperti: `https://nuxt-pwa-example.pages.dev`

Setiap commit ke branch `main` akan trigger auto-rebuild.

---

## Cara 2: Via GitHub Actions (Opsional - Lebih Flex)

### Langkah 1: Generate Cloudflare API Token

1. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Profile → **API Tokens** → **Create Token**
3. Template: **Edit Cloudflare Workers** (Custom)
4. Permissions:
   - Account → Cloudflare Pages → Edit
   - Account → Account Settings → Read
5. Account Resources: Include → Specific account → [pilih account kamu]
6. Create token → **Copy token**

### Langkah 2: Get Account ID

1. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Workers & Pages
3. Lihat di kanan atas, di dropdown account → **Copy Account ID**

### Langkah 3: Add Secrets di GitHub

1. Buka repo: https://github.com/naelyaasasafitri/company-profile
2. Settings → **Secrets and variables** → **Actions** → **New repository secret**
3. Tambah dua secrets:
   - Name: `CLOUDFLARE_API_TOKEN` → Value: [token dari Langkah 1]
   - Name: `CLOUDFLARE_ACCOUNT_ID` → Value: [account ID dari Langkah 2]

### Langkah 4: Buat Project di Cloudflare Pages (Manual first)

1. Workers & Pages → Create → Pages → **Upload Assets** (temporary)
2. Upload folder kosong atau file index.html
3. Project name: `nuxt-pwa-example`

### Langkah 5: Trigger Workflow

Push any change to `nuxt-pwa-example/` folder, atau:
1. Actions tab → **Deploy Nuxt PWA to Cloudflare Pages** → **Run workflow**

---

## 📝 Catatan Penting

### Kenapa Git Integration lebih disarankan?

✅ **Otomatis**: Setiap push ke main langsung deploy
✅ **Mudah**: Tidak perlu manage secrets
✅ **Gratis**: Cloudflare Pages gratis untuk personal use
✅ **CDN Global**: Content tersebar di 300+ lokasi
✅ **Preview deployments**: Untuk setiap pull request

### Build Configuration Detail

Framework: **Nuxt 3**
- `nuxt.config.ts` sudah configured untuk static generation (`ssr: true` + PWA)
- Output: `.output/public` (static HTML/CSS/JS)
- PWA enabled via `@vite-pwa/nuxt`

### Environment Variables (Opsional)

Jika perlu environment variables, tambahkan di Cloudflare Dashboard:
Settings → Environment variables → Add variable

Contoh:
- `NUXT_PUBLIC_API_BASE_URL`: `https://api.example.com`

---

## 🔧 Troubleshooting

### Build gagal?

Check build logs di:
- Cloudflare Dashboard: Workers & Pages → nuxt-pwa-example → Deployments
- GitHub Actions: Actions tab → workflow run

### PWA tidak terinstall?

Pastikan:
1. Site di-serve via HTTPS (Cloudflare Pages otomatis HTTPS)
2. Check Service Worker di DevTools → Application → Service Workers
3. Manifest.json harus accessible di root

### Update content?

Cukup push perubahan ke GitHub:
```bash
git add nuxt-pwa-example/
git commit -m "update: tambah halaman baru"
git push
```

Cloudflare akan auto-build dan deploy!

---

## 📚 Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Nuxt 3 on Cloudflare Pages](https://nuxt.com/docs/getting-started/deployment/cloudflare-pages)
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
