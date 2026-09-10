export interface Project {
  id: string;
  name: string;
  client: string;
  type: 'Repair' | 'New Build' | 'Conversion' | 'Maintenance';
  status: 'Planning' | 'In Progress' | 'On Hold' | 'Completed' | 'Delivered';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  dock: string;
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
}

export interface Employee {
  id: string;
  name: string;
  department: string;
  position: string;
  status: 'Active' | 'On Leave' | 'Off Duty';
}

export const projects: Project[] = [
  { id: 'P001', name: 'MV Ocean Spirit - Hull Repair', client: 'PT. Samudra Transport', type: 'Repair', status: 'In Progress', progress: 72, startDate: '2026-01-15', endDate: '2026-04-30', budget: 2500000000, dock: 'Dock A' },
  { id: 'P002', name: 'MV Balikpapan Jaya - Engine Overhaul', client: 'PT. Kalimantan Shipping', type: 'Repair', status: 'In Progress', progress: 45, startDate: '2026-02-01', endDate: '2026-05-15', budget: 1800000000, dock: 'Dock B' },
  { id: 'P003', name: 'Tug Boat TB-200 New Build', client: 'PT. Mining Resources', type: 'New Build', status: 'In Progress', progress: 30, startDate: '2026-03-01', endDate: '2026-09-30', budget: 8500000000, dock: 'Slipway 1' },
  { id: 'P004', name: 'Barge Barge-300 Conversion', client: 'PT. Coal Indonesia', type: 'Conversion', status: 'Planning', progress: 10, startDate: '2026-04-01', endDate: '2026-08-15', budget: 3200000000, dock: 'Slipway 2' },
  { id: 'P005', name: 'MV Meratus Express - Annual Survey', client: 'PT. Meratus Line', type: 'Maintenance', status: 'Completed', progress: 100, startDate: '2026-01-05', endDate: '2026-02-20', budget: 750000000, dock: 'Dock A' },
  { id: 'P006', name: 'MV Kaltim Carrier - Propeller Repair', client: 'PT. Timur Logistics', type: 'Repair', status: 'On Hold', progress: 55, startDate: '2026-02-15', endDate: '2026-04-10', budget: 980000000, dock: 'Dock C' },
  { id: 'P007', name: 'Ferry MV Mahakam - Interior Refit', client: 'PT. Sungai Transport', type: 'Conversion', status: 'In Progress', progress: 88, startDate: '2025-11-01', endDate: '2026-03-30', budget: 1200000000, dock: 'Dock B' },
  { id: 'P008', name: 'Patrol Boat PB-150 New Build', client: 'Kodiklatal', type: 'New Build', status: 'In Progress', progress: 18, startDate: '2026-03-15', endDate: '2026-12-30', budget: 12000000000, dock: 'Slipway 1' },
];

