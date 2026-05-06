import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { translations } from '../data/translations';
import { Lock, Unlock, PlayCircle, Star, ArrowLeft } from 'lucide-react';

const GameQuest = ({ user, updateUser, language }) => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const t = translations[language] || translations.en;
  
  const subject = subjects.find(s => s.id === subjectId) || subjects[0];
  const currentNode = user?.currentNodes?.[subjectId] || 1;
  const nodes = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen p-6 md:p-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 font-bold uppercase tracking-widest text-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.backToDashboard || 'Back to Dashboard'}
        </button>

        <div className={`p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r ${subject.color} text-white shadow-2xl`}>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            {language === 'hi' ? subject.nameHi : subject.name}
          </h1>
          <p className="text-white/80 font-medium text-lg md:text-xl max-w-xl leading-relaxed">
            {language === 'hi' ? subject.descriptionHi : subject.description}
          </p>
        </div>

        <div className="relative py-12 px-6">
          <div className="absolute top-0 bottom-0 left-12 w-1 bg-slate-200 dark:bg-slate-800 ml-[1.125rem]"></div>
          
          <div className="space-y-12 relative z-10">
            {nodes.map((node) => {
              const isUnlocked = node <= currentNode;
              const isCurrent = node === currentNode;
              
              return (
                <div key={node} className="flex items-center gap-8 group">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg border-4 transition-transform ${isCurrent ? 'scale-125' : ''} ${
                    isUnlocked 
                      ? 'bg-indigo-600 border-indigo-200 dark:border-indigo-900 text-white' 
                      : 'bg-slate-200 dark:bg-slate-800 border-slate-100 dark:border-slate-900 text-slate-400 dark:text-slate-600'
                  }`}>
                    {isUnlocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                  
                  <div 
                    onClick={() => {
                      if (!isUnlocked) return;
                      // Alternate between lesson and quiz
                      if (node % 2 !== 0) {
                        navigate(`/lesson/${subjectId}/${node}`);
                      } else {
                        navigate(`/quiz/${subjectId}`);
                      }
                    }}
                    className={`flex-1 p-6 md:p-8 rounded-3xl border transition-all duration-300 ${
                      isUnlocked 
                        ? `bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-sm hover:shadow-xl cursor-pointer ${isCurrent ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-900' : ''}`
                        : 'bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 opacity-70 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className={`text-xs font-black uppercase tracking-widest mb-2 ${isUnlocked ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-600'}`}>
                          {node % 2 !== 0 ? t.lessons || 'Lesson' : t.quests || 'Quiz'} {node}
                        </div>
                        <h3 className={`text-xl md:text-2xl font-black ${isUnlocked ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-500'}`}>
                          {node % 2 !== 0 ? 'Learn the Concepts' : 'Test your Knowledge'}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500 rounded-xl font-bold text-sm shrink-0">
                        <Star className="w-4 h-4 fill-current" />
                        +{(node * 10)} {t.xp}
                      </div>
                    </div>
                    {isUnlocked && (
                      <div className="mt-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                        <PlayCircle className="w-5 h-5" />
                        {node % 2 !== 0 ? 'Start Lesson' : 'Start Quiz'}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameQuest;
