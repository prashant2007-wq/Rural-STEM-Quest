import React from 'react';

const translations = {
  en: {
    greeting: 'Welcome back',
    message: 'Choose a path and continue your learning journey.',
  },
  hi: {
    greeting: 'वापसी पर स्वागत है',
    message: 'एक मार्ग चुनें और अपनी सीखने की यात्रा जारी रखें।',
  },
};

const Dashboard = ({ user, language }) => {
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-200 dark:border-slate-700 p-12 shadow-2xl">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4">{t.greeting}, {user?.name || 'Learner'}!</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">{t.message}</p>
      </div>
    </div>
  );
};

export default Dashboard;
