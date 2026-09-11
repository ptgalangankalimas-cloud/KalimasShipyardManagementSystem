import { useState } from 'react';
import { 
  DollarSign, FileText, TrendingUp, Users, 
  Search, Plus, Eye, Edit, MoreVertical,
  ArrowUpRight, Package, Clock, Anchor, Zap
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { salesOrders } from '../data/mockData';

const formatCurrency = (value: number) => {
  if (value >= 1000000000) return `Rp ${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `Rp ${(value / 1000000).toFixed(0)}M`;
  return `Rp ${value.toLocaleString()}`;
};

export default function Sales() {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = salesOrders.filter(o => {
    const matchStatus = filterStatus === 'all' || o.status === filterStatus;
    const matchSearch = o.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.vesselName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.orderNumber.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  const totalValue = salesOrders.reduce((sum, o) => sum + o.amount, 0);
  const confirmedValue = salesOrders.filter(o => o.status === 'Confirmed' || o.status === 'In Production' || o.status === 'Delivered').reduce((sum, o) => sum + o.amount, 0);
  const pipelineValue = salesOrders.filter(o => o.status === 'Quotation' || o.status === 'Negotiation').reduce((sum, o) => sum + o.amount, 0);

  const statusByValue = [
    { name: 'In Production', value: salesOrders.filter(o => o.status === 'In Production').reduce((s, o) => s + o.amount, 0), color: '#f97316' },
    { name: 'Confirmed', value: salesOrders.filter(o => o.status === 'Confirmed').reduce((s, o) => s + o.amount, 0), color: '#ef4444' },
    { name: 'Delivered', value: salesOrders.filter(o => o.status === 'Delivered').reduce((s, o) => s + o.amount, 0), color: '#10b981' },
    { name: 'Negotiation', value: salesOrders.filter(o => o.status === 'Negotiation').reduce((s, o) => s + o.amount, 0), color: '#fb923c' },
    { name: 'Quotation', value: salesOrders.filter(o => o.status === 'Quotation').reduce((s, o) => s + o.amount, 0), color: '#6b7280' },
  ];

  const vesselTypeData = [
    { type: 'Tugboat', count: salesOrders.filter(o => o.vesselType.includes('Tugboat')).length },
    { type: 'Barge', count: salesOrders.filter(o => o.vesselType.includes('Barge')).length },
    { type: 'LCT', count: salesOrders.filter(o => o.vesselType.includes('LCT')).length },
    { type: 'Tanker', count: salesOrders.filter(o => o.vesselType.includes('Tanker')).length },
    { type: 'Bulk', count: salesOrders.filter(o => o.vesselType.includes('Bulk')).length },
    { type: 'Container', count: salesOrders.filter(o => o.vesselType.includes('Container')).length },
    { type: 'Ferry', count: salesOrders.filter(o => o.vesselType.includes('Ferry')).length },
  ];

  const statusColors: Record<string, string> = {
    'Quotation': 'bg-gray-100 text-gray-700 border-gray-200',
    'Negotiation': 'badge-orange',
    'Confirmed': 'badge-blue',
    'In Production': 'badge-orange',
    'Delivered': 'badge-green',
    'Cancelled': 'badge-red',
  };

  const paymentColors: Record<string, string> = {
    'Pending': 'text-red-500',
    'Partial': 'text-orange-500',
    'Paid': 'text-emerald-500',
  };

  return (
    <div className="space-y-6">
      {/* Platform Banner */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDksIDExNSwgMjIsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
              alt="Kalimas Group" 
              className="w-12 h-12 object-contain rounded-lg bg-white/10 p-0.5 border border-white/10"
            />
            <div>
              <p className="text-sm font-semibold">Sales Pipeline — Monitored via NexusBuild.id</p>
              <p className="text-xs text-slate-300">AI-powered transparency & Escrow Account for client trust</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full border border-emerald-500/20">ISO 9001</span>
            <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full border border-orange-500/20">BKI Certified</span>
          </div>
        </div>
      </div>

      {/* Sales KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="kpi-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Pipeline Value</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(totalValue)}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-xl shadow-lg shadow-orange-500/20">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3 text-emerald-500" />
            <span className="text-xs text-emerald-600 font-medium">+22% vs last quarter</span>
          </div>
        </div>
        <div className="kpi-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Confirmed Revenue</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(confirmedValue)}</p>
            </div>
            <div className="bg-gradient-to-br from-red-400 to-red-600 p-3 rounded-xl shadow-lg shadow-red-500/20">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3 text-emerald-500" />
            <span className="text-xs text-emerald-600 font-medium">+18% vs last quarter</span>
          </div>
        </div>
        <div className="kpi-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Active Pipeline</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(pipelineValue)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-xl shadow-lg shadow-amber-500/20">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-xs text-gray-500">{salesOrders.filter(o => o.status === 'Quotation' || o.status === 'Negotiation').length} opportunities</span>
          </div>
        </div>
        <div className="kpi-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Orders</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{salesOrders.length}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl shadow-lg shadow-orange-500/20">
              <Package className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-xs text-gray-500">{salesOrders.filter(o => o.status === 'Delivered').length} delivered this year</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-bold text-gray-800 mb-4">Sales Pipeline by Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={statusByValue}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
              >
                {statusByValue.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-bold text-gray-800 mb-4">Orders by Vessel Type</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={vesselTypeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="type" tick={{ fontSize: 10 }} angle={-30} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" radius={[8, 8, 0, 0]} name="Orders">
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
                {vesselTypeData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill="url(#barGrad)" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filters & Table */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-orange-100/50">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
              <input
                type="text"
                placeholder="Search orders, clients, vessels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-orange-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 outline-none bg-white/80 backdrop-blur-sm"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 border border-orange-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 outline-none bg-white/80 backdrop-blur-sm"
            >
              <option value="all">All Status</option>
              <option value="Quotation">Quotation</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Confirmed">Confirmed</option>
              <option value="In Production">In Production</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <button className="btn-futuristic px-4 py-2.5 text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Order
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-futuristic">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Order #</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Client</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Vessel</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Class</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Payment</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Delivery</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-orange-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-3">
                    <p className="text-sm font-mono font-medium text-gray-800">{order.orderNumber}</p>
                    <p className="text-xs text-gray-400">{order.orderDate}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-700">{order.client}</p>
                    <p className="text-xs text-gray-400">{order.vesselType}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm text-gray-700">{order.vesselName}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs font-mono text-gray-600 bg-gray-100 px-2 py-0.5 rounded">{order.classification}</span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-semibold gradient-text">{formatCurrency(order.amount)}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium border ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium ${paymentColors[order.paymentStatus]}`}>
                      ● {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-xs text-gray-600">{order.deliveryDate}</p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-orange-50 text-gray-500 hover:text-orange-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-orange-50 text-gray-500 hover:text-orange-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-orange-100/50 flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing {filteredOrders.length} of {salesOrders.length} orders</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-orange-200 rounded-lg text-sm text-gray-600 hover:bg-orange-50 transition-colors">Previous</button>
            <button className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg text-sm shadow-lg shadow-orange-500/20">1</button>
            <button className="px-3 py-1.5 border border-orange-200 rounded-lg text-sm text-gray-600 hover:bg-orange-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
