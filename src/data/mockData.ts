export interface Project {
  id: string;
  name: string;
  client: string;
  type: 'New Build' | 'Repair' | 'Docking' | 'Maintenance' | 'Conversion';
  status: 'Planning' | 'In Progress' | 'On Hold' | 'Completed' | 'Delivered';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  dock: string;
  classification: string;
}

export interface SalesOrder {
  id: string;
  orderNumber: string;
  client: string;
  vesselName: string;
  vesselType: string;
  orderDate: string;
  deliveryDate: string;
  amount: number;
  status: 'Quotation' | 'Negotiation' | 'Confirmed' | 'In Production' | 'Delivered' | 'Cancelled';
  paymentStatus: 'Pending' | 'Partial' | 'Paid';
  classification: string;
}

export interface Employee {
  id: string;
  name: string;
  department: string;
  position: string;
  status: 'Active' | 'On Leave' | 'Off Duty';
}

export const projects: Project[] = [
  { id: 'P001', name: 'Tugboat TB-3500 "MV Kalimas Jaya"', client: 'PT. Samudra Angkut Nusantara', type: 'New Build', status: 'In Progress', progress: 68, startDate: '2026-01-15', endDate: '2026-06-30', budget: 18500000000, dock: 'Slipway 1', classification: 'BKI' },
  { id: 'P002', name: 'Barge 300ft "KB Kalimantan Star"', client: 'PT. Coal Transport Mandiri', type: 'New Build', status: 'In Progress', progress: 42, startDate: '2026-02-01', endDate: '2026-07-15', budget: 12000000000, dock: 'Slipway 2', classification: 'BKI' },
  { id: 'P003', name: 'MV Balikpapan Raya - Annual Docking', client: 'PT. Pelayaran Bahtera Timur', type: 'Docking', status: 'In Progress', progress: 85, startDate: '2026-03-01', endDate: '2026-04-15', budget: 2800000000, dock: 'Dock A', classification: 'BKI' },
  { id: 'P004', name: 'LCT-120 "LCT Mahakam Prima"', client: 'PT. Mahakam Logistics', type: 'New Build', status: 'In Progress', progress: 25, startDate: '2026-03-15', endDate: '2026-10-30', budget: 22000000000, dock: 'Slipway 1', classification: 'BKI/Class NK' },
  { id: 'P005', name: 'MV Meratus Carrier - Engine Overhaul', client: 'PT. Meratus Line', type: 'Repair', status: 'Completed', progress: 100, startDate: '2026-01-05', endDate: '2026-02-20', budget: 1500000000, dock: 'Dock B', classification: 'BKI' },
  { id: 'P006', name: 'Tugboat TB-2400 "TB Kaltim Express"', client: 'PT. Timur Jaya Shipping', type: 'New Build', status: 'On Hold', progress: 55, startDate: '2026-02-15', endDate: '2026-05-10', budget: 14000000000, dock: 'Slipway 2', classification: 'BKI' },
  { id: 'P007', name: 'MV Sungai Express - Sandblasting & Painting', client: 'PT. Sungai Transport Indonesia', type: 'Maintenance', status: 'In Progress', progress: 90, startDate: '2026-03-10', endDate: '2026-04-20', budget: 950000000, dock: 'Dock A', classification: 'BKI' },
  { id: 'P008', name: 'Barge 270ft "KB Borneo Carrier"', client: 'PT. Borneo Mineral Resources', type: 'New Build', status: 'Planning', progress: 8, startDate: '2026-04-01', endDate: '2026-11-30', budget: 11000000000, dock: 'Slipway 2', classification: 'BKI' },
  { id: 'P009', name: 'MV Nusantara Tanker - Hull Repair', client: 'PT. Nusantara Oil Transport', type: 'Repair', status: 'In Progress', progress: 60, startDate: '2026-03-20', endDate: '2026-05-25', budget: 3200000000, dock: 'Dock B', classification: 'BKI/Class BV' },
  { id: 'P010', name: 'Tugboat TB-4000 "TB Aditya Prima"', client: 'PT. Aditya Marine Indonesia', type: 'New Build', status: 'In Progress', progress: 15, startDate: '2026-04-01', endDate: '2026-12-15', budget: 24000000000, dock: 'Slipway 1', classification: 'BKI/Class NK' },
];

