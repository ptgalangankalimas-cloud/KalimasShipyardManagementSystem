import { useState } from 'react';
import { 
  Users, Search, Plus, Mail, Phone, MapPin,
  Filter, UserCheck, UserX, Clock, Zap
} from 'lucide-react';
import { employees } from '../data/mockData';

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const departments = [...new Set(employees.map(e => e.department))];

  const filteredEmployees = employees.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDept = filterDept === 'all' || e.department === filterDept;
    const matchStatus = filterStatus === 'all' || e.status === filterStatus;
    return matchSearch && matchDept && matchStatus;
  });

  const statusColors: Record<string, string> = {
    'Active': 'badge-green',
    'On Leave': 'badge-orange',
    'Off Duty': 'bg-gray-100 text-gray-700 border-gray-200',
  };

  const deptColors: Record<string, string> = {
    'Management': 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 border-orange-200',
    'Production': 'badge-blue',
    'Engineering': 'bg-purple-50 text-purple-600 border-purple-200',
    'Sales': 'badge-green',
    'Quality': 'bg-teal-50 text-teal-600 border-teal-200',
    'Safety': 'badge-red',
    'Finance': 'bg-indigo-50 text-indigo-600 border-indigo-200',
    'Metal Workshop': 'bg-amber-50 text-amber-600 border-amber-200',
    'IT': 'bg-cyan-50 text-cyan-600 border-cyan-200',
  };

  const stats = {
    total: employees.length,
    active: employees.filter(e => e.status === 'Active').length,
    onLeave: employees.filter(e => e.status === 'On Leave').length,
    offDuty: employees.filter(e => e.status === 'Off Duty').length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="kpi-card p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-2.5 rounded-xl shadow-lg shadow-orange-500/20">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Employees</p>
              <p className="text-xl font-bold text-gray-800">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="kpi-card p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-2.5 rounded-xl shadow-lg shadow-emerald-500/20">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Active</p>
              <p className="text-xl font-bold text-emerald-600">{stats.active}</p>
            </div>
          </div>
        </div>
        <div className="kpi-card p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2.5 rounded-xl shadow-lg shadow-amber-500/20">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">On Leave</p>
              <p className="text-xl font-bold text-amber-600">{stats.onLeave}</p>
            </div>
          </div>
        </div>
        <div className="kpi-card p-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-red-400 to-red-600 p-2.5 rounded-xl shadow-lg shadow-red-500/20">
              <UserX className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Off Duty</p>
              <p className="text-xl font-bold text-red-600">{stats.offDuty}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-card rounded-2xl p-4">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-orange-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 outline-none bg-white/80 backdrop-blur-sm"
            />
          </div>
          <select
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
            className="px-4 py-2.5 border border-orange-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 outline-none bg-white/80 backdrop-blur-sm"
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 border border-orange-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 outline-none bg-white/80 backdrop-blur-sm"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Off Duty">Off Duty</option>
          </select>
          <button className="btn-futuristic px-4 py-2.5 text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Employee
          </button>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="glass-card rounded-2xl p-5 hover:shadow-lg transition-all group">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                {employee.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 truncate">{employee.name}</h4>
                <p className="text-xs text-gray-500 truncate">{employee.position}</p>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${deptColors[employee.department] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                  {employee.department}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${statusColors[employee.status]}`}>
                  {employee.status}
                </span>
              </div>
              <div className="pt-2 border-t border-orange-100/50">
                <p className="text-xs text-gray-400">ID: {employee.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="w-8 h-8 text-orange-300" />
          </div>
          <p className="text-gray-500">No employees found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