export const salesOrders: SalesOrder[] = [
  { id: 'S001', orderNumber: 'SO-2026-001', client: 'PT. Samudra Transport', vesselName: 'MV Ocean Spirit', vesselType: 'Bulk Carrier', orderDate: '2026-01-10', deliveryDate: '2026-04-30', amount: 2500000000, status: 'In Production', paymentStatus: 'Partial' },
  { id: 'S002', orderNumber: 'SO-2026-002', client: 'PT. Kalimantan Shipping', vesselName: 'MV Balikpapan Jaya', vesselType: 'Container Ship', orderDate: '2026-01-25', deliveryDate: '2026-05-15', amount: 1800000000, status: 'In Production', paymentStatus: 'Partial' },
  { id: 'S003', orderNumber: 'SO-2026-003', client: 'PT. Mining Resources', vesselName: 'TB-200', vesselType: 'Tug Boat', orderDate: '2026-02-20', deliveryDate: '2026-09-30', amount: 8500000000, status: 'In Production', paymentStatus: 'Partial' },
  { id: 'S004', orderNumber: 'SO-2026-004', client: 'PT. Coal Indonesia', vesselName: 'Barge-300', vesselType: 'Barge', orderDate: '2026-03-10', deliveryDate: '2026-08-15', amount: 3200000000, status: 'Confirmed', paymentStatus: 'Pending' },
  { id: 'S005', orderNumber: 'SO-2026-005', client: 'PT. Meratus Line', vesselName: 'MV Meratus Express', vesselType: 'Container Ship', orderDate: '2025-12-20', deliveryDate: '2026-02-20', amount: 750000000, status: 'Delivered', paymentStatus: 'Paid' },
  { id: 'S006', orderNumber: 'SO-2026-006', client: 'PT. Timur Logistics', vesselName: 'MV Kaltim Carrier', vesselType: 'Bulk Carrier', orderDate: '2026-02-10', deliveryDate: '2026-04-10', amount: 980000000, status: 'In Production', paymentStatus: 'Partial' },
  { id: 'S007', orderNumber: 'SO-2026-007', client: 'PT. Sungai Transport', vesselName: 'MV Mahakam', vesselType: 'Ferry', orderDate: '2025-10-15', deliveryDate: '2026-03-30', amount: 1200000000, status: 'In Production', paymentStatus: 'Partial' },
  { id: 'S008', orderNumber: 'SO-2026-008', client: 'Kodiklatal', vesselName: 'PB-150', vesselType: 'Patrol Boat', orderDate: '2026-03-01', deliveryDate: '2026-12-30', amount: 12000000000, status: 'In Production', paymentStatus: 'Partial' },
  { id: 'S009', orderNumber: 'SO-2026-009', client: 'PT. Nusantara Oil', vesselName: 'MT Balikpapan', vesselType: 'Oil Tanker', orderDate: '2026-04-01', deliveryDate: '2026-07-30', amount: 4500000000, status: 'Negotiation', paymentStatus: 'Pending' },
  { id: 'S010', orderNumber: 'SO-2026-010', client: 'PT. Indo Marine', vesselName: 'MV Indo Star', vesselType: 'General Cargo', orderDate: '2026-04-05', deliveryDate: '2026-08-20', amount: 2800000000, status: 'Quotation', paymentStatus: 'Pending' },
];

export const employees: Employee[] = [
  { id: 'E001', name: 'Ahmad Hidayat', department: 'Production', position: 'Production Manager', status: 'Active' },
  { id: 'E002', name: 'Budi Santoso', department: 'Engineering', position: 'Chief Engineer', status: 'Active' },
  { id: 'E003', name: 'Cahyo Wibowo', department: 'Production', position: 'Welding Supervisor', status: 'Active' },
  { id: 'E004', name: 'Dedi Kurniawan', department: 'Quality', position: 'QC Inspector', status: 'Active' },
  { id: 'E005', name: 'Eko Prasetyo', department: 'Production', position: 'Hull Fitter', status: 'On Leave' },
  { id: 'E006', name: 'Fajar Ramadhan', department: 'Engineering', position: 'Mechanical Engineer', status: 'Active' },
  { id: 'E007', name: 'Gunawan Putra', department: 'Sales', position: 'Sales Manager', status: 'Active' },
  { id: 'E008', name: 'Hendra Wijaya', department: 'Production', position: 'Pipe Fitter', status: 'Active' },
  { id: 'E009', name: 'Irfan Maulana', department: 'Safety', position: 'HSE Officer', status: 'Active' },
  { id: 'E010', name: 'Joko Susilo', department: 'Production', position: 'Painter', status: 'Off Duty' },
  { id: 'E011', name: 'Kurniawan Adi', department: 'Engineering', position: 'Electrical Engineer', status: 'Active' },
  { id: 'E012', name: 'Lukman Hakim', department: 'Production', position: 'Rigger', status: 'Active' },
];

export const monthlyRevenue = [
  { month: 'Jan', revenue: 3250000000, target: 3000000000 },
  { month: 'Feb', revenue: 2780000000, target: 3000000000 },
  { month: 'Mar', revenue: 4100000000, target: 3500000000 },
  { month: 'Apr', revenue: 3650000000, target: 3500000000 },
  { month: 'May', revenue: 2900000000, target: 3500000000 },
  { month: 'Jun', revenue: 4500000000, target: 4000000000 },
];

export const productionByType = [
  { name: 'Repair', value: 4, color: '#3b82f6' },
  { name: 'New Build', value: 2, color: '#10b981' },
  { name: 'Conversion', value: 2, color: '#f59e0b' },
  { name: 'Maintenance', value: 1, color: '#8b5cf6' },
];

export const dockUtilization = [
  { name: 'Dock A', capacity: 100, used: 85 },
  { name: 'Dock B', capacity: 100, used: 72 },
  { name: 'Dock C', capacity: 100, used: 45 },
  { name: 'Slipway 1', capacity: 100, used: 90 },
  { name: 'Slipway 2', capacity: 100, used: 30 },
];