export const salesOrders: SalesOrder[] = [
  { id: 'S001', orderNumber: 'SO-2026-001', client: 'PT. Samudra Angkut Nusantara', vesselName: 'TB-3500 Kalimas Jaya', vesselType: 'Tugboat', orderDate: '2026-01-10', deliveryDate: '2026-06-30', amount: 18500000000, status: 'In Production', paymentStatus: 'Partial', classification: 'BKI' },
  { id: 'S002', orderNumber: 'SO-2026-002', client: 'PT. Coal Transport Mandiri', vesselName: 'KB Kalimantan Star', vesselType: 'Barge 300ft', orderDate: '2026-01-25', deliveryDate: '2026-07-15', amount: 12000000000, status: 'In Production', paymentStatus: 'Partial', classification: 'BKI' },
  { id: 'S003', orderNumber: 'SO-2026-003', client: 'PT. Pelayaran Bahtera Timur', vesselName: 'MV Balikpapan Raya', vesselType: 'Bulk Carrier', orderDate: '2026-02-15', deliveryDate: '2026-04-15', amount: 2800000000, status: 'In Production', paymentStatus: 'Partial', classification: 'BKI' },
  { id: 'S004', orderNumber: 'SO-2026-004', client: 'PT. Mahakam Logistics', vesselName: 'LCT Mahakam Prima', vesselType: 'LCT-120', orderDate: '2026-03-01', deliveryDate: '2026-10-30', amount: 22000000000, status: 'In Production', paymentStatus: 'Partial', classification: 'BKI/Class NK' },
  { id: 'S005', orderNumber: 'SO-2026-005', client: 'PT. Meratus Line', vesselName: 'MV Meratus Carrier', vesselType: 'Container Ship', orderDate: '2025-12-20', deliveryDate: '2026-02-20', amount: 1500000000, status: 'Delivered', paymentStatus: 'Paid', classification: 'BKI' },
  { id: 'S006', orderNumber: 'SO-2026-006', client: 'PT. Timur Jaya Shipping', vesselName: 'TB Kaltim Express', vesselType: 'Tugboat', orderDate: '2026-02-10', deliveryDate: '2026-05-10', amount: 14000000000, status: 'In Production', paymentStatus: 'Partial', classification: 'BKI' },
  { id: 'S007', orderNumber: 'SO-2026-007', client: 'PT. Sungai Transport Indonesia', vesselName: 'MV Sungai Express', vesselType: 'Ferry', orderDate: '2026-03-05', deliveryDate: '2026-04-20', amount: 950000000, status: 'In Production', paymentStatus: 'Partial', classification: 'BKI' },
  { id: 'S008', orderNumber: 'SO-2026-008', client: 'PT. Borneo Mineral Resources', vesselName: 'KB Borneo Carrier', vesselType: 'Barge 270ft', orderDate: '2026-03-20', deliveryDate: '2026-11-30', amount: 11000000000, status: 'Confirmed', paymentStatus: 'Pending', classification: 'BKI' },
  { id: 'S009', orderNumber: 'SO-2026-009', client: 'PT. Nusantara Oil Transport', vesselName: 'MV Nusantara Tanker', vesselType: 'Oil Tanker', orderDate: '2026-03-15', deliveryDate: '2026-05-25', amount: 3200000000, status: 'In Production', paymentStatus: 'Partial', classification: 'BKI/Class BV' },
  { id: 'S010', orderNumber: 'SO-2026-010', client: 'PT. Aditya Marine Indonesia', vesselName: 'TB Aditya Prima', vesselType: 'Tugboat', orderDate: '2026-03-25', deliveryDate: '2026-12-15', amount: 24000000000, status: 'In Production', paymentStatus: 'Partial', classification: 'BKI/Class NK' },
  { id: 'S011', orderNumber: 'SO-2026-011', client: 'PT. Indo Marine Logistic', vesselName: 'TB-3000 Indo Star', vesselType: 'Tugboat', orderDate: '2026-04-01', deliveryDate: '2026-09-30', amount: 16000000000, status: 'Negotiation', paymentStatus: 'Pending', classification: 'BKI' },
  { id: 'S012', orderNumber: 'SO-2026-012', client: 'PT. Borneo Coal Mining', vesselName: 'KB Borneo Prima', vesselType: 'Barge 330ft', orderDate: '2026-04-05', deliveryDate: '2026-12-30', amount: 13500000000, status: 'Quotation', paymentStatus: 'Pending', classification: 'BKI' },
];

