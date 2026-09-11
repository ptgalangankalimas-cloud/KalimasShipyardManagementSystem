import { 
  TrendingUp, TrendingDown, DollarSign, Users, Ship, 
  AlertTriangle, CheckCircle2, Clock, Target,
  BarChart3, FileText, Download, Zap, Shield
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  BarChart, Bar
} from 'recharts';
import { projects, salesOrders, employees } from '../data/mockData';

const formatCurrency = (value: number) => {
  if (value >= 1000000000) return `Rp ${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `Rp ${(value / 1000000).toFixed(0)}M`;
  return `Rp ${value.toLocaleString()}`;
};

export default function Management() {
  const performanceData = [
    { metric: 'Production', current: 85, target: 90 },
    { metric: 'Quality', current: 92, target: 95 },
    { metric: 'Safety', current: 98, target: 100 },
    { metric: 'Delivery', current: 78, target: 85 },
    { metric: 'Cost', current: 88, target: 90 },
    { metric: 'Client Sat.', current: 90, target: 92 },
  ];

  const efficiencyData = [
    { month: 'Jan', efficiency: 82, utilization: 78 },
    { month: 'Feb', efficiency: 79, utilization: 75 },
    { month: 'Mar', efficiency: 88, utilization: 85 },
    { month: 'Apr', efficiency: 85, utilization: 82 },
    { month: 'May', efficiency: 90, utilization: 88 },
    { month: 'Jun', efficiency: 87, utilization: 84 },
  ];

  const departmentPerformance = [
    { dept: 'Production', projects: 5, onTime: 4, budget: 92 },
    { dept: 'Engineering', projects: 3, onTime: 3, budget: 95 },
    { dept: 'Quality', projects: 8, onTime: 8, budget: 98 },
    { dept: 'Sales', projects: 10, onTime: 7, budget: 88 },
    { dept: 'Safety', projects: 12, onTime: 12, budget: 100 },
  ];

  const riskItems = [
    { id: 1, risk: 'Material supply delay for TB-200 project', level: 'High', impact: 'Schedule delay 2-3 weeks', mitigation: 'Alternative supplier identified' },
    { id: 2, risk: 'Dock C maintenance required', level: 'Medium', impact: 'Reduced capacity 30%', mitigation: 'Scheduled for July maintenance' },
    { id: 3, risk: 'Skilled welder shortage', level: 'Medium', impact: 'Production bottleneck', mitigation: 'Training program initiated' },
    { id: 4, risk: 'Weather disruption (rainy season)', level: 'Low', impact: 'Outdoor work delays', mitigation: 'Covered work areas expanded' },
  ];

  const kpiSummary = [
    { label: 'Revenue Target', value: 87, trend: 'up', icon: DollarSign, gradient: 'from-orange-400 to-orange-600' },
    { label: 'On-Time Delivery', value: 78, trend: 'down', icon: Clock, gradient: 'from-red-400 to-red-600' },
    { label: 'Quality Rate', value: 92, trend: 'up', icon: CheckCircle2, gradient: 'from-emerald-400 to-emerald-600' },
    { label: 'Safety Rate', value: 98, trend: 'up', icon: AlertTriangle, gradient: 'from-amber-400 to-orange-500' },
    { label: 'Utilization', value: 85, trend: 'up', icon: Users, gradient: 'from-orange-500 to-red-500' },
    { label: 'Client Sat.', value: 90, trend: 'up', icon: Target, gradient: 'from-red-500 to-orange-400' },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {kpiSummary.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="kpi-card p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`bg-gradient-to-br ${kpi.gradient} p-1.5 rounded-lg shadow-sm`}>
                  <Icon className="w-3.5 h-3.5 text-white" />
                </div>
                {kpi.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-500" />
                )}
              </div>
              <p className="text-xs text-gray-500 font-medium">{kpi.label}</p>
              <div className="flex items-end gap-1 mt-1">
                <span className="text-xl font-bold gradient-text">{kpi.value}%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${kpi.gradient}`}
                  style={{ width: `${kpi.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Performance Metrics</h3>
            <span className="text-xs bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 px-3 py-1 rounded-full font-medium border border-orange-100">Q2 2026</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={performanceData}>
              <PolarGrid stroke="#fed7aa" />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar name="Current" dataKey="current" stroke="#f97316" fill="#f97316" fillOpacity={0.3} />
              <Radar name="Target" dataKey="target" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} strokeDasharray="5 5" />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Efficiency Trend */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Efficiency & Utilization Trend</h3>
            <span className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-600 px-3 py-1 rounded-full font-medium border border-emerald-100">6 Months</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={efficiencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(value: number) => `${value}%`} />
              <Legend />
              <Line type="monotone" dataKey="efficiency" stroke="#f97316" strokeWidth={2} dot={{ r: 4, fill: '#f97316' }} name="Efficiency" />
              <Line type="monotone" dataKey="utilization" stroke="#ef4444" strokeWidth={2} dot={{ r: 4, fill: '#ef4444' }} name="Utilization" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Performance & Risk Register */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Performance */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Department Performance</h3>
            <BarChart3 className="w-5 h-5 text-orange-400" />
          </div>
          <div className="space-y-3">
            {departmentPerformance.map((dept, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-24">
                  <p className="text-sm font-medium text-gray-700">{dept.dept}</p>
                  <p className="text-xs text-gray-400">{dept.projects} projects</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                        style={{ width: `${dept.onTime / dept.projects * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-600 w-8">{dept.onTime}/{dept.projects}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">On-time: {Math.round(dept.onTime / dept.projects * 100)}% | Budget: {dept.budget}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Register */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Risk Register</h3>
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
          <div className="space-y-3">
            {riskItems.map((risk) => (
              <div key={risk.id} className="p-3 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all">
                <div className="flex items-start justify-between">
                  <p className="text-sm text-gray-700 font-medium">{risk.risk}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${
                    risk.level === 'High' ? 'badge-red' :
                    risk.level === 'Medium' ? 'badge-orange' :
                    'badge-green'
                  }`}>{risk.level}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Impact: {risk.impact}</p>
                <p className="text-xs text-emerald-600 mt-1">✓ {risk.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NexusBuild Platform */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-blue-50 to-orange-50"></div>
        <div className="relative z-10 p-5 border border-cyan-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 p-2 rounded-xl shadow-lg shadow-orange-500/20">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">NexusBuild.id Platform</h3>
                <p className="text-xs text-gray-500">AI-Powered Progress Monitoring & Escrow Account</p>
              </div>
            </div>
            <span className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-600 px-3 py-1 rounded-full font-medium border border-emerald-100">Active</span>
          </div>
          <p className="text-sm text-gray-600">
            Galangan Kalimas is the first shipyard in Indonesia utilizing AI technology and Escrow Account system 
            through the NexusBuild.id platform. This ensures full transparency of scope, progress, and costs — 
            monitored and controlled directly by vessel owners.
          </p>
        </div>
      </div>

      {/* Reports Section */}
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">Management Reports</h3>
          <button className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
            <Download className="w-4 h-4" />
            Export All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { title: 'Monthly Production Report', date: 'June 2026', type: 'Production' },
            { title: 'Sales Performance Q2', date: 'Q2 2026', type: 'Sales' },
            { title: 'Financial Summary', date: 'June 2026', type: 'Finance' },
            { title: 'HSE Incident Report', date: 'June 2026', type: 'Safety' },
            { title: 'Resource Utilization', date: 'June 2026', type: 'HR' },
            { title: 'Quality Audit Report', date: 'June 2026', type: 'Quality' },
            { title: 'Project Status Report', date: 'June 2026', type: 'Production' },
            { title: 'Client Satisfaction Survey', date: 'Q2 2026', type: 'Sales' },
          ].map((report, index) => (
            <div key={index} className="p-3 border border-gray-100 rounded-xl hover:border-orange-200 hover:bg-orange-50/30 transition-all cursor-pointer group">
              <div className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-gray-400 group-hover:text-orange-500 mt-0.5 flex-shrink-0 transition-colors" />
                <div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{report.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{report.date} • {report.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
