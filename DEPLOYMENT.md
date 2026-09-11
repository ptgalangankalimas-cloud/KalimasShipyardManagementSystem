# Panduan Deploy ke GitHub Pages

Panduan lengkap untuk publish aplikasi Kalimas Shipyard Management System ke GitHub Pages.

## 📋 Prasyarat

Sebelum memulai, pastikan Anda memiliki:

1. ✅ Akun GitHub (daftar di https://github.com)
2. ✅ Git terinstall di komputer (download di https://git-scm.com)
3. ✅ Node.js 18+ terinstall (download di https://nodejs.org)
4. ✅ Text editor (VS Code recommended: https://code.visualstudio.com)

## 🚀 Langkah-langkah Deploy

### Step 1: Buat Repository di GitHub

1. Buka https://github.com/new
2. Isi form:
   - **Repository name**: `kalimas-shipyard` (atau nama pilihan Anda)
   - **Description**: `Kalimas Group - Shipyard Management System`
   - **Public**: ✅ Pilih Public
   - **Initialize**: ❌ Jangan centang README, .gitignore, license
3. Klik **Create repository**

### Step 2: Konfigurasi Vite untuk GitHub Pages

**PENTING**: Buka file `vite.config.ts` dan tambahkan `base`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // TAMBAHKAN BARIS INI - ganti dengan nama repository Anda
  base: '/kalimas-shipyard/',
  
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
```

**Catatan**: 
- Jika nama repository Anda `kalimas-shipyard`, gunakan `base: '/kalimas-shipyard/'`
- Jika nama repository berbeda, sesuaikan dengan nama repository Anda
- Untuk custom domain, gunakan `base: '/'`

### Step 3: Push Code ke GitHub

Buka terminal/command prompt di folder project Anda:

```bash
# Inisialisasi git repository
git init

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "Initial commit: Kalimas Shipyard Management System"

# Tambahkan remote repository (GANTI DENGAN USERNAME ANDA)
git remote add origin https://github.com/YOUR-USERNAME/kalimas-shipyard.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

**Ganti `YOUR-USERNAME` dengan username GitHub Anda!**

### Step 4: Enable GitHub Pages

1. Buka repository Anda di GitHub
2. Klik tab **Settings** (di kanan atas)
3. Di sidebar kiri, klik **Pages**
4. Di bagian **Build and deployment**:
   - **Source**: Pilih **GitHub Actions**
5. Workflow akan otomatis berjalan

### Step 5: Monitor Deployment

1. Klik tab **Actions** di repository Anda
2. Anda akan melihat workflow "Deploy to GitHub Pages" sedang berjalan
3. Tunggu sampai selesai (biasanya 2-3 menit)
4. Jika sukses, akan muncul centang hijau ✅

### Step 6: Akses Aplikasi

Setelah deployment selesai, aplikasi Anda akan tersedia di:

```
https://YOUR-USERNAME.github.io/kalimas-shipyard/
```

**Ganti `YOUR-USERNAME` dengan username GitHub Anda!**

## 🔧 Troubleshooting

### Error: "Page build failed"

**Penyebab**: Base path tidak sesuai

**Solusi**: 
- Pastikan `base` di `vite.config.ts` sesuai dengan nama repository
- Contoh: Repository `kalimas-shipyard` → `base: '/kalimas-shipyard/'`

### Error: "404 Not Found" setelah deploy

**Penyebab**: GitHub Pages belum aktif atau base path salah

**Solusi**:
1. Cek Settings → Pages sudah enabled
2. Pastikan base path di vite.config.ts benar
3. Rebuild dan push ulang:
   ```bash
   npm run build
   git add .
   git commit -m "Fix base path"
   git push
   ```

### Error: "Workflow failed"

**Penyebab**: Masalah di GitHub Actions

**Solusi**:
1. Buka tab **Actions** di repository
2. Klik workflow yang failed
3. Lihat log error
4. Common fixes:
   - Pastikan Node.js version di workflow compatible
   - Cek tidak ada syntax error di code
   - Pastikan semua dependencies terinstall

### Halaman Blank/White Screen

**Penyebab**: JavaScript tidak load dengan benar

**Solusi**:
1. Buka browser console (F12)
2. Cek error message
3. Pastikan base path di vite.config.ts benar
4. Clear cache browser dan reload

## 🔄 Update Aplikasi

Setelah deploy pertama, untuk update aplikasi:

```bash
# Edit code Anda
# ...

# Build dan push
git add .
git commit -m "Update: deskripsi perubahan"
git push
```

GitHub Actions akan otomatis rebuild dan deploy ulang.

## 🌐 Custom Domain (Optional)

Jika ingin menggunakan domain sendiri (misal: `app.kalimasgroup.com`):

1. **Di GitHub**:
   - Settings → Pages → Custom domain
   - Masukkan domain Anda
   - Centang "Enforce HTTPS"

2. **Di DNS Provider**:
   - Tambahkan CNAME record:
     ```
     Type: CNAME
     Name: app (atau subdomain pilihan)
     Value: YOUR-USERNAME.github.io
     ```

3. **Update vite.config.ts**:
   ```typescript
   base: '/', // Untuk custom domain
   ```

4. Tambahkan file `CNAME` di folder `public/`:
   ```
   app.kalimasgroup.com
   ```

## 📊 Monitoring

### Cek Status Deployment

1. Buka repository di GitHub
2. Tab **Actions** → Lihat status workflow
3. Tab **Deployments** → Lihat deployment history

### View Logs

1. Tab **Actions**
2. Klik workflow run
3. Klik job (build/deploy)
4. Lihat log detail

## 🎯 Checklist Sebelum Deploy

- [ ] Repository sudah dibuat di GitHub
- [ ] `vite.config.ts` sudah diupdate dengan `base` yang benar
- [ ] Semua code sudah di-commit
- [ ] GitHub Pages sudah enabled (Source: GitHub Actions)
- [ ] Workflow sudah berhasil (centang hijau)
- [ ] Aplikasi bisa diakses di URL GitHub Pages

## 📞 Support

Jika mengalami masalah:

1. Cek [GitHub Pages Documentation](https://docs.github.com/en/pages)
2. Cek [GitHub Actions Documentation](https://docs.github.com/en/actions)
3. Buka issue di repository
4. Hubungi tim IT Kalimas Group

## 🎉 Selesai!

Selamat! Aplikasi Kalimas Shipyard Management System Anda sudah live di GitHub Pages!

**URL Aplikasi**: `https://YOUR-USERNAME.github.io/kalimas-shipyard/`

---

**Catatan Penting**:
- Deployment pertama mungkin butuh 5-10 menit
- Setiap push ke branch `main` akan trigger auto-deploy
- Pastikan selalu test lokal (`npm run dev`) sebelum push
- Backup code secara berkala

**Kualitas Maritim Tanpa Kompromi** 🚢