export const employees: Employee[] = [
  { id: 'E001', name: 'Aditya Topani', department: 'Management', position: 'President Director', status: 'Active' },
  { id: 'E002', name: 'Inayah Annisa', department: 'Management', position: 'Direktur Legal', status: 'Active' },
  { id: 'E003', name: 'Harmonis', department: 'Management', position: 'Direktur Operasional', status: 'Active' },
  { id: 'E004', name: 'Febrina Anindita', department: 'Management', position: 'Direktur Keuangan', status: 'Active' },
  { id: 'E005', name: 'Ahmad Hidayat', department: 'Production', position: 'Production Manager', status: 'Active' },
  { id: 'E006', name: 'Budi Santoso', department: 'Engineering', position: 'Chief Engineer', status: 'Active' },
  { id: 'E007', name: 'Cahyo Wibowo', department: 'Production', position: 'Welding Supervisor', status: 'Active' },
  { id: 'E008', name: 'Dedi Kurniawan', department: 'Quality', position: 'QC Inspector (ISO 9001)', status: 'Active' },
  { id: 'E009', name: 'Eko Prasetyo', department: 'Production', position: 'Hull Fitter Senior', status: 'On Leave' },
  { id: 'E010', name: 'Fajar Ramadhan', department: 'Engineering', position: 'Mechanical Engineer', status: 'Active' },
  { id: 'E011', name: 'Gunawan Putra', department: 'Sales', position: 'Sales Manager', status: 'Active' },
  { id: 'E012', name: 'Hendra Wijaya', department: 'Production', position: 'Pipe Fitter', status: 'Active' },
  { id: 'E013', name: 'Irfan Maulana', department: 'Safety', position: 'HSE Officer', status: 'Active' },
  { id: 'E014', name: 'Joko Susilo', department: 'Metal Workshop', position: 'CNC Operator', status: 'Off Duty' },
  { id: 'E015', name: 'Kurniawan Adi', department: 'Engineering', position: 'Electrical Engineer', status: 'Active' },
  { id: 'E016', name: 'Lukman Hakim', department: 'Production', position: 'Rigger', status: 'Active' },
  { id: 'E017', name: 'Muhammad Rizky', department: 'Production', position: 'Sandblaster & Painter', status: 'Active' },
  { id: 'E018', name: 'Nurul Hidayah', department: 'Finance', position: 'Finance Staff', status: 'Active' },
  { id: 'E019', name: 'Oscar Pratama', department: 'IT', position: 'NexusBuild Platform Admin', status: 'Active' },
  { id: 'E020', name: 'Putri Handayani', department: 'Sales', position: 'Sales Executive', status: 'Active' },
];

export const monthlyRevenue = [
  { month: 'Jan', revenue: 4250000000, target: 4000000000 },
  { month: 'Feb', revenue: 3780000000, target: 4000000000 },
  { month: 'Mar', revenue: 5100000000, target: 4500000000 },
  { month: 'Apr', revenue: 4650000000, target: 4500000000 },
  { month: 'May', revenue: 3900000000, target: 4500000000 },
  { month: 'Jun', revenue: 5500000000, target: 5000000000 },
];

