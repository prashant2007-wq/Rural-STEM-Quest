import React, { useState, useEffect } from 'react';
import { Users, PlusCircle, BarChart3, FileText, Search, MoreVertical, Clock, Save } from 'lucide-react';
const TeacherDashboard = ({ language }) => {
  const [activeTab, setActiveTab] = useState('students');
  const [newQuestion, setNewQuestion] = useState({
    subject: 'maths',
    question: '',
    options: ['', '', '', ''],
    correct: 0,
    xp: 10
  });
  const [savedQuestions, setSavedQuestions] = useState([]);

  useEffect(() => {
    const qs = JSON.parse(localStorage.getItem('rsq_teacher_questions') || '[]');
    setSavedQuestions(qs);
  }, []);

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
        quizDesc: 'छवियों, टाइमर और पुरस्कारों के साथ अपने छात्रों के लिए एक इंटरैक्टिव खोज डिजाइन करें।',
        studyTitle: 'अध्ययन सामग्री अपलोड करें',
        studyDesc: 'अपनी कक्षाओं के साथ पीडीएफ पाठ, चित्र या पठन सामग्री साझा करें।',
      },
    },
  };
  const t = translations[language] || translations.en;
  
  const students = [
    { id: 1, name: 'Aarav Sharma', class: '8th B', progress: 85, lastActive: language === 'hi' ? '2 घंटे पहले' : '2 hrs ago', score: 920 },
    { id: 2, name: 'Ishita Gupta', class: '8th B', progress: 62, lastActive: language === 'hi' ? '1 दिन पहले' : '1 day ago', score: 750 },
    { id: 3, name: 'Vihaan Verma', class: '8th B', progress: 98, lastActive: language === 'hi' ? '10 मिनट पहले' : '10 mins ago', score: 1100 },
    { id: 4, name: 'Ananya Iyer', class: '8th B', progress: 45, lastActive: language === 'hi' ? '3 दिन पहले' : '3 days ago', score: 450 },
  ];

  const handleSaveQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion.question.trim()) return;
    
    const updated = [...savedQuestions, { ...newQuestion, id: Date.now() }];
    setSavedQuestions(updated);
    localStorage.setItem('rsq_teacher_questions', JSON.stringify(updated));
    
    setNewQuestion({
      subject: 'maths',
      question: '',
      options: ['', '', '', ''],
      correct: 0,
      xp: 10
    });
    alert('Question saved successfully!');
  };

  return (
    <div className="py-6 space-y-8 transition-colors duration-300">
      <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          {t.title}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">{t.subtitle}</p>
      </div>
      
      <div className="flex gap-4 border-b border-slate-200 dark:border-slate-700">
        {[
          { id: 'students', label: t.tabs.students, icon: Users },
          { id: 'content', label: t.tabs.content, icon: PlusCircle },
          { id: 'analytics', label: t.tabs.analytics, icon: BarChart3 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 font-bold text-sm transition-all border-b-2 ${activeTab === tab.id ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>
      
      {activeTab === 'students' && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-colors">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
              <input
                type="text"
                placeholder={t.search}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border-transparent rounded-2xl text-sm font-bold focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all dark:text-white"
              />
            </div>
            <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:shadow-lg shadow-indigo-200 transition-all active:scale-95">
              <PlusCircle className="w-4 h-4" />
              {t.enroll}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 dark:bg-slate-900/50 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">{t.table.name}</th>
                  <th className="px-6 py-4">{t.table.class}</th>
                  <th className="px-6 py-4">{t.table.mastery}</th>
                  <th className="px-6 py-4">{t.table.lastActive}</th>
                  <th className="px-6 py-4">{t.table.score}</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400 flex items-center justify-center font-black shadow-sm">
                          {student.name.charAt(0)}
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {student.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-bold text-slate-500 dark:text-slate-400">
                      {student.class}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
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
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 dark:text-slate-500">
                        <Clock className="w-3 h-3" />
                        {student.lastActive}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-black text-slate-900 dark:text-white">
                      {student.score}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">
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
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Add Quiz Question</h2>
            <p className="text-slate-500 dark:text-slate-400">Create new custom questions for your students.</p>
          </div>
          
          <form onSubmit={handleSaveQuestion} className="space-y-6 max-w-2xl">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
              <select 
                value={newQuestion.subject}
                onChange={e => setNewQuestion({...newQuestion, subject: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              >
                <option value="maths">Mathematics</option>
                <option value="science">Science</option>
                <option value="cs">Computer Science</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Question Text</label>
              <textarea 
                required
                value={newQuestion.question}
                onChange={e => setNewQuestion({...newQuestion, question: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none min-h-[100px]"
                placeholder="Enter the question here..."
              ></textarea>
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Options</label>
              {newQuestion.options.map((opt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <input 
                    type="radio" 
                    name="correctOption"
                    checked={newQuestion.correct === idx}
                    onChange={() => setNewQuestion({...newQuestion, correct: idx})}
                    className="w-5 h-5 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                  />
                  <input 
                    required
                    type="text"
                    value={opt}
                    onChange={e => {
                      const newOpts = [...newQuestion.options];
                      newOpts[idx] = e.target.value;
                      setNewQuestion({...newQuestion, options: newOpts});
                    }}
                    className={`flex-1 bg-slate-50 dark:bg-slate-900 border ${newQuestion.correct === idx ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none`}
                    placeholder={`Option ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
            
            <button type="submit" className="flex items-center justify-center gap-2 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl transition-all shadow-md active:scale-95 uppercase tracking-widest text-sm mt-4">
              <Save className="w-4 h-4" /> Save Question
            </button>
          </form>
          
          {savedQuestions.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">Recently Added Questions ({savedQuestions.length})</h3>
              <div className="space-y-3">
                {savedQuestions.slice().reverse().slice(0, 3).map((q) => (
                  <div key={q.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1">{q.subject}</div>
                    <div className="font-medium text-slate-900 dark:text-white">{q.question}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">42</div>
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Total Students</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-black text-emerald-500 dark:text-emerald-400 mb-2">78%</div>
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Avg. Mastery</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-black text-orange-500 dark:text-orange-400 mb-2">12</div>
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Quizzes Active</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8">Subject Performance</h3>
            <div className="space-y-8">
              {[
                { name: 'Mathematics', score: 85, color: 'bg-indigo-500' },
                { name: 'Science', score: 72, color: 'bg-emerald-500' },
                { name: 'Computer Science', score: 91, color: 'bg-purple-500' }
              ].map(sub => (
                <div key={sub.name}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">{sub.name}</span>
                    <span className="font-black text-slate-900 dark:text-white">{sub.score}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div className={`${sub.color} h-4 rounded-full`} style={{ width: `${sub.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Weak Topics to Address</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold rounded-xl border border-red-100 dark:border-red-800/50">Algebra Basics</span>
              <span className="px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 font-bold rounded-xl border border-orange-100 dark:border-orange-800/50">Chemical Bonds</span>
              <span className="px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 font-bold rounded-xl border border-yellow-100 dark:border-yellow-800/50">HTML Forms</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
