# 🚀 Quick Start - Deploy ke GitHub Pages

Panduan cepat untuk publish aplikasi ke GitHub Pages dalam 5 menit!

## ⚡ Langkah Cepat

### 1️⃣ Buat Repository GitHub
- Buka https://github.com/new
- Nama: `kalimas-shipyard`
- Pilih **Public**
- Klik **Create repository**

### 2️⃣ Update vite.config.ts

Buka file `vite.config.ts` dan tambahkan `base`:

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/kalimas-shipyard/', // ← TAMBAHKAN INI
  server: {
    // ... existing config
  },
});
```

### 3️⃣ Push ke GitHub

Buka terminal di folder project:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/kalimas-shipyard.git
git branch -M main
git push -u origin main
```

**⚠️ Ganti `YOUR-USERNAME` dengan username GitHub Anda!**

### 4️⃣ Enable GitHub Pages

1. Buka repository di GitHub
2. **Settings** → **Pages**
3. Source: Pilih **GitHub Actions**
4. Tunggu 2-3 menit

### 5️⃣ Akses Aplikasi

Buka: `https://YOUR-USERNAME.github.io/kalimas-shipyard/`

---

## 📝 Checklist

- [ ] Repository GitHub sudah dibuat
- [ ] `vite.config.ts` sudah diupdate dengan `base: '/kalimas-shipyard/'`
- [ ] Code sudah di-push ke GitHub
- [ ] GitHub Pages sudah enabled (Source: GitHub Actions)
- [ ] Workflow berhasil (centang hijau di tab Actions)

## 🆘 Troubleshooting

**Error 404?**
- Pastikan `base` di vite.config.ts sesuai nama repository
- Push ulang setelah update config

**Workflow failed?**
- Cek tab **Actions** untuk lihat error
- Pastikan tidak ada syntax error

**Halaman blank?**
- Clear cache browser (Ctrl+Shift+R)
- Cek console browser (F12) untuk error

---

## 📞 Butuh Bantuan?

Baca panduan lengkap di:
- [README.md](./README.md) - Overview project
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Panduan detail

---

**Selamat! Aplikasi Anda sudah live!** 🎉

URL: `https://YOUR-USERNAME.github.io/kalimas-shipyard/`
