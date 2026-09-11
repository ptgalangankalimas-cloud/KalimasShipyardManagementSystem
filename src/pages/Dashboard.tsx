import { 
  Anchor, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  CheckCircle2, 
  Ship,
  ArrowUpRight,
  ArrowDownRight,
  Shield,
  Award,
  Zap
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Line, Legend, AreaChart, Area
} from 'recharts';
import { projects, salesOrders, monthlyRevenue, productionByType, dockUtilization } from '../data/mockData';

const formatCurrency = (value: number) => {
  if (value >= 1000000000) return `Rp ${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `Rp ${(value / 1000000).toFixed(0)}M`;
  return `Rp ${value.toLocaleString()}`;
};

export default function Dashboard() {
  const activeProjects = projects.filter(p => p.status === 'In Progress').length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const totalRevenue = salesOrders.reduce((sum, o) => sum + o.amount, 0);
  const pendingOrders = salesOrders.filter(o => o.status === 'Quotation' || o.status === 'Negotiation').length;

  const kpiCards = [
    { 
      title: 'Active Projects', 
      value: activeProjects.toString(), 
      icon: Ship, 
      gradient: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      change: '+3', 
      trend: 'up' 
    },
    { 
      title: 'Total Revenue (YTD)', 
      value: formatCurrency(totalRevenue), 
      icon: DollarSign, 
      gradient: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      change: '+18%', 
      trend: 'up' 
    },
    { 
      title: 'Ships Served', 
      value: '800+', 
      icon: Anchor, 
      gradient: 'from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      change: '+12', 
      trend: 'up' 
    },
    { 
      title: 'Pipeline Orders', 
      value: pendingOrders.toString(), 
      icon: Clock, 
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      change: formatCurrency(salesOrders.filter(o => o.status === 'Quotation' || o.status === 'Negotiation').reduce((s, o) => s + o.amount, 0)), 
      trend: 'up' 
    },
  ];

  const recentActivities = [
    { text: 'Tugboat TB-3500 "MV Kalimas Jaya" hull assembly reached 68%', time: '2 hours ago', type: 'progress' },
    { text: 'New order: TB-3000 Indo Star from PT. Indo Marine Logistic', time: '5 hours ago', type: 'sales' },
    { text: 'LCT Mahakam Prima keel laying ceremony completed', time: '1 day ago', type: 'production' },
    { text: 'MV Meratus Carrier engine overhaul delivered to PT. Meratus Line', time: '2 days ago', type: 'delivery' },
    { text: 'ISO 9001 surveillance audit passed successfully', time: '3 days ago', type: 'safety' },
    { text: 'NexusBuild.id platform progress update shared with clients', time: '4 days ago', type: 'platform' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner - Futuristic with Logo */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDksIDExNSwgMjIsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        {/* Watermark logo */}
        <div className="absolute top-1/2 right-20 -translate-y-1/2 opacity-5">
          <img 
            src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
            alt="" 
            className="w-64 h-64 object-contain"
          />
        </div>

        <div className="relative z-10 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
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
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-medium">ISO 9001 Certified Shipyard</span>
                </div>
                <h2 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Kualitas Maritim</span> Tanpa Kompromi
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  Galangan Kalimas — One-Stop Shipyard untuk pembangunan & perbaikan kapal di Balikpapan
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-lg">
                    <Award className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-xs text-slate-300">Rating 4.9/5</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-lg">
                    <Anchor className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-xs text-slate-300">800+ Kapal Dilayani</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-lg">
                    <Ship className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-xs text-slate-300">NexusBuild.id</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center min-w-[80px]">
                <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">{activeProjects}</p>
                <p className="text-[10px] text-slate-400">Active Projects</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center min-w-[80px]">
                <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">{completedProjects}</p>
                <p className="text-[10px] text-slate-400">Completed</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center min-w-[80px]">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">{projects.length}</p>
                <p className="text-[10px] text-slate-400">Total Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards - Futuristic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="kpi-card p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{kpi.title}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{kpi.value}</p>
                </div>
                <div className={`bg-gradient-to-br ${kpi.gradient} p-3 rounded-xl shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1">
                {kpi.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}
                <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                  {kpi.change}
                </span>
                <span className="text-sm text-gray-400 ml-1">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">Monthly Revenue vs Target</h3>
              <p className="text-xs text-gray-400">Performance tracking 2026</p>
            </div>
            <span className="text-xs bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 px-3 py-1 rounded-full font-medium border border-orange-100">2026</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(v) => `${(v/1000000000).toFixed(0)}B`} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Legend />
              <Area type="monotone" dataKey="revenue" stroke="#f97316" fill="url(#colorRevenue)" strokeWidth={2} name="Revenue" />
              <Line type="monotone" dataKey="target" stroke="#ef4444" strokeDasharray="5 5" strokeWidth={2} name="Target" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Production by Type */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">Projects by Service Type</h3>
              <p className="text-xs text-gray-400">New Build, Repair, Docking, Maintenance</p>
            </div>
            <span className="text-xs bg-gradient-to-r from-red-50 to-orange-50 text-red-600 px-3 py-1 rounded-full font-medium border border-red-100">Active</span>
          </div>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={productionByType}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  <Cell fill="#f97316" />
                  <Cell fill="#ef4444" />
                  <Cell fill="#fb923c" />
                  <Cell fill="#dc2626" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Dock Utilization & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dock Utilization */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">Facility Utilization</h3>
              <p className="text-xs text-gray-400">Dock A, Dock B, Slipway 1 & 2</p>
            </div>
            <span className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-600 px-3 py-1 rounded-full font-medium border border-emerald-100">Live</span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dockUtilization} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={80} />
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Bar dataKey="used" fill="url(#barGradient)" radius={[0, 8, 8, 0]} name="Utilization">
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-500" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex gap-3 group">
                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                  activity.type === 'progress' ? 'bg-orange-500' :
                  activity.type === 'sales' ? 'bg-emerald-500' :
                  activity.type === 'production' ? 'bg-purple-500' :
                  activity.type === 'delivery' ? 'bg-amber-500' :
                  activity.type === 'platform' ? 'bg-cyan-500' :
                  'bg-red-500'
                } group-hover:scale-150 transition-transform`} />
                <div>
                  <p className="text-sm text-gray-700">{activity.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Projects Table */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-orange-100/50 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-800">Active Projects Overview</h3>
            <p className="text-xs text-gray-400">Monitored via NexusBuild.id Platform</p>
          </div>
          <span className="text-xs bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 px-3 py-1 rounded-full font-medium border border-orange-100">
            {projects.filter(p => p.status === 'In Progress').length} In Progress
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-futuristic">
            <thead>
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Project</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Client</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Type</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Class</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Progress</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {projects.filter(p => p.status === 'In Progress').map((project) => (
                <tr key={project.id}>
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-gray-800">{project.name}</p>
                    <p className="text-xs text-gray-500">{project.dock}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-600">{project.client}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.type === 'New Build' ? 'badge-orange' :
                      project.type === 'Repair' ? 'badge-green' :
                      project.type === 'Docking' ? 'badge-blue' :
                      'badge-red'
                    }`}>{project.type}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-xs text-gray-600 font-mono bg-gray-100 px-2 py-0.5 rounded">{project.classification}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${
                            project.progress >= 75 ? 'from-emerald-400 to-emerald-500' :
                            project.progress >= 50 ? 'from-orange-400 to-orange-500' :
                            'from-red-400 to-red-500'
                          }`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-xs px-2 py-1 rounded-full font-medium badge-blue">
                      {project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
