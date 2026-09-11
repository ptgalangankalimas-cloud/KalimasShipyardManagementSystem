# Kalimas Group - Shipyard Management System

<div align="center">

![Kalimas Group Logo](https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png)

**Kualitas Maritim Tanpa Kompromi**

Sistem Manajemen Galangan Kapal Terpadu untuk PT. Galangan Kalimas

[![Deploy to GitHub Pages](https://github.com/your-username/kalimas-shipyard/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/kalimas-shipyard/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div>

## 📋 Tentang Aplikasi

Aplikasi manajemen galangan kapal terpadu untuk PT. Galangan Kalimas yang mencakup:

- 📊 **Dashboard** - Overview KPI, revenue, dan progress proyek
- 🏭 **Production** - Manajemen proyek pembangunan & perbaikan kapal
- 📦 **Products** - Katalog produk & layanan (Fresh Water, Gas Industri, Fuel HSD, Jetty, Workshop, Warehouse)
- 💰 **Sales** - Pipeline penjualan & order management
- 📈 **Management Control** - Performance metrics & risk management
- 👥 **Employees** - Manajemen karyawan & tim
- ⚙️ **Settings** - Konfigurasi sistem & profil perusahaan

## 🚀 Teknologi

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Recharts** - Data Visualization
- **Lucide React** - Icons

## 📦 Fitur Utama

### Dashboard Overview
- KPI cards dengan real-time metrics
- Revenue tracking vs target
- Project progress monitoring
- Facility utilization charts
- Recent activity feed

### Production Management
- Project tracking dengan status & progress
- Filter berdasarkan type & status
- Detail panel untuk setiap proyek
- Classification tracking (BKI, Class NK, Class BV)

### Products & Services
- Fresh Water Supply
- Gas Industry Filling Product
- Fuel HSD Supply Product
- Jetty Facilities
- Workshop (Metal Working)
- Warehouse Management

### Sales Management
- Sales pipeline visualization
- Order tracking dengan payment status
- Vessel type distribution
- Revenue forecasting

### Management Control
- Performance radar charts
- Department performance metrics
- Risk register
- NexusBuild.id platform integration

## 🛠️ Instalasi & Development

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Setup

```bash
# Clone repository
git clone https://github.com/your-username/kalimas-shipyard.git
cd kalimas-shipyard

# Install dependencies
npm install

# Run development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

### Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

## 🌐 Deploy ke GitHub Pages

### Metode 1: GitHub Actions (Recommended)

1. **Fork/Clone repository ini**

2. **Update vite.config.ts** (PENTING):
   ```typescript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     base: '/kalimas-shipyard/', // Ganti dengan nama repository Anda
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

3. **Push ke GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **Enable GitHub Pages**:
   - Buka repository di GitHub
   - Go to **Settings** → **Pages**
   - Under **Source**, pilih **GitHub Actions**
   - Workflow akan otomatis run dan deploy

5. **Akses aplikasi** di:
   ```
   https://your-username.github.io/kalimas-shipyard/
   ```

### Metode 2: Manual Deploy

```bash
# Build aplikasi
npm run build

# Install gh-pages
npm install -g gh-pages

# Deploy ke GitHub Pages
gh-pages -d dist
```

## 📁 Struktur Project

```
kalimas-shipyard/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   └── Layout.tsx          # Main layout dengan sidebar
│   ├── pages/
│   │   ├── Dashboard.tsx       # Dashboard page
│   │   ├── Production.tsx      # Production management
│   │   ├── Products.tsx        # Products & services
│   │   ├── Sales.tsx           # Sales management
│   │   ├── Management.tsx      # Management control
│   │   ├── Employees.tsx       # Employee management
│   │   └── Settings.tsx        # Settings page
│   ├── data/
│   │   └── mockData.ts         # Mock data
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Theme

Aplikasi menggunakan tema futuristik dengan warna:
- **White** - Background utama
- **Orange** (#f97316) - Primary color
- **Red** (#ef4444) - Accent color
- **Dark Slate** - Sidebar background

Features:
- Glassmorphism cards
- Gradient effects
- Neon glow animations
- Grid pattern backgrounds
- Responsive design

## 📞 Kontak

**PT. Galangan Kalimas**
- 📍 Alamat: Jl. Somber RT. 040 No. 112, Kel. Margo Mulyo, Kec. Balikpapan Barat, Kota Balikpapan, Kalimantan Timur 76133
- 📞 Phone: +62 (0) 811-541-164
- ✉️ Email: info@kalimasgroup.com
- 🌐 Website: www.kalimasgroup.com

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Logo & branding: [Kalimas Group](https://kalimasgroup.com)
- Icons: [Lucide React](https://lucide.dev)
- Charts: [Recharts](https://recharts.org)

---

<div align="center">

**Kualitas Maritim Tanpa Kompromi**

Made with ❤️ for PT. Galangan Kalimas

</div>
