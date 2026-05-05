import React from 'react';
import { Play, Star, Clock, Trophy } from 'lucide-react';

const GameCard = ({ title, subject, difficulty, xpReward, progress, onPlay, colorClass }) => {
  return (
    <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
      <div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colorClass} opacity-10 rounded-full blur-xl -mr-8 -mt-8 group-hover:opacity-20 transition-opacity`}
      ></div>

      <div className="flex justify-between items-start mb-4">
        <div
          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white bg-gradient-to-r ${colorClass}`}
        >
          {subject}
        </div>
        <div className="flex items-center gap-1 text-yellow-500 font-black text-sm">
          <Star className="w-4 h-4 fill-current" />
          {xpReward} XP
        </div>
      </div>

      <h3 className="text-xl font-black text-gray-900 mb-1 leading-tight">{title}</h3>
      <div className="flex items-center gap-4 text-xs text-gray-500 font-bold mb-6">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          5-10 min
        </div>
        <div className="flex items-center gap-1">
          <Trophy className="w-3 h-3 text-indigo-500" />
          {difficulty}
        </div>
      </div>

      <div className="space-y-4">
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${colorClass} transition-all duration-700`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <button
          onClick={onPlay}
          className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-black text-white bg-gradient-to-r ${colorClass} shadow-md group-hover:shadow-lg transition-all transform group-hover:-translate-y-0.5`}
        >
          START QUEST
          <Play className="w-4 h-4 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default GameCard;
