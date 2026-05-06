import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Download, Share2, ChevronRight, Lightbulb, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { translations } from '../data/translations';

const LessonView = ({ user, updateUser, language }) => {
  const navigate = useNavigate();
  const { subjectId, lessonId } = useParams();
  const [isSaved, setIsSaved] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const t = translations[language] || translations.en;
  const subject = subjects.find(s => s.id === subjectId) || subjects[0];

  useEffect(() => {
    // Check if lesson is already saved offline
    const savedLessons = JSON.parse(localStorage.getItem('rsq_offline_lessons') || '{}');
    if (savedLessons[`${subjectId}_${lessonId}`]) {
      setIsSaved(true);
    }
    // Check if completed
    const currentNode = user?.currentNodes?.[subjectId] || 1;
    if (currentNode > Number(lessonId)) {
      setIsCompleted(true);
    }
  }, [subjectId, lessonId, user]);

  const handleSaveOffline = () => {
    const savedLessons = JSON.parse(localStorage.getItem('rsq_offline_lessons') || '{}');
    savedLessons[`${subjectId}_${lessonId}`] = {
      subjectId,
      lessonId,
      timestamp: Date.now()
    };
    localStorage.setItem('rsq_offline_lessons', JSON.stringify(savedLessons));
    setIsSaved(true);
    alert(t.lessonSaved || "Lesson saved offline!");
  };

  const handleMarkComplete = () => {
    setIsCompleted(true);
    if (user && updateUser) {
      const currentNode = user.currentNodes?.[subjectId] || 1;
      if (currentNode <= Number(lessonId)) {
        const newProgressValue = Math.min(100, (user.progress?.[subjectId] || 0) + 10);
        updateUser({
          ...user,
          xp: (user.xp || 0) + 20,
          progress: { ...user.progress, [subjectId]: newProgressValue },
          currentNodes: { ...user.currentNodes, [subjectId]: Number(lessonId) + 1 }
        });
      }
    }
  };

  const lesson = {
    title: language === 'hi' ? `${subject.nameHi} - पाठ ${lessonId}` : `${subject.name} - Lesson ${lessonId}`,
    subject: language === 'hi' ? subject.nameHi : subject.name,
    topic: language === 'hi' ? 'बुनियादी बातें' : 'Fundamentals',
    duration: `15 ${language === 'hi' ? 'मिनट' : 'mins'}`,
    difficulty: language === 'hi' ? 'शुरुआती' : 'Beginner',
    content: [
      { type: 'text', value: language === 'hi' ? 'यह पाठ आपको इस विषय की बुनियादी बातों से परिचित कराएगा।' : 'This lesson will introduce you to the fundamentals of the subject.' },
      { type: 'highlight', value: language === 'hi' ? 'याद रखने योग्य मुख्य बिंदु: ध्यान केंद्रित करें और अभ्यास करते रहें!' : 'Key Point to remember: Stay focused and keep practicing!' },
      { type: 'text', value: language === 'hi' ? 'हम आने वाले पाठों में और अधिक जटिल विषयों पर विस्तार करेंगे।' : 'We will expand on more complex topics in the upcoming lessons.' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-6 transition-colors duration-300">
      <button
        onClick={() => navigate(`/game/${subjectId}`)}
        className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold mb-8 transition-colors uppercase text-xs tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" />
        {t.backToDashboard || 'Back'}
      </button>

      <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
        <div className={`bg-gradient-to-r ${subject.color} p-10 text-white relative`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="flex items-center gap-2 mb-4 relative z-10">
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/10">
              {lesson.subject}
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/10">
              {lesson.topic}
            </span>
          </div>
          <h1 className="text-4xl font-black mb-6 leading-tight relative z-10">{lesson.title}</h1>
          <div className="flex gap-6 text-sm font-bold opacity-90 relative z-10">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {lesson.duration}
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              {lesson.difficulty}
            </div>
          </div>
        </div>

        <div className="p-10 space-y-8">
          {lesson.content.map((item, index) => {
            if (item.type === 'text')
              return (
                <p key={index} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {item.value}
                </p>
              );
            if (item.type === 'highlight')
              return (
                <div key={index} className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-8 rounded-r-3xl transition-colors">
                  <p className="text-indigo-900 dark:text-indigo-200 font-bold italic text-lg leading-relaxed">
                    {item.value}
                  </p>
                </div>
              );
            return null;
          })}
        </div>

        <div className="px-10 py-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <button 
            onClick={handleSaveOffline}
            className={`flex items-center gap-2 px-6 py-4 bg-white dark:bg-slate-800 border ${isSaved ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'} rounded-2xl transition-all shadow-sm font-bold text-sm`}
          >
            {isSaved ? <CheckCircle2 className="w-5 h-5" /> : <Download className="w-5 h-5" />}
            {isSaved ? (t.lessonSaved || 'Saved') : (t.downloadOffline || 'Download')}
          </button>
          
          <button
            onClick={handleMarkComplete}
            disabled={isCompleted}
            className={`w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black shadow-lg hover:shadow-xl transition-all uppercase tracking-widest ${isCompleted ? 'bg-emerald-500 text-white shadow-emerald-200 dark:shadow-none' : 'bg-indigo-600 text-white shadow-indigo-200 dark:shadow-none hover:-translate-y-0.5'}`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-5 h-5" /> Completed
              </>
            ) : (
              <>
                {t.markComplete || 'Mark Complete'} <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonView;
