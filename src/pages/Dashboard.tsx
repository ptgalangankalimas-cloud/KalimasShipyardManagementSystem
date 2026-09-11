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
  Award
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
      color: 'bg-blue-500', 
      bgColor: 'bg-blue-50',
      change: '+3', 
      trend: 'up' 
    },
    { 
      title: 'Total Revenue (YTD)', 
      value: formatCurrency(totalRevenue), 
      icon: DollarSign, 
      color: 'bg-emerald-500', 
      bgColor: 'bg-emerald-50',
      change: '+18%', 
      trend: 'up' 
    },
    { 
      title: 'Ships Served', 
      value: '800+', 
      icon: Anchor, 
      color: 'bg-purple-500', 
      bgColor: 'bg-purple-50',
      change: '+12', 
      trend: 'up' 
    },
    { 
      title: 'Pipeline Orders', 
      value: pendingOrders.toString(), 
      icon: Clock, 
      color: 'bg-amber-500', 
      bgColor: 'bg-amber-50',
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
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute top-1/2 right-20 -translate-y-1/2 opacity-10">
          <img 
            src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
            alt="" 
            className="w-48 h-48 object-contain"
          />
        </div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <img 
                src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
                alt="Kalimas Group" 
                className="w-20 h-20 object-contain rounded-lg bg-white/10 p-1 flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-medium">ISO 9001 Certified Shipyard</span>
                </div>
                <h2 className="text-xl font-bold">Kualitas Maritim Tanpa Kompromi</h2>
                <p className="text-sm text-slate-300 mt-1">
                  Galangan Kalimas — One-Stop Shipyard untuk pembangunan & perbaikan kapal di Balikpapan
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs text-slate-300">Rating 4.9/5</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Anchor className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs text-slate-300">800+ Kapal Dilayani</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Ship className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs text-slate-300">NexusBuild.id Platform</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-amber-400">{activeProjects}</p>
                <p className="text-[10px] text-slate-300">Active Projects</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-emerald-400">{completedProjects}</p>
                <p className="text-[10px] text-slate-300">Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-400">{projects.length}</p>
                <p className="text-[10px] text-slate-300">Total Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{kpi.title}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{kpi.value}</p>
                </div>
                <div className={`${kpi.bgColor} p-3 rounded-lg`}>
                  <Icon className={`w-5 h-5 ${kpi.color.replace('bg-', 'text-')}`} />
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
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">Monthly Revenue vs Target</h3>
              <p className="text-xs text-gray-400">Performance tracking 2026</p>
            </div>
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">2026</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(v) => `${(v/1000000000).toFixed(0)}B`} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Legend />
              <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="url(#colorRevenue)" strokeWidth={2} name="Revenue" />
              <Line type="monotone" dataKey="target" stroke="#f59e0b" strokeDasharray="5 5" strokeWidth={2} name="Target" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Production by Type */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">Projects by Service Type</h3>
              <p className="text-xs text-gray-400">New Build, Repair, Docking, Maintenance</p>
            </div>
            <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full font-medium">Active</span>
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
                  {productionByType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
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
        <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">Facility Utilization</h3>
              <p className="text-xs text-gray-400">Dock A, Dock B, Slipway 1 & 2</p>
            </div>
            <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full font-medium">Live</span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dockUtilization} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={80} />
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Bar dataKey="used" fill="#3b82f6" radius={[0, 4, 4, 0]} name="Utilization" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                  activity.type === 'progress' ? 'bg-blue-500' :
                  activity.type === 'sales' ? 'bg-emerald-500' :
                  activity.type === 'production' ? 'bg-purple-500' :
                  activity.type === 'delivery' ? 'bg-amber-500' :
                  activity.type === 'platform' ? 'bg-cyan-500' :
                  'bg-red-500'
                }`} />
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
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-800">Active Projects Overview</h3>
            <p className="text-xs text-gray-400">Monitored via NexusBuild.id Platform</p>
          </div>
          <span className="text-xs bg-amber-50 text-amber-600 px-2 py-1 rounded-full font-medium">
            {projects.filter(p => p.status === 'In Progress').length} In Progress
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Project</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Client</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Type</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Class</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Progress</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {projects.filter(p => p.status === 'In Progress').map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-gray-800">{project.name}</p>
                    <p className="text-xs text-gray-500">{project.dock}</p>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-600">{project.client}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.type === 'New Build' ? 'bg-blue-50 text-blue-600' :
                      project.type === 'Repair' ? 'bg-emerald-50 text-emerald-600' :
                      project.type === 'Docking' ? 'bg-amber-50 text-amber-600' :
                      project.type === 'Maintenance' ? 'bg-purple-50 text-purple-600' :
                      'bg-gray-50 text-gray-600'
                    }`}>{project.type}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-xs text-gray-600 font-mono">{project.classification}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            project.progress >= 75 ? 'bg-emerald-500' :
                            project.progress >= 50 ? 'bg-blue-500' :
                            'bg-amber-500'
                          }`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-xs px-2 py-1 rounded-full font-medium bg-blue-50 text-blue-600">
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
