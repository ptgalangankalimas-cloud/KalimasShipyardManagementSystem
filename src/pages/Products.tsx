import { 
  Droplets, 
  Flame, 
  Fuel, 
  Ship, 
  Wrench, 
  Package, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Shield,
  Award,
  Star,
  TrendingUp
} from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 'P01',
      name: 'Fresh Water Supply',
      shortName: 'Fresh Water',
      icon: Droplets,
      description: 'Mandiri sumber air bersih (Fresh Water) yang berkualitas tinggi untuk kebutuhan operasional kapal dan industri. Kapasitas produksi besar dengan sistem filtrasi modern memastikan kualitas air memenuhi standar internasional.',
      features: [
        'Kapasitas produksi besar',
        'Sistem filtrasi modern',
        'Standar kualitas internasional',
        'Pengiriman 24/7',
        'Sertifikasi kualitas berkala',
      ],
      stats: { capacity: '500 m³/hari', quality: '99.9%', availability: '24/7' },
      color: 'from-blue-400 to-cyan-500',
      bgGlow: 'bg-blue-500/10',
      borderColor: 'border-blue-200',
    },
    {
      id: 'P02',
      name: 'Gas Industry Filling Product',
      shortName: 'Industrial Gas',
      icon: Flame,
      description: 'Produksi gas industri mandiri untuk kebutuhan pengelasan, pemotongan metal, dan proses industri lainnya. Tersedia berbagai jenis gas termasuk Oksigen, Acetylene, dan Argon dengan kemurnian tinggi.',
      features: [
        'Oksigen industri murni',
        'Gas Acetylene berkualitas',
        'Gas Argon untuk las TIG/MIG',
        'Produksi mandiri di galangan',
        'Sertifikasi keselamatan gas',
      ],
      stats: { types: '5+ Jenis', purity: '99.5%+', safety: 'ISO Certified' },
      color: 'from-orange-400 to-red-500',
      bgGlow: 'bg-orange-500/10',
      borderColor: 'border-orange-200',
    },
    {
      id: 'P03',
      name: 'Fuel HSD Supply Product',
      shortName: 'Fuel HSD',
      icon: Fuel,
      description: 'Penyediaan bahan bakar High Speed Diesel (HSD) berkualitas untuk kebutuhan operasional kapal dan kendaraan industri. Didukung oleh sistem penyimpanan dan distribusi yang aman dan efisien.',
      features: [
        'High Speed Diesel berkualitas',
        'Tangki penyimpanan standar',
        'Sistem distribusi aman',
        'Pengukuran akurat',
        'Harga kompetitif',
      ],
      stats: { capacity: '100,000 L', standard: 'Pertamina', delivery: 'On-demand' },
      color: 'from-amber-400 to-orange-500',
      bgGlow: 'bg-amber-500/10',
      borderColor: 'border-amber-200',
    },
    {
      id: 'P04',
      name: 'Jetty Facilities',
      shortName: 'Jetty',
      icon: Ship,
      description: 'Fasilitas jetty modern untuk sandar kapal dengan kapasitas besar. Dilengkapi dengan sistem mooring, fender, dan akses yang memadai untuk berbagai tipe dan ukuran kapal.',
      features: [
        'Kapasitas sandar besar',
        'Sistem mooring modern',
        'Fender berkualitas tinggi',
        'Akses multi-tipe kapal',
        'CCTV monitoring 24 jam',
      ],
      stats: { length: '150+ meter', depth: '8 meter', capacity: '5,000 DWT' },
      color: 'from-emerald-400 to-teal-500',
      bgGlow: 'bg-emerald-500/10',
      borderColor: 'border-emerald-200',
    },
    {
      id: 'P05',
      name: 'Workshop',
      shortName: 'Workshop',
      icon: Wrench,
      description: 'Metal workshop lengkap dengan kemampuan pembubutan metal dari beberapa inci hingga puluhan inci diameter, panjang mencapai 40 meter. Dilengkapi mesin CNC modern dan tenaga ahli berpengalaman.',
      features: [
        'Pembubutan hingga 40 meter',
        'Mesin CNC modern',
        'Diameter bervariasi',
        'Tenaga ahli berpengalaman',
        'Presisi tinggi',
      ],
      stats: { length: '40 meter', precision: '±0.01mm', machines: '15+ units' },
      color: 'from-purple-400 to-indigo-500',
      bgGlow: 'bg-purple-500/10',
      borderColor: 'border-purple-200',
    },
    {
      id: 'P06',
      name: 'Warehouse',
      shortName: 'Warehouse',
      icon: Package,
      description: 'Pergudangan modern dengan sistem manajemen inventori terkomputerisasi. Menyimpan material, spare part, dan equipment dengan standar keamanan dan kualitas tertinggi.',
      features: [
        'Sistem inventori terkomputerisasi',
        'Keamanan 24/7',
        'Kontrol suhu & kelembaban',
        'Area penyimpanan luas',
        'Manajemen stok real-time',
      ],
      stats: { area: '5,000 m²', items: '10,000+ SKUs', security: '24/7 CCTV' },
      color: 'from-rose-400 to-pink-500',
      bgGlow: 'bg-rose-500/10',
      borderColor: 'border-rose-200',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="relative z-10 p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <img 
                src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
                alt="Kalimas Group" 
                className="w-20 h-20 object-contain rounded-xl bg-white p-2 shadow-lg shadow-orange-500/20 border border-orange-200/30"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Package className="w-4 h-4 text-orange-400" />
                <span className="text-xs text-orange-400 font-medium uppercase tracking-wider">Produk & Layanan</span>
              </div>
              <h2 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Ekosistem Lengkap</span> Galangan Kalimas
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                One-Stop Shipyard dengan fasilitas mandiri — Fresh Water, Gas Industri, Fuel HSD, Jetty, Workshop, dan Warehouse
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="kpi-card p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-2.5 rounded-xl shadow-lg shadow-orange-500/20">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Produk</p>
              <p className="text-xl font-bold gradient-text">6</p>
            </div>
          </div>
        </div>
        <div className="kpi-card p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2.5 rounded-xl shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Ketersediaan</p>
              <p className="text-xl font-bold text-emerald-600">24/7</p>
            </div>
          </div>
        </div>
        <div className="kpi-card p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Sertifikasi</p>
              <p className="text-xl font-bold text-blue-600">ISO</p>
            </div>
          </div>
        </div>
        <div className="kpi-card p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2.5 rounded-xl shadow-lg shadow-amber-500/20">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Kualitas</p>
              <p className="text-xl font-bold text-amber-600">Premium</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <div key={product.id} className="glass-card rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
              {/* Product Header */}
              <div className={`relative p-5 bg-gradient-to-r ${product.bgGlow} to-transparent border-b border-gray-100`}>
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${product.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-gray-400">{product.id}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium bg-gradient-to-r ${product.color} text-white`}>
                        Available
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

                {/* Features */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Fitur Utama</p>
                  <div className="space-y-1.5">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                  {Object.entries(product.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-400 capitalize">{key}</p>
                      <p className="text-sm font-bold gradient-text mt-0.5">{value}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full btn-futuristic px-4 py-2.5 text-sm flex items-center justify-center gap-2">
                  <span>Konsultasi Produk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ecosystem Summary */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 p-2 rounded-xl shadow-lg shadow-orange-500/20">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Ekosistem Terpadu Kalimas Group</h3>
            <p className="text-xs text-gray-500">Seluruh kebutuhan galangan tersedia dalam satu lokasi</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.id} className={`p-3 border ${product.borderColor} rounded-xl text-center bg-gradient-to-b from-white to-gray-50/50 hover:shadow-md transition-all cursor-pointer group`}>
                <div className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold text-gray-700">{product.shortName}</p>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          Dengan sumber air bersih dan produksi gas industri mandiri yang tersedia langsung di galangan, 
          Kalimas Group menyediakan kebutuhan layanan kapal Anda secara terpadu dengan efisiensi waktu dan biaya.
        </p>
      </div>
    </div>
  );
}
