import React from 'react';
import { Trophy, Target, Zap, TrendingUp, Award, Calendar, Flame, Star } from 'lucide-react';
import Badge from '../components/Badge';
const StudentDashboard = ({ user, language }) => {
  const translations = {
    en: {
      title: 'Student Progress',
      subtitle: 'Keep up the great work,',
      streak: 'Day Streak!',
      stats: {
        xp: 'Total XP',
        rank: 'Global Rank',
        quests: 'Quests Finished',
        lessons: 'Lessons Learnt',
      },
      graph: 'Activity Graph',
      days: 'Last 7 Days',
      day: 'Day',
      recent: 'Recent Achievements',
      viewAll: 'VIEW ALL BADGES',
      badges: {
        wizard: { title: 'Maths Wizard', desc: 'Completed Level 5 with 100% score' },
        explorer: { title: 'Science Explorer', desc: 'Finished the Physics module' },
        master: { title: 'Code Master', desc: 'First Python quest completed' },
      },
    },
    hi: {
      title: 'छात्र प्रगति',
      subtitle: 'अच्छा काम जारी रखें,',
      streak: 'दिनों का सिलसिला!',
      stats: { xp: 'कुल XP', rank: 'वैश्विक रैंक', quests: 'पूर्ण खोज', lessons: 'सीखे गए पाठ' },
      graph: 'गतिविधि ग्राफ',
      days: 'पिछले 7 दिन',
      day: 'दिन',
      recent: 'हाल की उपलब्धियां',
      viewAll: 'सभी बैज देखें',
      badges: {
        wizard: { title: 'गणित जादूगर', desc: '100% स्कोर के साथ लेवल 5 पूरा किया' },
        explorer: { title: 'विज्ञान अन्वेषक', desc: 'भौतिकी मॉड्यूल समाप्त किया' },
        master: { title: 'कोड मास्टर', desc: 'पहला पायथन क्वेस्ट पूरा किया' },
      },
    },
  };
  const t = translations[language] || translations.en;
  const recentBadges = [
    {
      title: t.badges.wizard.title,
      description: t.badges.wizard.desc,
      level: 2,
      color: 'yellow',
      icon: Star,
    },
    {
      title: t.badges.explorer.title,
      description: t.badges.explorer.desc,
      level: 1,
      color: 'indigo',
      icon: Award,
    },
    {
      title: t.badges.master.title,
      description: t.badges.master.desc,
      level: 1,
      color: 'emerald',
      icon: Zap,
    },
  ];
  return (
    <div className="space-y-8 py-6 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            {t.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">
            {t.subtitle} {user.name}!
          </p>
        </div>
        <div className="flex items-center gap-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-2xl border border-orange-200 dark:border-orange-800">
          <Flame className="w-6 h-6 fill-current" />
          <div className="font-black">5 {t.streak}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: t.stats.xp,
            value: user.xp,
            icon: Star,
            color: 'text-yellow-500',
            bg: 'bg-yellow-50 dark:bg-yellow-900/20',
          },
          {
            label: t.stats.rank,
            value: '#142',
            icon: Trophy,
            color: 'text-indigo-500',
            bg: 'bg-indigo-50 dark:bg-indigo-900/20',
          },
          {
            label: t.stats.quests,
            value: '24',
            icon: Target,
            color: 'text-emerald-500',
            bg: 'bg-emerald-50 dark:bg-emerald-900/20',
          },
          {
            label: t.stats.lessons,
            value: '12',
            icon: TrendingUp,
            color: 'text-orange-500',
            bg: 'bg-orange-50 dark:bg-orange-900/20',
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-4 transition-colors"
          >
            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
              <div className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-black text-gray-900 dark:text-white">{t.graph}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-bold">
              <Calendar className="w-4 h-4" />
              {t.days}
            </div>
          </div>
          <div className="h-48 flex items-end justify-between gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 55].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div
                  className="w-full bg-indigo-100 dark:bg-indigo-900/40 rounded-t-lg group-hover:bg-indigo-500 transition-all duration-500"
                  style={{ height: `${height}%` }}
                ></div>
                <div className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-tighter">
                  {t.day} {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors">
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6">{t.recent}</h3>
          <div className="space-y-4">
            {recentBadges.map((badge, i) => (
              <Badge key={i} {...badge} isDarkMode={language === 'hi'} />
            ))}
          </div>
          <button className="w-full mt-6 py-4 text-xs font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all uppercase tracking-widest">
            {t.viewAll}
          </button>
        </div>
      </div>
    </div>
  );
};
export default StudentDashboard;