export const productionByType = [
  { name: 'New Build', value: 5, color: '#3b82f6' },
  { name: 'Repair', value: 2, color: '#10b981' },
  { name: 'Docking', value: 1, color: '#f59e0b' },
  { name: 'Maintenance', value: 2, color: '#8b5cf6' },
];

export const dockUtilization = [
  { name: 'Dock A', capacity: 100, used: 85 },
  { name: 'Dock B', capacity: 100, used: 72 },
  { name: 'Slipway 1', capacity: 100, used: 92 },
  { name: 'Slipway 2', capacity: 100, used: 65 },
];

export const managementTeam = [
  { name: 'Aditya Topani', position: 'President Director', department: 'Executive' },
  { name: 'Inayah Annisa', position: 'Direktur Legal', department: 'Legal & Compliance' },
  { name: 'Harmonis', position: 'Direktur Operasional', department: 'Operations' },
  { name: 'Febrina Anindita', position: 'Direktur Keuangan', department: 'Finance' },
];

export const companyInfo = {
  name: 'Kalimas Group',
  legalName: 'PT. Galangan Kalimas',
  tagline: 'Kualitas Maritim Tanpa Kompromi',
  address: 'Jl. Somber RT. 040 No. 112, Kelurahan Margo Mulyo, Kec. Balikpapan Barat, Kota Balikpapan, Kalimantan Timur, 76133, Indonesia',
  phone: '+62 (0) 811-541-164',
  email: 'info@kalimasgroup.com',
  website: 'www.kalimasgroup.com',
  shipsServed: '800+',
  rating: '4.9',
  certifications: ['ISO 9001', 'BKI', 'Class NK', 'Class BV'],
  facilities: ['Dock A', 'Dock B', 'Slipway 1', 'Slipway 2', 'Metal Workshop', 'Fresh Water Plant', 'Industrial Gas Production', 'Warehouse', '6-Story Office Building'],
  services: ['Pembangunan Kapal Baru (Tugboat, Barge, LCT)', 'Perbaikan & Pemeliharaan', 'Docking', 'Sandblasting & Painting', 'Metal Workshop', 'Fresh Water Supply', 'Industrial Gas Production'],
  platform: 'NexusBuild.id (AI & Escrow Account)',
};

export const products = [
  {
    id: 'P01',
    name: 'Fresh Water Supply',
    description: 'Mandiri sumber air bersih berkualitas tinggi untuk kebutuhan operasional kapal dan industri.',
    capacity: '500 m³/hari',
    category: 'Utility',
  },
  {
    id: 'P02',
    name: 'Gas Industry Filling Product',
    description: 'Produksi gas industri mandiri: Oksigen, Acetylene, Argon untuk pengelasan dan pemotongan metal.',
    capacity: '5+ Jenis Gas',
    category: 'Industrial',
  },
  {
    id: 'P03',
    name: 'Fuel HSD Supply Product',
    description: 'Penyediaan bahan bakar High Speed Diesel (HSD) berkualitas untuk kapal dan kendaraan industri.',
    capacity: '100,000 Liter',
    category: 'Energy',
  },
  {
    id: 'P04',
    name: 'Jetty Facilities',
    description: 'Fasilitas jetty modern untuk sandar kapal dengan kapasitas besar dan sistem mooring modern.',
    capacity: '150+ meter',
    category: 'Infrastructure',
  },
  {
    id: 'P05',
    name: 'Workshop',
    description: 'Metal workshop dengan pembubutan hingga 40 meter, mesin CNC modern, dan tenaga ahli berpengalaman.',
    capacity: '15+ Mesin',
    category: 'Manufacturing',
  },
  {
    id: 'P06',
    name: 'Warehouse',
    description: 'Pergudangan modern dengan sistem inventori terkomputerisasi dan keamanan 24/7.',
    capacity: '5,000 m²',
    category: 'Storage',
  },
];
