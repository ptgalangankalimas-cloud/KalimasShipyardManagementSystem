import { useState } from 'react';
import { 
  LayoutDashboard, 
  Factory, 
  ShoppingCart, 
  BarChart3, 
  Anchor, 
  Menu, 
  X, 
  Building2,
  Users,
  Settings,
  LogOut,
  Bell,
  Shield
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'production', label: 'Production', icon: Factory },
  { id: 'sales', label: 'Sales', icon: ShoppingCart },
  { id: 'management', label: 'Management Control', icon: BarChart3 },
  { id: 'employees', label: 'Employees', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Company Logo */}
        <div className="p-5 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <img 
              src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
              alt="Kalimas Group Logo" 
              className="w-14 h-14 object-contain rounded-lg bg-white/10 p-1"
            />
            <div>
              <h1 className="font-bold text-base leading-tight">Kalimas Group</h1>
              <p className="text-xs text-amber-400 font-medium">Galangan Kalimas</p>
              <p className="text-[10px] text-slate-400 italic">Kualitas Maritim Tanpa Kompromi</p>
            </div>
          </div>
        </div>

        {/* Certification Badge */}
        <div className="px-5 py-2 border-b border-slate-700/30">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] text-emerald-400 font-medium">ISO 9001 Certified</span>
            <span className="text-[10px] text-slate-500">•</span>
            <span className="text-[10px] text-slate-400">800+ Ships Served</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-amber-500/15 text-amber-400 border-l-[3px] border-amber-500 shadow-sm' 
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }
                `}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Company Info */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="bg-slate-800/70 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
                alt="Kalimas Group" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">Company Info</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Jl. Somber RT. 040 No. 112<br/>
              Kel. Margo Mulyo, Kec. Balikpapan Barat<br/>
              Kota Balikpapan, Kalimantan Timur 76133
            </p>
            <div className="mt-2 pt-2 border-t border-slate-700/50">
              <p className="text-[11px] text-slate-500">
                📞 +62 (0) 811-541-164
              </p>
              <p className="text-[11px] text-slate-500">
                ✉️ info@kalimasgroup.com
              </p>
              <p className="text-[11px] text-amber-400/70 mt-1">
                🌐 www.kalimasgroup.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <img 
              src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
              alt="Kalimas Group" 
              className="w-10 h-10 object-contain lg:block hidden"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-800 capitalize">
                {currentPage === 'dashboard' ? 'Dashboard Overview' : 
                 currentPage === 'production' ? 'Production Management' :
                 currentPage === 'sales' ? 'Sales Management' :
                 currentPage === 'management' ? 'Management Control' :
                 currentPage === 'employees' ? 'Employee Management' :
                 'Settings'}
              </h2>
              <p className="text-xs text-gray-500">Kalimas Group — Galangan Kalimas Shipyard, Balikpapan</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                AT
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-700">Aditya Topani</p>
                <p className="text-xs text-gray-500">President Director</p>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
