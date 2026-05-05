import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, LogOut, User, Sun, Moon, Languages, Menu } from 'lucide-react';
const Navbar = ({
  user,
  onLogout,
  toggleTheme,
  isDarkMode,
  language,
  toggleLanguage,
  isInnerPage,
  sidebarOpen,
  toggleSidebar,
}) => {
  const translations = {
    en: { player: 'Profile', lang: 'HI' },
    hi: { player: 'प्रोफ़ाइल', lang: 'EN' },
  };
  const t = translations[language];
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
      <div
        className={`px-6 md:px-12 py-4 flex justify-between items-center backdrop-blur-md border-b h-20 ${isDarkMode ? 'bg-gray-950/90 border-gray-800' : 'bg-white/90 border-gray-100'}`}
      >
        <div className="flex items-center gap-4">
          {isInnerPage && (
            <button
              onClick={toggleSidebar}
              title="Toggle Sidebar"
              className={`p-2 rounded-xl transition-all hover:scale-105 active:scale-95 ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-6 transition-all shadow-md">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span
              className={`font-bold text-xl tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Rural<span className="text-indigo-600">Quest</span>
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={toggleLanguage}
            className={`text-[10px] font-bold tracking-widest transition-all hover:text-indigo-600 uppercase ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
          >
            {t.lang}
          </button>
          <button
            onClick={toggleTheme}
            className={`transition-all hover:scale-110 active:scale-95 ${isDarkMode ? 'text-gray-500 hover:text-yellow-400' : 'text-gray-400 hover:text-gray-700'}`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}
                >
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <div className="hidden sm:block text-left leading-none">
                  <div
                    className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
                  >
                    {t.player}
                  </div>
                  <div
                    className={`font-bold text-xs tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    {user.name}
                  </div>
                </div>
              </div>
              <button
                onClick={onLogout}
                className={`transition-all hover:text-red-500 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs tracking-widest transition-all shadow-md active:scale-95 uppercase"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
