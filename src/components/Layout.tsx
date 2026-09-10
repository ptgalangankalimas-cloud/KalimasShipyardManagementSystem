import { useState } from 'react';
import { 
  LayoutDashboard, 
  Factory, 
  ShoppingCart, 
  BarChart3, 
  Ship, 
  Menu, 
  X, 
  Building2,
  Users,
  Settings,
  LogOut,
  Bell
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
        w-72 bg-gradient-to-b from-slate-900 to-slate-800 text-white
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        {/* Company Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
              <Ship className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">PT. Galangan Kalimas</h1>
              <p className="text-xs text-slate-400">Shipyard Management System</p>
            </div>
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
                    ? 'bg-amber-500/20 text-amber-400 border-l-4 border-amber-500' 
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }
                `}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Company Info */}
        <div className="p-4 border-t border-slate-700">
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold text-amber-400">Company Info</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Jl. Somber Barun No. 112 RT. 040<br/>
              Kel. Margo Mulyo, Kec. Balikpapan Barat<br/>
              Kota Balikpapan
            </p>
            <p className="text-xs text-slate-500 mt-2">
              info@kalimasgroup.com<br/>
              www.kalimasgroup.com
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h2 className="text-xl font-bold text-gray-800 capitalize">
                {currentPage === 'dashboard' ? 'Dashboard Overview' : 
                 currentPage === 'production' ? 'Production Management' :
                 currentPage === 'sales' ? 'Sales Management' :
                 currentPage === 'management' ? 'Management Control' :
                 currentPage === 'employees' ? 'Employee Management' :
                 'Settings'}
              </h2>
              <p className="text-sm text-gray-500">PT. Galangan Kalimas - Balikpapan</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                AD
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-700">Admin</p>
                <p className="text-xs text-gray-500">Management</p>
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
