import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Trophy, Settings, LogOut, GraduationCap } from 'lucide-react';
const Sidebar = ({ user, onLogout, language, isOpen }) => {
  const translations = {
    en: {
      general: 'GENERAL',
      management: 'SYSTEM',
      quest: 'Dashboard',
      progress: 'Progress',
      hub: 'Library',
      panel: 'Teacher',
      analytics: 'Settings',
      logout: 'Logout',
    },
    hi: {
      general: 'सामान्य',
      management: 'प्रबंधन',
      quest: 'डैशबोर्ड',
      progress: 'प्रगति',
      hub: 'लाइब्रेरी',
      panel: 'शिक्षक',
      analytics: 'सेटिंग्स',
      logout: 'लॉगआउट',
    },
  };
  const t = translations[language] || translations.en;
  const menuItems = [
    { name: t.quest, icon: LayoutDashboard, path: '/dashboard' },
    { name: t.progress, icon: Trophy, path: '/student-stats' },
    { name: t.hub, icon: BookOpen, path: '/lessons' },
  ];
  const teacherItems = [
    { name: t.panel, icon: GraduationCap, path: '/teacher' },
    { name: t.analytics, icon: Settings, path: '/analytics' },
  ];
  return (
    <aside
      className={`shrink-0 hidden md:flex flex-col bg-white dark:bg-gray-950 border-r border-gray-100 dark:border-gray-900 transition-all duration-300 overflow-hidden sticky top-20 self-start h-[calc(100vh-80px)] ${isOpen ? 'w-64 p-6' : 'w-0 p-0'}`}
    >
      <div className="flex-1 space-y-2 min-w-[160px]">
        <div className="px-3 py-4 text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest">
          {t.general}
        </div>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${isActive ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900'}`
            }
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <span className="tracking-tight whitespace-nowrap">{item.name}</span>
          </NavLink>
        ))}
        {user?.isTeacher && (
          <>
            <div className="px-3 py-6 text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest">
              {t.management}
            </div>
            {teacherItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${isActive ? 'bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900'}`
                }
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className="tracking-tight whitespace-nowrap">{item.name}</span>
              </NavLink>
            ))}
          </>
        )}
      </div>
      <div className="pt-6 border-t border-gray-100 dark:border-gray-900">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all font-bold text-sm"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <span className="tracking-tight whitespace-nowrap">{t.logout}</span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
