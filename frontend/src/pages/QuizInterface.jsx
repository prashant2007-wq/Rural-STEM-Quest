import { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, HelpCircle, Award, Sparkles, Star } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { quizData as allQuizData } from '../data/quizData';
import { translations } from '../data/translations';

const QuizInterface = ({ user, updateUser, language }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [earnedXp, setEarnedXp] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const t = translations[language] || translations.en;
  
  // Default to maths if not found
  const subjectQuizzes = allQuizData[id] || allQuizData.maths;
  const currentQ = subjectQuizzes[currentIndex];

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQ.answer) {
      setScore(score + 1);
      setEarnedXp(earnedXp + (currentQ.xp || 10));
    }
  };

  const handleNext = () => {
    if (currentIndex < subjectQuizzes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      // Update progress and xp
      if (user && updateUser) {
        const newProgressValue = Math.min(100, (user.progress?.[id] || 0) + 20);
        const newCurrentNode = (user.currentNodes?.[id] || 1) + 1;
        updateUser({
          ...user,
          xp: (user.xp || 0) + earnedXp,
          progress: { ...user.progress, [id]: newProgressValue },
          currentNodes: { ...user.currentNodes, [id]: newCurrentNode }
        });
      }
    }
  };

  if (showResult) {
    const isPerfect = score === subjectQuizzes.length;
    return (
      <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-[3rem] p-12 text-center shadow-2xl border border-slate-100 dark:border-slate-700 transition-all duration-300">
        <div className="w-24 h-24 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative">
          <Award className="w-12 h-12" />
          {isPerfect && (
            <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
          )}
        </div>
        
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-3">
          {t.finished || 'Quiz Finished!'}
        </h2>
        
        <p className="text-slate-500 dark:text-slate-400 font-bold mb-6">
          You answered {score} out of {subjectQuizzes.length} questions correctly.
        </p>

        {isPerfect && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-2xl mb-8 animate-fadeIn">
            <div className="text-yellow-600 dark:text-yellow-400 font-black text-lg flex items-center justify-center gap-2">
              <Star className="w-5 h-5 fill-current" /> Perfect Score Badge Earned!
            </div>
          </div>
        )}

        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl mb-10 border border-slate-100 dark:border-slate-700">
          <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
            XP Earned
          </div>
          <div className="text-6xl font-black text-indigo-600 dark:text-indigo-400">
            +{earnedXp}
          </div>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/game/${id}`)}
            className="flex-1 py-5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-2xl font-black shadow-sm hover:shadow-md transition-all uppercase tracking-widest text-sm"
          >
            {t.backToDashboard || 'Back to Map'}
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex-1 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-lg shadow-indigo-200 dark:shadow-none hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-widest text-sm"
          >
            {t.continue || 'Continue'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-6 transition-colors duration-300">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-md border border-slate-100 dark:border-slate-700">
            <HelpCircle className="w-7 h-7 text-indigo-500" />
          </div>
          <div>
            <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              {t.question || 'Question'}
            </div>
            <div className="text-lg font-black text-slate-900 dark:text-white">
              {currentIndex + 1} of {subjectQuizzes.length}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 shadow-xl border border-slate-100 dark:border-slate-700 mb-8 transition-colors">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 leading-tight">
          {language === 'hi' ? currentQ.questionHi : currentQ.question}
        </h3>
        <div className="space-y-4">
          {currentQ.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = isAnswered && index === currentQ.answer;
            const isWrong = isAnswered && isSelected && index !== currentQ.answer;
            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={`w-full p-6 rounded-2xl text-left font-black text-lg transition-all border-2 flex justify-between items-center group active:scale-95 ${
                  isAnswered 
                    ? (isCorrect 
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700 dark:text-emerald-400' 
                        : isWrong 
                          ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400' 
                          : 'bg-slate-50 dark:bg-slate-900/20 border-transparent text-slate-300 dark:text-slate-600') 
                    : 'bg-white dark:bg-slate-700 border-slate-100 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:bg-indigo-50/30'
                }`}
              >
                {option}
                {isCorrect && <CheckCircle2 className="w-7 h-7 text-emerald-500 animate-bounce" />}
                {isWrong && <XCircle className="w-7 h-7 text-red-500 animate-shake" />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className={`flex items-center gap-3 px-12 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition-all uppercase tracking-widest ${isAnswered ? 'bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1' : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-50'}`}
        >
          {currentIndex === subjectQuizzes.length - 1 ? (t.finish || 'Finish') : (t.next || 'Next')}
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default QuizInterface;
