import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, Timer, HelpCircle, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const QuizInterface = ({ questions, onComplete, language }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const translations = {
    en: {
      finished: 'Quiz Finished!',
      summary: 'You answered',
      outOf: 'out of',
      correctly: 'questions correctly.',
      finalScore: 'Final Score',
      continue: 'CONTINUE',
      question: 'Question',
      of: 'of',
      next: 'NEXT',
      finish: 'FINISH',
      quizData: [
        {
          id: 1,
          question: 'Which of these is a prime number?',
          options: ['9', '12', '17', '21'],
          correct: 2,
        },
        {
          id: 2,
          question: 'What is the capital of India?',
          options: ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'],
          correct: 1,
        },
        {
          id: 3,
          question: 'Which planet is known as the Red Planet?',
          options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
          correct: 2,
        },
      ],
    },
    hi: {
      finished: 'प्रश्नोत्तरी समाप्त!',
      summary: 'आपने',
      outOf: 'में से',
      correctly: 'प्रश्नों के सही उत्तर दिए।',
      finalScore: 'अंतिम स्कोर',
      continue: 'जारी रखें',
      question: 'प्रश्न',
      of: 'का',
      next: 'अगला',
      finish: 'समाप्त',
      quizData: [
        {
          id: 1,
          question: 'इनमें से कौन सी एक अभाज्य संख्या है?',
          options: ['9', '12', '17', '21'],
          correct: 2,
        },
        {
          id: 2,
          question: 'भारत की राजधानी क्या है?',
          options: ['मुंबई', 'नई दिल्ली', 'कोलकाता', 'चेन्नई'],
          correct: 1,
        },
        {
          id: 3,
          question: 'किस ग्रह को लाल ग्रह के रूप में जाना जाता है?',
          options: ['शुक्र', 'बृहस्पति', 'मंगल', 'शनि'],
          correct: 2,
        },
      ],
    },
  };
  const t = translations[language] || translations.en;
  const quizData = questions || t.quizData;
  const currentQ = quizData[currentIndex];
  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQ.correct) setScore(score + 1);
  };
  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };
  if (showResult) {
    return (
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-[3rem] p-12 text-center shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
        <div className="w-24 h-24 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <Award className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3">{t.finished}</h2>
        <p className="text-gray-500 dark:text-gray-400 font-bold mb-10">
          {t.summary} {score} {t.outOf} {quizData.length} {t.correctly}
        </p>
        <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl mb-10 border border-gray-100 dark:border-gray-700">
          <div className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
            {t.finalScore}
          </div>
          <div className="text-6xl font-black text-indigo-600 dark:text-indigo-400">
            {Math.round((score / quizData.length) * 100)}%
          </div>
        </div>
        <button
          onClick={() => (onComplete ? onComplete(score) : navigate('/dashboard'))}
          className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl shadow-lg shadow-indigo-200 dark:shadow-none hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-widest"
        >
          {t.continue}
        </button>
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto py-6 transition-colors duration-300">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-md border border-gray-100 dark:border-gray-700">
            <HelpCircle className="w-7 h-7 text-indigo-500" />
          </div>
          <div>
            <div className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              {t.question}
            </div>
            <div className="text-lg font-black text-gray-900 dark:text-white">
              {currentIndex + 1} {t.of} {quizData.length}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 font-black text-indigo-600 dark:text-indigo-400">
          <Timer className="w-5 h-5" />
          0:45
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-10 shadow-xl border border-gray-100 dark:border-gray-700 mb-8 transition-colors">
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 leading-tight">
          {currentQ.question}
        </h3>
        <div className="space-y-4">
          {currentQ.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = isAnswered && index === currentQ.correct;
            const isWrong = isAnswered && isSelected && index !== currentQ.correct;
            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={`w-full p-6 rounded-2xl text-left font-black text-lg transition-all border-2 flex justify-between items-center group active:scale-95 ${isAnswered ? (isCorrect ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700 dark:text-emerald-400' : isWrong ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400' : 'bg-gray-50 dark:bg-gray-900/20 border-transparent text-gray-300 dark:text-gray-600') : 'bg-white dark:bg-gray-700 border-gray-100 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-indigo-500 hover:bg-indigo-50/30'}`}
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
          className={`flex items-center gap-3 px-12 py-5 rounded-2xl font-black text-xl text-white shadow-xl transition-all uppercase tracking-widest ${isAnswered ? 'bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1' : 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed opacity-50'}`}
        >
          {currentIndex === quizData.length - 1 ? t.finish : t.next}
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
export default QuizInterface;
