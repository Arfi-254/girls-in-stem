import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navigationItems = [
    { key: '/', label: 'Role Models' },
    { key: '/resources', label: 'STEM Resources' }
  ];

  return (
    <nav className="bg-black/30 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <Link to="/" className="flex items-center space-x-2">
            <Star className="w-8 h-8 text-pink-400" />
            <span className="text-xl font-bold text-white">Girls in STEM</span>
          </Link>
          
          <div className="flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.key}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  location.pathname === item.key 
                    ? 'bg-pink-500 text-white shadow-lg' 
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
                aria-current={location.pathname === item.key ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;