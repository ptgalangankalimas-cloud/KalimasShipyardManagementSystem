import { useState } from 'react';
import { 
  Users, Search, Plus, Mail, Phone, MapPin,
  Filter, UserCheck, UserX, Clock
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
    'Active': 'bg-emerald-100 text-emerald-700',
    'On Leave': 'bg-amber-100 text-amber-700',
    'Off Duty': 'bg-gray-100 text-gray-700',
  };

  const deptColors: Record<string, string> = {
    'Management': 'bg-amber-50 text-amber-700',
    'Production': 'bg-blue-50 text-blue-600',
    'Engineering': 'bg-purple-50 text-purple-600',
    'Sales': 'bg-emerald-50 text-emerald-600',
    'Quality': 'bg-teal-50 text-teal-600',
    'Safety': 'bg-red-50 text-red-600',
    'Finance': 'bg-indigo-50 text-indigo-600',
    'Metal Workshop': 'bg-orange-50 text-orange-600',
    'IT': 'bg-cyan-50 text-cyan-600',
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
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2.5 rounded-lg">
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Employees</p>
              <p className="text-xl font-bold text-gray-800">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-50 p-2.5 rounded-lg">
              <UserCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Active</p>
              <p className="text-xl font-bold text-emerald-600">{stats.active}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-amber-50 p-2.5 rounded-lg">
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500">On Leave</p>
              <p className="text-xl font-bold text-amber-600">{stats.onLeave}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2.5 rounded-lg">
              <UserX className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Off Duty</p>
              <p className="text-xl font-bold text-gray-600">{stats.offDuty}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>
          <select
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Off Duty">Off Duty</option>
          </select>
          <button className="px-4 py-2.5 bg-amber-500 text-white rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Employee
          </button>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {employee.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 truncate">{employee.name}</h4>
                <p className="text-xs text-gray-500 truncate">{employee.position}</p>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${deptColors[employee.department] || 'bg-gray-50 text-gray-600'}`}>
                  {employee.department}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[employee.status]}`}>
                  {employee.status}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-50">
                <p className="text-xs text-gray-400">ID: {employee.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No employees found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
