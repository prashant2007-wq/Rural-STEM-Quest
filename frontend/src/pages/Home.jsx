import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Terminal,
  Target,
  Shield,
} from 'lucide-react';
const Home = ({ language }) => {
  const translations = {
    en: {
      tag: 'The New Era of Rural Education',
      heroTitle1: 'Master STEM.',
      heroTitle2: 'Conquer Realms.',
      heroSubtitle: 'A refined gamified experience for the next generation of rural students.',
      startBtn: 'BEGIN QUEST',
      features: {
        battleTitle: 'RPG Combat',
        battleDesc: 'Every question is a strike. Defeat guardians and climb the leaderboard.',
        adaptiveTitle: 'Adaptive Logic',
        adaptiveDesc: 'AI-driven challenges tailored for classes 6-12.',
        science: 'Science',
        maths: 'Maths',
        coding: 'Coding',
      },
    },
    hi: {
      tag: 'ग्रामीण शिक्षा का नया युग',
      heroTitle1: 'STEM सीखें।',
      heroTitle2: 'क्षेत्र को जीतें।',
      heroSubtitle: 'ग्रामीण छात्रों की अगली पीढ़ी के लिए एक परिष्कृत गेमिफाइड अनुभव।',
      startBtn: 'खोज शुरू करें',
      features: {
        battleTitle: 'RPG युद्ध',
        battleDesc: 'हर प्रश्न एक प्रहार है। रक्षकों को हराएं और लीडरबोर्ड पर चढ़ें।',
        adaptiveTitle: 'अनुकूलन योग्य तर्क',
        adaptiveDesc: 'कक्षा 6-12 के लिए तैयार AI-आधारित चुनौतियाँ।',
        science: 'विज्ञान',
        maths: 'गणित',
        coding: 'कोडिंग',
      },
    },
  };
  const t = translations[language] || translations.en;
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 p-0 m-0">
      <div className="w-full relative z-10 py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-bold text-[10px] tracking-widest uppercase mb-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>{t.tag}</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="block text-indigo-700 dark:text-white">{t.heroTitle1}</span>
            <span className="text-indigo-600 dark:text-indigo-400">{t.heroTitle2}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link
              to="/login"
              className="flex items-center justify-center gap-3 px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm tracking-widest transition-all shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 hover:-translate-y-0.5 active:scale-95 uppercase"
            >
              <span>{t.startBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-950 overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-sm"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 40}`}
                    alt="user"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-950 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[8px] font-bold text-gray-500 shadow-sm">
                +5k
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: t.features.battleTitle,
              desc: t.features.battleDesc,
              icon: Shield,
              color: 'text-indigo-500',
              bg: 'bg-indigo-50 dark:bg-indigo-900/20',
            },
            {
              title: t.features.adaptiveTitle,
              desc: t.features.adaptiveDesc,
              icon: Target,
              color: 'text-orange-500',
              bg: 'bg-orange-50 dark:bg-orange-900/20',
            },
            {
              title: 'Cyber Node',
              desc:
                language === 'hi'
                  ? 'कोडिंग की कला में महारत हासिल करें।'
                  : 'Master the art of coding.',
              icon: Terminal,
              color: 'text-emerald-500',
              bg: 'bg-emerald-50 dark:bg-emerald-900/20',
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-indigo-500/20 transition-all bg-white dark:bg-gray-950 group shadow-sm"
            >
              <div
                className={`w-12 h-12 ${f.bg} ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                {f.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed font-normal">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
