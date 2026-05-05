import React from 'react';
import { ArrowLeft, BookOpen, Download, Share2, ChevronRight, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const LessonView = ({ language }) => {
  const navigate = useNavigate();
  const translations = {
    en: {
      back: 'Back to Learning Hub',
      practice: 'PRACTICE NOW',
      duration: 'Duration',
      difficulty: 'Difficulty',
      title: 'Understanding Geometric Shapes',
      topic: 'Geometry',
      subject: 'Maths',
      content: [
        'Geometry is a branch of mathematics that studies the sizes, shapes, positions, angles, and dimensions of things.',
        'Common 2D Shapes: Circle, Square, Triangle',
        'A polygon is any 2-dimensional shape formed with straight lines. Triangles, quadrilaterals, pentagons, and hexagons are all examples of polygons.',
        'In this lesson, we will explore the properties of circles and how they differ from polygons.',
      ],
    },
    hi: {
      back: 'लर्निंग हब पर वापस जाएं',
      practice: 'अभी अभ्यास करें',
      duration: 'अवधि',
      difficulty: 'कठिनाई',
      title: 'ज्यामितीय आकृतियों को समझना',
      topic: 'ज्यामिति',
      subject: 'गणित',
      content: [
        'ज्यामिति गणित की एक शाखा है जो चीजों के आकार, आकृति, स्थिति, कोण और आयामों का अध्ययन करती है।',
        'सामान्य 2D आकृतियाँ: वृत्त, वर्ग, त्रिभुज',
        'बहुभुज कोई भी 2-आयामी आकृति है जो सीधी रेखाओं से बनी होती है। त्रिभुज, चतुर्भुज, पंचभुज और षट्भुज बहुभुज के उदाहरण हैं।',
        'इस पाठ में, हम वृत्तों के गुणों और वे बहुभुजों से कैसे भिन्न हैं, इसका पता लगाएंगे।',
      ],
    },
  };
  const t = translations[language] || translations.en;
  const lesson = {
    title: t.title,
    subject: t.subject,
    topic: t.topic,
    duration: `15 ${language === 'hi' ? 'मिनट' : 'mins'}`,
    difficulty: language === 'hi' ? 'शुरुआती' : 'Beginner',
    content: [
      { type: 'text', value: t.content[0] },
      {
        type: 'image',
        value:
          'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
        caption: t.content[1],
      },
      { type: 'highlight', value: t.content[2] },
      { type: 'text', value: t.content[3] },
    ],
  };
  return (
    <div className="max-w-4xl mx-auto py-8 transition-colors duration-300">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold mb-8 transition-colors px-4 md:px-0"
      >
        <ArrowLeft className="w-5 h-5" />
        {t.back}
      </button>
      <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-10 text-white relative">
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
                <p
                  key={index}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium"
                >
                  {item.value}
                </p>
              );
            if (item.type === 'highlight')
              return (
                <div
                  key={index}
                  className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-8 rounded-r-3xl transition-colors"
                >
                  <p className="text-indigo-900 dark:text-indigo-200 font-bold italic text-lg leading-relaxed">
                    {item.value}
                  </p>
                </div>
              );
            if (item.type === 'image')
              return (
                <figure key={index} className="space-y-4">
                  <img
                    src={item.value}
                    alt={item.caption}
                    className="w-full h-96 object-cover rounded-[2rem] shadow-xl border-4 border-white dark:border-gray-700"
                  />
                  <figcaption className="text-center text-sm text-gray-400 dark:text-gray-500 font-bold italic">
                    {item.caption}
                  </figcaption>
                </figure>
              );
            return null;
          })}
        </div>
        <div className="px-10 py-8 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <div className="flex gap-3">
            <button className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-500 dark:text-gray-400 hover:text-indigo-600 hover:border-indigo-100 dark:hover:border-indigo-500 transition-all shadow-sm">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-500 dark:text-gray-400 hover:text-indigo-600 hover:border-indigo-100 dark:hover:border-indigo-500 transition-all shadow-sm">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={() => navigate('/game/maths')}
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black shadow-lg shadow-indigo-200 dark:shadow-none hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-widest"
          >
            {t.practice}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default LessonView;
