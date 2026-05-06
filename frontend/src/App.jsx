import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GameQuest from './pages/GameQuest';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import LessonView from './pages/LessonView';
import QuizInterface from './pages/QuizInterface';
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    const storedUser = localStorage.getItem('rsq_user');
    if (storedUser) setUser(JSON.parse(storedUser));
    const savedTheme = localStorage.getItem('rsq_theme');
    const dark = savedTheme === 'dark';
    setIsDarkMode(dark);
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    const savedLang = localStorage.getItem('rsq_lang');
    if (savedLang) setLanguage(savedLang);
    setLoading(false);
  }, []);
  const handleLogin = (userData) => {
    const newUser = {
      ...userData,
      id: Date.now().toString(),
      level: 1,
      xp: 0,
      progress: { maths: 0, science: 0, cs: 0 },
      currentNodes: { maths: 1, science: 1, cs: 1 },
      isTeacher: userData.role === 'teacher'
    };
    if (userData.language) {
      setLanguage(userData.language);
      localStorage.setItem('rsq_lang', userData.language);
    }
    localStorage.setItem('rsq_user', JSON.stringify(newUser));
    setUser(newUser);
  };
  const handleLogout = () => {
    localStorage.removeItem('rsq_user');
    setUser(null);
  };
  const handleUpdateUser = (u) => {
    setUser(u);
    localStorage.setItem('rsq_user', JSON.stringify(u));
  };
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('rsq_theme', next ? 'dark' : 'light');
      if (next) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      return next;
    });
  };
  const toggleLanguage = () =>
    setLanguage((prev) => {
      const next = prev === 'en' ? 'hi' : 'en';
      localStorage.setItem('rsq_lang', next);
      return next;
    });
  if (loading)
    return (
      <div className="min-h-screen w-full flex items-center justify-center font-bold text-lg text-indigo-600 animate-pulse tracking-[0.2em]">
        LOADING...
      </div>
    );
  const AppContent = () => {
    const location = useLocation();
    const isInnerPage = user && location.pathname !== '/' && location.pathname !== '/login';
    return (
      <div className="min-h-screen w-full flex flex-col transition-colors duration-300">
        <Navbar
          user={user}
          onLogout={handleLogout}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          language={language}
          toggleLanguage={toggleLanguage}
          isInnerPage={isInnerPage}
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen((o) => !o)}
        />
        <div className={`flex flex-1 ${isInnerPage ? 'pt-20' : 'pt-0'}`}>
          {isInnerPage && (
            <Sidebar user={user} onLogout={handleLogout} language={language} isOpen={sidebarOpen} />
          )}
          <main
            className={`flex-1 w-full min-h-screen transition-all duration-300 ${isInnerPage ? 'p-6 lg:p-10' : 'p-0'}`}
          >
            <Routes>
              <Route path="/" element={<Home language={language} />} />
              <Route
                path="/login"
                element={
                  user ? (
                    user.isTeacher ? <Navigate to="/teacher" /> : <Navigate to="/dashboard" />
                  ) : (
                    <Login onLogin={handleLogin} language={language} />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  !user ? <Navigate to="/login" /> : <Dashboard user={user} language={language} />
                }
              />
              <Route
                path="/student-stats"
                element={
                  !user ? (
                    <Navigate to="/login" />
                  ) : (
                    <StudentDashboard user={user} language={language} />
                  )
                }
              />
              <Route
                path="/teacher"
                element={
                  !user ? <Navigate to="/login" /> : <TeacherDashboard language={language} />
                }
              />
              <Route
                path="/lesson/:subjectId/:lessonId"
                element={!user ? <Navigate to="/login" /> : <LessonView user={user} updateUser={handleUpdateUser} language={language} />}
              />
              <Route
                path="/game/:subjectId"
                element={
                  !user ? (
                    <Navigate to="/login" />
                  ) : (
                    <GameQuest user={user} updateUser={handleUpdateUser} language={language} />
                  )
                }
              />
              <Route
                path="/quiz/:id"
                element={!user ? <Navigate to="/login" /> : <QuizInterface user={user} updateUser={handleUpdateUser} language={language} />}
              />
            </Routes>
          </main>
        </div>
      </div>
    );
  };
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;
