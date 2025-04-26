import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '../constants/menu';

/**
 * Sidebar Layout，統一側邊選單框架。
 */
const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 bg-gray-900 text-white flex flex-col py-8 px-4">
        <div className="font-bold text-lg mb-8 text-center">{import.meta.env.VITE_APP_TITLE || 'Frontend Demo'}</div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {MENU_ITEMS.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded hover:bg-gray-700 transition-colors ${location.pathname === item.path ? 'bg-gray-700' : ''}`}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-50 min-h-screen">{children}</main>
    </div>
  );
};

export default SidebarLayout;
