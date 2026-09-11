import { useState } from 'react';
import { 
  Ship, Calendar, DollarSign, MapPin, Filter, 
  Plus, Search, ChevronDown, AlertCircle, CheckCircle2, Zap
} from 'lucide-react';
import { projects } from '../data/mockData';

const formatCurrency = (value: number) => {
  if (value >= 1000000000) return `Rp ${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `Rp ${(value / 1000000).toFixed(0)}M`;
  return `Rp ${value.toLocaleString()}`;
};

export default function Production() {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(p => {
    const matchStatus = filterStatus === 'all' || p.status === filterStatus;
    const matchType = filterType === 'all' || p.type === filterType;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchType && matchSearch;
  });

  const statusColors: Record<string, string> = {
    'Planning': 'bg-gray-100 text-gray-700 border-gray-200',
    'In Progress': 'badge-orange',
    'On Hold': 'badge-red',
    'Completed': 'badge-green',
    'Delivered': 'badge-blue',
  };

  const typeColors: Record<string, string> = {
    'Repair': 'badge-green',
    'New Build': 'badge-orange',
    'Conversion': 'badge-blue',
    'Maintenance': 'badge-red',
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <div className="space-y-6">
      {/* Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {[
          { label: 'Total Projects', value: projects.length, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'In Progress', value: projects.filter(p => p.status === 'In Progress').length, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Planning', value: projects.filter(p => p.status === 'Planning').length, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'On Hold', value: projects.filter(p => p.status === 'On Hold').length, color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Completed', value: projects.filter(p => p.status === 'Completed').length, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className={`kpi-card p-4`}>
            <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color} mt-1`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="glass-card rounded-2xl p-4">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
            <input
              type="text"
              placeholder="Search projects or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-orange-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 outline-none bg-white/80 backdrop-blur-sm transition-all"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 border border-orange-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 outline-none bg-white/80 backdrop-blur-sm"
          >
            <option value="all">All Status</option>
            <option value="Planning">Planning</option>
            <option value="In Progress">In Progress</option>
            <option value="On Hold">On Hold</option>
            <option value="Completed">Completed</option>
            <option value="Delivered">Delivered</option>
          </select>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2.5 border border-orange-100 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 outline-none bg-white/80 backdrop-blur-sm"
          >
            <option value="all">All Types</option>
            <option value="Repair">Repair</option>
            <option value="New Build">New Build</option>
            <option value="Conversion">Conversion</option>
            <option value="Maintenance">Maintenance</option>
          </select>
          <button className="btn-futuristic px-4 py-2.5 text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects List */}
        <div className="lg:col-span-2 space-y-3">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`glass-card rounded-2xl p-5 cursor-pointer transition-all ${
                selectedProject === project.id ? 'ring-2 ring-orange-400/50 glow-subtle' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs font-mono text-gray-400">{project.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${typeColors[project.type]}`}>
                      {project.type}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      {project.classification}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800">{project.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{project.client}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold gradient-text">{formatCurrency(project.budget)}</p>
                  <p className="text-xs text-gray-400">{project.dock}</p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs font-bold text-gray-700">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r transition-all ${
                        project.progress >= 75 ? 'from-emerald-400 to-emerald-500' :
                        project.progress >= 50 ? 'from-orange-400 to-orange-500' :
                        project.progress >= 25 ? 'from-amber-400 to-orange-400' :
                        'from-red-400 to-red-500'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Timeline</p>
                  <p className="text-xs text-gray-600">{project.startDate} → {project.endDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Panel */}
        <div className="glass-card rounded-2xl p-5 h-fit sticky top-6">
          {selectedProjectData ? (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-orange-400 to-red-500 p-2 rounded-lg">
                  <Ship className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Project Details</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">Project Name</p>
                  <p className="text-sm font-medium text-gray-800 mt-1">{selectedProjectData.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Client</p>
                    <p className="text-sm text-gray-700 mt-1">{selectedProjectData.client}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Type</p>
                    <p className="text-sm text-gray-700 mt-1">{selectedProjectData.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Start Date</p>
                    <p className="text-sm text-gray-700 mt-1">{selectedProjectData.startDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">End Date</p>
                    <p className="text-sm text-gray-700 mt-1">{selectedProjectData.endDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Budget</p>
                    <p className="text-sm font-bold gradient-text mt-1">{formatCurrency(selectedProjectData.budget)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Location</p>
                    <p className="text-sm text-gray-700 mt-1">{selectedProjectData.dock}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-400 uppercase font-semibold">Classification</p>
                    <p className="text-sm font-mono text-gray-700 mt-1 bg-gray-100 px-2 py-1 rounded">{selectedProjectData.classification}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-2">Progress</p>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${
                        selectedProjectData.progress >= 75 ? 'from-emerald-400 to-emerald-500' :
                        selectedProjectData.progress >= 50 ? 'from-orange-400 to-orange-500' :
                        'from-red-400 to-red-500'
                      }`}
                      style={{ width: `${selectedProjectData.progress}%` }}
                    />
                  </div>
                  <p className="text-right text-sm font-bold gradient-text mt-1">{selectedProjectData.progress}%</p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold mb-2">Status</p>
                  <span className={`text-sm px-3 py-1 rounded-full font-medium border ${statusColors[selectedProjectData.status]}`}>
                    {selectedProjectData.status}
                  </span>
                </div>

                <div className="pt-3 border-t border-orange-100/50 space-y-2">
                  <button className="w-full btn-futuristic px-4 py-2.5 text-sm">
                    Update Progress
                  </button>
                  <button className="w-full px-4 py-2.5 border border-orange-200 text-orange-700 rounded-xl text-sm font-medium hover:bg-orange-50 transition-colors">
                    View Work Orders
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Ship className="w-8 h-8 text-orange-300" />
              </div>
              <p className="text-sm text-gray-500">Select a project to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
