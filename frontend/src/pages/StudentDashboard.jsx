import React, { useState } from 'react';
import { Users, PlusCircle, BarChart3, FileText, Search, MoreVertical, Clock } from 'lucide-react';
const TeacherDashboard = ({ language }) => {
  const [activeTab, setActiveTab] = useState('students');
  const translations = {
    en: {
      title: 'Teacher Console',
      subtitle: 'Manage your classes and track student performance.',
      tabs: {
        students: 'Student Directory',
        content: 'Lesson Builder',
        analytics: 'Class Analytics',
      },
      search: 'Search students...',
      enroll: 'Enroll Student',
      table: {
        name: 'Student Name',
        class: 'Class',
        mastery: 'Mastery',
        lastActive: 'Last Active',
        score: 'Score',
      },
      content: {
        quizTitle: 'Create New Quiz',
        quizDesc: 'Design an interactive quest for your students with images, timers, and rewards.',
        studyTitle: 'Upload Study Material',
        studyDesc: 'Share PDF lessons, diagrams, or reading materials with your classes.',
      },
    },
    hi: {
      title: 'शिक्षक कंसोल',
      subtitle: 'अपनी कक्षाओं का प्रबंधन करें और छात्र प्रदर्शन को ट्रैक करें।',
      tabs: { students: 'छात्र निर्देशिका', content: 'पाठ निर्माता', analytics: 'कक्षा विश्लेषण' },
      search: 'छात्रों को खोजें...',
      enroll: 'छात्र नामांकन',
      table: {
        name: 'छात्र का नाम',
        class: 'कक्षा',
        mastery: 'महारत',
        lastActive: 'पिछली सक्रियता',
        score: 'स्कोर',
      },
      content: {
        quizTitle: 'नई प्रश्नोत्तरी बनाएं',
        quizDesc:
          'छवियों, टाइमर और पुरस्कारों के साथ अपने छात्रों के लिए एक इंटरैक्टिव खोज डिजाइन करें।',
        studyTitle: 'अध्ययन सामग्री अपलोड करें',
        studyDesc: 'अपनी कक्षाओं के साथ पीडीएफ पाठ, चित्र या पठन सामग्री साझा करें।',
      },
    },
  };
  const t = translations[language] || translations.en;
  const students = [
    {
      id: 1,
      name: 'Aarav Sharma',
      class: '8th B',
      progress: 85,
      lastActive: language === 'hi' ? '2 घंटे पहले' : '2 hrs ago',
      score: 920,
    },
    {
      id: 2,
      name: 'Ishita Gupta',
      class: '8th B',
      progress: 62,
      lastActive: language === 'hi' ? '1 दिन पहले' : '1 day ago',
      score: 750,
    },
    {
      id: 3,
      name: 'Vihaan Verma',
      class: '8th B',
      progress: 98,
      lastActive: language === 'hi' ? '10 मिनट पहले' : '10 mins ago',
      score: 1100,
    },
    {
      id: 4,
      name: 'Ananya Iyer',
      class: '8th B',
      progress: 45,
      lastActive: language === 'hi' ? '3 दिन पहले' : '3 days ago',
      score: 450,
    },
  ];
  return (
    <div className="py-6 space-y-8 transition-colors duration-300">
      <div>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
          {t.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">{t.subtitle}</p>
      </div>
      <div className="flex gap-4 border-b border-gray-100 dark:border-gray-700">
        {[
          { id: 'students', label: t.tabs.students, icon: Users },
          { id: 'content', label: t.tabs.content, icon: PlusCircle },
          { id: 'analytics', label: t.tabs.analytics, icon: BarChart3 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 font-bold text-sm transition-all border-b-2 ${activeTab === tab.id ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === 'students' && (
        <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-colors">
          <div className="p-6 border-b border-gray-50 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder={t.search}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-transparent rounded-2xl text-sm font-bold focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all dark:text-white"
              />
            </div>
            <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:shadow-lg shadow-indigo-200 transition-all active:scale-95">
              <PlusCircle className="w-4 h-4" />
              {t.enroll}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 dark:bg-gray-900/50 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">{t.table.name}</th>
                  <th className="px-6 py-4">{t.table.class}</th>
                  <th className="px-6 py-4">{t.table.mastery}</th>
                  <th className="px-6 py-4">{t.table.lastActive}</th>
                  <th className="px-6 py-4">{t.table.score}</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400 flex items-center justify-center font-black shadow-sm">
                          {student.name.charAt(0)}
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">
                          {student.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-bold text-gray-500 dark:text-gray-400">
                      {student.class}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 w-24 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-400 to-teal-500"
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400">
                          {student.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 dark:text-gray-500">
                        <Clock className="w-3 h-3" />
                        {student.lastActive}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-black text-gray-900 dark:text-white">
                      {student.score}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {activeTab === 'content' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center group hover:border-indigo-500 dark:hover:border-indigo-400 transition-all cursor-pointer shadow-sm hover:shadow-xl">
            <div className="w-20 h-20 rounded-3xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-inner">
              <PlusCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
              {t.content.quizTitle}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs font-medium leading-relaxed">
              {t.content.quizDesc}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center group hover:border-emerald-500 dark:hover:border-emerald-400 transition-all cursor-pointer shadow-sm hover:shadow-xl">
            <div className="w-20 h-20 rounded-3xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all shadow-inner">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
              {t.content.studyTitle}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs font-medium leading-relaxed">
              {t.content.studyDesc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default TeacherDashboard;
