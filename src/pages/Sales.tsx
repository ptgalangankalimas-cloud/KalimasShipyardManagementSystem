import { useState } from 'react';
import { 
  DollarSign, FileText, TrendingUp, Users, 
  Search, Plus, Eye, Edit, MoreVertical,
  ArrowUpRight, Package, Clock
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
    { name: 'In Production', value: salesOrders.filter(o => o.status === 'In Production').reduce((s, o) => s + o.amount, 0), color: '#3b82f6' },
    { name: 'Confirmed', value: salesOrders.filter(o => o.status === 'Confirmed').reduce((s, o) => s + o.amount, 0), color: '#10b981' },
    { name: 'Delivered', value: salesOrders.filter(o => o.status === 'Delivered').reduce((s, o) => s + o.amount, 0), color: '#8b5cf6' },
    { name: 'Negotiation', value: salesOrders.filter(o => o.status === 'Negotiation').reduce((s, o) => s + o.amount, 0), color: '#f59e0b' },
    { name: 'Quotation', value: salesOrders.filter(o => o.status === 'Quotation').reduce((s, o) => s + o.amount, 0), color: '#6b7280' },
  ];

  const vesselTypeData = [
    { type: 'Bulk Carrier', count: salesOrders.filter(o => o.vesselType === 'Bulk Carrier').length },
    { type: 'Container', count: salesOrders.filter(o => o.vesselType === 'Container Ship').length },
    { type: 'Tug Boat', count: salesOrders.filter(o => o.vesselType === 'Tug Boat').length },
    { type: 'Barge', count: salesOrders.filter(o => o.vesselType === 'Barge').length },
    { type: 'Ferry', count: salesOrders.filter(o => o.vesselType === 'Ferry').length },
    { type: 'Tanker', count: salesOrders.filter(o => o.vesselType === 'Oil Tanker').length },
    { type: 'Patrol', count: salesOrders.filter(o => o.vesselType === 'Patrol Boat').length },
    { type: 'Cargo', count: salesOrders.filter(o => o.vesselType === 'General Cargo').length },
  ];

  const statusColors: Record<string, string> = {
    'Quotation': 'bg-gray-100 text-gray-700',
    'Negotiation': 'bg-amber-100 text-amber-700',
    'Confirmed': 'bg-blue-100 text-blue-700',
    'In Production': 'bg-indigo-100 text-indigo-700',
    'Delivered': 'bg-emerald-100 text-emerald-700',
    'Cancelled': 'bg-red-100 text-red-700',
  };

  const paymentColors: Record<string, string> = {
    'Pending': 'text-red-500',
    'Partial': 'text-amber-500',
    'Paid': 'text-emerald-500',
  };

  return (
    <div className="space-y-6">
      {/* Sales KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Pipeline Value</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(totalValue)}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <DollarSign className="w-5 h-5 text-blue-500" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3 text-emerald-500" />
            <span className="text-xs text-emerald-600 font-medium">+22% vs last quarter</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Confirmed Revenue</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(confirmedValue)}</p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-lg">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3 text-emerald-500" />
            <span className="text-xs text-emerald-600 font-medium">+18% vs last quarter</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Active Pipeline</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(pipelineValue)}</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-xs text-gray-500">{salesOrders.filter(o => o.status === 'Quotation' || o.status === 'Negotiation').length} opportunities</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Orders</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{salesOrders.length}</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <Package className="w-5 h-5 text-purple-500" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-xs text-gray-500">{salesOrders.filter(o => o.status === 'Delivered').length} delivered this year</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
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
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Orders by Vessel Type</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={vesselTypeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="type" tick={{ fontSize: 10 }} angle={-30} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#f59e0b" radius={[4, 4, 0, 0]} name="Orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filters & Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders, clients, vessels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
            >
              <option value="all">All Status</option>
              <option value="Quotation">Quotation</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Confirmed">Confirmed</option>
              <option value="In Production">In Production</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <button className="px-4 py-2.5 bg-amber-500 text-white rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Order
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Order #</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Client</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Vessel</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Payment</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Delivery</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
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
                    <p className="text-sm font-semibold text-gray-800">{formatCurrency(order.amount)}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[order.status]}`}>
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
                      <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing {filteredOrders.length} of {salesOrders.length} orders</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1.5 bg-amber-500 text-white rounded text-sm">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
