import { 
  Ship, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend, AreaChart, Area
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
      change: '+2', 
      trend: 'up' 
    },
    { 
      title: 'Total Revenue (YTD)', 
      value: formatCurrency(totalRevenue), 
      icon: DollarSign, 
      color: 'bg-emerald-500', 
      bgColor: 'bg-emerald-50',
      change: '+15%', 
      trend: 'up' 
    },
    { 
      title: 'Completed Projects', 
      value: completedProjects.toString(), 
      icon: CheckCircle2, 
      color: 'bg-purple-500', 
      bgColor: 'bg-purple-50',
      change: '+1', 
      trend: 'up' 
    },
    { 
      title: 'Pending Orders', 
      value: pendingOrders.toString(), 
      icon: Clock, 
      color: 'bg-amber-500', 
      bgColor: 'bg-amber-50',
      change: '-1', 
      trend: 'down' 
    },
  ];

  const recentActivities = [
    { text: 'MV Ocean Spirit hull repair reached 72% completion', time: '2 hours ago', type: 'progress' },
    { text: 'New order received: MT Balikpapan from PT. Nusantara Oil', time: '5 hours ago', type: 'sales' },
    { text: 'TB-200 Tug Boat keel laying ceremony completed', time: '1 day ago', type: 'production' },
    { text: 'MV Meratus Express annual survey delivered to client', time: '2 days ago', type: 'delivery' },
    { text: 'Safety inspection passed for Dock A operations', time: '3 days ago', type: 'safety' },
  ];

  return (
    <div className="space-y-6">
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
            <h3 className="font-bold text-gray-800">Monthly Revenue vs Target</h3>
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
            <h3 className="font-bold text-gray-800">Projects by Type</h3>
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
            <h3 className="font-bold text-gray-800">Dock & Slipway Utilization</h3>
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
        <div className="p-5 border-b border-gray-100">
          <h3 className="font-bold text-gray-800">Active Projects Overview</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Project</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Client</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Type</th>
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
                      project.type === 'Repair' ? 'bg-blue-50 text-blue-600' :
                      project.type === 'New Build' ? 'bg-emerald-50 text-emerald-600' :
                      project.type === 'Conversion' ? 'bg-amber-50 text-amber-600' :
                      'bg-purple-50 text-purple-600'
                    }`}>{project.type}</span>
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
