import React from 'react';
import { Award } from 'lucide-react';
const Badge = ({ title, description, level, icon: Icon = Award, color = 'indigo' }) => {
  const colorMap = {
    indigo:
      'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800',
    yellow:
      'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-100 dark:border-yellow-800',
    emerald:
      'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800',
    orange:
      'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-800',
  };
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-[1.25rem] border ${colorMap[color] || colorMap.indigo} shadow-sm transition-all hover:scale-[1.03] cursor-default group`}
    >
      <div
        className={`p-2.5 rounded-xl bg-white dark:bg-gray-800 shadow-md group-hover:rotate-12 transition-transform`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-black text-sm uppercase tracking-widest leading-none mb-1">{title}</h4>
        <p className="text-[10px] font-bold opacity-70 dark:opacity-60 leading-tight">
          {description}
        </p>
        <div className="mt-2 flex gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-1 rounded-full ${i < level ? 'bg-current' : 'bg-gray-300 dark:bg-gray-700 opacity-30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Badge;
