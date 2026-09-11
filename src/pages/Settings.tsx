import { 
  Building2, MapPin, Mail, Globe, Phone, Anchor,
  Save, Shield, Bell, Palette, Database, Award,
  CheckCircle2, Users, Wrench, Droplets, Flame
} from 'lucide-react';
import { companyInfo, managementTeam } from '../data/mockData';

export default function Settings() {
  return (
    <div className="space-y-6 max-w-5xl">
      {/* Company Profile */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="relative z-10 flex items-center gap-4">
            <img 
              src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
              alt="Kalimas Group Logo" 
              className="w-20 h-20 object-contain rounded-lg bg-white/10 p-1"
            />
            <div>
              <h3 className="text-xl font-bold text-white">Kalimas Group</h3>
              <p className="text-sm text-amber-400 font-medium">PT. Galangan Kalimas</p>
              <p className="text-xs text-slate-300 italic mt-0.5">"{companyInfo.tagline}"</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">ISO 9001</span>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-medium">BKI Certified</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-medium">NexusBuild.id</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input 
                type="text" 
                defaultValue={companyInfo.name}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Legal Entity</label>
              <input 
                type="text" 
                defaultValue={companyInfo.legalName}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
            <input 
              type="text" 
              defaultValue={companyInfo.tagline}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm italic focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              Address
            </label>
            <textarea 
              defaultValue={companyInfo.address}
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
                defaultValue={companyInfo.email}
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
                defaultValue={companyInfo.website}
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
                defaultValue={companyInfo.phone}
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

      {/* Management Team */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-amber-500" />
          Tim Manajemen
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {managementTeam.map((member, index) => (
            <div key={index} className="p-4 border border-gray-100 rounded-lg text-center hover:border-amber-200 hover:bg-amber-50/30 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <p className="text-sm font-semibold text-gray-800">{member.name}</p>
              <p className="text-xs text-amber-600 font-medium mt-0.5">{member.position}</p>
              <p className="text-xs text-gray-400 mt-1">{member.department}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services & Facilities */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-amber-500" />
          Layanan & Fasilitas Galangan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-blue-500" />
              Layanan Maritim Terpadu
            </h4>
            <div className="space-y-2">
              {companyInfo.services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Facilities */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-purple-500" />
              Fasilitas Galangan
            </h4>
            <div className="space-y-2">
              {companyInfo.facilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          Sertifikasi & Klasifikasi
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {companyInfo.certifications.map((cert, index) => (
            <div key={index} className="p-4 border border-gray-100 rounded-lg text-center bg-gradient-to-b from-white to-gray-50">
              <Shield className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-800">{cert}</p>
              <p className="text-xs text-gray-400 mt-0.5">Certified</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-cyan-50 border border-cyan-100 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="bg-cyan-100 p-2 rounded-lg">
              <Database className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-cyan-800">Platform NexusBuild.id</p>
              <p className="text-xs text-cyan-600 mt-0.5">
                Galangan pertama di Indonesia dengan teknologi AI & Escrow Account. 
                Memungkinkan monitoring progress, transparansi biaya, dan keamanan dana klien secara real-time.
              </p>
            </div>
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
                <p className="text-sm font-medium text-gray-700">NexusBuild Notifications</p>
                <p className="text-xs text-gray-500">Receive alerts for project progress updates</p>
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
      <div className="text-center py-6">
        <img 
          src="https://kalimasgroup.com/wp-content/uploads/2026/01/c307756b-17d7-4330-b110-21c5b4e9550c_2-removebg-preview.png" 
          alt="Kalimas Group Logo" 
          className="w-24 h-24 object-contain mx-auto mb-3"
        />
        <p className="text-xs text-gray-400">
          Kalimas Group — PT. Galangan Kalimas<br/>
          {companyInfo.address}<br/>
          {companyInfo.phone} | {companyInfo.email} | {companyInfo.website}<br/>
          <span className="text-amber-500 font-medium mt-1 inline-block">Kualitas Maritim Tanpa Kompromi</span>
        </p>
      </div>
    </div>
  );
}
