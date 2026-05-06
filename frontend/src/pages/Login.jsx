import React, { useState } from 'react';
import { translations } from '../data/translations';

const Login = ({ onLogin, language }) => {
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [userClass, setUserClass] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [prefLanguage, setPrefLanguage] = useState('en');

  const t = translations[language] || translations.en;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) return;
    
    if (role === 'student') {
      onLogin({ 
        role: 'student', 
        name: name.trim(), 
        class: userClass, 
        language: prefLanguage 
      });
    } else {
      onLogin({ 
        role: 'teacher', 
        name: name.trim(), 
        schoolName: schoolName 
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-10 shadow-2xl"
      >
        <h1 className="text-4xl font-black mb-8 text-slate-900 dark:text-white text-center">{t.login}</h1>
        
        <div className="flex bg-slate-100 dark:bg-slate-700 rounded-2xl p-1 mb-8">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${role === 'student' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
          >
            {t.studentRole}
          </button>
          <button
            type="button"
            onClick={() => setRole('teacher')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${role === 'teacher' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
          >
            {t.teacherRole}
          </button>
        </div>

        <div className="space-y-4">
          <label className="block text-slate-500 dark:text-slate-300 font-semibold">
            {t.name}
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-5 py-4 text-lg text-slate-900 dark:text-slate-100 outline-none focus:border-indigo-500 transition-colors"
              placeholder="e.g. Priya"
            />
          </label>

          {role === 'student' && (
            <>
              <label className="block text-slate-500 dark:text-slate-300 font-semibold">
                {t.class}
                <select
                  value={userClass}
                  onChange={(e) => setUserClass(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-5 py-4 text-lg text-slate-900 dark:text-slate-100 outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select Class</option>
                  {[6, 7, 8, 9, 10, 11, 12].map(num => (
                    <option key={num} value={num}>Class {num}</option>
                  ))}
                </select>
              </label>
              
              <label className="block text-slate-500 dark:text-slate-300 font-semibold">
                {t.languagePref}
                <select
                  value={prefLanguage}
                  onChange={(e) => setPrefLanguage(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-5 py-4 text-lg text-slate-900 dark:text-slate-100 outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                </select>
              </label>
            </>
          )}

          {role === 'teacher' && (
            <label className="block text-slate-500 dark:text-slate-300 font-semibold">
              {t.schoolName}
              <input
                required
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-5 py-4 text-lg text-slate-900 dark:text-slate-100 outline-none focus:border-indigo-500 transition-colors"
                placeholder="e.g. Rural High School"
              />
            </label>
          )}
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-2xl bg-indigo-600 text-white py-4 font-black text-lg hover:bg-indigo-700 active:scale-[0.98] transition-all"
        >
          {t.login || "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
