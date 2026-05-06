import React from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { translations } from '../data/translations';
import { Trophy, Star, Target, Flame } from 'lucide-react';

const Dashboard = ({ user, language }) => {
  const t = translations[language] || translations.en;

  return (
    <div className="space-y-8 py-6 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.welcome}, {user?.name || 'Student'}!
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mt-1">
            Ready to conquer new quests today?
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center bg-yellow-50 dark:bg-yellow-900/20 px-6 py-3 rounded-2xl border border-yellow-100 dark:border-yellow-800">
            <div className="text-yellow-600 dark:text-yellow-400 font-black text-xl flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" /> {user?.xp || 0}
            </div>
            <div className="text-[10px] uppercase font-bold text-yellow-600/70 dark:text-yellow-500/70 tracking-widest">{t.xp}</div>
          </div>
          <div className="flex flex-col items-center justify-center bg-indigo-50 dark:bg-indigo-900/20 px-6 py-3 rounded-2xl border border-indigo-100 dark:border-indigo-800">
            <div className="text-indigo-600 dark:text-indigo-400 font-black text-xl flex items-center gap-2">
              <Trophy className="w-5 h-5" /> {user?.level || 1}
            </div>
            <div className="text-[10px] uppercase font-bold text-indigo-600/70 dark:text-indigo-500/70 tracking-widest">{t.level}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((sub) => {
          const progress = user?.progress?.[sub.id] || 0;
          return (
            <div key={sub.id} className={`p-8 rounded-3xl shadow-sm border ${sub.bgColor.replace('bg-', 'border-').replace('/30', '')} transition-transform hover:-translate-y-1`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white dark:bg-slate-950/50 shadow-sm`}>
                  <Target className={`w-7 h-7 ${sub.textColor.split(' ')[0]}`} />
                </div>
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
                  {progress}% Done
                </div>
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                {language === 'hi' ? sub.nameHi : sub.name}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">
                {language === 'hi' ? sub.descriptionHi : sub.description}
              </p>
              
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-6 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${sub.color} h-3 rounded-full transition-all duration-1000`} 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              <Link
                to={`/game/${sub.id}`}
                className={`block text-center w-full py-4 rounded-2xl font-black text-white bg-gradient-to-r ${sub.color} shadow-lg hover:shadow-xl transition-all active:scale-[0.98] uppercase tracking-widest text-sm`}
              >
                {t.continueLearning}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
