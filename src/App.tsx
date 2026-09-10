import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Production from './pages/Production';
import Sales from './pages/Sales';
import Management from './pages/Management';
import Employees from './pages/Employees';
import Settings from './pages/Settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'production':
        return <Production />;
      case 'sales':
        return <Sales />;
      case 'management':
        return <Management />;
      case 'employees':
        return <Employees />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
