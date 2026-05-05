import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const subjectLabels = {
  maths: 'Mathematics',
  science: 'Science',
  cs: 'Computer Science',
};

const GameQuest = ({ user, updateUser, language }) => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const subjectName = subjectLabels[subjectId] || subjectId || 'Game Quest';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-700 p-10">
        <h1 className="text-4xl font-black mb-4">{subjectName}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Welcome back{user ? `, ${user.name}` : ''}! This is the game quest page for <strong>{subjectName}</strong>.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-indigo-50 dark:bg-indigo-900/20 p-6 border border-indigo-100 dark:border-indigo-700">
            <h2 className="text-2xl font-bold mb-3">Start your quest</h2>
            <p className="text-slate-600 dark:text-slate-300">Explore lessons, challenges, and quizzes for this subject.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-3">Progress</h2>
            <p className="text-slate-600 dark:text-slate-300">Your current journey will appear here once the game is live.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full sm:w-auto px-8 py-4 rounded-3xl bg-indigo-600 text-white font-black hover:bg-indigo-700 transition"
          >
            Back to Dashboard
          </button>
          <button
            type="button"
            onClick={() => navigate('/lessons')}
            className="w-full sm:w-auto px-8 py-4 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-black hover:shadow-lg transition"
          >
            View Lessons
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameQuest;
