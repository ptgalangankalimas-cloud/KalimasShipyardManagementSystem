import { 
  Building2, MapPin, Mail, Globe, Phone, Ship,
  Save, Shield, Bell, Palette, Database
} from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Company Profile */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center">
              <Ship className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">PT. Galangan Kalimas</h3>
              <p className="text-sm text-slate-300">Shipyard Management System Configuration</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input 
                type="text" 
                defaultValue="PT. Galangan Kalimas"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <input 
                type="text" 
                defaultValue="Shipbuilding & Ship Repair"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              Address
            </label>
            <textarea 
              defaultValue="Jl. Somber Barun No. 112 RT. 040&#10;Kelurahan Margo Mulyo&#10;Kecamatan Balikpapan Barat&#10;Kota Balikpapan, Kalimantan Timur"
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                Email
              </label>
              <input 
                type="email" 
                defaultValue="info@kalimasgroup.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-400" />
                Website
              </label>
              <input 
                type="url" 
                defaultValue="www.kalimasgroup.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                Phone
              </label>
              <input 
                type="tel" 
                defaultValue="+62 542 XXXXXX"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button className="px-6 py-2.5 bg-amber-500 text-white rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Facility Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-amber-500" />
          Facility Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 rounded-lg">
            <p className="text-sm font-medium text-gray-700">Dock A</p>
            <p className="text-xs text-gray-500 mt-1">Capacity: 5,000 DWT | Length: 80m | Width: 18m</p>
            <div className="mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '85%' }} />
            </div>
            <p className="text-xs text-gray-400 mt-1">Utilization: 85%</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg">
            <p className="text-sm font-medium text-gray-700">Dock B</p>
            <p className="text-xs text-gray-500 mt-1">Capacity: 3,000 DWT | Length: 60m | Width: 15m</p>
            <div className="mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }} />
            </div>
            <p className="text-xs text-gray-400 mt-1">Utilization: 72%</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg">
            <p className="text-sm font-medium text-gray-700">Dock C</p>
            <p className="text-xs text-gray-500 mt-1">Capacity: 2,000 DWT | Length: 45m | Width: 12m</p>
            <div className="mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: '45%' }} />
            </div>
            <p className="text-xs text-gray-400 mt-1">Utilization: 45%</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg">
            <p className="text-sm font-medium text-gray-700">Slipway 1 & 2</p>
            <p className="text-xs text-gray-500 mt-1">New Build & Conversion | Length: 100m</p>
            <div className="mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '60%' }} />
            </div>
            <p className="text-xs text-gray-400 mt-1">Combined Utilization: 60%</p>
          </div>
        </div>
      </div>

      {/* System Settings */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">System Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Two-Factor Authentication</p>
                <p className="text-xs text-gray-500">Add extra security to your account</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Email Notifications</p>
                <p className="text-xs text-gray-500">Receive alerts for project updates</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Dark Mode</p>
                <p className="text-xs text-gray-500">Switch to dark theme</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-emerald-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Auto Backup</p>
                <p className="text-xs text-gray-500">Daily automatic data backup</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-4">
        <p className="text-xs text-gray-400">
          PT. Galangan Kalimas - Shipyard Management System v1.0<br/>
          Jl. Somber Barun No. 112 RT. 040, Kel. Margo Mulyo, Kec. Balikpapan Barat, Kota Balikpapan<br/>
          Email: info@kalimasgroup.com | Web: www.kalimasgroup.com
        </p>
      </div>
    </div>
  );
}
